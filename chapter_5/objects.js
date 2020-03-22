// object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crstal@user.co.in',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite']
};

console.log(user);
console.log(user.name);
//user.age = 35;
console.log(user.age);

console.log(user['name']);
user['name'] = 'ashna'
console.log(user['name']);