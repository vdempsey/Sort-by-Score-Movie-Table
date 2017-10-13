
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var movieName = $("input#moviename").val();
    var movieScore = parseInt($("input#moviescore").val());
    var movieRelease = $("input#movierelease").val();



    $("tbody").append("<tr>" + "<td>" + movieName + "</td>" + "<td>" + movieScore + "</td>" + "<td>" + movieRelease + "</td>" + "</tr>");

    var $tbody = $('table tbody');
    $tbody.find('tr').sort(function (a, b) {
      var tda = $(a).find('td:eq(' + 1 + ')').text();
      var tdb = $(b).find('td:eq(' + 1 + ')').text();
      return tda < tdb ? 1
      : tda > tdb ? -1
      : 0;
    }).appendTo($tbody);
  
  });
});
