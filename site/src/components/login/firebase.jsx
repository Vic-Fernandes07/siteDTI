import { initializeApp } from "firebase/app"; // Importa a função para inicializar o Firebase
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // Importa autenticação e provedor do Google

const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_AUTH_DOMAIN",
    projectId: "SEU_PROJECT_ID",
    storageBucket: "SEU_STORAGE_BUCKET",
    messagingSenderId: "SEU_MESSAGING_SENDER_ID",
    appId: "SEU_APP_ID"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Inicializa a autenticação
const provider = new GoogleAuthProvider(); // Configura o provedor do Google

export { auth, provider, signInWithPopup }; // Exporta os elementos necessários
