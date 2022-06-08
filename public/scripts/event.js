//  Setup click home button event listener
export const setHomeButtonEventListener = function() {
  $('.nav-logo').click(function() {
    $.get('/', () => {
      console.log('Back or refresh home page...')
    });
  });
};

//  Setup click cart button event listener
export const setCartButtonEventListener = function() {
  $('.nav-cart').click(function() {
    $.get('/cart', (data) => {
      console.log('Rendering cart page...');
    });
  });
};

//  Setup click order button event listener
export const setOrderButtonEventListener = function() {
  $('.nav-order').click(function() {
    $.get('/orders', () => {
      console.log('Rendering order page...');
    });
  });
};

//  Setup add to cart event listener
export const setAddToCartEventListener = function() {
  // When click add to cart button, send POST /cart/id request
  $('.quick-add-to-cart').click(function() {
    const dishID = $(this).attr('id').slice(8);
    const url = `/cart/${dishID}`;
    $.post(url, (data) => {
      // Update nav bar cart counter
      //
      console.log('cart: ', data);
      //
      const count = countAllDishes(data);
      $('.cart-counter').text(count);
    })
  });
};

//Helper functions

const countAllDishes = function(cart) {
  let count = 0;
  for (const index in cart) {
    count += cart[index];
  }
  return count;
};
