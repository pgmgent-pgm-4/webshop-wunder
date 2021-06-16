(() => {
  const app = {

    initialize() {
      this.cacheElement();
      this.icons();
      this.registerListeners();
      this.setActiveNavigationHeader();
      this.setActiveNavigationFooter();
      this.setActiveNavigationMobile();
      this.scrollToTop();
      this.openingsHours();
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
      this.$OpeningsHours = document.querySelectorAll('.openings-hours');
      this.$openOrClosed = document.querySelectorAll('.open-or-closed');
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
        if (item.href == location.href.split('?')[0] || item.href == location.href.split('#')[0] || item.href.split('/')[3] == location.href.split('/')[3]) {
          item.classList.add('active')
        } else {
          item.classList.remove('active')
        }
      })
    },

    setActiveNavigationFooter() {
      // Check if 'a' link is same as url
      this.$footerList.forEach(item => {
        if (item.href == location.href.split('?')[0] || item.href == location.href.split('#')[0] || item.href.split('/')[3] == location.href.split('/')[3]) {
          item.classList.add('active')
        } else {
          item.classList.remove('active')
        }
      })
    },

    setActiveNavigationMobile() {
      // Check if 'a' link is same as url
      this.$mobileList.forEach(item => {
        if (item.href == location.href.split('?')[0] || item.href == location.href.split('#')[0] || item.href.split('/')[3] == location.href.split('/')[3]) {
          item.classList.add('active')
        } else {
          item.classList.remove('active')
        }
      })
    },

    openingsHours() {
      let openingsHours = [9, 17];
      let openingsDays = [1, 2, 3, 4, 5];
      
      let today = new Date();
      let day = today.getDay();
      let hours = today.getHours();
      
      this.$OpeningsHours.forEach((container, index) => {  
        let adaptedHours = this.getTimeZone(hours, container);

        if (openingsDays.includes(day) && adaptedHours >= openingsHours[0] && adaptedHours < ( openingsHours[1] - 1 )) {
          this.$openOrClosed[index].innerHTML = 'Open';
          container.classList.remove('closed');
          container.classList.add('open');
        } else if (openingsDays.includes(day) && adaptedHours == ( openingsHours[0] - 1 )) {
          this.$openOrClosed[index].innerHTML = 'Opening soon';
          container.classList.remove('closed');
          container.classList.add('opening');
        } else if (openingsDays.includes(day) && adaptedHours == ( openingsHours[1] - 1 )) {
          this.$openOrClosed[index].innerHTML = 'Closing soon';
          container.classList.remove('open');
          container.classList.add('closing');
        } else {
          this.$openOrClosed[index].innerHTML = 'Closed';
          container.classList.remove('open');
          container.classList.add('closed');
        }
      })

    },

    getTimeZone(hours, container) {
      let country = container.parentNode.childNodes[1].textContent;
      if (country == 'London') {
        var checkHours = hours - 1;

      } else if (country == 'New York') {
        var checkHours = hours - 6;

      } else if (country == 'Paris') {
        var checkHours = hours;

      } else if (country == 'Los Angeles') {
        var checkHours = hours - 9;

      } else if (country == 'Hong Kong') {
        var checkHours = hours + 6;

      }

      // Check if 'checkhours' is smaller than 0 or bigger than 24
      if (checkHours >= 24) {
        return checkHours - 24;
      } else if (checkHours < 0) {
        return 24 + checkHours;
      } else {
        return checkHours;
      }
    },

    scrollToTop() {
      const scrollToTop = document.getElementById('to-top');

      const scroll = () => {
        let scrollPos = window.scrollY;
        
        if (scrollPos > 100) {
          document.querySelector('.to-top__container').classList.add('appear');
        } else {
          document.querySelector('.to-top__container').classList.remove('appear');
        }
      };

      window.addEventListener("scroll", scroll);

      scrollToTop.onclick = function(e) {
        e.preventDefault();
        document.documentElement.scrollTop = 0;
      }
    },

  };

  app.initialize();

})();