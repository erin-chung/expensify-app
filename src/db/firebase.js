import * as firebase from 'firebase'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  }

firebase.initializeApp(config)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {firebase, googleAuthProvider, database as default}

// //child removed
// database.ref('expenses').on('child_removed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })
// //child changed
// database.ref('expenses').on('child_changed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })
// //child added
// database.ref('expenses').on('child_added', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })

// // // .once returns a promise
// // database.ref('expenses')
// //   .once('value')
// // .then ((snapshot)=>{
// //     const expenses = []

// //     snapshot.forEach((childSnapshot)=>{
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         })
// //     })

// //     console.log(expenses)
// // })

// // // .on does not return promise. no then. use callback.
// // database.ref('expenses')
// //   .on('value', (snapshot)=>{
// //     const expenses = []

// //     snapshot.forEach((childSnapshot)=>{
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         })
// //     })

// //     console.log(expenses)
// // })

// database.ref('expenses').push({
//     description: 'phne bill',
//     note: '',
//     amount: 109500,
//     createdAt: 9761234598768
// })