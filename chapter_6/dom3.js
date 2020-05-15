const link = document.querySelector('a');

console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.thenetninja.com');
link.innerText = 'thenet ninja decode UK' ;

const msg = document.querySelector('p');

console.log(msg.getAttribute('class'));

msg.setAttribute('class', 'success');
msg.setAttribute('style' , 'color:green');
