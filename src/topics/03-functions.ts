

function 
addNumbers( a: number, b:number ) {
     return a + b;  
}

const addNumbersArrow = ( a:number, b:number ):string=> {
    return `${a + b}`;
}

function multiply (firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;

}

// const result: number = addNumbers(1, 2)
// const result2: string = addNumbersArrow(1, 2)
// const multiplyResult: number = multiply(5);

// console.log({ result,result2, multiplyResult})

interface character {
    name:string;
    hp:number;
    showHp: () => void;
}


const healCharacter =(character: character, amout: number) => {

    character.hp += amout;
}

const straider: character = {
    name: 'Straider',
    hp: 50,
    showHp () {
        console.log ( `puntos de vida ${this.hp}`);
    }
}

healCharacter(straider, 10 ); 
healCharacter(straider, 30 ); 
straider.showHp();


export{};