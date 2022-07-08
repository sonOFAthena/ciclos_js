/**
 * Fulanito tiene una pagina de internet y quiere limitar los ingresos de contraseñas a solo 4 intentos,
 * sí pasados los 5 intentos no consigue tener acceso entonces la plataforma se bloquea por 30 segundos.
 * 
 * Fulanito piensa que asi su página sera muchisimo más segura.
 */


const correctPassword = "fulanito1992";
const password = ["123456", "contraseña", "000000", "master", "nosemeolvidalapass","fulanito1992" ];
const reset = 4;
let counter = 1;

while (true) {
  if (password[counter] == correctPassword) {
    console.log("Welcome back Fulanito ");
    break;
  } else {
    console.log("left " + (reset - counter) + " tries to put password");
  }
  counter++;
  console.log(counter);

  if (counter == (reset)) {
    console.log("i entered");
    
    //bloquear el programa por 5 segundos evitando la asyncronia de js
    if (password[counter] == undefined) {
      counter = 0;
    }
  }
}

//Para este caso no se puede usar for porque no sabemos cuantas veces el usuario va a fallar la contraseña.