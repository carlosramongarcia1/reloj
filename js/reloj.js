function reloj(){
    var fecha  = new Date();
    horas = fecha.getHours(),
    minutos= fecha.getMinutes(),
    segundos= fecha.getSeconds(),
    diaSemana= fecha.getDate(),
    dia= fecha.getDay(),
    mes = fecha.getMonth(),
    year= fecha.getFullYear();
    console.log("cargando reloj " +fecha);
    document.getElementById('fecha').textContent=segundos;

    var intervalo =setTimeout(reloj,1000);
    //
}