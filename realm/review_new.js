exports = async function({ query, headers, body}, response) {
    
    if (body)
    {
        const b = EJSON.parse(body.text());
        const reviews = context.services.get("mongodb-atlas").db("sample_restaurants").collection("reviews");
        
        const reviewDoc = {
            name: b.name,
            user_id: b.user_id,
            date: new Date(),
            text: b.text,
            restaurant_id: BSON.ObjectId(b.restaurant_id)
        };
        
        return await reviews.insertOne(reviewDoc);
      
    }
    
    return {};
};
