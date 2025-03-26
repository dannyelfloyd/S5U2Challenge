console.log('conectado')
const viewsCounter = document.getElementById('contadorVisitas');
const btnReset = document.getElementById('btnReestablecer');

function updateViews () {
    let views =  localStorage.getItem('views') || 0
    views++
    viewsCounter.innerText = views;
    localStorage.setItem("views", views);
};
updateViews ();
   
btnReset.addEventListener('click', () => {
    localStorage.removeItem("views");
    viewsCounter.innerText = 0;
});