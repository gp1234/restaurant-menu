import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://veggie-restaurant.firebaseio.com/'
});

export default instance;