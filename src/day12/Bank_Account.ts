

class ABC_Bank{

    private account_number:number=123456789;
    private account_balance:number=10000;
    private account_type:string="Saving";
    private account_holder_name:string="Abhigya Jha";
    private account_pin:number=1234;
    private account_contact_number:number=9876543210;

    //deposit money
    public depositMoney(account_number:number, account_pin:number, amount:number):void
    {
        if(account_number==this.account_number && account_pin==this.account_pin)
        {
            this.account_balance=this.account_balance+amount;
            console.log("Amount Deposited Successfully. New Balance: "+this.account_balance);
        }
        else
        {
            console.log("Invalid Account Number or Pin.");
        }

    }

    //withdraw money
    public withdrawMoney(account_number:number, account_pin:number, amount:number):void
    {
        if(account_number==this.account_number && account_pin==this.account_pin)
        {
            if(amount<=this.account_balance)
            {
                this.account_balance=this.account_balance-amount;
                console.log("Amount Withdrawn Successfully. New Balance: "+this.account_balance);
            }
            else
            {
                console.log("Insufficient Balance.");
            }
        }
        else
        {
            console.log("Invalid Account Number or Pin.");
        }   
    }


    //check balance
    public checkBalance(account_number:number, account_pin:number):void
    {
        if(account_number==this.account_number && account_pin==this.account_pin)
        {
            console.log("Account Balance: "+this.account_balance);
        }
        else
        {
            console.log("Invalid Account Number or Pin.");
        }   
    }


    //Update contact number
    public updateContactNumber(account_number:number, account_pin:number, new_contact_number:number, existing_contact_number:number):void
    {
        if(account_number==this.account_number && account_pin==this.account_pin && existing_contact_number==this.account_contact_number)
        {
            this.account_contact_number=new_contact_number;
            console.log("Contact Number Updated Successfully. New Contact Number: "+this.account_contact_number);
        }
        else
        {
            console.log("Invalid Account Number or Pin.");
        }   
    }


    //Update pin
    public updatePin(account_number:number, old_account_pin:number, new_account_pin:number):void
    {
        if(account_number==this.account_number && old_account_pin==this.account_pin)
        {
            this.account_pin=new_account_pin;
            console.log("Pin Updated Successfully. New Pin: "+this.account_pin);
        }
        else
        {
            console.log("Invalid Account Number or Pin.");
        }   
    }



}

let abc_bank_account1 = new ABC_Bank();
abc_bank_account1.checkBalance(123456789,1234);
abc_bank_account1.depositMoney(123456789,1235,5000);