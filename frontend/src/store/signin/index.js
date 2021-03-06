import axios from 'axios'
const mutations={
    REGISTER_USER(state,newUser){
        state.user=newUser
        console.log("roll",state.user.role);
    }
}

const actions={
signUp({commit},userDetails){
axios.post('/api/signup',userDetails).then((user)=>{console.log(user.data)
commit('REGISTER_USER',userDetails)})
},

signIn({commit},userDetails){
axios.post('/api/signin',userDetails).then(user=>{
    console.log(user.data)
    commit('REGISTER_USER',user.data)
})
}
}
const getters={
user:state=>state.user
}
const signInModule={
mutations,
actions,
getters
}
export default signInModule;