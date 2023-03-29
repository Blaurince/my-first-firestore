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

db.collection("products").add(candy2)  // while we are waiting for the promise...
    .then ((doc) => {
    console.log("added doc: " + doc.id) // I can be sure that the process was completed successfully
    return db.collection('products').get() // also returns a promise
})
.then()
.catch(err => console.log(err))

