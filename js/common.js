// menu
    $(document).ready(function() {
      $('.js-activated').dropdownHover();
    });
// to top
jQuery('.totop').click(function(){
	jQuery('html, body').animate({ scrollTop: 0 }, "slow");
});