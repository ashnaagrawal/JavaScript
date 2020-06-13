class User{
    constructor(username,email){
        // set up properties on object
        //this.username = 'mario';
        this.username = username;
        this.email = email;
    }

}

const userOne = new User('mario','mario@theninja.co.uk');
const userTwo = new User('luigi','luigi@theninja.co.uk');
console.log(userOne, userTwo);