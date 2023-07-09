import { Header } from "../components/Header/header.js"
import { PopupLogin } from "../components/popup-login/popup-login.js"
import { HambergurMenu } from "../components/hambergur-menu/hambergur-menu.js"
import {
  SugsCourses,
  itemsObj,
} from "../components/sugs-courses/sugs-courses.js"
import { CartItem } from "../components/cart-items/cart-item.js"

window.customElements.define("header-site", Header)
window.customElements.define("login-site", PopupLogin)
window.customElements.define("hambergur-menu", HambergurMenu)
window.customElements.define("sug-item", SugsCourses)
window.customElements.define("cart-item", CartItem)

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
const cartBtns = document.querySelectorAll(".fa-shopping-bag")
const numCart = document.querySelectorAll(".numCart")
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
const cartBox = document.querySelector(".cartBox")
const cartItemsDiv = document.querySelector(".cart-items-div")
const totalPriceElem = document.querySelector(".total-price")
const nextCourBTn = document.querySelector(".fa-chevron-right")
const prevCourBtn = document.querySelector(".fa-chevron-left")
const newItem = document.querySelector(".items-div sug-item")
const slider = document.querySelector(".items-div")
const comments = document.querySelector(".comments")
const dotsContainer = document.querySelector(".dots")

function styling(popupDivS, overlayS, overflow) {
  popupDiv.style.display = popupDivS
  popupDiv.style.top = `${window.scrollY + 40}px`
  overlay.style.display = overlayS
  document.querySelector("html").style.overflow = overflow
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
    hambergurStyle("-100%", 0, "none", "none", 0)
    searchStyle("none", "block", "flex", "none")
  } else {
    hambergurStyle("-100%", 0, "block", "none", "40px")
    searchStyle("block", "block", "none", "none")
  }
})

loginTopBar.addEventListener("click", () => {
  styling("block", "block", "hidden")
})

window.addEventListener("scroll", () => {
  if (window.scrollY >= headerContainer.offsetHeight) {
    headerContainer.style.position = "fixed"
    headerContainer.style.top = "0"
  } else {
    headerContainer.style.position = "relative"
  }
  let height = window
    .getComputedStyle(sugsCoursesItems)
    .getPropertyValue("height")
  height = Number(height.match(/\d+/))
  if (
    sugsCoursesItems.getBoundingClientRect().top <
      window.scrollY + window.innerHeight - height &&
    sugsCoursesItems.style.opacity != 1
  ) {
    sugsCoursesItems.style.animation = "show 1s forwards"
  }
  if (
    newCoursesItems.getBoundingClientRect().top + 150 <
      window.scrollY + window.innerHeight - height &&
    newCoursesItems.style.opacity != 1
  ) {
    newCoursesItems.style.animation = "show 1s forwards"
  }

  if (window.scrollY > 200) {
    backToTopBtn.style.display = "flex"
  } else {
    backToTopBtn.style.display = "none"
  }
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

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
})

const widthItems = window.getComputedStyle(newItem).getPropertyValue("width")
let dir
nextCourBTn.addEventListener("click", () => {
  dir = -1
  newCoursesItems.style.justifyContent = `flex-start`
  slider.style.transform = `translate(-${widthItems})`
})

prevCourBtn.addEventListener("click", () => {
  if (dir === -1) {
    dir = 1
    slider.appendChild(slider.firstElementChild)
  }
  newCoursesItems.style.justifyContent = `flex-end`
  slider.style.transform = `translate(${widthItems})`
})

slider.addEventListener(
  "transitionend",
  () => {
    if (dir === 1) {
      
      slider.append(slider.lastElementChild)
    } else {
      slider.appendChild(slider.firstElementChild)
    }
    slider.style.transform = "translate(0)"
    slider.style.transition = "none"

    setTimeout(() => {
      slider.style.transition = "all 300ms linear"
    })
  },
  false
)

cartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    cartBox.classList.toggle("active")
    calTotalPrice()
  })
})

function searchRecognition() {
  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
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
      microphoneBtn.style.animation = "doing 1s ease"
    }
  })

  recognition.addEventListener("nomatch", () => {
    console.log("صدایی دریافت نشد !")
  })
  recognition.addEventListener("error", (err) => {
    alert("به اینترنت دسترسی ندارید!")
    microphoneBtn.style.animation = "doing 1s ease"
  })
}

function searchStyle(btnCl, btnSr, hdrI, hdrSB) {
  closeSearchBtn.style.display = btnCl
  searchBtn.style.display = btnSr
  headerContainer.querySelector(".header-items").style.display = hdrI
  headerContainer.querySelector(".header-searchBox").style.display = hdrSB
}

function calCountdown() {
  let publishDay = "4 august 2023"
  let newPubDay = new Date(publishDay)
  let nowDay = new Date()
  let seconds = (newPubDay - nowDay) / 1000
  let totalDay = Math.floor(seconds / 3600 / 24)
  let totalHour = Math.floor(seconds / 3600) % 24
  let totalMin = Math.floor(seconds / 60) % 60
  let totalSec = Math.floor(seconds % 60)

  dayElem.innerText = totalDay
  hourElem.innerText = totalHour
  minElem.innerText = totalMin
  secElem.innerText = totalSec
}

let totalPrice = 0
function calTotalPrice() {
  totalPrice = 0
  for (const item of cartItemsDiv.children) {
    totalPrice += Number(item.getAttribute("price"))
  }
  totalPriceElem.innerText = `${totalPrice}تومان`
}

function calNumOfCart() {
  numCart.forEach((num) => {
    num.innerText = cartItemsDiv.children.length
  })
}

function removeItemFCart(e) {
  let selectItem = e.target.parentElement.querySelector(".cart-title").innerText
  for (const item of cartItemsDiv.children) {
    if (selectItem == item.getAttribute("title")) {
      item.remove()
      calTotalPrice()
      itemsObj.forEach((itemObj) => {
        if (itemObj.title == item.getAttribute("title")) {
          itemsObj.pop(itemObj)
        }
      })
    }
  }

  calNumOfCart()
}

function addItemToCart() {
  cartItemsDiv.innerHTML = ""
  itemsObj.forEach((item) => {
    let temp = `<cart-item img="${item.img}" title="${item.title}" price="${item.price}"></cart-item>`
    cartItemsDiv.insertAdjacentHTML("beforeend", temp)
    calNumOfCart()
    calTotalPrice()
  })
}

calCountdown()
setInterval(() => {
  calCountdown()
}, 1000)

window.addEventListener("load", () => {
  calNumOfCart()
})

let commentWidth
for (const comment of comments.children) {
  commentWidth = window
    .getComputedStyle(comment)
    .getPropertyValue("width")
    .substring(0, 7)
  const newDot = document.createElement("span")
  newDot.classList.add("dot")
  newDot.setAttribute("num", comment.id)
  newDot.addEventListener("click", (e) => {
    let numOfDot = Number(e.target.getAttribute("num"))
    comments.style.transform = `translateX(-${numOfDot * commentWidth}px)`

    for (const dot of document.querySelectorAll(".dot")) {
      dot.style.opacity = "0.5"
    }
    e.target.style.opacity = "1"
  })

  dotsContainer.appendChild(newDot)
}

comments.addEventListener("animationend", () => {
  console.log("11")
})

export {
  styling,
  loginBtn,
  nav,
  hambergurStyle,
  removeItemFCart,
  addItemToCart,
}
