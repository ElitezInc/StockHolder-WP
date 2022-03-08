import React from "react";
import { API } from '../../api';
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
    const [formData, setFormData] = React.useState({email: '', password: ''})
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault()
        API.logIn(formData.email, formData.password,
            function() {
              navigate("/#");
            },
            function(error) {
              console.error(error);
              console.log(error.response.data);
            }
        );
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