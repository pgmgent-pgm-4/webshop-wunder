import fetch from 'node-fetch';

const ENJINE_BASE_PATH = 'http://localhost:8081/api';

const getData = async(req, res, next, apiRequest) => {
  const fetchData = async() => {
    try {
      let dataForController = {};

      for (let i = 0; i < apiRequest.length ; i++) {

        let url = `${ENJINE_BASE_PATH}${apiRequest[i].apiUrl}`;
        
        if( (apiRequest[i].apiUrl === '/cars/brands')  || (apiRequest[i].apiUrl === '/cars/shapes')) {
            url += `/${req.params.category ? req.params.category : ''}`
        }

        if( (apiRequest[i].apiUrl === '/cars')  && req.params.id) {
            url += `/${req.params.id}`;
        }

        const response = await fetch(url);
        const data = await response.json();  

        dataForController[apiRequest[i].dataLocation] = await data;
      
        if(i >= apiRequest.length-1) {
          res.locals.data = dataForController;
          next();
        }

      };
    } catch(error) {
      console.warn('An error occured!', error);
      next();
    }
  }

  fetchData();
}

export default getData;
  