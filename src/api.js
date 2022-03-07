import axios from 'axios'

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
}