
  
mapboxgl.accessToken = 'pk.eyJ1Ijoib3IwNTIzMCIsImEiOiJjanoweW5qdXIwMDZvM250OXhwb2g2OHlxIn0.E_7sbN6_TVWgGHjg_COB6w' ;

var map = new mapboxgl.Map({
  container: 'map', 
  style: 'mapbox://styles/mapbox/streets-v11',
  center: post.geometry.coordinates,
  zoom: 12
});
// create a HTML element for our post location/marker 
var el = document.createElement('div');
el.className = 'marker';


// make a marker for our location and add to the map
new mapboxgl.Marker(el)
.setLngLat(post.geometry.coordinates)
  .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
.setHTML('<h3>' + post.title + '</h3><p>' + post.location + '</p>'))
.addTo(map);


// <!--toggling edit form if user is pressing edit-->
$('.toggle-edit-form').on('click', function() {
    // toggle the edit button text on clic
    // if the text is edit switch text to cancel , Else, text is Edit.
    $(this).text() === 'Edit' ? $(this).text('Cancel') : $(this).text('Edit');
    // toggle visibility of the edit review 
    // toggle the siblings (who's next to the button) and not all the buttons.
    $(this).siblings('.edit-review-form').toggle();
});

// Add click listener for clearing of rating from edit/ new form
$('.clear-rating').click(function() {
  $(this).siblings('.input-no-rate').click();
});
