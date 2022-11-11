import {settings, select, classNames} from './_settings.js';
//import utils from './_utils.js';
import products from './components/product.js';
import home from './components/home.js';
import contact from './components/contact.js';


const app = {
  /*initData: function() {
    const url = settings.db.url + '/' + settings.db.products;
    this.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.products = parsedResponse;
      });
  },

  init: function() {
    const thisApp = this;
    thisApp.initData();
  },*/

  initData: function() {
    const thisApp = this;

    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.products;
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        thisApp.data.products = parsedResponse;
        //thisApp.initProduct();
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
    /*console.log(thisApp.pages);
    console.log(thisApp.navLinks);

    for(let clickedElement of thisApp.navLinks){
      clickedElement.addEventListener('click', function(event){
        event.preventDefault();
        thisApp.clickId = clickedElement.getAttribute('href').replace('#','');
        console.log(thisApp.clickId);

        const find = document.querySelector('#' + thisApp.clickId);
        console.log(find);
        console.log(thisApp.clickId);
        
        thisApp.products = document.querySelector('#products');
        thisApp.home = document.querySelector('#home');
        thisApp.contact = document.querySelector('#contact');

        // eslint-disable-next-line no-unused-vars
        for(let pages of thisApp.pages){
          if(thisApp.clickId === 'home'){

            thisApp.products.classList.add(className.active);
            thisApp.home.classList.add(className.active);
            thisApp.contact.classList.remove(className.active);
          }

          if(thisApp.clickId == 'products'){
            find.classList.add(className.active);
            thisApp.home.classList.remove(className.active);
            thisApp.contact.classList.remove(className.active);
          }

          if(thisApp.clickId == 'contact'){
            find.classList.add(className.active);
            thisApp.home.classList.remove(className.active);
            thisApp.products.classList.remove(className.active);
          }
        }
      });
    }*/
  },

  /*initAbout: function(){
    const thisApp = this;

    const generatedHTML = templates.about();
    thisApp.aboutElement = utils.createDOMFromHTML(generatedHTML);
    const aboutContainer = document.querySelector(select.containerOf.home);
    aboutContainer.appendChild(thisApp.aboutElement);
  },*/

  activePage: function(id) {



    for(const page of document.querySelectorAll(select.containerOf.pages)){
      page.classList.remove(classNames.active);
    }

    document.querySelector('#' + id).classList.add(classNames.active);
    window.location.hash = '#/${id}';
  },
  
  initProduct: function(){
    const thisApp = this;
    const productsSub = document.querySelector(select.templateOf.menuProduct);
    thisApp.products = new products(productsSub);
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