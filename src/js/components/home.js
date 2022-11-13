import {templates, select} from '../settings.js';

class home {
  constructor(element){
    const thisHome = this;

    thisHome.render(element);
  }

  render(element){
    const thisHome = this;

    thisHome.dom = {};

    thisHome.dom.wrapper = element;

    const generatedHTML = templates.homePage(thisHome.data);

    document.querySelector(select.containerOf.home).innerHTML += generatedHTML;
  }
}

export default home;