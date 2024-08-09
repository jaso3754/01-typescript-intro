

export class Person {
    // public name: string;
    // private address: string;

    constructor(
        public firtsName: string,
        public lastName: string,
        private address: string = 'No address'
    ) {}
}

// export class Heroe extends Person {



//     constructor (
//         public alterEgo: string,
//         public age: number,
//         realName: string,

//     ){
//         super(realName, 'New york')
//     }
// }


export class Heroe  {
    // public person: Person


    constructor (
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ){
        this.person = new Person (realName);
    }
}

const tony = new Person ('Tony','Stark','New york');

const ironman = new Heroe('Ironman', 45, 'Tony', tony);

console.log(ironman);