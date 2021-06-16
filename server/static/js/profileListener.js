(() => {
  const app = {

    initialize() {
      this.cacheElement();
      this.setActiveNavigationSide();
    },

    cacheElement() {
      this.$menuList = document.querySelectorAll('.profile-wrapper__container__nav__list__item a');
    },

    setActiveNavigationSide() {
      // Check if 'a' link is same as url
      this.$menuList.forEach(item => {
        if (item.href.split('/')[3] == location.href.split('/')[3] && item.href.split('/')[4] == location.href.split('/')[4]) {
          item.classList.add('active')
        } else {
          item.classList.remove('active')
        }
      })
    },
  };

  app.initialize();

})();