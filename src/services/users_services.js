import axios from 'axios';
const PROD_URL = 'http://funcode.eu-4.evennode.com'
const DEV_URL = 'http://localhost:3000'

export const verifyAdminCredential = (credentials) => {

    axios.post(DEV_URL + '/api/user', credentials).then(
        res => {
            console.log(res.status);
        }
    ).catch((err) => {
        console.log(err);
    });
}

