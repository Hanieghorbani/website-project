const template = document.createElement("template")
template.innerHTML = `
<link rel="stylesheet" href="all.css" />
<link rel="stylesheet" href="components/footer/footer.css">
<div class="footer-container">
<div class="footer-contents">
<div class="main-footer">
  <div class="connect-footer">
    <h4>ارتباط با ما</h4>
    <p><i class="fa fa-mobile"></i>09121234567 </p>
    <p><i class="fa fa-envelope"></i>hnie.ghorbani@gmail.com </p>
    <div class="icons-footer">
      <a href=""><i class="fab fa-telegram"></i></a>
      <a href="https://github.com/Hanieghorbani"><i class="fab fa-github"></i></a>
      <a href=""><i class="fab fa-twitter"></i></a>
    </div>
  </div>
  <div class="ass-footer">
    <h4>دسترسی سریع</h4>
    <p>وبلاگ</p>
    <p>دوره ها</p>
  </div>
</div>
<div class="more-info-footer">
  <p>تیم حونیس تمام تلاش خودش رو انجام میده تا محتوایی با کیفیت و به روز رو در اختیار مشتریان گرامی قرار بده.چیدمان تمامی پروژه های حونیس به نحوی هست که کاربران راحت تر به قسمت های دلخواه دسترسی پیدا کنند. </p>
  <div>
    <img src="img/payping.png" >
    <img src="img/zarinpal.png">
  </div>
</div>
</div>
<p>کلیه حقوق محفوظ و متعلق به hounis.ir می باشد</p>
</div>

`
class Footer extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
  }
}


export { Footer}
