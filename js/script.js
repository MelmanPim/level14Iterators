var startWhile = 0;

const colors = ['yellow', 'blue', 'red', 'orange'];

while (startWhile < colors.length) {
    console.log('The color is ' + colors[startWhile]);
    startWhile++;
}

document.write('All the colors are printed');



const colorsFor = ['yellow', 'blue', 'red', 'orange'];

for (i = 0; i < colorsFor.length; i++) {
    console.log('The color is ' + colorsFor[i])
};

document.write('All the colors are printed');



const colorsArray = ['yellow', 'blue', 'red', 'orange'];

colorsArray.forEach(element => console.log(element));

/* 
For loop neemt minimaal 1 regel in beslag.  
While loop neemt er minimaal 3 regels in beslag
forEach neemt er 1 in beslag

Bij een for en while loop werk je met een 'bedacht' nummer zoals i. 
Een forEach laat dit weg en zorg voor een beter overzicht.
*/

const object = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
};

for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}

document.write('het is klaar');

/*
Je bent wel aan het itereren maar dit kan enkel gebruikt worden bij objects met properties, niet voor array's.
*/

