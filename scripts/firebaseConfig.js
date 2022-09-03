import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js"
import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js"

const firebaseConfig = {

    apiKey: "AIzaSyD5Z2WGqo7MoRW0pt1a5rnvYd6waDqTstc",
  
    authDomain: "portofolio-website-d7276.firebaseapp.com",
  
    databaseURL: "https://portofolio-website-d7276-default-rtdb.asia-southeast1.firebasedatabase.app",
  
    projectId: "portofolio-website-d7276",
  
    storageBucket: "portofolio-website-d7276.appspot.com",
  
    messagingSenderId: "499199795770",
  
    appId: "1:499199795770:web:da4b7713be574eebf98b03"
  
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export function writeUserData(name, email, phone, message) {
    set(ref(database, 'users/' + 1), {
        name,
        email,
        phone,
        message
    })
}