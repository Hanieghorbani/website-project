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

 function styling(popupDivS, bodyS, overlayS) {
  popupDiv.style.display = popupDivS
  body.style.overflow = bodyS
  overlay.style.display = overlayS
}

export{styling , loginBtn, nav ,jsPic}


