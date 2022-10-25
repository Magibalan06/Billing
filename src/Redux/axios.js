import axios from "axios";

export function getProductListRequest () {
    var config = {
        method: 'get',
        url: ' https://6255099919bc53e2348472e3.mockapi.io/product-list',
    };
    return axios(config).then(function(response) { console.log('response:::',response); return (response)})
}