import {settings, select, templates, className} from './_settings.js';
import utils from './_utils.js';

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
    thisApp.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        thisApp.data.products = parsedResponse;
        thisApp.initProduct();
      });

  },

  initPage: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    console.log(thisApp.pages);
    console.log(thisApp.navLinks);

    for(let clickedElement of thisApp.navLinks){
      clickedElement.addEventListener('click', function(){
        event.preventDefault();
        thisApp.clickId = clickedElement.getAttribute('href').replace('#','');
        console.log(thisApp.clickId);

        const find = document.querySelector('#' + thisApp.clickId);
        console.log(find);
        console.log(thisApp.clickId);
        thisApp.home = document.querySelector('#home');
        thisApp.products = document.querySelector('#products');
        thisApp.contact = document.querySelector('#contact');

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
    }
  },

  initProduct: function(){
    const thisApp = this;

    const generatedHTML = templates.product(thisApp.data.products);
    const createDOM = utils.createDOMFromHTML(generatedHTML);
    const container = document.querySelector(select.containerOf.products);
    container.appendChild(createDOM);
  },

  init: function(){
    const thisApp = this;
    thisApp.initPage();
    thisApp.initData();
    //thisApp.initProduct();
  },
};

app.init();