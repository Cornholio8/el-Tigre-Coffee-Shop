import {select} from '../settings.js';

class Product {
  constructor(element){
    const thisProducts = this;

    thisProducts.render(element);
  }

  render(element){
    const thisProducts = this;

    thisProducts.dom = {};

    thisProducts.dom.wrapper = element;

    const productsSource = document.querySelector('#template-products-page').innerHTML;
    const products = Handlebars.compile(productsSource);

    const productsData = {
        
      name1: 'LA LAGARTIJA',
      description1: 'Mysterious and treacherous... The best choice for he start of your journey! It will procide you a rich delicious flavor.',
      image1: '/images/coffee-1.png',
      popular1: '/images/most-popular.png',
      roasting1: '5/10',
      intensity1: '6/10',

      name2: 'EL TIGRE',
      description2: 'Really dark coffee, only for the real gourments. It has bitter flavor of grapefruits and is mixed with a little bit of peanuts with caramel.',
      image2: '/images/coffee-2.png',
      roasting2: '8/10',
      intensity2: '9/10',

      name3: 'LA CUCARACHA',
      description3: 'Sweet and intense with a big amount of different flavors. Caramel, grapes, strawberry, you name it! It is great choice for warm summer days.',
      image3: '/images/coffee-3.png',
      roasting3: '3/10',
      intensity3: '7/10'
    };

    let generatedHTML = products(productsData);

    document.querySelector(select.containerOf.products).innerHTML = generatedHTML;
    document.querySelector(select.containerOf.home).innerHTML = generatedHTML;
  }
}

export default Product;