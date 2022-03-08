import axios from 'axios';
import { useSignIn } from 'react-auth-kit';

export class API {
  signIn = useSignIn();

  getProducts(category, parameters, onSuccess, onError) {
    var query = '/wp-json/stockholder/products';

    if (category) {
      query += '/' + category;
    }
  
    if (parameters) {
      const queryParameters = Object.keys(parameters).map(key => key + '=' + parameters[key]).join('&');
      query += '?' + queryParameters;
    }

    axios.get(query)
    .then((res)=>{
        if(res.status === 200) {
            onSuccess(res);
        }
    })
    .catch(err => {
        onError(err);
    });
  }

  logIn(userName, password, onSuccess, onError) {
    axios.post('/wp-json/jwt-auth/v1/token', { username: userName, password: password })
      .then((res)=>{
          if(res.status === 200) {
              if(this.signIn({token: res.data.token,
                 tokenType: "Bearer",
                 expiresIn: 24 * 60 * 7,
                 authState: {name: res.data.user_nicename, email: res.data.user_email}
              }))
              { 
                onSuccess();
              }
              else {
                onError("Failed to sign in");
              }
          }
      })
      .catch(err => {
          onError(err);
      });
  }
}