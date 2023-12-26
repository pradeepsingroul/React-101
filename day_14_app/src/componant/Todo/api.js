import axios from "axios";

export default function getItems({page,limit}){
    return axios.get(`https://jsonplaceholder.typicode.com/posts`,{
        params:{
            _page:page,
            _limit: limit
        }
    }).then((response) => {return response})
}