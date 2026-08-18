class Animal{
    private name: string;

    constructor(name: string){
        this.name = name;
    }


    makeSound(): void{
        console.log("Animal sound");
    }
}

class dog extends Animal{
    constructor(name: string){
        super(name);
    }

    makeSound(): void{
        console.log("Dog barks");
    }
}

class cat extends Animal{
    constructor(name: string){
        super(name);
    }

    makeSound(): void{
        console.log("Cat meowwwwww!!");
    }
}

const dog1 = new dog("Tommy");
dog1.makeSound(); // Output: Dog barks

const cat1 = new cat("Whiskers");
cat1.makeSound(); // Output: Cat meowwwwww!!