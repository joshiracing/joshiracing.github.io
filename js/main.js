// popover getbootstrap

$(function () {
    $('.example-popover').popover({
      container: 'body'
    })
});


// good
function setSidebar() {
  const $sidebar = $('.example-popover');
  $sidebar.hide();

  // ...

  $sidebar.css({
    'background-color': 'pink',
  });
}

