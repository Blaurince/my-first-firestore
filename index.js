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
const candy = {
    name: "skittles",
    unitPrice: 3.99,
    size: "16 oz",
    color: "green",
    inventory: 144,
    productNumber: "SK007",
};

db.collection("products").add(candy)
.then(doc => console.log("added doc: "+ doc.id))
.catch(err => console.log(err))