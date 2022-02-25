// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getDatabase, ref, set, child, get, update, remove } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWVTem_3JoajXBbjQJQb4fpAGrilAyKt8",
  authDomain: "examentecnico-40d01.firebaseapp.com",
  projectId: "examentecnico-40d01",
  storageBucket: "examentecnico-40d01.appspot.com",
  messagingSenderId: "864400588257",
  appId: "1:864400588257:web:c8c8df94c0b11234b1a6a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Realtime Database
const db = getDatabase(app);
const dbRef = ref(db);

// Referencias SELECT
var selectPaises = document.getElementById("selectPaises");
var selectEstados = document.getElementById("selectEstados");
var selectMunicipios = document.getElementById("selectMunicipios");

// Verificar conexión con BD
let conexionPromise = new Promise((resolve, reject) => {
    get(child(dbRef, "Paises/")).then((snapshot) => {
        if(snapshot.exists()){
            resolve("Iniciando conexión con la BD...");
        } else {
            reject("Falló la conexión con la BD");
        }
    });
});

conexionPromise.then(res => {
    // Conexión exitosa
    console.log(res);
    setTimeout(() => {
        let pais = "", estado = "", municipio = "";

        // Obtener paises
        get(child(dbRef, "Paises/")).then((snapshot) => {
            let paisesObject = snapshot.val();
            let paisesArray = [];
            let i = 0;

            // Guardar paises
            for(let paises in paisesObject){
                paisesArray[i] = paises;
                i++;
            }

            // Mostrar paises en Select
            for(let i = 0; i < paisesArray.length; i++){
                let option = '<option value="' + paisesArray[i] + '">' + paisesArray[i] + '</option>';
                selectPaises.insertAdjacentHTML("beforeend", option);                
            }

            // TODO: 3.- Seleccionar un país
            selectPaises.addEventListener('change', () =>{
                limpiarEstados();
                limpiarMunicipios();

                for(let i = 0; i < paisesArray.length; i++){
                    if(selectPaises.value == paisesArray[i]){
                        console.log("País seleccionado: " + paisesArray[i]);
                        pais = paisesArray[i];
                        // TODO: 4.- Obtener todos los estados del país seleccionado 
                        get(child(dbRef, "Paises/" + paisesArray[i])).then((snapshot) => {
                            if(snapshot.exists()){
                                let estadosObject = snapshot.val();
                                let estadosArray = [estadosObject];
                                let i = 0;
                                                        
                                // Guardar estadosObject en estadosArray
                                for(let estados in estadosObject){
                                    estadosArray[i] = estados;
                                    i++;
                                }

                                // TODO: 5.- Mostrar estados en el Select
                                for(let i = 0; i < estadosArray.length; i++){
                                    let option = '<option value="' + estadosArray[i] + '">' + estadosArray[i] + '</option>';

                                    selectEstados.insertAdjacentHTML("beforeend", option);
                                }

                                // TODO: 6.- Seleccionar un estado
                                selectEstados.addEventListener('change', () =>{
                                    for(let i = 0; i < estadosArray.length; i++){
                                        if(selectEstados.value == estadosArray[i]){
                                            console.log("Estado seleccionado: " + estadosArray[i]);
                                            estado = estadosArray[i];

                                            limpiarMunicipios();
                                            // TODO: 7.- Obtener todos los municipios del estado seleccionado
                                            get(child(dbRef, "Paises/" + pais + "/" + estado)).then((snapshot) => {
                                                if(snapshot.exists()){
                                                    let municipiosObject = snapshot.val();
                                                    let municipiosArray = [municipiosObject];
                                                    let i = 0;

                                                    // Guardar municipiosObject en municipiosArray
                                                    for(let municipios in municipiosObject){
                                                        municipiosArray[i] = municipios;
                                                        i++;
                                                    }

                                                    // TODO: 8.- Mostrar municipios en el Select
                                                    for(let i = 0; i < municipiosArray.length; i++){
                                                        let option = '<option value="' + municipiosArray[i] + '">' + municipiosArray[i] + '</option>';
                                                    selectMunicipios.insertAdjacentHTML("beforeend", option);

                                                    // TODO: 9.- Seleccionar un municipio
                                                    selectMunicipios.addEventListener('change', () => {
                                                        if(selectMunicipios.value == municipiosArray[i]){
                                                            console.log("Municipio seleccionado: " + municipiosArray[i]);
                                                            municipio = municipiosArray[i];
                                                        }
                                                    });
                                                    }
                                                } else {
                                                    console.log("No se encontraron los municipios");
                                                }
                                            });
                                        }
                                    }
                                });
                            } else {
                                console.log("No se encontraron los estados");
                            }
                        });
                    }
                }
            });
        });


        console.log("Conexión exitosa");
    }, 2000);
}).catch(error => {
    console.log(error);
});
  
// Función para limpiar selectEstados
function limpiarEstados(){
    // Limpiar selectEstados
    while (selectEstados.firstChild){
        selectEstados.removeChild(selectEstados.firstChild);
    }

    // Insertar "Selecciona una opción" a estadosSelect
    selectEstados.insertAdjacentHTML("beforeend", '<option value="">Selecciona una opción</option>');
}

// Función para limpiar selectMunicipios
function limpiarMunicipios(){
    // Limpiar selectMunicipios
    while (selectMunicipios.firstChild){
        selectMunicipios.removeChild(selectMunicipios.firstChild);
    }

    // Insertar "Selecciona una opción" a estadosSelect
    selectMunicipios.insertAdjacentHTML("beforeend", '<option value="">Selecciona una opción</option>');
}