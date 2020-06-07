// fetch api

fetch('chrome.desktopCapture').then((response) =>{
    console.log('resolve',response);
}).catch((err) =>{
    console.log('rejected',err);
});