console.log('Hello World!');

let add = (a,b) => a+b;

console.log(add(10,23));


const student = {
    name:'Rohith',
    rollno:'1922',
    interest:'webdevelopment',
    greeting: ()=> {
        console.log('this is' + this.name);
    }
}

console.log(student);



