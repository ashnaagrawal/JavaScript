//const para = document.querySelector('p');

//console.log(para.innerText);
//para.innerText += 'heyyy...again here!!!';


//const paras = document.querySelectorAll('p');

//paras.forEach(para => {
   // console.log(para.innerText);
    //para.innerText += 'new text';
//});

//console.log(para);

const content = document.querySelector('.content');

//console.log(content.innerHTML);
//content.innerHTML = '<h1> THIS IS A NEW H1 TAG </H1>';

const people = ['mario','luigi',' yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;

});