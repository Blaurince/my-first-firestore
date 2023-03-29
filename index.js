// import the tools we need from firebase-admin
import { initializeApp, cert } from "firebase-admin/app"; // we use to connect to firebase projects
import { getFirestore } from "firebase-admin/firestore"; // we use to connect to firestore

// import our vredentials from a secret file
import { credentials } from "./credentials.js";

// connect to our fire-base project
initializeApp({
    credential: cert(credentials)
});

// connect to firestore DB
const db = getFirestore();

// add a product to our product collection
const candy2 = {
    name: "twix",
    unitPrice: 2.99,
    size: "12 oz",
    color: "gold",
    inventory: 288,
    productNumber:2,
}

// // How to add a document to firestore
// db.collection("products").add(candy2)  // while we are waiting for the promise...
//     .then ((doc) => {
//     console.log("added doc: " + doc.id) 
//     // I can be sure that the process was completed successfully
    
// })

// .catch(err => console.log(err))

// how to read a document from firestore:

// how to update a document
db.collection('products').doc('V3kDn9dSCyYeBVHom5fC').update({
     inventory:555,
     customerFavorite: true 

})




// how to read 
db.collection('products').doc('V3kDn9dSCyYeBVHom5fC').get()
   .then(doc => {
     console.log(doc.data())
})
.catch(err => console.log(err))

// how to get a whole collection

db.collection('products').get()
.then(collection => {
    const productList = collection.docs.map(doc => ({...doc.data(), id: doc.id}));
    console.table(productList);
})
.catch(console.log);

// how to delete a document

//db.collection('products').doc('V3kDn9dSCyYeBVHom5fC').delete()

