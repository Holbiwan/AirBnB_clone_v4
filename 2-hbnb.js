$(document).ready(function() {
  let amenitiesChecked = {};

  $('.amenities input[type="checkbox"]').change(function() {
      if (this.checked) {
          amenitiesChecked[$(this).data('id')] = $(this).data('name');
      } else {
          delete amenitiesChecked[$(this).data('id')];
      }

      let selectedAmenities = Object.values(amenitiesChecked).join(', ');
      const maxLength = 37;

      if (selectedAmenities.length > maxLength) {
          selectedAmenities = selectedAmenities.substring(0, maxLength) + '...';
      }

      if (selectedAmenities.length === 0) {
       selectedAmenities = "&#160;";
      }

      $('.amenities h4').html(selectedAmenities);
  });
  
  $.get('http://localhost:5001/api/v1/status/', function(data) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});
