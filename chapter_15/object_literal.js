const userOne = {
    username: 'ryu',
    email:'ryu@theninja.co.uk',
    login(){
        console.log('user logged in');
    },
    logout(){
        console.log('user logged out');
    }
};


console.log(userOne.email,userOne.username);
userOne.login();
userOne.logout();

const userTwo = {
    username: 'chun-li',
    email:'chun.li@theninja.co.uk',
    login(){
        console.log('user logged in');
    },
    logout(){
        console.log('user logged out');
    }
};
console.log(userTwo.email,userTwo.username);
userOne.login();
userOne.logout();
