jQuery(function($){

$('.video-trigger').magnificPopup({
  items: {
      src: '<div class="video-popup"><video width="640" height="480" controls=""><source src="https://d3n330amx7jftl.cloudfront.net/commerce150.mp4" type="video/mp4"></video></div>',
      type: 'inline'
  },
  closeBtnInside: true,
  showCloseBtn: true
});

});
