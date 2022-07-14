<?php
/*
Template Name: checkout-test
*/
// echo carbon_get_theme_option('crb_subtitle_styling');
// if (is_page('wp-admin' == false)) echo 'checkout-test';
?>

<body>
  <!-- Replace "test" with your own sandbox Business account app client ID -->
  <!-- &disable-funding=credit try disable Pay Latter button -->
  <?php
  if (1 == 1) {
  ?>
    <script src="https://www.paypal.com/sdk/js?client-id=AVe9FMelKEet5RQG27Xi3QWU_SpMTioXgRnkH96BqIvFjZdgq0a8ciCIKLI0HH_R_gLvh1D2ofCqDwyo&currency=USD&commit=true&disable-funding=credit,card"></script>
  <?php
  }
  ?>


  <!-- Set up a container element for the button -->
  <div id="paypal-button-container"></div>
  <button id="target" class="button2">Push</button>
  <script type='text/javascript' src='https://moonglade.world/wp-content/themes/moonglade/assets/js/jquery.js' id='jquery-main-js'></script>
  <script>
    paypal.Buttons({
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
        layout: 'horizontal',
        color: 'black',
        shape: 'rect',
        label: 'paypal',
        tagline: false,
        // height: 25 --- 55;
      },
      // Sets up the transaction when a payment button is clicked
      createOrder: (data, actions) => {
        return actions.order.create({
          "purchase_units": [{
            "amount": {
              "currency_code": "USD",
              "value": "100",
              "breakdown": {
                "item_total": {
                  /* Required when including the `items` array */
                  "currency_code": "USD",
                  "value": "100"
                }
              }
            },
            "items": [{
                name: "MORINGA",
                description: "product_91 ==> MORINGA",
                unit_amount: {
                  currency_code: "USD",
                  value: "21"
                },
                quantity: "1",
              },
              {
                name: "TURMERIC",
                description: "product_126 ==> TURMERIC",
                unit_amount: {
                  currency_code: "USD",
                  value: "21"
                },
                quantity: "1",
              },
              {
                name: "COCONUT CHARCOAL",
                description: "product_109 ==> COCONUT CHARCOAL",
                unit_amount: {
                  currency_code: "USD",
                  value: "21"
                },
                quantity: 9,
              },
              {
                name: "DRAGON FRUIT",
                description: "product_112 ==> DRAGON FRUIT",
                unit_amount: {
                  currency_code: "USD",
                  value: "21"
                },
                quantity: 10,
              },
            ]
          }]
        });
      },
      // Finalize the transaction after payer approval
      onApprove: (data, actions) => {
        return actions.order.capture().then(function(orderData) {
          // Successful capture! For dev/demo purposes:
          console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
          const transaction = orderData.purchase_units[0].payments.captures[0];
          alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);
          // When ready to go live, remove the alert and show a success message within this page. For example:
          // const element = document.getElementById('paypal-button-container');
          // element.innerHTML = '<h3>Thank you for your payment!</h3>';
          // Or go to another URL:  actions.redirect('thank_you.html');
        });
      }
    }).render('#paypal-button-container');



    const cart = JSON.parse(localStorage.getItem("cart")) || new Object();

    // console.log(cart, JSON.stringify(cart));

    // let itemsPayPal = new Object();
    let itemsPayPal = [];

    const onlyPurchasedGoods = () => {
      const ids = Object.keys(cart);
      // let xmlPurchasedGoods = "";
      let itemTemp = new Object();
      ids.forEach(
        (id) => {
          console.log(id);
          console.log(cart[id].name);
          console.log(cart[id].quantity);
          console.log(cart[id].price);
          let data = new Object();
          // data.id = id;
          data.name = cart[id].name;
          data.description = id + " ==> " + data.name;
          data.unit_amount = {
            currency_code: "USD",
            value: cart[id].price,
          };
          data.quantity = cart[id].quantity;
          // data.price = cart[id].price;
          itemsPayPal.push(data);
        }
      );
      // console.log(itemsPayPal, JSON.stringify(itemsPayPal));
    };

    onlyPurchasedGoods();

    //! ---->
    // Если предыдущий источник финансирования был выбран для запоминания клиентом, он сохраняется для извлечения для будущих транзакций.
    //? paypal.rememberFunding([ paypal.FUNDING.VENMO ]);

    var elems = document.getElementsByClassName("paypal-buttons-layout-horizontal");
    console.log(elems);
    // document.getElementsByClassName("paypal-buttons-layout-horizontal").click();
    // $('paypal-buttons-layout-horizontal').trigger('click');
    $(".button2").click(function() {
      alert("Handler for .click() called.");
      // $(".paypal-buttons-layout-horizontal").click();
      // $("#buttons-container").click();
      // $(".paypal-button-layout-horizontal").click();
      // $(".component-frame visible").click();
      // $(".paypal-button-container").click();
      // $(".button2").click();
    });
    // $("#target").click(function() {
    //   alert("Handler for .click() called.");
    // });
  </script>
</body>