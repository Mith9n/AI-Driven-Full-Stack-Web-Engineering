class BkashAccount {
    public Sim: string;
    private Balance: number;
    private Password: number;

    constructor(Sim: string, Balance: number, Password: number) {
        this.Sim = Sim;
        this.Balance = Balance;
        this.Password = Password;
    }

    checkBalance(Password: number) {
        if (this.Password === Password) {
            return this.Balance;
        } else {
            return "Password Invalid";
        }
    }
}

const User_01 = new BkashAccount("Robi", 50000, 211574);

console.log(User_01);
console.log(User_01.checkBalance(211574));
