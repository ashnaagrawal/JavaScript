// constructoe functions

function User(username,email){
    this.username = username;
    this.email = email;
}


User.prototype.login = function(){
    console.log(`${this.username} has logged in`)
    return this;
};

User.prototype.logout = function(){
    console.log(`${this.username} has logged out`)
    return this;
}

// class User{
//     constructor(username, email){
//         // set up properties
//         this.username = username;
//         this.email = email;
//     }
// }

const userOne = new User('mario','mario@theninja.co.uk');
const userTwo = new User('luigi','luigi@thenetninja.co.uk');

console.log(userOne,userTwo)
userOne.login().logout();