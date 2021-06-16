//import fetch from "node-fetch";


(() => {
  const app = {

    initialize() {
      this.cacheElements();
      this.registerListeners();
    },

    cacheElements() {
      this.$form = document.querySelector('#login-form');
    },
    
    registerListeners() {
      if(this.$form) {
        this.$form.onsubmit =  async(e) => {
          e.preventDefault();
          localStorage.setItem('currentUser', '');
  
          const formData = new FormData(this.$form);
  
          const userLogin = {
            email : formData.get('email'),
            password: formData.get('password')
          }
  
          const response = await fetch('/api/users/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userLogin),
          })
  
          const userData = await response.json();  
  
          // if result !== null save user-object to localstorage
          if(userData) {
            localStorage.setItem('currentUser', JSON.stringify(userData));
          } else {
            console.log('user is not correct');
          }
        }
      }
    }
  };

  app.initialize();

})();