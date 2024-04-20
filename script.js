// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDNLKv9rbkOxf3r4yBLndN5IiMyM_I6LXM",
  authDomain: "ammaxx-656f1.firebaseapp.com",
  databaseURL: "https://ammaxx-656f1-default-rtdb.firebaseio.com",
  projectId: "ammaxx-656f1",
  storageBucket: "ammaxx-656f1.appspot.com",
  messagingSenderId: "967023338998",
  appId: "1:967023338998:web:75843377f8c101d709d3d7",
  measurementId: "G-8NF1YNGVJ8"
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
