import React from "react"
import axios from 'axios'
import { useSignIn } from 'react-auth-kit'
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
    const signIn = useSignIn()
    const [formData, setFormData] = React.useState({email: '', password: ''})

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post('/wp-json/jwt-auth/v1/token', formData)
            .then((res)=>{
                if(res.status === 200) {
                    if(signIn({token: res.data.token,
                               tokenType: "Bearer",
                               expiresIn: 24 * 60 * 7,
                               authState: {name: res.data.user_nicename, email: res.data.user_email}
                              }))
                    { 
                        navigate("/#");
                    }
                    else {
                        
                    }
                }

                console.log(res);
            })
            .catch(err => {
                console.error(err);
                console.log(err.response.data);
                localStorage.setItem("test", "test value");
            });
    }

    return (
        <form onSubmit={onSubmit}>
            <input type={"text"} onChange={(e)=>setFormData({...formData, username: e.target.value})}/>
            <input type={"password"} onChange={(e)=>setFormData({...formData, password: e.target.value})}/>

            <button>Submit</button>
        </form>
    )
}

export default SignInPage;