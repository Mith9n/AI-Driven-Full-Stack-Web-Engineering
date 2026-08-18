class User {
    name: string;
    private _age: number;
    private _phone_number: string;
    private _email: string;

    constructor(
        name: string,
        age: number,
        phone_number: string,
        email: string
    ) {
        this.name = name;
        this._age = age;
        this._phone_number = phone_number;
        this._email = email;
    }

    get age() {
        return this._age;
    }

    set age(age: number) {
        if (age < 22 || age > 100) {
            throw new Error("Age is not valid!");
        }

        this._age = age;
    }
}

const Marufa = new User(
    "Maruf",
    22,
    "012222229923",
    "Marufa@example.com"
);

Marufa.age = 25;

console.log(Marufa);
