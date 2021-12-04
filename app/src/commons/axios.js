import _axios from 'axios'

const axios = baseURL=>{
    const instance = _axios.create({
        baseURL:'http://some-domain.com/api/',
        timeout:1000,
    });
    return instance
}

export {axios};
export default axios();