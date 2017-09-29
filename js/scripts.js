var newarray = [];

function pingpong(number, newarray) {
  for (var i = 0; i <= number; i++) {
    if (i % 15 === 0) {
      newarray.push("pingpong");
    } else if (i % 5 === 0) {
      newarray.push("pong");
    } else if (i % 3 === 0) {
      newarray.push("ping");
    } else {
      newarray.push(i);
    }
  }
}


$(document).ready(function() {
  $("#button1").click(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    pingpong(number, newarray)
    newarray.forEach(function(newNumber) {
      $('#result').append("<li>" + newNumber + "<li>");
    });
    // $('#number').val("");
  })
});
