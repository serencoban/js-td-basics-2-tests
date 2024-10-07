// Seconde suivante

// Stockez dans trois variables l'heure actuelle, les minutes actuelles et les secondes actuelles.
// Incrémentez les secondes actuelles de 1 pour obtenir la seconde suivante.
//     Vérifiez si les secondes actuelles étaient égales à 59 (la dernière seconde de la minute).
// Si les secondes actuelles étaient égales à 59, réinitialisez les secondes à 0.
// Vérifiez si les minutes actuelles étaient égales à 59 (la dernière minute de l'heure).
// Si les minutes actuelles étaient égales à 59, réinitialisez les minutes à 0.
// Vérifiez si l'heure actuelle était égale à 23 (la dernière heure de la journée).
// Si l'heure actuelle était égale à 23, réinitialisez l'heure à 0 (minuit).
//     Sinon, incrémentez l'heure actuelle.
// Affichez la nouvelle heure, les minutes et les secondes dans la console.

let heure=23;
let minute=58;
let seconde=58;

seconde+=1;

if (seconde===59){
    seconde = 0;
    minute +=1;
}
if (minute===59){
    minute = 0;
    heure +=1;
}
if (heure===23){
    heure = 0;
}
else{
    heure +=1;
}
if(seconde > 59){
    seconde = seconde % 59;
}
if(minute > 59){
    minute = minute % 59;
}
if(heure > 24){
    heure = heure % 24;
}
console.log(`il est ${heure}:${minute}:${seconde}`)
