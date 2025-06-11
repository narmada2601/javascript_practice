//  const fName="Narmada";
//  const Age=32;
//  export {fName,Age};
 //another way
//  export  const fName="narmada";//inline
//  export const age=30;
//export class 
export class person
{
    constructor(name)
    {
        this.name=name;
    }
    sayHello()
    {
        return `hello i am ${this.name}`;
    }
}
//named function
export const greet=(name) =>
`Hi,${name}`;