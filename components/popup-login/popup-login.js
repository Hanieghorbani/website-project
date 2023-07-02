import { styling, loginBtn } from "../../script.js"
const template = document.createElement("template")
template.innerHTML = `
<link rel="stylesheet" href="all.css" />
<link rel="stylesheet" href="components/popup-login/popup-login.css">
<div class="popup-login" style='display:none'>
      <div class="title-popup">
        <p>ورود</p>
        <i class="fa-light fa-close"></i>
      </div>

      <div class="inputs-box">
        <p>نام کاربری:<i class="fa-light fa-user"></i></p>
        <input type="text" class="userName-input" placeholder='example.com' />
        <small>پیغام خطا</small>
        <p>رمز عبور:<i class="fa-light fa-lock"></i></p>
        <input type="password" class="pass-input" placeholder='********'/>
        <small>پیغام خطا</small>
      </div>

      <div class="checkbox-forget">
        
        <label><input type="checkbox" class="checkBox-input"> مرا به خاطر داشته باش</label>
        <p class="forget-pass">رمز عبور را فراموش کرده اید؟</p>
      </div>
      <button class="enter-btn">ورود</button>
      <p class="register">هنوز عضو نشده اید؟ <a href="#">عضویت در سایت</a></p>
  </div>
`

class PopupLogin extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    let submitBtn = this.shadowRoot.querySelector(".enter-btn")
    let userNameInput = this.shadowRoot.querySelector(".userName-input")
    let passInput = this.shadowRoot.querySelector(".pass-input")
    let userIcon = this.shadowRoot.querySelector(".fa-user")
    let passIcon = this.shadowRoot.querySelector(".fa-lock")
    let errAllert = this.shadowRoot.querySelectorAll("small")
    let closeBtn = this.shadowRoot.querySelector(".fa-close")

    submitBtn.addEventListener("click", () => {
      if (
        userIcon.className == "fa fa-check-circle" &&
        userIcon.className == "fa fa-check-circle"
      ) {
        alert("شما با موفقیت وارد حساب کاربری خود شدید")
        userNameInput.value = ""
        passInput.value = ""
        styling("none", "visible", "none")
        loginBtn.innerHTML = `
        <i class="fa-light fa-user"></i>حساب کاربری`
      } else {
        evalName()
        evalPass()
      }
    })

    userNameInput.addEventListener("blur", () => {
      evalName()
    })

    passInput.addEventListener("blur", () => {
      evalPass()
    })

    closeBtn.addEventListener("click", () => {
      styling("none", "visible", "none")
    })

    function evalName() {
      let valEmailPatt = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      evaluationInputs(
        userNameInput,
        userIcon,
        "نام کاربری باید حتما وارد شود",
        "ایمیل باید با فرمت صحیح وارد شود",
        0,
        !valEmailPatt.test(userNameInput.value.trim())
      )
    }

    function evalPass() {
      evaluationInputs(
        passInput,
        passIcon,
        "رمز عبور باید حتما وارد شود",
        "رمز عبور باید حداقل 8 کاراکتر باشد",
        1,
        passInput.value.length < 8
      )
    }

    function evaluationInputs(
      input,
      icon,
      falseInputEr,
      notValInputEr,
      small,
      condition
    ) {
      if (!input.value.trim()) {
        setStyle(
          input,
          "rgb(224, 84, 84)",
          "exclamation-circle",
          icon,
          "block",
          small,
          falseInputEr
        )
      } else if (condition) {
        setStyle(
          input,
          "rgb(224, 84, 84)",
          "exclamation-circle",
          icon,
          "block",
          small,
          notValInputEr
        )
      } else {
        setStyle(input, "var(--color)", "check-circle", icon, "none", small)
      }
    }

    function setStyle(input, colorS, icon, nameIcon, displayS, small, errText) {
      input.style.border = `3px solid ${colorS}`
      nameIcon.className = `fa fa-${icon}`
      errAllert[small].style.display = displayS
      errAllert[small].innerText = errText
    }
  }
}

export { PopupLogin }
