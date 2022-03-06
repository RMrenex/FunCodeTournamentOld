import axios from 'axios';
const PROD_URL = 'http://funcode.eu-4.evennode.com'
const DEV_URL = 'http://localhost:3000'

export const verifyAdminCredential = (credentials) => {

    axios.post(PROD_URL + '/api/user', credentials).then(
        res => {
            localStorage.setItem("loginResult", JSON.stringify({loginResult: res.data}));
        }
    ).catch((err) => {
        localStorage.setItem("loginResult", JSON.stringify({loginResult: "KO"}));
        console.log(err);
    });
}

