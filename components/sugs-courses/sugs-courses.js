import { styling, loginBtn ,addItemToCart} from "../../script.js"
const template = document.createElement("template")
template.innerHTML = `
<link rel="stylesheet" href="all.css" />
<link rel="stylesheet" href="components/sugs-courses/sugs-courses.css">
<div class="sugs-item">
<img src="">
<div class="sugs-icons-box">
  <i class="fa-light fa-play"></i>
  <i title="ثبت نام در دوره" class="fa-light fa-user-plus"></i>
</div>
<p class="sugs-courses-title"></p>
<p class="sugs-courses-teacher">حانیه<i class="fa-light fa-chalkboard-teacher"></i></p>

 <div class="sugs-courses-infos">
  <p class="sugs-courses-price"></p>
  <p class="sugs-courses-countStu"></p>
</div>
</div>
`

let itemsObj = []

class SugsCourses extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    const addToCartBtn = this.shadowRoot.querySelector(".fa-user-plus")
    this.shadowRoot
      .querySelector("img")
      .setAttribute("src", `${this.getAttribute("img")}`)
    this.shadowRoot.querySelector(".sugs-courses-title").innerText =
      this.getAttribute("title")
    this.shadowRoot.querySelector(
      ".sugs-courses-teacher"
    ).innerHTML = `${this.getAttribute(
      "teacher"
    )} <i class="fa-light fa-chalkboard-teacher"></i>`
    this.shadowRoot.querySelector(".sugs-courses-price").innerText =
      this.getAttribute("price")
    this.shadowRoot.querySelector(
      ".sugs-courses-countStu"
    ).innerHTML = `${this.getAttribute(
      "countSt"
    )} <i class="fa-light fa-users"></i>`

    addToCartBtn.addEventListener("click", (e) => {
      const mainDiv = e.target.parentElement.parentElement
      let obj = {}
      obj.img = mainDiv.querySelector("img").getAttribute("src")
      obj.title = mainDiv.querySelector(".sugs-courses-title").innerText
      obj.price = Number(
        mainDiv.querySelector(".sugs-courses-price").innerText.match(/\d+/)
      )
      itemsObj.push(obj)
      addItemToCart()
    })
  }
}

export { SugsCourses, itemsObj }
