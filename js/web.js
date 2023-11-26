

// main-script.js
import { getDatabase, ref, push,get } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import "./firebase.js";

document.getElementById('campo_form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    enviarDatos();
});

function enviarDatos() {
    console.log('Intentando enviar datos...');
    const datos_form = document.getElementById('campo_form')
    const region = datos_form['region'].value
    const provincia = datos_form['provincia'].value
    const nivel_gobierno = datos_form['niv_gobierno'].value
    const sector = datos_form['sector'].value
    const entidad = datos_form['entidad'].value
    const anio = datos_form['anio'].value

    // Capturar otros campos del formulario

    // Enviar datos a Firebase Realtime Database
    const refere = ref(getDatabase(), 'opciones_marcadas'); // 'datos' es el nombre de la colección
    const valores = ref(getDatabase(), 'valores');
    // Puedes usar set() para sobrescribir datos o push() para agregar nuevos datos
    push(refere, {
        region: region,
        provincia: provincia,
        nivel_gobierno: nivel_gobierno,
        sector: sector,
        entidad: entidad,
        anio: anio
    });
   // push(valores,{
     //   region: region
    //})
    console.log('se envio')
}
const database = getDatabase();
const reference = ref(database, 'valores/-Nk39UsG1JBcaOh5ULZh');

get(reference)
  .then((snapshot) => {
    const data = snapshot.val();
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
