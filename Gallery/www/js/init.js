(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space

// images folder
	var mb = document.querySelectorAll('.materialboxed');
      	M.Materialbox.init(mb,{
     })

// checkboxes storage in localStorage
      $('.data').on('click', function() {
        var fav, favs = [];
        $('.data').each(function() { // run through each of the checkboxes
          fav = {id: $(this).attr('id'), value: $(this).prop('checked')};
          favs.push(fav);
        });
        localStorage.setItem("favorites", JSON.stringify(favs));
      });
      $(document).ready(function() {
        var favorites = JSON.parse(localStorage.getItem('favorites'));
        if (!favorites.length) {return};
        console.debug(favorites);

        for (var i=0; i<favorites.length; i++) {
          console.debug(favorites[i].value == 'on');
          $('#' + favorites[i].id ).prop('checked', favorites[i].value);
        }
      });

