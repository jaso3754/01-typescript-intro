
export interface Passenger {
    name: string;
    children?:string[];
} 

const passenger1: Passenger = {
    name: 'Jheison',
}
const passenger2: Passenger = {
    name: 'Camilo',
    children: ['Natalia', 'Elizabeth'],
}

const returnChildrenNumber = (passenger: Passenger): number => { 
    
    // if ( !passenger.children ) return 0;

    // const howManyChildren = passenger.children?.length || 0;
    const howManyChildren = passenger.children?.length || 0;
    
    console.log(passenger.name, howManyChildren);
    
    return howManyChildren;
}

returnChildrenNumber (passenger1);
