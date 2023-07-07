import { Header } from "../components/Header/header.js"
import { PopupLogin } from "../components/popup-login/popup-login.js"
import { HambergurMenu } from "../components/hambergur-menu/hambergur-menu.js"
import { SugsCourses } from "../components/sugs-courses/sugs-courses.js"

window.customElements.define("header-site", Header)
window.customElements.define("login-site", PopupLogin)
window.customElements.define("hambergur-menu", HambergurMenu)
window.customElements.define("sug-item", SugsCourses)


const loginBtn = document
  .querySelector("header-site")
  .shadowRoot.querySelector(".loginBtn")
const popupDiv = document
  .querySelector("login-site")
  .shadowRoot.querySelector(".popup-login")
const overlay = document.querySelector(".overlay")
const body = document.querySelector("body")
const nav = document
  .querySelector("hambergur-menu")
  .shadowRoot.querySelector(".nav")
const jsPic = document.querySelector(".jsPic")
const headerContainer = document
  .querySelector("header-site")
  .shadowRoot.querySelector(".header-container")
const barsBtn = document
  .querySelector("header-site")
  .shadowRoot.querySelector(".fa-bars")
const closeBtn = document
  .querySelector("header-site")
  .shadowRoot.querySelector(".fa-times")
const loginTopBar = document.querySelector(".fa-user-circle")
const topBar = document.querySelector(".top-bar")
const searchBtn = document.querySelector(".fa-search")
const closeSearchBtn = document.querySelector(".fa-close")
const inputSearch = headerContainer.querySelector(".inputSearch")
const microphoneBtn = headerContainer.querySelector(".fa-microphone")
const dayElem = document.querySelector(".dayElem")
const hourElem = document.querySelector(".hourElem")
const minElem = document.querySelector(".minElem")
const secElem = document.querySelector(".secElem")
const contents = document.querySelector(".contents")
const sugsCoursesItems = document.querySelector(".sugs-courses-items")
const newCoursesItems = document.querySelector(".new-courses-items")
const backToTopBtn = document.querySelector(".fa-chevron-up")


function styling(popupDivS, overlayS,overflow) {
  popupDiv.style.display = popupDivS
  overlay.style.display = overlayS
  document.querySelector('html').style.overflow = overflow
}

function hambergurStyle(navTrf, widthNav, barsIcon, closeIcon) {
  nav.style.transform = `translateX(${navTrf})`
  headerContainer.style.transform = `translate(${widthNav}px,0)`
  jsPic.parentElement.style.transform = `translate(${widthNav}px,0)`
  topBar.style.transform = `translate(${widthNav}px,0)`
  contents.style.transform = `translate(${widthNav}px,0)`
  barsBtn.style.display = barsIcon
  closeBtn.style.display = closeIcon
}

window.addEventListener("resize", () => {
  let widthBody = getComputedStyle(body)
    .getPropertyValue("width")
    .substring(0, 7)
  if (widthBody >= 900) {
    hambergurStyle("-100%", 0, "none", "none",0)
    searchStyle("none", "block", "flex", "none")
  } else {
    hambergurStyle("-100%", 0, "block", "none",'40px')
    searchStyle("block", "block", "none", "none")
  }
})

loginTopBar.addEventListener("click", () => {
  styling("block", "block",'hidden')
})

window.addEventListener("scroll", () => {
    if (window.scrollY >= headerContainer.offsetHeight) {
      headerContainer.style.position = "fixed"
      headerContainer.style.top = "0"
    } else {
      headerContainer.style.position = "relative"
    }
    let height = window.getComputedStyle(sugsCoursesItems).getPropertyValue('height')
    height = Number(height.match(/\d+/))
  if (sugsCoursesItems.getBoundingClientRect().top < window.scrollY+window.innerHeight-(height) && sugsCoursesItems.style.opacity != 1) {
    sugsCoursesItems.style.animation = 'show 1s forwards'
  }
  if (newCoursesItems.getBoundingClientRect().top+150 < window.scrollY+window.innerHeight-(height) && newCoursesItems.style.opacity != 1) {
    newCoursesItems.style.animation = 'show 1s forwards'
  }

  if (window.scrollY > 200) {
    if (backToTopBtn.style.display != 'flex') {
      backToTopBtn.style.display = 'flex'
    }
  }else{
    backToTopBtn.style.display = 'none'
  }
})
searchBtn.addEventListener("click", () => {
  searchStyle("block", "none", "none", "flex")
  microphoneBtn.addEventListener("click", () => {
    microphoneBtn.style.animation = 'doing 1s ease infinite'
    searchRecognition()
  })
})

closeSearchBtn.addEventListener("click", () => {
  searchStyle("none", "block", "flex", "none")
})

backToTopBtn.addEventListener('click',()=>{
  window.scrollTo({top:0,behavior:'smooth'})
})


function searchRecognition() {
  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  let recognition = new SpeechRecognition()
  recognition.lang = "fa-IR"
  recognition.interimResults = true
  recognition.start()
  recognition.addEventListener("result", (e) => {
    let transcript = Array.from(e.results)
      .map((res) => res[0])
      .map((res) => res.transcript)
      .join("")
    if (e.results[0].isFinal) {
      inputSearch.value = transcript
      microphoneBtn.style.animation = 'doing 1s ease'
    }
  })

  recognition.addEventListener("nomatch", () => {
    console.log("صدایی دریافت نشد !")
  })
  recognition.addEventListener("error", (err) => {
    alert('به اینترنت دسترسی ندارید!')
    microphoneBtn.style.animation = 'doing 1s ease'

  })
}

function searchStyle(btnCl, btnSr, hdrI, hdrSB) {
  closeSearchBtn.style.display = btnCl
  searchBtn.style.display = btnSr
  headerContainer.querySelector(".header-items").style.display = hdrI
  headerContainer.querySelector(".header-searchBox").style.display = hdrSB
}

function calCountdown() {
  let publishDay = '4 august 2023'
  let newPubDay = new Date(publishDay)
  let nowDay = new Date()
  let seconds = (newPubDay - nowDay)/1000
  let totalDay = Math.floor(seconds/3600/24)
  let totalHour = Math.floor(seconds/3600)%24
  let totalMin = Math.floor(seconds/60)%60
  let totalSec = Math.floor(seconds%60)

  dayElem.innerText = totalDay
  hourElem.innerText = totalHour
  minElem.innerText = totalMin
  secElem.innerText = totalSec
}

calCountdown()
setInterval(() => {
  calCountdown()
}, 1000);

window.addEventListener('click',(e)=>{
  console.log(e.target);
})

export { styling, loginBtn, nav, hambergurStyle }
