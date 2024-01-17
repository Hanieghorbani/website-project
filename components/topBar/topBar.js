import { styling,searchStyle ,microphoneBtn,searchRecognition,cartBox,calTotalPrice, calNumOfCart} from "../../script.js"
const template = document.createElement("template")
template.innerHTML = `
<link rel="stylesheet" href="all.css" />
<link rel="stylesheet" href="components/topBar/topBar.css">
<div class="top-bar">
<div class="top-bar-row">
  <div class="top-bar-items">
    <ul>
      <li class="cart">
        <i class="fa fa-shopping-bag"></i>
        <span class="numCart">0</span>
      </li>
      <li class="icon-topBar">
        <i class="fa fa-close"></i>
        <i class="fa fa-search"></i>
      </li>
      <li>درباره ما</li>
      <li>تماس با ما</li>
    </ul>
  </div>

  <div class="top-bar-items-mobile">
    <ul>
      <li><i class="fa fa-user-circle"></i></li>
      <li class="cart">
        <i class="fa fa-shopping-bag"></i>
        <span class="numCart">0</span>
      </li>
    </ul>
  </div>
</div>
</div>

`
class TopBar extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    const loginBtn = this.shadowRoot.querySelector('.fa-user-circle')
    const searchBtn = this.shadowRoot.querySelector('.fa-search')
    const closeSearchBtn = this.shadowRoot.querySelector('.fa-close')
    const cartBtns = this.shadowRoot.querySelectorAll(".fa-shopping-bag")
    loginBtn.addEventListener('click',()=>{
       styling("block", "block", "hidden")
    })
    
    searchBtn.addEventListener("click", () => {
        searchStyle("block", "none", "none", "flex")
        
        microphoneBtn.addEventListener("click", () => {
          microphoneBtn.style.animation = "doing 1s ease infinite"
          searchRecognition()
        })
      })

      closeSearchBtn.addEventListener("click", () => {
        searchStyle("none", "block", "flex", "none")
      })

      cartBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          cartBox.classList.toggle("active")
          calTotalPrice()
        })
      })
      
  }
}


export { TopBar}
