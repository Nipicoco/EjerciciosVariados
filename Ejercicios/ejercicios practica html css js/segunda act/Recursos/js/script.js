

//Abrir dropdown boton
function myFunction() {
  document.getElementById("lentejas1").classList.toggle("show");
  
}

// Cerrar el dropdown si el usuario apreta afuera
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-contenido");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

//Funcion abrir otra ventana en el dropdown
function openTab() {
  window.open(
    "https://open.spotify.com/playlist/7222D8ZFPwhIqOMHZYrxVW?si=623a9bf017694df5", "_blank");
}
function openTab1() {
  window.open(
    "https://instagram.com/Nipicoco", "_blank");
}
function openTab2() {
  window.open(
    "https://www.youtube.com/watch?v=exWMhp1xgog", "_blank");
}


//Funcion sacada de stackoverflow, no tenia idea de como hacerlo.
function sumar(){
    var total = 0;
    var input = document.getElementsByClassName("numeros");
    for (var i = 0; i < input.length; i++) {
        var a = input[i].value;
        total = Number(total) + Number(a);
        if(isNaN(Number(a))){
            alert("Ingresar SOLAMENTE numeros");
            break;
        }
    }
    document.getElementById("sumar").innerHTML = total;
}


function crear() {
    // crear un elemento DIV
	var nuevaInput = document.createElement('div');

    // agregar contenido con clase 
	nuevaInput.innerHTML = "<input type='text' class='numeros' placeholder='Nuevo numero'>";

    // agregar la caja de contenido donde deberia estar
  document.getElementById("nuevoinput").appendChild(nuevaInput);
  

}


function mouseOver(hover1) {hover1.style.color = "red"}
function mouseOut(hover1) {hover1.style.color = "black"}
