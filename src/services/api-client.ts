import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "b53753b53f5941e78a0d8e2d8b9594ed"
    }
})