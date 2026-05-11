// Importa las funciones necesarias de los SDK de Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
import { getFirestore, collection, getDocs, doc, getDoc } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';

// Tu configuración de Firebase (obtenida de la consola de Firebase -> Configuración del proyecto -> Tus aplicaciones)
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID", // cofadic
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Obtén una referencia a Firestore
