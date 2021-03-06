import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
const PROD_URL = 'http://funcode.eu-4.evennode.com'

export const retrieveContests = () => {

    return axios.get(PROD_URL + '/api/contest').then(res => res.data);
}

export const createNewContest = (contest) => {

    contest.uuid = uuidv4()

    axios.post(PROD_URL + '/api/contest', contest).then(
        res => {
            console.log(res.status);
        }
    ).catch((err) => {
        console.log(err);
    });
}

export const updateContest = () => {

    axios.put(PROD_URL + '/api/contest', {}).then(
        res => {
            console.log('OK')
        }
    ).catch((err) => {
        console.log(err);
    });

}