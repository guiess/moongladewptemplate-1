(function () {
  const cartDOMElement = document.querySelector(".js-cart");

  if (!cartDOMElement) {
    return;
  }

  const cart = JSON.parse(localStorage.getItem("cart"));
  const customer = JSON.parse(localStorage.getItem("customer")) || new Object();
  let discountValue = Number(localStorage.getItem("discountValue")) || 0;
  let discountCode = localStorage.getItem("discountCode") || "";
  // console.log("discountValue = " + discountValue);
  // console.log("discountCode = " + discountCode);

  const updateQuantity = (id, quantity) => {
    const cartItemDOMElement = cartDOMElement.querySelector(
      `[data-product-id="${id}"]`
    );
    const cartItemQuantityDOMElement = cartItemDOMElement.querySelector(
      ".js-cart-item-quantity"
    );
    const cartItemPriceDOMElement = cartItemDOMElement.querySelector(
      ".js-cart-item-price"
    );
    const cartItemInputQuantityDOMElement = cartItemDOMElement.querySelector(
      ".js-cart-input-quantity"
    );

    cart[id].quantity = quantity;
    cartItemQuantityDOMElement.value = quantity;
    cartItemPriceDOMElement.textContent = "$ " + quantity * cart[id].price;

    updateCart();
  };

  const increaseQuantity = (id, quantity) => {
    const newQuantity = Number(cart[id].quantity) + Number(quantity);
    if (newQuantity <= 99) {
      updateQuantity(id, newQuantity);
    }
  };

  const decreaseQuantity = (id) => {
    const newQuantity = cart[id].quantity - 1;
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };

  const cartSubtotalPriceDOMElement = document.querySelector(
    ".js-cart-subtotal-price"
  );
  const cartTotalPriceDOMElement = document.querySelector(
    ".js-cart-total-price"
  );
  const cartDiscountSumDOMElement = document.querySelector(".js-discount-sum");

  const renderCartItem = ({ id, name, src, price, quantity, weight }) => {
    const cartItemDOMElement = document.createElement("div");
    const summitem = price * quantity;

    const cartItemTemplate = `
      <div class="cart-product uppercase flex items-start">
        <div class="cart-product__visual overflow-hidden flex-shrink-0">
          <picture>
          <img class="w-full max-w-full transition-opacity duration-300 entered loaded" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E" data-srcset="${src}" alt="image description" data-ll-status="loaded" srcset="${src}">
          </picture>
        </div>
        <div class="flex-grow">
          <h4 class="cart-product__title laptop:w-8/12">${name}</h4>
          <div class="cart-product__info-line flex justify-between items-baseline">
            <div class="cart-product__info-item">
              <span>$ ${price}</span><span class="opacity-50 weight">(${weight}<span class="uppercase">GR</span>)</span>
            </div>
            <div class="cart-product__info-item"><span class="js-cart-item-price">$ ${summitem}</span></div>
          </div>
          <div class="flex justify-between items-center">
            <div class="cart-product__info-item">
              <div class="stepper" data-component="stepper" data-min="1" data-max="99" data-step="1">
                <div class="stepper__control stepper__control--decrease" data-decrement=""><i class="icon-minus js-btn-product-decrease-quantity"></i></div>
                <input class="stepper__input js-cart-item-quantity" readonly type="number" data-input="" value="${quantity}" />
                <div class="stepper__control stepper__control--increase" data-increment=""><i class="icon-plus js-btn-product-increase-quantity"></i></div>
              </div>
            </div>
            <div class="cart-product__info-item flex"><span class="link link--underline opacity-30 js-btn-cart-item-remove"">remove</span></div>
          </div>
        </div>
      </div>
    `;

    cartItemDOMElement.innerHTML = cartItemTemplate;
    cartItemDOMElement.setAttribute("data-product-id", id);
    cartItemDOMElement.classList.add("js-cart-item");

    cartDOMElement.appendChild(cartItemDOMElement);
  };

  const saveCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart)); //преобразуем в строку JSON
  };

  const saveCustomer = () => {
    localStorage.setItem("customer", JSON.stringify(customer)); //преобразуем в строку JSON
  };

  const updateCartTotalPrice = () => {
    if (!cart) {
      return;
    }
    let discountValueMath;

    const totalPrice = Object.keys(cart).reduce((acc, id) => {
      const { quantity, price } = cart[id];
      return acc + price * quantity;
    }, 0);

    document.getElementById("discountInputField").value = discountCode;

    if (cartSubtotalPriceDOMElement) {
      cartSubtotalPriceDOMElement.textContent = "$ " + totalPrice;
    }

    if (discountValue < 0) {
      discountValueMath = Math.abs(discountValue);
    } else {
      // if (discountValue > 100) return;
      discountValueMath = (Math.abs(discountValue) / 100) * totalPrice;
    }

    if (cartDiscountSumDOMElement) {
      cartDiscountSumDOMElement.textContent = "-" + discountValueMath + "$";
    }

    if (cartTotalPriceDOMElement) {
      cartTotalPriceDOMElement.textContent =
        "$ " + (Number(totalPrice) - discountValueMath);
    }
  };

  const updateCart = () => {
    updateCartTotalPrice();
    saveCart();

    itemWrapFull = document.getElementById("js-cart-wrapper-full");
    itemWrapEmpty = document.getElementById("js-cart-wrapper-empty");

    //! сделать пустую корзину
    // if (totalQuantity === 0) {
    //   //
    //   itemWrapFull.classList.add("is-empty");
    //   itemWrapEmpty.classList.remove("is-empty");
    // } else {
    //   itemWrapFull.classList.remove("is-empty");
    //   itemWrapEmpty.classList.add("is-empty");
    //   //
    // }
  };

  const countItemsInCart = () => {
    const count = Object.keys(cart).length;
    return count;
  };

  const deleteCartItem = (id) => {
    if (countItemsInCart() === 1) {
      return;
    }

    const cartItemDOMElement = cartDOMElement.querySelector(
      `[data-product-id="${id}"]`
    );

    cartDOMElement.removeChild(cartItemDOMElement);
    delete cart[id];
    updateCart();
  };

  const renderCart = () => {
    if (!cart) {
      return;
    }
    const ids = Object.keys(cart);

    ids.forEach((id) => renderCartItem(cart[id]));
  };

  const saveDataCustomer = (customerForm) => {
    const email = customerForm.elements.customerInfoEmail.value;
    const firstName = customerForm.elements.customerInfoFirstName.value;
    const lastName = customerForm.elements.customerInfoLastName.value;
    const address = customerForm.elements.customerInfoAddress.value;
    const apartment = customerForm.elements.customerInfoApartment.value;
    const city = customerForm.elements.customerInfoSelectCity.value;
    // customerForm.elements.customerInfoSelectCity.value = "Moscow";
    const postalCode = customerForm.elements.customerInfoPostalCode.value;
    const infoPhone = customerForm.elements.customerInfoPhone.value;

    customer.email = email;
    customer.firstName = firstName;
    customer.lastName = lastName;
    customer.address = address;
    customer.apartment = apartment;
    customer.city = city;
    customer.postalCode = postalCode;
    customer.infoPhone = infoPhone;

    saveCustomer();

    location.href = "WPJS/checkout-shipping";
  };

  const renderForm = () => {
    if (customer) {
      const customerForm = document.forms.customerinfo;

      customer.email
        ? (customerForm.customerInfoEmail.value = customer.email)
        : (customerForm.customerInfoEmail.value = "");

      customer.firstName
        ? (customerForm.customerInfoFirstName.value = customer.firstName)
        : (customerForm.customerInfoFirstName.value = "");

      customer.lastName
        ? (customerForm.customerInfoLastName.value = customer.lastName)
        : (customerForm.customerInfoLastName.value = "");

      customer.address
        ? (customerForm.customerInfoAddress.value = customer.address)
        : (customerForm.customerInfoAddress.value = "");

      customer.apartment
        ? (customerForm.customerInfoApartment.value = customer.apartment)
        : (customerForm.customerInfoApartment.value = "");

      customer.city
        ? (customerForm.elements.customerInfoSelectCity.value = customer.city)
        : (customerForm.elements.customerInfoSelectCity.value = "placeholder");

      customer.postalCode
        ? (customerForm.customerInfoPostalCode.value = customer.postalCode)
        : (customerForm.customerInfoPostalCode.value = "");

      customer.infoPhone
        ? (customerForm.customerInfoPhone.value = customer.infoPhone)
        : (customerForm.customerInfoPhone.value = "");
    }
  };
  
  const makeDiscount = (discount) => {
    discountValue = Math.abs(Number(discount.substr(3))); //откинем минус если вдруг в админке ввели минус
    discountCode = document.getElementById("discountInputField").value;

    if (discount.startsWith("fix")) {
      discountValue *= -1;
    }

    // console.log(discountValue);
    localStorage.setItem("discountCode", discountCode);
    localStorage.setItem("discountValue", discountValue);
    updateCartTotalPrice();
  };

  const discountCheck = function () {
    if (!cart) {
      return;
    }

    var xhr = new XMLHttpRequest();
    var url = WPJS.ajaxUrl + "?action=discount_check";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onload = function () {
      const response = xhr.response;
      // console.log(response);

      if (response === "false") {
        console.log("response false");
        return;
      } else if (response.startsWith("fix") || response.startsWith("per")){
        makeDiscount(response);
      }
    };

    discountCode = document.getElementById("discountInputField").value;

    xhr.send("discountcode=" + discountCode);
  };

  const cartInit = () => {
    renderForm();
    renderCart();
    updateCart();

    document.querySelector("body").addEventListener("click", (e) => {
      const target = e.target;

      if (target.classList.contains("js-btn-cart-item-remove")) {
        e.preventDefault();
        const cartItemDOMElement = target.closest(".js-cart-item");
        const productID = cartItemDOMElement.getAttribute("data-product-id");
        deleteCartItem(productID);
      }

      if (target.classList.contains("js-btn-product-increase-quantity")) {
        e.preventDefault();
        const cartItemDOMElement = target.closest(".js-cart-item");
        const productID = cartItemDOMElement.getAttribute("data-product-id");
        increaseQuantity(productID, 1);
      }

      if (target.classList.contains("js-btn-product-decrease-quantity")) {
        // e.preventDefault();
        const cartItemDOMElement = target.closest(".js-cart-item");
        const productID = cartItemDOMElement.getAttribute("data-product-id");
        decreaseQuantity(productID);
      }

      if (target.classList.contains("js-button-apply-disount")) {
        // e.preventDefault();

        discountCheck();
      }

      if (target.classList.contains("js-btn-continue")) {
        e.preventDefault();

        const customerForm = document.forms.customerinfo;
        if (!checkValidityOurFunc(customerForm)) {
          return;
        } else {
          saveDataCustomer(customerForm);
        }
      }
    });
  };

  cartInit();
})();

const checkValidityOurFunc = (customerForm) => {
  if (!customerForm.customerInfoEmail.checkValidity()) {
    alert("Please check your email spelling");
    return;
  }

  if (!customerForm.customerInfoFirstName.checkValidity()) {
    alert("Please check your FirstName spelling");
    return;
  }

  if (!customerForm.customerInfoLastName.checkValidity()) {
    alert("Please check your LastName spelling");
    return;
  }

  if (!customerForm.customerInfoAddress.checkValidity()) {
    alert("Please check your Address spelling");
    return;
  }

  if (!customerForm.customerInfoApartment.checkValidity()) {
    alert("Please check your Apartment spelling");
    return;
  }

  if (!customerForm.customerInfoPostalCode.checkValidity()) {
    alert("Please check your PostalCode spelling");
    return;
  }

  if (!customerForm.customerInfoPhone.checkValidity()) {
    alert("Please check your Phone spelling");
    return;
  }

  return true;
};
