
class Account {
    constructor(id = 'A00010000') {
        this.id = id;
        console.log('account')
    }
    deposit() {
        return 1.5;
    }
}
class SavingsAccount extends Account {

    constructor(id) {
        super(id);//call base class constructor
        console.log('savings account')
    }
    //overriding 
    deposit() {
        console.log('overriden method')
        return 4.5 * super.deposit();
    }

}
let sb = new SavingsAccount('B00013444');
console.log(`Id ${sb.id}  ${sb.deposit()}`)