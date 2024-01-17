import { removeItemFCart } from "../../script.js"
const template = document.createElement("template")
template.innerHTML = `
<link rel="stylesheet" href="all.css" />
<link rel="stylesheet" href="components/cart-items/cart-item.css">
<div class="cart-item">
            <i class="fa fa-times"></i>
            <img src="img/js.png"/>
            <div class="cart-item-info">
              <p class="cart-title"></p>
              <span class="cart-price">0 تومان</span>
            </div>
          </div>
`
class CartItem extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
     const deleteBtn = this.shadowRoot.querySelector('.fa-times')
     this.shadowRoot.querySelector('.cart-title').innerText = this.getAttribute('title')
     this.shadowRoot.querySelector('img').setAttribute('src',this.getAttribute('img'))
     this.shadowRoot.querySelector('.cart-price').innerText = `${this.getAttribute('price')}تومان`

    deleteBtn.addEventListener('click',(e)=>{
      removeItemFCart(e)
      console.log(e.target);
    })
  }
}


export { CartItem}
