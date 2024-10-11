import axios from "axios";


 export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params: {
        key: '06bdd8212bb9412f95c8776e8a7d9eb9'
    }
})