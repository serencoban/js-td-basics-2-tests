/*****************************
 * 15 - Logique booléenne
 */

// Préliminaires
/*
(source : https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript/3043921-ajoutez-des-conditions)
*/

// 15-1. - LES OPÉRATEURS LOGIQUES
// 1°) L'opérateur logique ET
// 1. Affichez dans la console le résultat de toutes les combinaisons possibles de true ET false
// 2. Avant de lancer votre navigateur et d'ouvrir la console, notez ici pour chaque ligne le résultat attendu dans un commentaire
console.log(true && false); // false
console.log(true && true); // true
console.log(false && true); // false
console.log(false && false); // false

// Une condition qui utilise l'opérateur logique ET
// 1. Demandez à l'utilisateur d'entrer un nombre et stockez-le dans une variable nombre
// 2. Testez si le nombre est dans l'intervalle [0, 100]. Autrement dit, testez si 0 <= nombre <= 100. Si c'est le cas, affichez "… est compris entre 0 et 100".
const nombreEt = parseFloat(prompt("Entrez un nombre"));
if (nombreEt >= 0 && nombreEt <= 100) {
    console.log(`${nombreEt} est entre 0 et 100`);
}else {
    console.log(`${nombreEt} n'est pas entre 0 et 100`)
}

// 2°) L'opérateur logique OU
// 1. Affichez dans la console le résultat de toutes les combinaisons possibles de true OU false
// 2. Avant de lancer votre navigateur et d'ouvrir la console, notez ici pour chaque ligne le résultat attendu dans un commentaire
console.log(true || false); //true
console.log(true || true); //true
console.log(false || true); //true
console.log(false || false); //false

// Une condition qui utilise l'opérateur logique OU
// 1. Demandez à l'utilisateur d'entrer un nombre et stockez-le dans une variable nombre
// 2. Testez si le nombre est en dehors de l'intervalle [0, 100]. Si c'est le cas, affichez "… est en dehors de l'intervalle [0, 100]".
const nombreOu = parseFloat(prompt("Entrez un nombre"));
if (nombreOu < 0 || nombreOu > 100){
    console.log(`${nombreOu} est en dehors de l'intervalle [0,100]`);
}else {
    console.log(`${nombreOu} est dans l'intervalle [0,100]`);
}
// 3°) L'opérateur logique NOT
// Affichez dans la console le résultat NOT true puis le résultat de NOT false
console.log(!true);
console.log(!false);
// Une condition qui utilise l'opérateur logique NOT
// 1. Demandez à l'utilisateur d'entrer un nombre et stockez-le dans une variable nombre
// 2. Si ce nombre n'est pas supérieur à 100, affichez "… est inférieur ou égal à 100".
const nombreNot = parseFloat(prompt("Entrez un nombre :"));
if (!(nombreNot > 100)){
    console.log(`${nombreNot} est inférieur ou égal à 100`)
}else {
    console.log(`${nombreNot} est supérieur à 100`)
}

// 15-2. - LES ALTERNATIVES MULTIPLES
// 1°) Imbriquer des conditions
// 1. Demandez à l'utilisateur d'entrer un nombre et stockez-le dans une variable nombre
// 2. Si ce nombre est positif, affichez "… est positif", sinon (c'est donc qu'il est négatif ou nul), vous allez faire un sous-test :
// 1°) s'il est négatif, affichez "… est négatif",
// 2°) sinon, affichez "… est nul"
const nombreAlt = parseFloat(prompt("Entrez un nombre :"));
if (nombreAlt > 0){
    console.log(`${nombreAlt} est positif`);
}else {
    if (nombreAlt < 0){
        console.log(`${nombreAlt} est négatif`);
    }else {
        console.log(`${nombreAlt} est nul`)
    }
}

// 2°) Autre écriture pour le même test : le if / elseif / else
// BUT : réaliser le même test que l'exercice précédent mais avec l'écriture if / elseif / else
// 1. Demandez à l'utilisateur d'entrer un nombre et stockez-le dans une variable nombre
// 2. Affichez "… est positif", "… est négatif" ou "… est nul" selon le cas
const nombreAutre = parseFloat(prompt("Entrez un nombre :"));
if (nombreAutre > 0){
    console.log(`${nombreAutre} est positif`);
}else if (nombreAutre < 0){
    console.log(`${nombreAutre} est négatif`);
}else {
    console.log(`${nombreAutre} est nul`)
}

// Une application
// 1. Stockez le prénom de la personne dans une variable firstName
// 2. Stockez son âge dans une variable age
// 3. a) Si la personne a moins de 13 ans, affichez le message "… est un petit garçon."
// b) Si elle a entre 13 et 20 ans, affichez "… est un adolescent."
// c) Si elle a entre 20 et 30 ans, affichez "… est un jeune homme."
// d) sinon, affichez "… est un homme."
const firstName = "Seren";
const age = 20;

if (age < 13){
    console.log(`${firstName} est une petite fille`);
}else if(age >= 13 && age <= 20){
    console.log(`${firstName} est une adolescente`)
}else if( age > 20 && age <= 30){
    console.log(`${firstName} est une jeune femme`)
}else {
    console.log(`${firstName} est une femme`)
}

// Autre application
// 1. Demandez à l'utilisateur d'entrer l'information
//  "Quel temps fait-il dehors ? Répondez par un des quatre mots suivants :
//  soleil, vent, pluie ou neige."
// 2. Stockez cette information dans une variable meteo
// 3. a) s'il fait soleil, affichez le message "Sortez en t-shirt."
// b) s'il y a du vent, affichez "Sortez en pull."
// c) s'il pleut, affichez "Sortez en blouson."
// d) s'il neige, affichez "Restez au chaud à la maison."
// e) dans tous les autres cas (si la personne n'a
const meteo = prompt("Quel temps fait-il dehors ? Répondez par un des quatre mots suivants : soleil, vent, pluie ou neige.");
if(meteo === "soleil"){
    console.log("Sortez en t-shirt.")
}else if(meteo ==="vent"){
    console.log("Sortez en pull.")
}else if(meteo ==="plui"){
    console.log("Sortez en blouson.")
}else if(meteo ==="neige"){
    console.log("Restez au chaud à la maison.")
}else {
    console.log("Vous n'avez pas entré le bon mot")
}