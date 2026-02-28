import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyBI8I-k3FKHCBzq7G6jBMESdNp1KOnTQYc",
    authDomain: "interntrack-737da.firebaseapp.com",
    projectId: "interntrack-737da",
    messagingSenderId: "616773110295",
    appId: "1:616773110295:web:22b72a3e65c6b139dfaa52"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

