const btn = document.getElementById("boton");
btn.addEventListener('click', function () {
    let diasTrabajados = parseInt(prompt("¿Cuantos días de trabajo son?"))
    let pagoDia = parseInt(prompt("¿Cuanto es el pago?"));
    let resultado = 0;
    let saldoTotal = 0;

    const salario = document.getElementById("salarioCalcular");
    const dias = document.getElementById("diasTrabajados");

    if (diasTrabajados > 15) {
        resultado = pagoDia * diasTrabajados;
        saldoTotal = resultado
        dias.innerHTML = "<p class='btn btn-lg btn-warning m-3'>Días de Trabajo: " + diasTrabajados + "</p>";
        salario.innerHTML = "<p class='btn btn-lg btn-warning m-3'>Salario Básico es de: " + saldoTotal + " soles</p>";
    } else {
        saldoTotal = pagoDia * diasTrabajados;
        dias.innerHTML = "<p class='btn btn-lg btn-warning m-3'>Días de Trabajo: " + diasTrabajados + "</p>";
        salario.innerHTML = "<p class='btn btn-lg btn-warning m-3'>Salario Básico es de: " + saldoTotal + " soles</p>";
    }

});