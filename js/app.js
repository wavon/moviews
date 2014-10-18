// Genre buttons toggle 
$("button").click(function (){
  $class = $(this).val();
  $('.' + $class).toggle();
  $(this).toggleClass("hidden")
});