var login = document.getElementById("login");

login.addEventListener("click", function() {
    this.innerHTML = "Cerrar Sesión";
})

var agregar = document.getElementById("agregar");

agregar.addEventListener("click", function() {
    this.hidden = true;
})

var carbonara = document.getElementById("carbonara");
var hawaiana = document.getElementById("hawaiana");

var car = 0,haw = 0;

carbonara.addEventListener("click", function() {
    alert('¡Se ha marcado un "me gusta" en Pizza Carbonara!');
    car++;
    this.innerHTML = car + " me gusta";
})

hawaiana.addEventListener("click", function() {
    alert('¡Se ha marcado un "me gusta" en Pizza Hawaiana!');
    haw++;
    this.innerHTML = haw + " me gusta";
})