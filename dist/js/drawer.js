jQuery(function($){
  var $btn = $("#toggle"),
      $drawer = $("#drawer"),
      $nav = $(".header__logo--col-4-12");

  $btn.on( "click", toggle_menu);


  // Make sure to close menu when jumping to another part of the timeline
  var $drawer_links = $("#drawer a:not(:first-child)")

  $drawer_links.on( "click", toggle_menu);

  function toggle_menu() {
    $("body").toggleClass( 'move' );
    if ($("body").hasClass( 'move' )) {
      $("body").css("overflow-x: visible;")
    }

    $drawer.toggleClass( 'slide' );

    $icon = $("#toggle i");

    if( $btn.hasClass('move') ) {
      $icon
        .removeClass('fa-bars')
        .addClass('fa-close');
    } else {
      $icon
        .removeClass('fa-close')
        .addClass('fa-bars');
    }
  }

});
