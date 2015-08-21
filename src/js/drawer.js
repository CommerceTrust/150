jQuery(function($){

  var $btn = $("#toggle"),
      $drawer = $("#drawer"),
      $nav = $(".header__logo--col-4-12");

  $btn.on( "click", function() {
    //console.log( 'hello' );
    $(this).toggleClass( 'move' );
    $drawer.toggleClass( 'slide' );
  });

  var $drawer_links = $("#drawer a")

  $drawer_links.on( "click", function() {
    $btn.toggleClass( 'move' );
    $drawer.toggleClass( 'slide' ); 
  });
});
