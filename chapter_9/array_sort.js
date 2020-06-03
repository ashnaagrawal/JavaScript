const names = ['mario', 'shaun', 'chun-li','yoshi','luigi'];

// names.sort()
// names.reverse();
// console.log(names);

const scores = [10,50,20,5,35,70,45];
// scores.reverse()
// console.log(scores)
// scores.sort((a,b) => {
//     return (b-a);
// })
// console.log(scores);

scores.sort((a,b) => {
    return (a-b);
})
console.log(scores);

const players = [
    {name: 'mario', score:20},
    {name: 'luigi', score:10},
    {name: 'chun-li', score:50},
    {name: 'yoshi', score:30},
    {name: 'shaun', score:70},
];

// players.sort((a,b) => {
//     if(a.score > b.score){
//         return -1;
//     }else if(b.score > a.score){
//         return 1;
//     } else {
//         return 0;
//     }
// });

// sorting from highest to lowest score 

// players.sort((a,b) => {
//     return (b.score - a.score);
// });


//sorting from lowest to highest score
players.sort((a,b) => {
    return (a.score - b.score);
});
console.log(players);