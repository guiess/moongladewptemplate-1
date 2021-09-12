(function () {
  const cookiesDOMElement = document.querySelector(".js-cookies");

  if (!cookiesDOMElement) {
    return;
  }

  // localStorage.setItem("cookies", false);

  let showCookies = JSON.parse(localStorage.getItem("cookies"))

  if (showCookies) {
    cookiesDOMElement.style.transform = "translate(0px, 150%)";
  }

  document.querySelector("body").addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("js-btn-cookies")) {
      e.preventDefault();
      localStorage.setItem("cookies", true);
    }
  });
})();