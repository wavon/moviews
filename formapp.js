var $button = $("#submit"); 
$button.click(function(){
  var $title = $('#title').val();
  $('#theList').append("<h1>" + $title + "</h1>");
  /*
  $('#theList').append("<li class='title'>" + $title + "</li>");*/
  
  var $genre = $('#genre').val();
  $('#theList').append("<li class='genre'>" + $genre + "</li>");
  var $year = $('#year').val();
  $('#theList').append("<li class='year'>" + $year + "</li>");
  var $rating = $('#rating').val();
  $('#theList').append("<li class='rating'>" + $rating + "</li>");
  
  var $description= $('#description').val();
  $('#theList').append("<p>" + $description + "</p>");
  var $spoiler= $('#spoiler').val();
  $('#theList').append("<p>" + $spoiler + "</p>");
  event.preventDefault(); // stops the browser from refreshing the page
});

$("#formToggle").click(function(){
  $("form").slideToggle(400);
});

$("#spoilerToggle").click(function(){
  $(".spoiler").toggle();
});



$(document).ready(function() {
    $("form#ratingForm").submit(function(e) 
    {
        e.preventDefault();
        if ($("#ratingForm :radio:checked").length == 0) {
            $('#status').html("nothing checked");
            return false;
        } else {
            $('#status').html($('input:radio[name=rating]:checked').val() );
        }
    });
});
