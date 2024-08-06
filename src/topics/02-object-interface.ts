
const skills: string[] = ['bash', 'counter','healing'];

interface character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: character = {
    name:'Strider',
    hp: 100,
    skills: ['bash', 'Counter'],
    
}

strider.hometown = 'Riverdell';

console.table(strider)
export {};