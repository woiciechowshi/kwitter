const firebaseConfig = {
  apiKey: "AIzaSyCByraP-SycNVXXmSUNg-jwGtKfmpVSsI8",
  authDomain: "kwitter-5fbfa.firebaseapp.com",
  databaseURL: "https://kwitter-5fbfa-default-rtdb.firebaseio.com",
  projectId: "kwitter-5fbfa",
  storageBucket: "kwitter-5fbfa.appspot.com",
  messagingSenderId: "706212409296",
  appId: "1:706212409296:web:a529a0dc0994d648a713d5",
  measurementId: "G-2S49RCFEJZ"
};

firebase.initializeApp(firebaseConfig);

inicializar();


function inicializar() {
   const nomeUsuario = localStorage.getItem("nomeUsuario");
   // console.log(nomeUsuario);
   document.getElementById("nomeUsuario").textContent = "Olá, " + nomeUsuario + "!";


   getData();
}


function addSala() {
   const nomeSala = document.getElementById("nomeSala").value;
   console.log(nomeSala);
   if (nomeSala) {
       firebase.database().ref('/').child(nomeSala).set({
            // '/'--> significa acessar a raiz do meu firebase, que é uma barra,é topo da estrutura de dados do meu Firebase, usamos para add o nome de usuario do BD ;
           purpose: "sala criada"
       });


       carregaSala(nomeSala);
   }
}


function getData() {
   firebase.database().ref('/').on("value", snapshot => {
       let salas = [];
       snapshot.forEach(childSnapshot => {
           const childKey = childSnapshot.key;
           const html = '<div class="nomeSala" id="'
               + childKey
               + '" onclick="carregaSala(this.id)">#'
               + childKey
               + '</div>'
           salas.push(html);
       });
       document.getElementById("output").innerHTML = salas.join("");
       // const output = document.getElementById("output");
       // output.innerHTML = salas.join("");
   });
}


function carregaSala(sala) {
   localStorage.setItem("nomeSala", sala);
   location = "chat.html";
}


