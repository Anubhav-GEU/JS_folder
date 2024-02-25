const clock = document.getElementById('clock');

// set interval --> koi method de do aur kitne sec baa rerun krna h vo bata do
setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000);