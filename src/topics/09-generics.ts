export function whatsMytype<T>( argumment: T): T {


    return argumment;
}



let amIstring = whatsMytype<string>('hola mundo');
let amINumber = whatsMytype<number>(100);
let amIArray = whatsMytype<number[]>([1,2,3,4,5]);

console.log(amIstring.split(' ') );
console.log(amINumber.toFixed() );
console.log(amIArray.join('-') );