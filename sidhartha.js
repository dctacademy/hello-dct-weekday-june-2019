class Person extends React.Component{
    constructor(name,email){
    this.name=name,
    this.email=email
    }
    details(){
        console.log(this.name+' '+this.email);
        
    }
}

const p1=new Person('sidhartha','sid@gmail.com')
console.log(p1.details());
