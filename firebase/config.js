import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAutGskHqeATmWKBkVKwcsG-8xE-RQIxMs",
    authDomain: "awesomeproject-93d43.firebaseapp.com",
    databaseURL: "https://awesomeproject-93d43-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "awesomeproject-93d43",
    storageBucket: "awesomeproject-93d43.appspot.com",
    messagingSenderId: "315629735235",
    appId: "1:315629735235:web:5f6a1f2bf8e5137b51f3f6",
    measurementId: "G-53Z0PXDFFP"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)