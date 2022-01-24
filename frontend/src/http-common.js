import axios from "axios"

export default axios.create({
    // baseURL: "http://localhost:5000/api/v1/restaurants",
    baseURL: "https://ap-southeast-1.aws.data.mongodb-api.com/app/restaurant-reviews-wawga/endpoint/",
    headers: {
        "Content-type": "application/json"
    }
});

// https://ap-southeast-1.aws.data.mongodb-api.com/app/restaurant-reviews-wawga/endpoint/restaurants