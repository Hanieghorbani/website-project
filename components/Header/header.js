import { styling, nav, hambergurStyle } from "../../script.js"
const template = document.createElement("template")
template.innerHTML = `
<link rel="stylesheet" href="all.css" />
<link rel="stylesheet" href="components/Header/header.css">
<div class='header-container'>
   <div class="header-row">
      <div class="header-items">
      <img class="logo" src="logo.png" />
        <ul class="ulHeader">
          <li>صفحه اصلی</li>
          <li class="coursesMenu">
              <span class="title-courses">دوره ها</span><i class="fa-light fa-chevron-down"></i>
            <div class="dropDownMenu">
              <i class="fa fa-triangle"></i>
              <span>راهنمای یادگیری <i class="fab fa-sellsy"></i> </span>
              <span>آموزش جاوااسکریپت<i class="fab fa-sellsy"></i> </span>
              <span>آموزش پایتون<i class="fab fa-sellsy"></i> </span>
              <span>هک و امنیت<i class="fab fa-sellsy"></i> </span>
            </div>
          </li>
          <li>بلاگ</li>
          <li>تالار گفتمان</li>
          <li>کانال تلگرام</li>
        </ul>
        <button class="loginBtn">
          <i class="fa-light fa-user-lock"></i>ورود و ثبت نام
        </button>
   </div> 
   <div class="header-items-mobile"> 
         <img class="logo" src="logo.png" />
         <div class="menu-icons"><i class="fa fa-bars"></i>
           <i class="fa fa-times"></i>
         </div>
    </div> 
    <div class="header-searchBox"> 
      <input placeholder="جستجوی دوره، استاد، مطالب و..." class="inputSearch"/>
      <div class="icons-searchBox">
        <i class="fa fa-search"></i>
        <i class="fa fa-microphone"></i>
      </div>
    </div> 
   </div>
 </div>
`

class Header extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    const coursesMenu = this.shadowRoot.querySelector(".coursesMenu")
    const dropDownMenu = this.shadowRoot.querySelector(".dropDownMenu")
    const loginBtn = this.shadowRoot.querySelector(".loginBtn")
    const barsBtn = this.shadowRoot.querySelector(".fa-bars")
    const closeBtn = this.shadowRoot.querySelector(".fa-times")
    const headerContainer = this.shadowRoot.querySelector(".header-container")
    coursesMenu.addEventListener("mouseenter", () => {
      dropDownMenu.style.display = "flex"
    })
    coursesMenu.addEventListener("mouseleave", () => {
      dropDownMenu.style.display = "none"
    })
    loginBtn.addEventListener("click", (e) => {
      if (e.target.innerText == "ورود و ثبت نام") {
        styling("block", "hidden", "block")
      }
    })
    barsBtn.addEventListener("click", () => {
      hambergurStyle(
        0,
        window.getComputedStyle(nav).getPropertyValue("width"),
        "none",
        "block"
      )
    })

    closeBtn.addEventListener("click", () => {
      hambergurStyle("-100%", 0, "block", "none")
    })
  }
}

export { Header }
