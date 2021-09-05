(function () {
  const cookiesDOMElement = document.querySelector(".js-cookies");

  if (!cookiesDOMElement) {
    return;
  }

  localStorage.setItem("cookies", false);

  if (localStorage.getItem("cookies")) {
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