import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 3dJO8LoMf5ceBduiXnmvTkK0JKKBVq17cYxMCf-HbH0"
    }
});