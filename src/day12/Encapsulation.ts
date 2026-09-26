// Encapsulation:- Hiding Data/variables + Controlling access to data(via functions).


class BankAccount {
    
    account_balance:number=10000;


}


let bank_account1 = new BankAccount();
console.log(bank_account1.account_balance);

bank_account1.account_balance=500;