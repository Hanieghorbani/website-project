import { Header } from "../components/Header/header.js"
import { PopupLogin } from "../components/popup-login/popup-login.js"
import { HambergurMenu } from "../components/hambergur-menu/hambergur-menu.js"

window.customElements.define("header-site", Header)
window.customElements.define("login-site", PopupLogin)
window.customElements.define("hambergur-menu", HambergurMenu)

const loginBtn = document.querySelector("header-site").shadowRoot.querySelector(".loginBtn")
const popupDiv = document.querySelector("login-site").shadowRoot.querySelector(".popup-login")
const overlay = document.querySelector(".overlay")
const body = document.querySelector("body")
const nav = document.querySelector("hambergur-menu").shadowRoot.querySelector('.nav')
const jsPic = document.querySelector(".jsPic")
const headerContainer = document.querySelector("header-site").shadowRoot.querySelector(".header-container")
const barsBtn = document.querySelector("header-site").shadowRoot.querySelector(".fa-bars")
const closeBtn = document.querySelector("header-site").shadowRoot.querySelector(".fa-times")
const loginTopBar = document.querySelector(".fa-user-circle")
const topBar = document.querySelector(".top-bar")



 function styling(popupDivS, bodyS, overlayS) {
  popupDiv.style.display = popupDivS
  body.style.overflow = bodyS
  overlay.style.display = overlayS
}

function hambergurStyle(navTrf,widthNav,barsIcon,closeIcon) {
  nav.style.transform = `translateX(${navTrf})`
  headerContainer.style.transform = `translate(${widthNav},0)`
  jsPic.style.transform = `translate(${widthNav},0)`
  topBar.style.transform = `translate(${widthNav},0)`
  barsBtn.style.display = barsIcon
  closeBtn.style.display = closeIcon
}


window.addEventListener('resize',()=>{
  let widthBody = getComputedStyle(body).getPropertyValue("width").substring(0,7)
  if (widthBody > 900) {
    hambergurStyle('-100%',0,'block','none')
  }
})

loginTopBar.addEventListener('click',()=>{
  styling("block", "hidden", "block")
})



export{styling , loginBtn,nav,hambergurStyle}


