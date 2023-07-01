const template = document.createElement("template")
template.innerHTML = `
<link rel="stylesheet" href="all.css" />
<link rel="stylesheet" href="components/Header/header.css">
<div class='header-container'>
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
    coursesMenu.addEventListener("mouseenter", () => {
      dropDownMenu.style.display = "flex"
    })
    coursesMenu.addEventListener("mouseleave", () => {
      dropDownMenu.style.display = "none"
    })
  }
}

export { Header }
