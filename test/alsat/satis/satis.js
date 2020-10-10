
$('input[type="file"]').on('change', function() {
    for (var i = 0; i < this.files.length; i++) {
      var fr = new FileReader();
      fr.onload = function(e) {
        $('#thumbs').append('<img src="' + e.target.result + '" width="100px" height="94px">')
      }
      fr.readAsDataURL(this.files[i]);
    }
  });