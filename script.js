// Initialize Firebase
var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service
var storage = firebase.storage();

// Create a reference to the storage bucket
var storageRef = storage.ref();

// Get a reference to the images folder
var imagesRef = storageRef.child('images');

// Fetch images from Firebase Storage
imagesRef.listAll().then(function(result) {
  result.items.forEach(function(imageRef) {
    // Get the download URL for each image
    imageRef.getDownloadURL().then(function(url) {
      // Display the image in your gallery
      var img = document.createElement('img');
      img.src = url;
      document.getElementById('gallery').appendChild(img);
    }).catch(function(error) {
      // Handle any errors
      console.log(error);
    });
  });
}).catch(function(error) {
  // Handle any errors
  console.log(error);
});
