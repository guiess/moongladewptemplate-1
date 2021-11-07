(function () {
  const cartDOMElement = document.querySelector(".js-cart");

  if (!cartDOMElement) {
    return;
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || new Object();
  const customer = JSON.parse(localStorage.getItem("customer")) || new Object();
  let discountValue = Number(localStorage.getItem("discountValue")) || 0;
  let discountCode = localStorage.getItem("discountCode") || "";
  if (!customer.deliveryPrice) customer.deliveryPrice = 0;

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
  const cartDeliverySumDOMElement = document.querySelector(".js-delivery-sum");
  const rememberMeCheckbox = document.querySelector(".remember-me-checkbox");
  const hiddenFormEmptyCart = document.querySelector(".hidden-form-empty-cart");

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
    if (cartEmpty()) return;

    let discountValueMath;

    const totalPrice = Object.keys(cart).reduce((acc, id) => {
      const { quantity, price } = cart[id];
      return acc + price * quantity;
    }, 0);

    // document.getElementById("discountInputField").value = discountCode;

    if (cartSubtotalPriceDOMElement) {
      cartSubtotalPriceDOMElement.textContent = "$ " + totalPrice;
    }

    if (discountValue < 0) {
      discountValueMath = Math.abs(discountValue);
    } else {
      // if (discountValue > 100) return;
      discountValueMath = (Math.abs(discountValue) / 100) * totalPrice;
    }

    discountValueMath = Math.round(discountValueMath);

    if (cartDiscountSumDOMElement) {
      cartDiscountSumDOMElement.textContent = discountValueMath
        ? "$ " + "-" + discountValueMath
        : "$ 0";
    }

    if (customer.deliveryPrice) {
      Object.keys(cart).length
        ? (cartDeliverySumDOMElement.textContent =
            "$ " + customer.deliveryPrice)
        : null;
    }

    if (cartTotalPriceDOMElement) {
      cartTotalPriceDOMElement.textContent =
        "$ " +
        (Number(totalPrice) -
          discountValueMath +
          Number(customer.deliveryPrice));
    }
  };

  const updateCart = () => {
    updateCartTotalPrice();
    saveCart();

    itemWrapFull = document.getElementById("js-cart-wrapper-full");
    itemWrapEmpty = document.getElementById("js-cart-wrapper-empty");
  };

  const countItemsInCart = () => {
    const count = Object.keys(cart).length;
    return count;
  };

  const deleteCartItem = (id, deleteAll) => {
    if (!deleteAll) {
      if (countItemsInCart() === 1) {
        return;
      }
    }

    const cartItemDOMElement = cartDOMElement.querySelector(
      `[data-product-id="${id}"]`
    );

    cartDOMElement.removeChild(cartItemDOMElement);
    delete cart[id];
    updateCart();
  };

  const renderCart = () => {
    if (cartEmpty()) return;

    const ids = Object.keys(cart);

    ids.forEach((id) => renderCartItem(cart[id]));
  };

  const saveDataCustomer = (customerForm) => {
    const email = customerForm.elements.customerShippingEmail.value;
    const address = customerForm.elements.customerShippingAddress.value;
    const typeOfCreditСard =
      customerForm.elements.customerSelectCreditСard.value;
    const customerCardNumber = customerForm.customerCardNumber.value;
    const nameOnCard = customerForm.customerNameOnCard.value;
    const cardExpiration = customerForm.customerCardExpiration.value;
    const cardSecurityCode = customerForm.customerCardSecurityCode.value;

    customer.shippingEmail = email;
    customer.shippingAddress = address;

    customer.typeOfCreditСard = typeOfCreditСard;
    customer.customerCardNumber = customerCardNumber;
    customer.nameOnCard = nameOnCard;
    customer.cardExpiration = cardExpiration;
    customer.cardSecurityCode = cardSecurityCode;

    saveCustomer();
  };

  const renderForm = () => {
    if (customer) {
      const customerForm = document.forms.customerinfo;

      customer.email
        ? (customerForm.customerShippingEmail.value = customer.email)
        : (customerForm.customerShippingEmail.value = "");

      customer.shippingAddress
        ? (customerForm.customerShippingAddress.value =
            customer.shippingAddress)
        : (customerForm.customerShippingAddress.value = "");

      customer.deliveryMethodText
        ? (customerForm.customerShippingMethod.value =
            customer.deliveryMethodText)
        : (customerForm.customerShippingMethod.value = "");
    }
  };

  const resetCart = () => {
    if (cartEmpty()) return;

    const ids = Object.keys(cart);
    ids.forEach((id) => deleteCartItem(cart[id].id, true));
    // TODO сброс customer данных
  };

  const onlyPurchasedGoods = () => {
    const ids = Object.keys(cart);
    let xmlPurchasedGoods = "";
    ids.forEach(
      (id) =>
        (xmlPurchasedGoods +=
          cart[id].id.replace("product_", "") +
          "=" +
          Number(cart[id].quantity) +
          "&")
    );
    return xmlPurchasedGoods;
  };

  const customerinfoToSend = () => {
    let xmlCustomerinfoToSend = "";
    for (let key in customer) {
      if (customer.hasOwnProperty(key)) {
        // console.log(`${key} : ${customer[key]}`);
        xmlCustomerinfoToSend += `${key}=${customer[key]}&`;
      }
    }
    return xmlCustomerinfoToSend;
  };

  const formSend = function () {
    if (cartEmpty()) return;

    // console.log(JSON.stringify(cart));
    var xhr = new XMLHttpRequest();
    var url = WPJS.ajaxUrl + "?action=send_email";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onload = function () {
      const response = xhr.response.trim();

      if (response == "success") {
        // console.log("response succes");
        if (!rememberMeCheckbox.checked) localStorage.clear();
        resetCart();
        window.location.reload();
      } else {
        //TODO some actions need to be done
        // console.log("not response");
      }
    };

    let infoToSend = onlyPurchasedGoods();
    infoToSend += customerinfoToSend();
    infoToSend += "discountCode=" + discountCode;

    // infoToSend = infoToSend.substring(0, infoToSend.length - 1);

    // console.log(infoToSend);
    xhr.send(infoToSend);

    // xhr.send("foo=bar&rem=sum&more=good");
  };

  const cartEmpty = function () {
    return !Object.keys(cart).length;
  };

  const cartIsEmptyPlug = function () {
    emptyCartDOMelement = document.querySelector(".js-cart-is-empty-plug");
    const cartEmptyPlug = `
    <p class="uppercase opacity-50 text-center w-full cart-popup__empty-message">
      <br><br><br><br><br>
      It appears that your cart <br>
      is currently empty!
      <br><br><br><br><br>  
    </p>
    `;
    emptyCartDOMelement.innerHTML = cartEmptyPlug;
  };

  const allListeners = () => {
    document.querySelector("body").addEventListener("click", (e) => {
      const target = e.target;

      if (target.classList.contains("js-btn-cart-item-remove")) {
        e.preventDefault();
        const cartItemDOMElement = target.closest(".js-cart-item");
        const productID = cartItemDOMElement.getAttribute("data-product-id");
        deleteCartItem(productID, false);
      }

      if (target.classList.contains("js-btn-product-increase-quantity")) {
        e.preventDefault();
        const cartItemDOMElement = target.closest(".js-cart-item");
        const productID = cartItemDOMElement.getAttribute("data-product-id");
        increaseQuantity(productID, 1);
      }

      if (target.classList.contains("js-btn-product-decrease-quantity")) {
        e.preventDefault();
        const cartItemDOMElement = target.closest(".js-cart-item");
        const productID = cartItemDOMElement.getAttribute("data-product-id");
        decreaseQuantity(productID);
      }

      if (target.classList.contains("js-btn-paynow")) {
        e.preventDefault();

        const customerForm = document.forms.customerinfo;
        if (!checkValidityOurFunc(customerForm)) {
          return;
        } else {
          saveDataCustomer(customerForm);
          formSend();
        }
      }
    });
  };

  const cartInit = () => {
    allListeners();
    if (cartEmpty()) {
      cartIsEmptyPlug();
      hiddenFormEmptyCart.hidden = true;
      return;
    }

    renderForm();
    renderCart();
    updateCart();
  };

  cartInit();
})();

const checkValidityOurFunc = (customerForm) => {
  if (!customerForm.customerShippingEmail.checkValidity()) {
    alert("Please check your Email spelling");
    return;
  }

  if (!customerForm.customerShippingAddress.checkValidity()) {
    alert("Please check your Shipping Address spelling");
    return;
  }

  if (!customerForm.customerCardNumber.checkValidity()) {
    alert("Please check your Card Number spelling");
    return;
  }

  if (!customerForm.customerNameOnCard.checkValidity()) {
    alert("Please check your Name On Card spelling");
    return;
  }

  if (!customerForm.customerCardExpiration.checkValidity()) {
    alert("Please check your Card Expiration spelling");
    return;
  }

  if (!customerForm.customerCardSecurityCode.checkValidity()) {
    alert("Please check your Card Security Code spelling");
    return;
  }

  return true;
};
