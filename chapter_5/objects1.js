// object Literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'ashnaagrawal311@gmail.com',
    location: 'India',
    blogs: ['why mac & cheese rules', '10 things to make with mariote'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function(){
        //console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    } 

};

console.log(this);
user.login();
user.logout();
user.logBlogs();

const name ='mario';
let na=name.toUpperCase();
console.log(na);