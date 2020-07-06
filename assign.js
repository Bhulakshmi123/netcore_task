
$('.carosel-control-right').click(function() {
  $(this).blur();
  $(this).parent().find('.carosel-item').first().insertAfter($(this).parent().find('.carosel-item').last());
});
$('.carosel-control-left').click(function() {
  $(this).blur();
  $(this).parent().find('.carosel-item').last().insertBefore($(this).parent().find('.carosel-item').first());
});



function prodtnme(i) { 
  let productname=document.getElementById(i).innerHTML; 
  console.log(productname)
  }


  