const ENJINE_BASE_PATH = 'http://localhost:8080/api';

export default class EnjineApi {
  getBrands = async () => {
    console.log('get brands');
    try {
      const response = await fetch(`${ENJINE_BASE_PATH}/brands`);

      const data = await response.json();
      return data;
    } catch(error) {
      console.warn('An error occured!', error);
    }
  }
  getShapes = async () => {
    try {
      const response = await fetch(`${ENJINE_BASE_PATH}/shapes`);

      const data = await response.json();
      return data;
    } catch(error) {
      console.warn('An error occured!', error);
    }
  }
  getCarColours = async () => {
    try {
      const response = await fetch(`${ENJINE_BASE_PATH}/carColours`);

      const data = await response.json();
      return data;
    } catch(error) {
      console.warn('An error occured!', error);
    }
  }
  getCars = async () => {
    try {
      const response = await fetch(`${ENJINE_BASE_PATH}/cars`);

      const data = await response.json();
      return data;
    } catch(error) {
      console.warn('An error occured!', error);
    }
  };
}