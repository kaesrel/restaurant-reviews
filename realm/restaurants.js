exports = async function({ query, headers, body}, response) {
    const {restaurantsPerPage = 20, page = 0} = query;

    let q = {};
    if (query.cuisine) {
        q = { $text: { $search: query.cuisine } }
    } else if (query.zipcode) {
        q = { "address.zipcode": { $eq: query.zipcode } }
    } else if (query.name) {
        q = { $text: { $search: query.name } }
    }
      
    const collection = context.services.get("mongodb-atlas").db("sample_restaurants").collection("restaurants");
    // let restaurantsList = await collection.find(q).skip(page*restaurantsPerPage).limit(restaurantsPerPage).toArray();  // something wrong with limit
    // let restaurantsList = await collection.find(q).skip(page*restaurantsPerPage).limit(parseInt(restaurantsPerPage)).toArray();  // omg parseInt
    let restaurantsList = await collection.find(q).skip(page*restaurantsPerPage).limit(restaurantsPerPage*1).toArray();  // how does this work?!
  

    restaurantsList.forEach(restaurant => {
        restaurant._id = restaurant._id.toString();
    });
  
    const responseData = {
        restaurants: restaurantsList,
        page: page.toString(),
        filters: {},
        entries_per_page: restaurantsPerPage.toString(),
        // total_results: restaurantsList.length.toString()
        // total_results: await collection.count(q).then(num => num.toString())  // does not work
        total_results: await collection.count(q).toString()
    };
    
    return responseData;
};