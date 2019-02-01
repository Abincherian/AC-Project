let person = {
    name:'abin',
    age:30,
    sayHi (){
        return (`hello,my name is ${this.name}`)
    }
}
console.log(person['name'])
person.favouritesongs = [`Numb`,`In the end`,`Crawling`];
console.log(person.favouritesongs[2])
console.log(person.sayHi())