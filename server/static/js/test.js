(() => {
  const app = {
    initialize() {

    },
    cacheElements() {
      this.$form = document.querySelector('#form-test-registration');
    
    },
    registerListeners() {
      this.$form.addEventlistener('submit', e => {
        
      })
    }
  }
  
  app.initizalize();
})();