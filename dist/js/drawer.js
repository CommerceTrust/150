jQuery(function($){

  var $btn = $("#toggle"),
      $drawer = $("#drawer"),
      $nav = $(".header__logo--col-4-12");

  $btn.on( "click", function() {
    $(this).toggleClass( 'move' );
    $drawer.toggleClass( 'slide' );
  });

  // Make sure to close menu when jumping to another part of the timeline
  var $drawer_links = $("#drawer a:not(:first-child):not(:last-child)")

  $drawer_links.on( "click", function() {
    $btn.toggleClass( 'move' );
    $drawer.toggleClass( 'slide' ); 
  });

});