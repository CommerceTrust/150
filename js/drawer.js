jQuery(function($){

  var $btn = $("#toggle"),
      $drawer = $("#drawer"),
      $nav = $(".header__logo--col-4-12");

  $btn.on( "click", function() {
    //console.log( 'hello' );
    $(this).toggleClass( 'move' );
    $drawer.toggleClass( 'slide' );
  });
});
