// constructoe functions

function User(username,email){
    this.username = username;
    this.email = email;
    this.login = function(){
        console.log(`${this.username} has logged in`);
    };
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
userTwo.login();