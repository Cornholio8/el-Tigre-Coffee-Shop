import {settings, select, className} from './_settings.js';
import product from './components/product.js';
import home from './components/home.js';
import contact from './components/contact.js';


const app = {

  initData: function(){
    const thisApp = this;

    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.products;
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        thisApp.data.products = parsedResponse;
      });
  },

  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        event.preventDefault();
        const clickedElement = this;

        const id = clickedElement.getAttribute('href').replace('#', '');

        thisApp.activePage(id);
      });
    }
  },

  activePage: function(id){

    for(const page of document.querySelectorAll(select.containerOf.pages)){
      page.classList.remove(className.active);
    }

    document.querySelector('#' + id).classList.add(className.active);
    window.location.hash = '#/${id}';
  },
  
  initProduct: function(){
    const thisApp = this;
    const productsSub = document.querySelector(select.templateOf.menuProduct);
    thisApp.products = new product(productsSub);
  },

  initHome: function(){
    const thisApp = this;
    const homeSub = document.querySelector(select.containerOf.home);
    thisApp.home = new home(homeSub);
  },

  initContact: function(){
    const thisApp = this;
    const contactSub = document.querySelector(select.containerOf.contact);
    thisApp.contact = new contact(contactSub);
  },

  init: function(){
    const thisApp = this;
    thisApp.initData();
    thisApp.initProduct();
    thisApp.initContact();
    thisApp.initHome();
    thisApp.initPages();
  }
};

app.init();