import router from '../../router'
import Axios from 'axios';

export function login({ commit },userDetails) {
    Axios.post('/api/signin',userDetails)
    .then(function (response) {
        let userData = {
            displayName: response.data.username
        }

        commit("setUserData", userData)
        router.push('/')
    })
        .catch(function (error) {
            console.log(error)
        });
}
