(function () {
  const cookiesDOMElement = document.querySelector(".js-cookies");

  console.log(cookiesDOMElement);

  if (!cookiesDOMElement) {
    return;
  }

  // localStorage.setItem("cookies", false);

  let showCookies = JSON.parse(localStorage.getItem("cookies"))

  console.log(typeof(showCookies));
  console.log(showCookies);

  if (showCookies) {
    console.log("translate");
    cookiesDOMElement.style.transform = "translate(0px, 150%)";
  }

  document.querySelector("body").addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("js-btn-cookies")) {
      e.preventDefault();
      localStorage.setItem("cookies", true);
      console.log("true");
    }
  });
})();