$(document).ready(function(){
  var numbers = ['ace','2','3','4','5','6','7','8','9','10','jack','queen','king'];
  var suits = ['spades','clubs','hearts','diamonds'];
  var deck = [];
  // debugger;
  suits.forEach(function(suit){
    var card = numbers.map(function(num){
      return num + " of " + suit;
    })
    deck.push(card);
    $("ul").append(" " + "<li>" + card + "</li>" + " ");
  });

  console.log(deck);

})
