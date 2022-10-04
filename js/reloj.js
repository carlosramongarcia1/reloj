function reloj() {
  var fecha = new Date();
  (horas = fecha.getHours()),
    (minutos = fecha.getMinutes()),
    (segundos = fecha.getSeconds()),
    (diaSemana = fecha.getDate()),
    (dia = fecha.getDay()),
    (mes = fecha.getMonth()),
    (year = fecha.getFullYear());
  console.log("cargando reloj " + fecha);

  document.getElementById("fecha").textContent = fecha;
  document.getElementById("Año").textContent = year;
  document.getElementById("Semana").textContent = "0"+diaSemana +" De";

  año = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre"];
  const estaciones = año[mes];
  document.getElementById("Mes").textContent = estaciones +" Del"; 

  semana = ["","Lunes","Martes","Miercoles","jueves","Viernes","Sabado","Domingo"];
    const element = semana[dia];
    document.getElementById("Dias").textContent = "Hoy es " +element;

    if (horas >= 12) {
      let nhoras = horas - 12;
      document.getElementById("Horas").textContent = "Son las " + nhoras + ":" + minutos + ":" + segundos + " pm";
    }
    if (horas == 0) {
      horas = 12;
      document.getElementById("Horas").textContent = "Son las " + horas + ":" + minutos + ":" + segundos + " am";
    }

  var intervalo = setTimeout(reloj, 1000);
}
