// script.js
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Get the form and the image gallery
  var form = document.querySelector('form');
  var gallery = document.getElementById('image-gallery');
  var popup = document.getElementById('image-popup');
  var popupImage = document.getElementById('popup-image');
  var closeBtn = document.getElementById('close-btn');

  // Add an event listener for form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the selected image file
    var fileInput = document.querySelector('input[type="file"]');
    var file = fileInput.files[0];

    // Create a new list item for the image
    var listItem = document.createElement('li');
    listItem.classList.add('image-item');

    // Create an image element
    var image = document.createElement('img');
    image.src = URL.createObjectURL(file);
    image.alt = 'Image';

    // Create an overlay element
    var overlay = document.createElement('div');
    overlay.classList.add('image-overlay');

    // Create an image element for the overlay
    var overlayImage = document.createElement('img');
    overlayImage.src = URL.createObjectURL(file);
    overlayImage.alt = 'Image';

    // Append the image and overlay to the list item
    listItem.appendChild(image);
    overlay.appendChild(overlayImage);
    listItem.appendChild(overlay);

    // Append the list item to the gallery
    gallery.appendChild(listItem);

    // Reset the form
    form.reset();
  });

  // Add event listeners for image overlay click and close button click
  gallery.addEventListener('click', function(event) {
    var target = event.target;
    if (target.tagName === 'IMG') {
      var listItem = target.closest('.image-item');
      var overlayImage = listItem.querySelector('.image-overlay img');

      popupImage.src = overlayImage.src;
      popupImage.alt = overlayImage.alt;
      popup.classList.add('show');
    }
  });

  closeBtn.addEventListener('click', function() {
    popup.classList.remove('show');
  });
});
