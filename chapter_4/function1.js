// arguements & parameters

const speak = function(name, time){
    console.log(`good ${time} ${name}`);
};

speak('mario', 'evening');

const sp = function(name = 'mario', time = 'night'){
    console.log(`good ${time} ${name}`);
};

sp();
