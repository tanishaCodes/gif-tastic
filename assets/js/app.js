$(function() {

  populateButtons(searchArray, 'searchButton', '#buttonsArea');

})

var searchArray = ['cat memes', 'huh', 'dogge memes'];

function populateButtons(searchArray, classToAdd, areaToAddTo){

  $(areaToAddTo).empty();

  for(var i = 0; i < searchArray.length; i++){

    var a   = $('<button>');

      a.addClass(classToAdd);
      a.attr('data-type', searchArray[i]);
      a.text(searchArray[i]);

       $(areaToAddTo).append(a);

  }
}

$(document).on('click'), ',searchButton', function() {

  $('#searches').empty();

  var type = $(this).data('type');

  var queryURL = 'https://api.giphy.com/v1/gifs/search?q=&api_key=iFLAjfCjEhTk5yxOolq0j0IwPg6bY5KT';

    $.ajax({url: queryURL, method: "GET"})
      .done(function(response) {

        for (var i = 0; i < results.data.length; i++) {
          var searchDiv = $('<dic class="search-item">');
          var rating    = response.data[i].rating;
          var p         = $('<p>').text('Rating: '+rating);
          var animated  = response.data[i].images.fixed_height.url;
          var still     = response.data[i].images.fixed_height_still.url;
          var image     = $('<img>');

           image.attr('src', still);
           image.attr('data-still', still);
           image.attr('data-animated', animated);
           image.addClass('searchImage');

           searchDiv.append(p);
           searchDiv.append(image);

            $('#searches').append(searchDiv);

      }
      })
};

$('#addSearch').on('click', function() {
  
  var newSearch = $('input').eq(0).val();

})
