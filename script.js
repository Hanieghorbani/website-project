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
const searchBtn = document.querySelector(".fa-search")
const closeSearchBtn = document.querySelector(".fa-close")



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
  if (widthBody >= 900) {
    hambergurStyle('-100%',0,'none','none')
    searchStyle('none','block','flex','none')

  }else{
    hambergurStyle('-100%',0,'block','none')
    searchStyle('block','block','none','none')
  }
})

loginTopBar.addEventListener('click',()=>{
  styling("block", "hidden", "block")
})

window,addEventListener('scroll',()=>{
  if (window.scrollY >= headerContainer.offsetHeight) {
    headerContainer.style.position = 'fixed'
    headerContainer.style.top = '0'
  }else{
    headerContainer.style.position = 'relative'
    topBar.style.marginLeft = '-40px'
  }
})

searchBtn.addEventListener('click',()=>{
  searchStyle('block','none','none','flex')
})

closeSearchBtn.addEventListener('click',()=>{
  searchStyle('none','block','flex','none')
})

function searchStyle(btnCl,btnSr,hdrI,hdrSB) {
  closeSearchBtn.style.display = btnCl
  searchBtn.style.display = btnSr
  headerContainer.querySelector('.header-items').style.display = hdrI
  headerContainer.querySelector('.header-searchBox').style.display = hdrSB
}


export{styling , loginBtn,nav,hambergurStyle}