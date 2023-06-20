// Modals de Donación

const dialog = document.getElementById("formulario")

function mostrarLoginDialog(){
    dialog.showModal()
}

function cerrarLoginDialog(){
    dialog.close()
}

// Header Responsive
function openNav() {
    document.getElementById("sidenav").style.width = "50%";
}
function closeNav() {
    document.getElementById("sidenav").style.width = "0%";
}
