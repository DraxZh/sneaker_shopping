import _axios from 'axios'

const instance = _axios.create({
    baseURL:'http://some-domain.com/api/',
    timeout:1000,
});

export default instance;