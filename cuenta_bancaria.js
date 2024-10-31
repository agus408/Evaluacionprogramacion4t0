let cuentaBancaria=4000;
document.getElementById("formularioDeExtraccion").addEventListener("submit", function(event) {
    event.preventDefault();

    let cantidad = document.getElementById ("cantidad").value;
    let mensaje = document.getElementById ("mensaje");
    let muestraDeSaldo= document.getElementById ("dinero");

    if (cantidad>cuentaBancaria) {
        mensaje.textContent =  "no tienes suficiente saldo para extraer esa cantidad";
        mensaje.style.color ="red";
    } else if (cantidad<=0){
        mensaje.textContent =  "porfavor ingresa una cantidad valida";
        mensaje.style.color ="red";
    } else {
        cuentaBancaria -= cantidad;
        muestraDeSaldo.textContent=cuentaBancaria;
        mensaje.textContent= "has extraido $"+cantidad;
        mensaje.style.color="green"
    }
})