class User {
    constructor(username, email){
        // set up properties
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login(){
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout(){
        console.log(`${this.username} just logged out`);
        return this;
    }
    incscore(){
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

const userOne = new User('mario', 'mario@theninja.co.uk');
const userTwo = new User('luigi', 'luigi@theninja.co.uk');


console.log(userOne,userTwo);
userOne.login().incscore().incscore().logout();