import http from "../http-common";

class RestaurantDataService
{
    getAll(page=0) {
        // return http.get(`?page=${page}`);
        return http.get(`restaurants?page=${page}`);
    }

    get(id=0) {
        // return http.get(`/id/${id}`);
        return http.get(`/restaurant?id=${id}`);
    }
    
    find(query, by="name", page=0) {
        // return http.get(`?${by}=${query}&page=${page}`);
        return http.get(`restaurants?${by}=${query}&page=${page}`);
    }

    createReview(data) {
        // return http.post("/review", data);
        return http.post("/review_new", data);
    }

    updateReview(data) {
        // return http.put("/review", data);
        return http.put("/review_edit", data);
    }

    deleteReview(id, userId) {
        return http.delete(`/review_delete?id=${id}`, {data: {user_id: userId}});
    }

    getCuisines() {
        return http.get(`/cuisines`);
    }

}

export default new RestaurantDataService();