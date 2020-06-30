
document.getElementById("palindromibtn").addEventListener("click", function () {

  //chiedere all'utente una parola
  //creare una funzione per capire se la parola è palindroma

  // var parola = prompt("dammi una parola");
  // var palindroma = "";
  //
  // for (var = i parola.lenght - 1;i >= 0 ; i--) {
  //   palindroma += parola[i];
  // }
  //
  // console.log(palindroma);
  //
  // if (palindroma == parola) {
  //   console.log("la parola è palindroma");
  //
  // } else {
  //   console.log("la parola non è palindroma");
  // }

  //variante

  // for (var i=0; i < parola.lenght ; i++) {
  //   palindroma = parola [i] + palindroma;
  // }
  //
  // console.log(palindroma);


  //lo rifaccio con le funzioni

  var parola = prompt("dammi una parola");
  var palindroma = "";


  if (isPalindroma(parola) == true){
    console.log("è palindroma");
  } else {
    console.log("non è palindroma");
  }


  //ci restituisce solo la parola al contrario
  function parolaInvertita(parola) {
    var invertita = "";
    for (var = i parola.lenght - 1;i >= 0 ; i--) {
      invertita += parola[i];
    }
    return invertita;
  }

  //check palindroma
  function isPalindroma(parola , invertita) {
    var invertita = parolaInvertita(parola)
  //la funzione chiama a sua volta l'altra funzione
  // do a is palindroma una parola, la inverto e poi la controllo
    if (invertita == parola) {
      // console.log("la parola è palindroma");
    return true;
    } else {
      console.log("la parola non è palindroma");
    }
  }


}):
