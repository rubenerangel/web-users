import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
  apiKey: "AIzaSyD3C1SGaSDuLZ11f4zw2RPwaYJSVMC36ms",
  authDomain: "maestro-productos.firebaseapp.com",
  databaseURL: "https://maestro-productos.firebaseio.com",
  projectId: "maestro-productos",
  storageBucket: "maestro-productos.appspot.com",
  messagingSenderId: "892991484334",
  appId: "1:892991484334:web:efdc435bbb76e4a4f6983f",
  measurementId: "G-D4C2L4EVDP"
}

firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}