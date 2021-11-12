(function () {
  const cookiesDOMElement = document.querySelector(".js-cookies");

  console.log(cookiesDOMElement);

  if (!cookiesDOMElement) {
    return;
  }

  console.log(cookiesDOMElement);

  // localStorage.setItem("cookies", true);

  let showCookies = JSON.parse(localStorage.getItem("cookies"))

  console.log(showCookies);

  if (showCookies || showCookies === null) {
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