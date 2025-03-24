console.log('conectado')
const viewsCounter = document.getElementById('contadorVisitas');
const btnReset = document.getElementById('btnReestablecer');


// Contador de visitas persistente utilizando `localStorage`.
// Cada vez que se recarga la página debe añadir una visita más
function updateViews () {    
    if (localStorage.getItem('views')) {
        // If it exists, increment the count
        let views = parseFloat(localStorage.getItem('views')) + 1;
        localStorage.setItem("views", `${views}`);
        viewsCounter.innerText = views;
      } else {
        // If it doesn't exist, set the count to 1
        localStorage.setItem('views', 1);
        viewsCounter.innerText = localStorage.getItem('views');
      }
};
updateViews ();
console.log(localStorage);

// Botón de "Reestablecer Contador" para reiniciar el contador a cero.
// Si deseas reiniciar el contador, haz clic en el botón "Reestablecer Contador" 
// y se pondrá a cero y comenzará de nuevo en 1 en la siguiente visita.
   
btnReset.addEventListener('click', () => {
    localStorage.removeItem("views");
    console.log(localStorage);
    viewsCounter.innerText = 0;
    console.log(viewsCounter);
    console.log(localStorage);
});