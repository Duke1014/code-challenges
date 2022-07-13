$(document).ready(function() {
    $('li:odd').css('background-color', 'pink')
    $('li').click(function() {
      $(this).text("Clicked!")
      $(this).fadeOut(2000, function() {
        $(this).remove()
        $('li').css('background-color', 'transparent');
        $('li:odd').css('background-color', 'pink');
      })
    })
  });