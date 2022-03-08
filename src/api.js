import axios from 'axios';
import { useSignIn } from 'react-auth-kit';

export class API {
  static getProducts(category, parameters, onSuccess, onError) {
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

  static logIn(userName, password, onSuccess, onError) {
    const signIn = useSignIn();

    axios.post('/wp-json/jwt-auth/v1/token', { email: userName, password: password })
      .then((res)=>{
          if(res.status === 200) {
              if(signIn({token: res.data.token,
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