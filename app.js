var source = $('#spotify-template').html();
var template = Handlebars.compile(source);

$('#keywordInput').keyup(function(event){
  var keyword = $(this).val();
  var url = "https://api.spotify.com/v1/search?q=" + keyword + "&type=track";

  $.getJSON( url , function(response){

    var items = {
        item: response.tracks.items
    }

    $('#itemsList').html('');
    console.log(items.item);
    var html = template(items);
    $('#itemsList').append(html);

  });
});
