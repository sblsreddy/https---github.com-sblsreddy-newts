console.log('Hello Typescript Basic types');

// In typescript :string  or :number or :undefined  are called Type Annotation or Annotation 
const myName: string = 'Sridhar Reddy Sangala';

const id: number = 1233;
const pie: number = 3.1415;
const negative: number = -1123;

const yes: boolean = true;
const no: boolean = false;

const noDefinition:undefined = undefined;
const nothingHere: null = null;

const sentence = 'This is a typescript variable and every definition end withs semicolon';
sentence.includes('is');

// Type Interefernce
const add = (a : number, d: number): number => {
    return a + d ;
}


const joinStrings = (a:string, c:string) :string => {
        return a + c ;
}

function adds ( a:number, b:number) : number {
    return a + b ;
}

function joins ( x:string, y:string) : string {
    return x + y ;
}


// Creating objects  & it's interference to check all properties

const post : { title: string, daysOld: number, published: boolean} = {
    title : 'this is news paper',
    daysOld : 10,
    published : true
};

const postPrint = (postToPrint: {title: string, daysOld: number, published: boolean}) => {
    return `${postToPrint.title} (${postToPrint.daysOld} daysOld)`;
};