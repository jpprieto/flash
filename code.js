$(document).ready(
  function() {
    $('.flashcard').on('click', function() {
      $('.flashcard').toggleClass('flipped');
    });
  
  $('.hide').on('click', function(){
    if ($('.hideb').is(':visible')) { 
     $('.hideb').hide();
    }
    else {
      $('.hideb').show();
    }
  });
  
  var outputb = document.getElementById('textb');
  var outputf = document.getElementById('textf');
  
  $('.begin').on('click', function(){
  var inputb = document.getElementById("ans").value;
  var inputf = document.getElementById("quest").value;
  outputf.innerHTML = inputf;                             //add the question to the flashcard
  outputb.innerHTML = inputb;                             //add the answer to the flashcard
  });
  
  
//below is defined the counting system, and transition button behavior  
  var f = 0;            //current flashcard (from 0)
  var fp = 0;           //number of flashcards  
  
  $('.add').on('click', function(){
    $('.apflash').append('<input type="text" name="flashcard front" id="quest'+ f + '" placeholder="Front (question)" value=""> <input type="text" name="flashcard back" class="hideb" id="ans' + f + '" placeholder="back (answer)" value=""/><br>')
  });
  
  if(f<1){
    $('#prev').hide()
  } 
  if(f<=fp){
    $('#next').hide()
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});