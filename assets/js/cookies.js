(function () {
  const cookiesDOMElement = document.querySelector(".js-cookies");

  if (!cookiesDOMElement) {
    return;
  }

  // localStorage.setItem("cookies", true);

  let showCookies = JSON.parse(localStorage.getItem("cookies"))

  if (showCookies) {
    cookiesDOMElement.classList.add("visible")
  }

  document.querySelector("body").addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("js-btn-cookies")) {
      e.preventDefault();
      localStorage.setItem("cookies", false);
      cookiesDOMElement.classList.remove("visible");
    }
  });
})();