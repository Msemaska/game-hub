import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "77e44b4c1f344ffba3eeec1ce1047f37"
    }
})