$(window).load(function(){
  $(".product_lists_li img").click(function(){
    var img_src = $(this).attr("src");
    $("#product_main_img img").attr("src", img_src);
  });
});
$(document).ready(function(){
  $("#sp_navi_btn").click(function(){
    $(".sp_navi_li").slideToggle();
  });
});

$(document).ready(function(){
  $('.owl-carousel').owlCarousel(
    {
      loop: true,
      nav: false,
      dots: true,
      items: 1,
      autoplay: true,
      rewind:true
      
    }
  );
});