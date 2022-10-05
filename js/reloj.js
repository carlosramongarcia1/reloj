function reloj() {
  var fecha = new Date();
  (horas = fecha.getHours()),
    (minutos = fecha.getMinutes()),
    (segundos = fecha.getSeconds()),
    (diaSemana = fecha.getDate()),
    (dia = fecha.getDay()),
    (mes = fecha.getMonth()),
    (year = fecha.getFullYear());
  // document.getElementById("Calendario").textContent = fecha;

  año = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre"];
  const estaciones = año[mes]; 
  semana = ["","Lunes","Martes","Miercoles","jueves","Viernes","Sabado","Domingo"];
    const element = semana[dia];

    document.getElementById("Fecha").textContent = "Hoy es: " + element + " " + diaSemana + " De: " + estaciones + " Del: " +year; 

    if (horas >= 12) {
      let nhoras = horas - 12;
      document.getElementById("Horas").textContent = "Son las " + nhoras + ":" + minutos + ":" + segundos + " pm";
    }
    else if(horas == 0) {
      horas = 12;
      document.getElementById("Horas").textContent = "Son las " + horas + ":" + minutos + ":" + segundos + " am";
    }else{
      document.getElementById("Horas").textContent = "Son las " + horas + ":" + minutos + ":" + segundos + " am";
    }

  var intervalo = setTimeout(reloj, 1000);
}
