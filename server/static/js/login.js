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
          //console.log(e.target);
  
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
  
          console.log('userData', userData);
  
          console.log('email', formData.get('email'));
  
  
          // if result !== null save user-object to localstorage
          if(userData) {
            console.log('user is saved', userData);
            localStorage.setItem('currentUser', JSON.stringify(userData));
            //console.log('localstorage', localStorage.getItem('currentUser'));
          } else {
            console.log('user is not correct');
          }
  
  
  
          
          console.log(formData.get('email'));
  
        }
      }
    }
    

  };

  app.initialize();

})();