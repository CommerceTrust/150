jQuery(function($){

  var $btn = $("#toggle"),
      $drawer = $("#drawer"),
      $nav = $(".header__logo--col-4-12");

  $btn.on( "click", function() {
    console.log("toggling the drawer1");
    $(this).toggleClass( 'move' );
    $drawer.toggleClass( 'slide' );
  });

  // Auto-close the menu if we're jumping to another slide.
  var $drawer_links = $("#drawer a:not(:first-child):not(:last-child)")

  $drawer_links.on( "click", function() {
    console.log("toggling the drawer2");
    $btn.toggleClass( 'move' );
    $drawer.toggleClass( 'slide' ); 
  });
});
