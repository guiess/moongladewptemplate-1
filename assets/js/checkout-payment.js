// localStorage.clear();
const cart = JSON.parse(localStorage.getItem("cart")) || new Object();
// console.log(cart);
console.log(JSON.stringify(cart));

const customer = JSON.parse(localStorage.getItem("customer")) || new Object();
console.log(JSON.stringify(customer));

// let discountValue = Number(localStorage.getItem("discountValue")) || 0;
// let discountCode = localStorage.getItem("discountCode") || "";
let discountValue = Number(customer.discountValue) || 0;
let discountCode = customer.discountCode || "";
// console.log(JSON.stringify(discountCode));
const totalPrice = Object.keys(cart).reduce((acc, id) => {
  const { quantity, price } = cart[id];
  return acc + price * quantity;
}, 0);

let discountValueMath;
if (discountValue < 0) {
  discountValueMath = Math.abs(discountValue);
} else {
  // if (discountValue > 100) return;
  discountValueMath = (Math.abs(discountValue) / 100) * totalPrice;
}
discountValueMath = Math.round(discountValueMath);

if (!customer.deliveryPrice) {
  // customer.deliveryPrice = 0;
  location.href = "WPJS/checkout-shipping";
}
console.log("customer.deliveryPrice", customer.deliveryPrice);

// сделаем функцию глобальной
let formSend = function () {};

