

const Login = async ({username,password}) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(username==='rahul'&&password==='12345')
            {
                resolve({loginmsg:'Successfully Logged in',login:true})
            }
            else{
                reject({loginmsg:'Failed to log in',login:false})

            }
        },1000)
    })
}
export default Login