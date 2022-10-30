export const settings = {
  db: {
    url: '//localhost:3131',
    products: 'products',
  },
};

export const templates = {
  articleLink: Handlebars.compile(document.querySelector('#template-article-link').innerHTML)
};