(function () {
  const cartDOMElement = document.querySelector(".js-cart");

  if (!cartDOMElement) {
    return;
  }

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
  const cartDiscountCodeDOMElement = document.querySelector(
    ".activated-discount"
  );
  const cartDiscountSumDOMElement = document.querySelector(".js-discount-sum");
  const cartDeliverySumDOMElement = document.querySelector(".js-delivery-sum");
  const hiddenFormEmptyCart = document.querySelector(".hidden-form-empty-cart");

  const hiddenEmptyDiscountCode = document.querySelector(".mb-25");
  const hiddenEmptyDiscountCodeDiv =
    document.querySelector(".discount-code-div");

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

  // const saveCart = () => {
  //   localStorage.setItem("cart", JSON.stringify(cart)); //преобразуем в строку JSON
  // };

  // const saveCustomer = () => {
  //   localStorage.setItem("customer", JSON.stringify(customer)); //преобразуем в строку JSON
  // };

  const updateCartTotalPrice = () => {
    if (cartEmpty()) return;

    // document.getElementById("discountInputField").value = discountCode;

    if (cartSubtotalPriceDOMElement) {
      cartSubtotalPriceDOMElement.textContent = "$ " + totalPrice;
    }

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

  // const disableDiscountApplyBtn = () => {
  //   if (discountCode) {
  //     $(".js-button-apply-disount").removeAttr("disabled");
  //   }
  // };

  const updateDiscountField = () => {
    if (discountCode) {
      cartDiscountCodeDOMElement.innerText = discountCode;
    }
    // hiddenEmptyDiscountCode.style.visibility = "hidden";
    else {
      hiddenEmptyDiscountCode.style.display = "none";
      hiddenEmptyDiscountCodeDiv.style.display = "none";
    }
  };

  const updateCart = () => {
    updateDiscountField();
    updateCartTotalPrice();
    // disableDiscountApplyBtn();
    // saveCart();

    itemWrapFull = document.getElementById("js-cart-wrapper-full");
    itemWrapEmpty = document.getElementById("js-cart-wrapper-empty");
  };

  // const countItemsInCart = () => {
  //   const count = Object.keys(cart).length;
  //   return count;
  // };

  // const deleteCartItem = (id) => {
  //   if (!deleteAll) {
  //     // if (countItemsInCart() === 1) {
  //     //   return;
  //     // }
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

  // const saveDataCustomer = (customerForm) => {
  //   const email = customerForm.elements.customerShippingEmail.value;
  //   const address = customerForm.elements.customerShippingAddress.value;
  //   const typeOfCreditСard =
  //     customerForm.elements.customerSelectCreditСard.value;
  //   const customerCardNumber = customerForm.customerCardNumber.value;
  //   const nameOnCard = customerForm.customerNameOnCard.value;
  //   const cardExpiration = customerForm.customerCardExpiration.value;
  //   const cardSecurityCode = customerForm.customerCardSecurityCode.value;

  //   customer.shippingEmail = email;
  //   customer.shippingAddress = address;

  //   customer.typeOfCreditСard = typeOfCreditСard;
  //   customer.customerCardNumber = customerCardNumber;
  //   customer.nameOnCard = nameOnCard;
  //   customer.cardExpiration = cardExpiration;
  //   customer.cardSecurityCode = cardSecurityCode;

  //   saveCustomer();
  // };

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

  // const resetCart = () => {
  //   if (cartEmpty()) return;

  //   // const ids = Object.keys(cart);
  //   // ids.forEach((id) => deleteCartItem(cart[id].id));
  //   // TODO сброс customer данных
  // };

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
        console.log(`${key} : ${customer[key]}`);
        xmlCustomerinfoToSend += `${key}=${customer[key]}&`;
      }
    }
    return xmlCustomerinfoToSend;
  };

  const cartEmpty = function () {
    return !Object.keys(cart).length;
  };

  formSend = function () {
    if (cartEmpty()) return;

    console.log(JSON.stringify(cart));
    var xhr = new XMLHttpRequest();
    var url = WPJS.ajaxUrl + "?action=send_email";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onload = function () {
      const response = xhr.response.trim();
      // console.log("response = " + response);

      if (response == "success") {
        console.log("response succes");
        if (localStorage.getItem("rememberMeCheckbox") == "false") {
          console.log("resetCustomer");
          localStorage.removeItem("customer");
        } else console.log(localStorage.getItem("rememberMeCheckbox"));
        console.log("resetCart");
        localStorage.removeItem("cart");
        $("body").addClass("noscroll");
        $(".modal-shadow").fadeIn();
        $(".modal-shadow").addClass("active");
        $(".modal-success").addClass("active");
      } else {
        //TODO some actions need to be done if not response from server
        showMessage(
          "When you send an error has occurred. Please contact site support!"
        );
        console.log(
          "When you send an error has occurred. Please contact site support!"
        );
      }
    };

    let infoToSend = onlyPurchasedGoods();
    infoToSend += customerinfoToSend();
    // infoToSend += "discountCode=" + discountCode;

    // infoToSend = infoToSend.substring(0, infoToSend.length - 1);

    console.log(infoToSend);
    xhr.send(infoToSend);

    // xhr.send("foo=bar&rem=sum&more=good");
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

  // const allListeners = () => {
  //   document.querySelector("body").addEventListener("click", (e) => {
  //     const target = e.target;

  //     if (target.classList.contains("js-btn-cart-item-remove")) {
  //       e.preventDefault();
  //       const cartItemDOMElement = target.closest(".js-cart-item");
  //       const productID = cartItemDOMElement.getAttribute("data-product-id");
  //       deleteCartItem(productID, false);
  //     }

  //     if (target.classList.contains("js-btn-product-increase-quantity")) {
  //       e.preventDefault();
  //       const cartItemDOMElement = target.closest(".js-cart-item");
  //       const productID = cartItemDOMElement.getAttribute("data-product-id");
  //       increaseQuantity(productID, 1);
  //     }

  //     if (target.classList.contains("js-btn-product-decrease-quantity")) {
  //       e.preventDefault();
  //       const cartItemDOMElement = target.closest(".js-cart-item");
  //       const productID = cartItemDOMElement.getAttribute("data-product-id");
  //       decreaseQuantity(productID);
  //     }

  //     if (target.classList.contains("js-btn-paynow")) {
  //       e.preventDefault();

  //       const customerForm = document.forms.customerinfo;
  //       if (!checkValidityOurFunc(customerForm)) {
  //         return;
  //       } else {
  //         saveDataCustomer(customerForm);
  //         formSend();
  //       }
  //     }
  //   });
  // };

  const cartInit = () => {
    // allListeners();
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

//! --------- Stripe underline
//TODO добавить проверку на то, есть ли адрес доставки и прочие данные для верной доставки? форму не грузить(???), если адреса нет
//? https://stripe.com/docs/api/payment_intents/create  <--- full api

const stripe = Stripe(WPJS.pubKey);
let elements;

initialize();
checkStatus();

document
  .querySelector("#payment-form")
  .addEventListener("submit", handleSubmit);

// Fetches a payment intent and captures the client secret
async function initialize() {
  // const merged = { ...cart, ...customer };
  const merged = { cart, customer };

  // console.log(merged);
  // console.log(JSON.stringify(merged));

  const bodyText = JSON.stringify({ merged });
  // console.log(bodyText);
  // JSON.stringify({ cart }) +
  // JSON.stringify({ customer }) +
  // JSON.stringify({ discountCode });
  const { clientSecret } = await fetch(
    "https://moonglade.world/create-payment",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: bodyText,
    }
  ).then((r) => r.json());
  // }).then(data => console.log(data));
  // }).then((resp) => console.log(resp.text()));

  const appearance = {
    theme: "night",

    //? https://stripe.com/docs/elements/appearance-api
    variables: {
      spacingUnit: 6.7,
      colorBackground: "#000000",
      colorPrimary: "#0d0d0d",
      colorDanger: "#b4b4b4",
      colorIconCardCvcError: "#b4b4b4",
    },

    rules: {
      ".Tab--selected": {
        borderColor: "#0d0d0d",
      },
    },
  };

  // console.log(clientSecret);

  elements = stripe.elements({ clientSecret, appearance, loader:'always' });

  const paymentElement = elements.create("payment");
  paymentElement.mount("#payment-element");

  //? https://stripe.com/docs/js/element/events/on_change?type=paymentElement
  // Triggered when the Element is fully rendered and can accept element.focus calls.
  // paymentElement.on('ready', function(event) {
  //   // Handle ready event
  // });

  // handler
  // REQUIRED
  // function
  // handler(event) => void is a callback function that you provide that will be called when the event is fired.
}

async function handleSubmit(e) {
  const rememberMeCheckbox = document.querySelector(".remember-me-checkbox");
  localStorage.setItem("rememberMeCheckbox", rememberMeCheckbox.checked);

  e.preventDefault();
  setLoading(true);

  /*first method recomended by pidor from srtipe
  const { error } = await stripe.confirmPayment({
    elements,
    confirmParams: {
      // Make sure to change this to your payment completion page
      return_url: "https://moonglade.world/order-complete/",
    },
    // redirect: "if_required",
  });

    if (error.type === "card_error" || error.type === "validation_error") {
    showMessage(error.message);
  } else {
    showMessage("An unexpected error occurred.");
  }
  setLoading(false);
*/

  //second method my alternative method
  stripe
    .confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "https://moonglade.world/order-complete/",
      },
      redirect: "if_required",
    })
    .then(function (result) {
      // console.log("result= " + JSON.stringify(result));
      if (result.error) {
        console.log("error");
        if (
          result.error.type === "card_error" ||
          result.error.type === "validation_error"
        ) {
          showMessage(result.error.message);
        } else {
          showMessage("An unexpected error occurred.");
        }
        setLoading(false);
        // Inform the customer that there was an error.
      } else if (result.paymentIntent.status == "succeeded") {
        console.log("paymentIntent");
        formSend();
      }
    });

  // This point will only be reached if there is an immediate error when
  // confirming the payment. Otherwise, your customer will be redirected to
  // your `return_url`. For some payment methods like iDEAL, your customer will
  // be redirected to an intermediate site first to authorize the payment, then
  // redirected to the `return_url`.
}

