import fetch from 'node-fetch';

const ENJINE_BASE_PATH = 'http://localhost:8081/api';

const getData = async(req, res, next, apiUrl) => {
  const fetchData = async() => {
    try {
      const response = await fetch(`${ENJINE_BASE_PATH}${apiUrl}/${req.params.category}`);
      const data = await response.json();  
      res.locals.data = await data;
      next();
      //return data is optional?
    } catch(error) {
      console.warn('An error occured!', error);
      next();
    }
  }

  fetchData();
}


export default getData;
  