const ENJINE_BASE_PATH = 'http://localhost:8080/api';

function EnjineApi() {
  this.getBrands = async () => {
    try {
      const response = await fetch(`${ENJINE_BASE_PATH}/brands`);

      const data = await response.json();
      return data;
    } catch(error) {
      console.warn('An error occured!', error);
    }
  };
  this.getShapes = async () => {
    try {
      const response = await fetch(`${ENJINE_BASE_PATH}/shapes`);

      const data = await response.json();
      return data;
    } catch(error) {
      console.warn('An error occured!', error);
    }
  };
  this.getCarColours = async () => {
    try {
      const response = await fetch(`${ENJINE_BASE_PATH}/carColours`);

      const data = await response.json();
      return data;
    } catch(error) {
      console.warn('An error occured!', error);
    }
  };
  this.getCars = async () => {
    try {
      const response = await fetch(`${ENJINE_BASE_PATH}/cars`);

      const data = await response.json();
      return data;
    } catch(error) {
      console.warn('An error occured!', error);
    }
  };
}