// Fetches the payment intent status after payment submission
async function checkStatus() {
  const clientSecret = new URLSearchParams(window.location.search).get(
    "payment_intent_client_secret"
  );

  if (!clientSecret) {
    return;
  }

  const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);
  //cards for testing
  //? https://stripe.com/docs/testing?numbers-or-method-or-token=card-numbers#cards

  switch (paymentIntent.status) {
    case "succeeded":
      showMessage("Payment succeeded!");
      break;
    case "processing":
      showMessage("Your payment is processing.");
      break;
    case "requires_payment_method":
      showMessage("Your payment was not successful, please try again.");
      break;
    default:
      showMessage("Something went wrong.");
      break;
  }
}

// ------- UI helpers -------
function showMessage(messageText) {
  const messageContainer = document.querySelector("#payment-message");

  messageContainer.classList.remove("hidden");
  messageContainer.textContent = messageText;

  setTimeout(function () {
    messageContainer.classList.add("hidden");
    messageText.textContent = "";
  }, 4000);
}

// Show a spinner on payment submission
function setLoading(isLoading) {
  if (isLoading) {
    // Disable the button and show a spinner
    document.querySelector("#submit").disabled = true;
    document.querySelector("#spinner").classList.remove("hidden");
    document.querySelector("#button-text").classList.add("hidden");
  } else {
    document.querySelector("#submit").disabled = false;
    document.querySelector("#spinner").classList.add("hidden");
    document.querySelector("#button-text").classList.remove("hidden");
  }
}

