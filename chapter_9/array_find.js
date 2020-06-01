const scores = [10, 5, 0, 30, 30, 10, 90, 70];

const firstHighScore = scores.find((score)=>{
    return score>50 ;
});
console.log(firstHighScore);