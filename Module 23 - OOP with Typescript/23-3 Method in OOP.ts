class Students {
    name : string;
    roll : number;
    marks :{
        subject1: number;
        subject2: number;
        subject3: number;
    };
    age : number;
    department : string;

    constructor(name:string , roll:number , age:number , department:string){
        this.name = name;
        this.roll = roll;
        this.age = age;
        this.department = department;
    }

    getStudentInfo(): string {
        return `Name: ${this.name}, Roll: ${this.roll}, Age: ${this.age}, Department: ${this.department}`;
    }
    calculateAverageMarks(): number {
        const totalMarks = this.marks.subject1 + this.marks.subject2 + this.marks.subject3;
        return totalMarks / 3;
    }

}

const student_01 = new Students("Maruf", 19, 21, "CSE");
student_01.marks = {
    subject1: 85,
    subject2: 90,
    subject3: 88
};

console.log(student_01.getStudentInfo());
console.log(`Maruf's Average Marks: ${parseInt(student_01.calculateAverageMarks().toString())}`);




class coffee_shope {
    shope_name : string;
    shope_location : string;
    shope_owner : string;
    shope_menu : string[] = [];

    constructor(shope_name:string , shope_location:string , shope_owner:string){
        this.shope_name = shope_name;
        this.shope_location = shope_location;
        this.shope_owner = shope_owner;
    }

    selling_money(price:number , quantity:number): number {
        return price * quantity;
    }


}

const shope_01 = new coffee_shope("Coffee House", "Downtown", "John Doe");
shope_01.shope_menu = ["Espresso", "Cappuccino", "Latte"];
const totalSales = shope_01.selling_money(5, 3); // Example: Selling 3 cups of coffee at $5 each

console.log(`Shope Name: ${shope_01.shope_name}, Location: ${shope_01.shope_location}, Owner: ${shope_01.shope_owner}`);
console.log(`Shope Menu: ${shope_01.shope_menu.join(", ")}`);
console.log(`Total Sales: $${totalSales}`);