//! --------- Paypal underline

const paypalitems = () => {
  let itemsPayPal = [];
  const ids = Object.keys(cart);
  ids.forEach((id) => {
    // console.log(id);
    // console.log(cart[id].name);
    // console.log(cart[id].quantity);
    // console.log(cart[id].price);
    let data = new Object();
    // data.id = id;
    data.name = cart[id].name;
    // data.description = id + " ==> " + data.name;
    data.unit_amount = {
      currency_code: "USD",
      value: cart[id].price,
    };
    data.quantity = cart[id].quantity;
    itemsPayPal.push(data);
  });
  // // console.log(itemsPayPal, JSON.stringify(itemsPayPal));
  return itemsPayPal;
};

console.log(JSON.stringify(paypalitems()));

console.log(
  totalPrice,
  Number(customer.deliveryPrice),
  discountValueMath,
  totalPrice + Number(customer.deliveryPrice) - discountValueMath + 0
);

paypal
  .Buttons({
    // onCancel: function(data) {
    //   // Show a cancel page, or return to cart
    // },
    // onError: function(err) {
    //   // For example, redirect to a specific error page
    //   window.location.href = "/your-error-page-here";
    // },
    // onInit: function(data, actions) {
    //   // Disable the buttons
    //   actions.disable();
    //   // Listen for changes to the checkbox
    //   document.querySelector('#check')
    //     .addEventListener('change', function(event) {
    //       // Enable or disable the button when it is checked or unchecked
    //       if (event.target.checked) {
    //         actions.enable();
    //       } else {
    //         actions.disable();
    //       }
    //     });
    // },
    // // onClick is called when the button is clicked
    // onClick: function() {
    //   // Show a validation error if the checkbox is not checked
    //   if (!document.querySelector('#check').checked) {
    //     document.querySelector('#error').classList.remove('hidden');
    //   }
    // },
    // onShippingChange: function(data, actions) {
    //   if (data.shipping_address.country_code !== 'US') {
    //     return actions.reject();
    //   }

    //   return actions.resolve();
    // },
    style: {
      layout: "horizontal",
      color: "black",
      shape: "rect",
      label: "paypal",
      tagline: false,
      height: 55,
    },
    // Sets up the transaction when a payment button is clicked
    //? https://developer.paypal.com/docs/api/orders/v2/
    createOrder: (data, actions) => {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value:
                totalPrice + Number(customer.deliveryPrice) - discountValueMath,
              breakdown: {
                discount: {
                  currency_code: "USD",
                  value: discountValueMath,
                },
                shipping: {
                  currency_code: "USD",
                  value: Number(customer.deliveryPrice),
                },
                item_total: {
                  /* Required when including the `items` array */
                  currency_code: "USD",
                  value: totalPrice,
                },
              },
            },
            items: paypalitems(),
          },
        ],
      });
    },
    // Finalize the transaction after payer approval
    onApprove: (data, actions) => {
      return actions.order.capture().then(function (orderData) {
        // Successful capture! For dev/demo purposes:
        // console.log(
        //   "Capture result",
        //   orderData,
        //   JSON.stringify(orderData, null, 2)
        // );
        // const transaction = orderData.purchase_units[0].payments.captures[0];
        // alert(
        //   `Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`
        // );
        formSend();
      });
    },
  })
  .render("#paypal-button-container");

//! ---->
// Если предыдущий источник финансирования был выбран для запоминания клиентом, он сохраняется для извлечения для будущих транзакций.
//? paypal.rememberFunding([ paypal.FUNDING.VENMO ]);
