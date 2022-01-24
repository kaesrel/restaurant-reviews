exports = async function({ query, headers, body}, response) {

    if (body)
    {
        const b =  EJSON.parse(body.text());
        const reviews = context.services.get("mongodb-atlas").db("sample_restaurants").collection("reviews");
        const date = new Date()
    
        const updateResponse = await reviews.updateOne(
          { user_id: b.user_id, _id: BSON.ObjectId(b.review_id)},
          { $set: { text: b.text, date: date  } },
        )
    
        return updateResponse;
    }

  return {};
};
