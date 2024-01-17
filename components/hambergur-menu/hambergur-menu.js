const template = document.createElement("template")
template.innerHTML = `
<link rel="stylesheet" href="all.css" />
<link rel="stylesheet" href="components/hambergur-menu/hambergur-menu.css">
<div class="nav">
<div class="contentNav">
  <div class="searchBox">
    <input placeholder="ورود واژه کلیدی..." />
    <i class="fa-light fa-search"></i>
  </div>

  <h4 class="cart"><i class="fa-light fa-shopping-bag"></i>سبد خرید</h4>
  <ul>
    <li>صفحه اصلی</li>
    <li class="coursesMenu">
      <span class="title-courses"
        >دوره ها<i class="fa-light fa-chevron-left"></i
      ></span>
      <div class="dropDownMenu">
        <span>راهنمای یادگیری </span>
        <span>آموزش جاوااسکریپت </span>
        <span>آموزش پایتون </span>
        <span>هک و امنیت </span>
      </div>
    </li>
    <li>بلاگ</li>
    <li>تالار گفتمان</li>
    <li>کانال تلگرام</li>
  </ul>
</div>
</div>
`

class HambergurMenu extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    const titleCourses = this.shadowRoot.querySelector('.title-courses')
    const dropDownMenu = this.shadowRoot.querySelector('.dropDownMenu')
    
    titleCourses.addEventListener('click',()=>{
        dropDownMenu.classList.toggle('active')
        if (dropDownMenu.className.includes('active')) {
          titleCourses.firstElementChild.style.transform= 'rotate(-90deg)'
        }else{
          titleCourses.firstElementChild.style.transform= 'rotate(0)'
        }
    })
  }
}

export { HambergurMenu }