import firebase from 'firebase'
 
var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "food-69a01.firebaseapp.com",
  projectId: "food-69a01",
  storageBucket: "food-69a01.appspot.com",
  messagingSenderId: "608832492538",
  appId: "1:608832492538:web:b46e02e8a91ab1d19d0a43"
};
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
const orderFirestore = firebase.firestore();


 
 const provider = new firebase.auth.GoogleAuthProvider() // auth ako koristis
 
export { orderFirestore };