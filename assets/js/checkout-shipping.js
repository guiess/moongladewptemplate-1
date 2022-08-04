(function () {
  const cartDOMElement = document.querySelector(".js-cart");

  if (!cartDOMElement) {
    return;
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || new Object();
  const customer = JSON.parse(localStorage.getItem("customer")) || new Object();
  // let discountValue = Number(localStorage.getItem("discountValue")) || 0;
  // let discountCode = localStorage.getItem("discountCode") || "";
  let discountValue = Number(customer.discountValue) || 0;
  let discountCode = customer.discountCode || "";
  // let deliveryPrice = customer.deliveryPrice || 0;
  let deliveryPrice = 0;

  // console.log(customer);

  // const updateQuantity = (id, quantity) => {
  //   const cartItemDOMElement = cartDOMElement.querySelector(
  //     `[data-product-id="${id}"]`
  //   );
  //   const cartItemQuantityDOMElement = cartItemDOMElement.querySelector(
  //     ".js-cart-item-quantity"
  //   );
  //   const cartItemPriceDOMElement = cartItemDOMElement.querySelector(
  //     ".js-cart-item-price"
  //   );

  //   cart[id].quantity = quantity;
  //   cartItemQuantityDOMElement.value = quantity;
  //   cartItemPriceDOMElement.textContent = "$ " + quantity * cart[id].price;

  //   updateCart();
  // };

  // const increaseQuantity = (id, quantity) => {
  //   const newQuantity = Number(cart[id].quantity) + Number(quantity);
  //   if (newQuantity <= 99) {
  //     updateQuantity(id, newQuantity);
  //   }
  // };

  // const decreaseQuantity = (id) => {
  //   const newQuantity = cart[id].quantity - 1;
  //   if (newQuantity >= 1) {
  //     updateQuantity(id, newQuantity);
  //   }
  // };

  const cartSubtotalPriceDOMElement = document.querySelector(
    ".js-cart-subtotal-price"
  );
  const cartTotalPriceDOMElement = document.querySelector(
    ".js-cart-total-price"
  );
  const cartDiscountSumDOMElement = document.querySelector(".js-discount-sum");
  const cartDeliveryDOMElement = document.querySelector(".js-delivery-sum");
  const hiddenFormEmptyCart = document.querySelector(".hidden-form-empty-cart");

  const renderCartItem = ({
    id,
    name,
    src,
    price,
    quantity,
    weight,
    weightOz,
  }) => {
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
              <span class="font-moonglade">$ ${price}</span><span class="opacity-50 weight lowercase font-moonglade">(${weight}g / ${weightOz}oz)</span>
            </div>
            <div class="cart-product__info-item"><span class="js-cart-item-price">$ ${summitem}</span></div>
          </div>
          <div class="flex justify-between items-center">
            <div class="cart-product__info-item">
              <div class="stepper" data-component="stepper" data-min="1" data-max="99" data-step="1">
                <div class="stepper__control stepper__control--decrease" data-decrement=""><i class="js-btn-product-decrease-quantity"></i></div>
                <input class="stepper__input js-cart-item-quantity" readonly type="number" data-input="" value="${quantity}" />
                <div class="stepper__control stepper__control--increase" data-increment=""><i class="js-btn-product-increase-quantity"></i></div>
              </div>
            </div>
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

    discountValueMath = Math.round(discountValueMath);

    if (cartDiscountSumDOMElement) {
      cartDiscountSumDOMElement.textContent = discountValueMath
        ? "$ " + "-" + discountValueMath
        : "$ 0";
    }

    if (deliveryPrice) {
      Object.keys(cart).length
        ? (cartDeliveryDOMElement.textContent = "$ " + deliveryPrice)
        : null;
    }

    if (cartTotalPriceDOMElement) {
      cartTotalPriceDOMElement.textContent =
        "$ " + (Number(totalPrice) - discountValueMath + Number(deliveryPrice));
    }
  };

  const disableDiscountApplyBtn = () => {
    if (discountCode) {
      $(".js-button-apply-disount").removeAttr("disabled");
    }
  };

  const updateCart = () => {
    updateCartTotalPrice();
    disableDiscountApplyBtn();
    saveCart();

    itemWrapFull = document.getElementById("js-cart-wrapper-full");
    itemWrapEmpty = document.getElementById("js-cart-wrapper-empty");
  };

  // const countItemsInCart = () => {
  //   const count = Object.keys(cart).length;
  //   return count;
  // };

  // const deleteCartItem = (id) => {
  //   if (countItemsInCart() === 1) {
  //     return;
  //   }

  //   const cartItemDOMElement = cartDOMElement.querySelector(
  //     `[data-product-id="${id}"]`
  //   );

  //   cartDOMElement.removeChild(cartItemDOMElement);
  //   delete cart[id];
  //   updateCart();
  // };

  const renderCart = () => {
    if (cartEmpty()) return;

    const ids = Object.keys(cart);

    ids.forEach((id) => renderCartItem(cart[id]));
  };

  const saveDataCustomer = (customerForm) => {
    const email = customerForm.elements.customerShippingEmail.value;
    const address = customerForm.elements.customerShippingAddress.value;

    customer.shippingEmail = email;
    customer.shippingAddress = address;

    saveCustomer();

    location.href = "WPJS/checkout-payment";
  };

  const renderForm = () => {
    if (customer) {
      const customerForm = document.forms.customerinfo;

      customer.email
        ? (customerForm.customerShippingEmail.value = customer.email)
        : (customerForm.customerShippingEmail.value = "");

      customer.address
        ? (customerForm.customerShippingAddress.value =
            customer.postalCode +
            ", " +
            customer.countryName +
            ", " +
            customer.province +
            ", " +
            customer.city +
            ", " +
            customer.address +
            " " +
            customer.apartment)
        : (customerForm.customerShippingAddress.value = "");
    }
  };

  const makeDiscount = (discount) => {
    discountValue = Math.abs(Number(discount.substr(3))); //откинем минус если вдруг в админке ввели минус
    discountCode = document.getElementById("discountInputField").value;

    if (discount.startsWith("fix")) {
      discountValue *= -1;
    }

    customer.discountCode = discountCode;
    customer.discountValue = discountValue;
    saveCustomer();

    // localStorage.setItem("discountCode", discountCode);
    // localStorage.setItem("discountValue", discountValue);
    updateCartTotalPrice();
  };

  const discountCheck = function () {
    if (cartEmpty()) return;

    var xhr = new XMLHttpRequest();
    var url = WPJS.ajaxUrl + "?action=discount_check";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onload = function () {
      const response = xhr.response;

      // console.log(response);

      if (response === "false") {
        return;
      } else if (response.startsWith("fix") || response.startsWith("per")) {
        makeDiscount(response);
      }
    };

    discountCode = document.getElementById("discountInputField").value;

    xhr.send("discountcode=" + discountCode);
  };

  const cartTotalItemsCounter = () => {
    totalQuantity = Object.keys(cart).reduce((acc, id) => {
      const { quantity } = cart[id];
      return acc + Number(quantity);
    }, 0);

    return totalQuantity;
  };

  const renderDelivery = function () {
    if (
      cartEmpty() ||
      !customer.country ||
      !customer.city ||
      !customer.postalCode
    ) {
      return;
    }

    var xhr = new XMLHttpRequest();
    var url = WPJS.ajaxUrl + "?action=delivery_rank";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onload = function () {
      const response = xhr.response;

      console.log(response);

      responseJSON = JSON.parse(response);

      // console.log("responseJSON " + JSON.stringify(responseJSON));

      for (i = 0; i < responseJSON.price.length; i++) {
        let selectedOption = document.getElementById(
          "customerSelectShippingMethod"
        );
        let newOption = new Option(
          responseJSON.shippingmethod[i] + " " + "$" + responseJSON.price[i],
          responseJSON.shippingcode[i]
        );
        newOption.setAttribute("data-price", responseJSON.price[i]);
        newOption.setAttribute(
          "data-shippingmethod",
          responseJSON.shippingmethod[i]
        );

        if (responseJSON.shippingcode[i] == customer.deliveryCode) {
          newOption.setAttribute("selected", "selected");
          // cartDeliveryDOMElement.textContent = "$ " + responseJSON.price[i];
          deliveryPrice = responseJSON.price[i];
          console.log("deliveryPrice", deliveryPrice);
          customer.deliveryPrice = deliveryPrice;
          saveCustomer();
          console.log("customer.deliveryPrice", customer.deliveryPrice);
          updateCartTotalPrice();
        }

        selectedOption.append(newOption);
      }
    };

    infoToSend = `amount=${cartTotalItemsCounter()}&country=${
      customer.country
    }&city=${customer.city}&postalcode=${customer.postalCode}`;

    console.log(infoToSend);

    xhr.send(infoToSend);
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

      // if (target.classList.contains("js-btn-cart-item-remove")) {
      //   e.preventDefault();
      //   const cartItemDOMElement = target.closest(".js-cart-item");
      //   const productID = cartItemDOMElement.getAttribute("data-product-id");
      //   deleteCartItem(productID);
      // }

      // if (target.classList.contains("js-btn-product-increase-quantity")) {
      //   e.preventDefault();
      //   const cartItemDOMElement = target.closest(".js-cart-item");
      //   const productID = cartItemDOMElement.getAttribute("data-product-id");
      //   increaseQuantity(productID, 1);
      // }

      // if (target.classList.contains("js-btn-product-decrease-quantity")) {
      //   // e.preventDefault();
      //   const cartItemDOMElement = target.closest(".js-cart-item");
      //   const productID = cartItemDOMElement.getAttribute("data-product-id");
      //   decreaseQuantity(productID);
      // }

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

  const countWeight = () => {
    let boxDimension = [
      [220, 165, 75],
      [220, 165, 75],
      [220, 165, 150],
      [220, 165, 150],
      [220, 165, 150],
      [315, 220, 160],
      [315, 220, 160],
      [315, 220, 160],
      [315, 220, 160],
      [315, 220, 160],
      [315, 220, 160],
      [315, 220, 220],
      [315, 220, 220],
      [315, 220, 220],
      [315, 220, 220],
      [315, 220, 220],
      [315, 220, 220],
      [315, 220, 220],
    ];

    let boxVolume = [];
    boxDimension.forEach(function (item, i) {
      let res = item.reduce((acc, rec) => acc * rec);
      res = res / 1000 / 1000 / 1000;
      // console.log(res);
      boxVolume[i] = res;
    });
    // console.log(boxVolume);

    // let boxDescription = [
    //   "Small",
    //   "Small",
    //   "Medium",
    //   "Medium",
    //   "Medium",
    //   "Large",
    //   "Large",
    //   "Large",
    //   "Large",
    //   "Large",
    //   "Large",
    //   "Extra Large",
    //   "Extra Large",
    //   "Extra Large",
    //   "Extra Large",
    //   "Extra Large",
    //   "Extra Large",
    //   "Extra Large",
    // ];
    // let boxWeightDelta = [
    //   20, 140, 220, 240, 240, 360, 380, 420, 420, 440, 420, 440, 520, 540, 540,
    //   560, 680, 680,
    // ];
    let boxWeight = [
      220, 540, 820, 1040, 1240, 1560, 1780, 2020, 2220, 2440, 2620, 2840, 3120,
      3340, 3540, 3760, 4080, 4280,
    ];

    totalQuantity = cartTotalItemsCounter();
    let totalVolume = 0;
    let totalWeight = 0;
    let averageLengthWidthHeightInCm = 0;

    while (totalQuantity) {
      if (totalQuantity > 18) {
        totalQuantity -= 18;
        totalVolume = totalVolume + boxVolume[17];
        totalWeight = totalWeight + boxWeight[17];
        // console.log(totalQuantity);
      } else {
        totalVolume = totalVolume + boxVolume[totalQuantity - 1];
        totalWeight = totalWeight + boxWeight[totalQuantity - 1];
        totalQuantity = 0;
        // console.log(totalQuantity);
      }
    }
    //объём метров кубических
    console.log("totalVolume", totalVolume);
    //среднее значение высота длина ширина в см
    averageLengthWidthHeightInCm = Math.cbrt(totalVolume) * 100;
    console.log("average length cm3", averageLengthWidthHeightInCm);
    // масса в килограммах
    totalWeight /= 1000;
    console.log("totalWeight", totalWeight);
    customer.averageLengthWidthHeightInCm = averageLengthWidthHeightInCm;
    customer.totalWeight = totalWeight;
  };

  const selectListener = () => {
    const selectElement = document.getElementById(
      "customerSelectShippingMethod"
    );

    selectElement.addEventListener("change", () => {
      // console.log("selectElement.addEventListener change");
      deliveryMethodText = selectElement.options[
        selectElement.selectedIndex
      ].getAttribute("data-shippingmethod");
      customer.deliveryMethodText = deliveryMethodText;
      // console.log(deliveryMethodText);
      deliveryCode = selectElement.options[selectElement.selectedIndex].value;
      customer.deliveryCode = deliveryCode;
      // console.log(deliveryCode);
      deliveryPrice =
        selectElement.options[selectElement.selectedIndex].getAttribute(
          "data-price"
        );
      customer.deliveryPrice = deliveryPrice;
      updateCartTotalPrice();
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
    countWeight();
    renderDelivery();
    selectListener();
  };

  cartInit();
})();

const checkValidityOurFunc = (customerForm) => {
  // customerForm.customerShippingEmail.setCustomValidity("");

  if (!customerForm.customerShippingEmail.checkValidity()) {
    // customerForm.customerShippingEmail.setCustomValidity(
    //   "Сheck this field. Something is wrong with him"
    // );
    alert("Please check your email spelling");
    return;
  }

  if (!customerForm.customerShippingAddress.checkValidity()) {
    alert("Please check your Shipping Address spelling");
    return;
  }

  if (customerForm.customerSelectShippingMethod.value == "Other") {
    alert("Please select your Shipping Method");
    return;
  }

  return true;
};
