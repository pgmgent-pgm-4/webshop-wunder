(() => {
  const app = {
    initialize() {
      this.enjineApi = new EnjineApi();

      this.brands = [];
      this.shapes = [];
      this.carColours = [];
      this.cars = [];

      this.cacheElements();
      this.registerListeners();
    },
    cacheElements() {
      this.$btnGetBrands = document.querySelector('.btngetBrands');
      this.$brandsListContainer = document.querySelector('.listOfBrands');
      this.$btnGetShapes = document.querySelector('.btngetShapes');
      this.$shapesListContainer = document.querySelector('.listOfShapes');
      this.$btnGetCarColours = document.querySelector('.btngetCarColours');
      this.$carColoursListContainer = document.querySelector('.listOfCarColours');
      this.$btnGetCars = document.querySelector('.btngetCars');
      this.$carsListContainer = document.querySelector('.listOfCars');
    },
    registerListeners() {
      this.$btnGetBrands.addEventListener('click', e => {
        this.fetchData();
      });
      this.$btnGetShapes.addEventListener('click', e => {
        this.fetchData();
      });
      this.$btnGetCarColours.addEventListener('click', e => {
        this.fetchData();
      });
      this.$btnGetCars.addEventListener('click', e => {
        this.fetchData();
      });
    },
    async fetchData() {

      this.brands = await this.enjineApi.getBrands();
      this.shapes = await this.enjineApi.getShapes();
      this.carColours = await this.enjineApi.getCarColours();
      this.cars = await this.enjineApi.getCars();
      this.generateUIForData();
    },
    generateUIForData() {
      this.$brandsListContainer.innerHTML = this.brands.map(brand => `
        <li>${brand.name}</li>
      `).join('');
      this.$shapesListContainer.innerHTML = this.shapes.map(shape => `
        <li>${shape.name}</li>
      `).join('');
      this.$carColoursListContainer.innerHTML = this.carColours.map(carColour => `
        <li>${carColour.name}</li>
      `).join('');
      this.$carsListContainer.innerHTML = this.cars.map(car => `
        <li>${car.name}</li>
      `).join('');
    }
  }
  app.initialize();
})();