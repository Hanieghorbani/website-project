import { Header } from "../components/Header/header.js"
import { PopupLogin } from "../components/popup-login/popup-login.js"

window.customElements.define("header-site", Header)
window.customElements.define("login-site", PopupLogin)

window.addEventListener("load", () => {
  let loginBtn = document
    .querySelector("header-site")
    .shadowRoot.querySelector(".loginBtn")
  let popupDiv = document
    .querySelector("login-site")
    .shadowRoot.querySelector(".popup-login")
  let closePopupBtn = document
    .querySelector("login-site")
    .shadowRoot.querySelector(".fa-close")
  let headerDiv = document
    .querySelector("header-site")
    .shadowRoot.querySelector(".header-container")
  let overlay = document.querySelector(".overlay")
  let body = document.querySelector("body")

  loginBtn.addEventListener("click", () => {
    styling('block','hidden','block')
  })
  closePopupBtn.addEventListener("click", () => {
    styling('none','visible','none')
  })

  function styling(popupDivS, bodyS, overlayS) {
  popupDiv.style.display = popupDivS
  body.style.overflow = bodyS
  overlay.style.display = overlayS
}
})


