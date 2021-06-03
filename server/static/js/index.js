(() => {
  const app = {

    initialize() {
      this.cacheElement();
      this.icons();
      this.registerListeners();
      this.setActiveNavigationHeader();
      this.setActiveNavigationFooter();
      this.setActiveNavigationMobile();
    },

    cacheElement() {
      this.$menuList = document.querySelectorAll('.main-nav__item a');
      this.$burger = document.querySelector('#burger');
      this.$logo = document.querySelector('.main-logo');
      this.$mobile = document.querySelector('.mobile-nav');
      this.$footerList = document.querySelectorAll('.footer-top__nav a');
      this.$mobileList = document.querySelectorAll('.mobile-nav__list a');
      this.$search = document.querySelector('.search');
      this.$searchBar = document.querySelector('.search-bar');
      this.$closeSearch = document.querySelector('.close');
      this.$crossList = document.querySelectorAll('.side-nav__item');
    },

    icons() {
      feather.replace();
    },

    registerListeners() {
      // Load mobile navigation
      this.$burger.addEventListener('click', (ev) => {
        this.$burger.classList.toggle('mobile');
        this.$logo.classList.toggle('mobile');
        this.$mobile.classList.toggle('mobile');
        this.$searchBar.classList.toggle('mobile');
      })
      
      // Make search bar visible
      this.$search.addEventListener('click', (ev) => {
        ev.preventDefault();
        this.$searchBar.classList.add('visible');
        this.$crossList.forEach(item => {
          if (item.attributes.class.nodeValue === 'side-nav__item cross') {
            item.classList.remove('cross')
          } else if (item.attributes.class.nodeValue === 'side-nav__item') {
            item.classList.add('cross')
          }
        })
      })

      // Close search bar
      this.$closeSearch.addEventListener('click', (ev) => {
        ev.preventDefault();
        this.$searchBar.classList.remove('visible');
        this.$crossList.forEach(item => {
          if (item.attributes.class.nodeValue === 'side-nav__item cross') {
            item.classList.remove('cross')
          } else if (item.attributes.class.nodeValue === 'side-nav__item') {
            item.classList.add('cross')
          }
        })
      })
    },

    setActiveNavigationHeader() {
      // Check if 'a' link is same as url
      this.$menuList.forEach(item => {
        if (item.href == location.href.split('?')[0] || item.href == location.href.split('#')[0]) {
          item.classList.add('active')
        } else {
          item.classList.remove('active')
        }
      })
    },

    setActiveNavigationFooter() {
      // Check if 'a' link is same as url
      this.$footerList.forEach(item => {
        if (item.href == location.href.split('?')[0]) {
          item.classList.add('active')
        } else {
          item.classList.remove('active')
        }
      })
    },

    setActiveNavigationMobile() {
      // Check if 'a' link is same as url
      this.$mobileList.forEach(item => {
        if (item.href == location.href.split('?')[0]) {
          item.classList.add('active')
        } else {
          item.classList.remove('active')
        }
      })
    },

  };

  app.initialize();

})();