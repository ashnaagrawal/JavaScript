// timestamps

const before = new Date('February 1 2020 7:30:59');
const now = new Date();

console.log(now.getTime(), before.getTime());


const dif = now.getTime() - before.getTime();
console.log(dif);

const mins = Math.round(dif/1000/60);
const Hours = Math.round(mins/60);
const Days = Math.round(Hours/24);
console.log(mins,Hours, Days);
console.log(`the blog was written ${Days} days ago`);


// converting timstamps into date objects
const timestamps = 167593847990;
console.log(new Date(timestamps));