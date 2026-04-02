class person {
    name: string;

 constructor(name: string) {
    this.name=name;
 }
 greet() {
    console.log("Hi "+this.name);
 }
}
let p1 = new person("Archana");
p1.greet();
