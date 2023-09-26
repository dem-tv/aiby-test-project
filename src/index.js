import './styles/reset.css'
import './styles/constants.css'
import './styles/index.css'
import {getLocaleObject} from "./utils";


const form = document.getElementById('continue-form');

form.addEventListener('submit', (e) => {
  e.preventDefault()
  try{
    const formData = new FormData(e.target)
    const link = formData.get('link');
    if(typeof link !== 'string'){
      throw new Error('some error')
    }
    window.location.href = link;
  } catch (err){
    console.log(err)
  }
})

const {localeObject, lang} = getLocaleObject();

if(localeObject) {
  document.querySelector('html').setAttribute('lang', lang)
  Object.entries(localeObject).forEach(([key, value]) => {
    const selector = '[data-translate=' + `"${key}"]`
    const nodes = document.querySelectorAll(selector);
    Array.from(nodes).forEach(node => {
      if(node){
        if(value.includes('{{price}}')){
          node.innerHTML = value.replace('{{price}}', node.dataset.price)
          return
        }
        node.innerHTML = value
      }
    })
  })
}