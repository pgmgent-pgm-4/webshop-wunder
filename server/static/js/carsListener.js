(() => {
  const app = {

    initialize() {
      this.cacheElement();
      this.registerListeners();
      this.setActiveNavigationHeader();
    },

    cacheElement() {
      this.$menuList = document.querySelectorAll('.main-nav__item a');
      this.$sideSelectorBtn = document.querySelector('.side-selector__arrow');
      this.$sideSelector = document.querySelector('.side-selector');
    },

    registerListeners() {
      // Open side selector
      this.$sideSelectorBtn.addEventListener('click', ev => {
        ev.preventDefault();
        this.$sideSelector.classList.toggle('appear');
      })
    },

    setActiveNavigationHeader() {
      // Check if 'a' link is same as url
      this.$menuList.forEach(item => {
        if (item.href.split('/')[3] == location.href.split('/')[3]) {
          item.classList.add('active')
        } else {
          item.classList.remove('active')
        }
      })
    },
  };

  app.initialize();

})();