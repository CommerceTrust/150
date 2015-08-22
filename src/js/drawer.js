jQuery(function($){

  var $btn = $("#toggle"),
      $drawer = $("#drawer"),
      $nav = $(".header__logo--col-4-12");

  $btn.on( "click", function() {
    console.log("toggling the drawer1");
    $(this).toggleClass( 'move' );
    $drawer.toggleClass( 'slide' );
  });

  var $drawer_links = $("#drawer a")

  $drawer_links.on( "click", function() {
    console.log("toggling the drawer2");
    $btn.toggleClass( 'move' );
    $drawer.toggleClass( 'slide' ); 
  });
});
