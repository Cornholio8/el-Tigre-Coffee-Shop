export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  },
};

export const select = {
  templateOf: {
    homePage: '#template-home-page',
    menuProduct: '#template-products-page',
    contactPage: '#template-contact-page',
  },

  containerOf: {
    home: '#home-wrapper',
    products: '#products-list',
    contact: '#contact-wrapper',
    pages: '#home, #products, #contact',
  },

  nav: {
    links: '.header-nav a',
  },
};

export const className = {
  active: 'active',
};

export const templates = {
  homePage: Handlebars.compile(document.querySelector(select.templateOf.homePage).innerHTML),
  menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
  contactPage: Handlebars.compile(document.querySelector(select.templateOf.contactPage).innerHTML),
  products: Handlebars.compile(document.querySelector(select.containerOf.products).innerHTML),
};