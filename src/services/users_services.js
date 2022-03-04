import axios from 'axios';

const CONTEST_FIND_ONE_URL = 'https://data.mongodb-api.com/app/data-ltwjb/endpoint/contest/find';
const API_KEY = 'WeWgPZ3rxxm9IDZJzZLtgi1rZRCy21II1DJtC8vwVds4DIeS4I1UUNwLTHLUm0pt';

let data = JSON.stringify({
    'collection': 'user',
    'database': 'fun_code',
    'dataSource': 'FuncodeCluster',
});

let config = {
    method: 'post',
    url: CONTEST_FIND_ONE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'api-key': API_KEY,
        'secret-key': 'lowarya'
    },
    data: data
};

export const verifyAdminCredential = () => {

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}