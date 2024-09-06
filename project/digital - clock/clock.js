



setInterval(() =>{
    const date = new Date();
    const htime = date.getHours();
    const mtime = date.getMinutes();
    const stime = date.getSeconds();
    
     const hrotation = 30 * htime + mtime/2;
     const mrotation =  6 * mtime;
     const srotation = 6 * stime;
     
    document.querySelector('#hour').style.transform = `rotate(${hrotation}deg)`
    document.querySelector('#minute').style.transform = `rotate(${mrotation}deg)`
    document.querySelector('#second').style.transform = `rotate(${srotation}deg)`


    


},1000)












// setInterval(() => {
//     const d = new Date();
//     const htime = d.getHours();   // Corrected: getHours() is a function
//     const mtime = d.getMinutes(); // Corrected: getMinutes() is a function
//     const stime = d.getSeconds(); // Corrected: getSeconds() is a function

//     const hrotation = 30 * htime + mtime / 2; // Each hour is 30 degrees, with 0.5 degrees per minute
//     const mrotation = 6 * mtime;             // Each minute is 6 degrees
//     const srotation = 6 * stime;             // Each second is 6 degrees

//     document.getElementById('hour').style.transform = `rotate(${hrotation}deg)`;   // Added 'deg' and getElementById
//     document.getElementById('minute').style.transform = `rotate(${mrotation}deg)`; // Added 'deg' and getElementById
//     document.getElementById('second').style.transform = `rotate(${srotation}deg)`; // Added 'deg' and getElementById
// }, 1000);
