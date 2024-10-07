/*****************************
 * CODING CHALLENGE 2
 */

/*
John et Mike jouent tous les deux au basket dans différentes équipes.
Lors des trois derniers jeux, l'équipe de John a marqué 89, 120 et 103 points,
alors que l'équipe de Mike a marqué 116, 94 et 123 points.

1. Calculez le score moyen de chaque équipe.
2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
   et imprimez l'équipe gagnante dans la console avec son score moyen.
3. Changez ensuite les scores pour montrer différents gagnants.
   N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen).
4. BONUS : Mary joue aussi au basket, et son équipe a marqué 97, 134 et 105 points.
   Comme avant, imprimez le gagnant en moyenne dans la console.
   INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision.
5. Changez là aussi les scores pour générer différents gagnants,
   en gardant toujours en tête qu'il pourrait y avoir des ex æquos.

BONNE CHANCE 😀
*/

// sans bonus

// 1. Calculez le score moyen de chaque équipe.
// 2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
//    et imprimez l'équipe gagnante dans la console avec son score moyen.
// 3. Changez ensuite les scores pour montrer différents gagnants.
//    N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen).
// avec bonus

// 4. BONUS : Mary joue aussi au basket, et son équipe a marqué 97, 134 et 105 points.
//    Comme avant, imprimez le gagnant en moyenne dans la console.
//    INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision.
// 5. Changez là aussi les scores pour générer différents gagnants,
//    en gardant toujours en tête qu'il pourrait y avoir des ex æquos.


const scoreJohn = (89, 120, 103);
const scoreMike = (116, 94, 123);
const scoreMary = (97, 134, 105);

const moyenneJohn = (scoreJohn + scoreJohn + scoreJohn) / 3;
const moyenneMike = (scoreMike + scoreMike + scoreMike) / 3;
const moyenneMary = (scoreMary +scoreMary + scoreMary) / 3;

/* if (moyenneJohn > moyenneMike){
    console.log(`l'équipe de John gagne avec une moyenne de ${moyenneJohn}`);
}else if (moyenneMike > moyenneJohn){
    console.log(`l'équipe de Mike gagne avec une moyenne de ${moyenneMike}`);
}else {
    console.log(`les deux équipes sont à égalité`);
}
*/

if (moyenneJohn > moyenneMike && moyenneJohn > moyenneMary){
    console.log(`l'équipe de John gagne avec une moyenne de ${moyenneJohn}`)
}else if (moyenneMike > moyenneJohn && moyenneMike > moyenneMary ){
    console.log(`l'équipe de Mike gagne avec une moyenne de ${moyenneMike}`)
}else if (moyenneMary > moyenneMike && moyenneMary > moyenneJohn){
    console.log(`l'équipe de Mary gagne avec une moyenne de ${moyenneMary}`)
}else {
    console.log(`il y a ex æquo entre les 3 équipes : John: ${moyenneJohn} - Mike: ${moyenneMike} - Mary: ${moyenneMary}`)
}