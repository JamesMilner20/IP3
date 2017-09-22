  var yourNumber = function(number) {
    return number;
    if (number % 3 === 0){
      return number = 1; number<=Infinity; number +=1
    }
  };

  $(document).ready(function() {
      $("#button1").click(function(event) {
        event.preventDefault();
        var number = parseInt($("input#number").val());
        var result = yourNumber(number);
        $("#outputdiv").text(result);
      });
    });
