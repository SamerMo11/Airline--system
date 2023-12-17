let open = document.getElementById('open');
let close = document.getElementById('close');
let nav1 = document.getElementById('nav');

open.addEventListener('click', function(){
    this.style.display='none';
    close.style.display='block';
    nav1.style.opacity='1';
})
close.addEventListener('click', function(){
    this.style.display='none';
    open.style.display='block';
    nav1.style.opacity='0';
})



let moonn = document.getElementById('moon');
let sunn = document.getElementById('sun');

moonn.addEventListener('click', function(){

    document.body.classList.remove('light');
    document.body.style.background=' #000000e3';
    this.style.display='none';
    sunn.style.display='block';

})

sunn.addEventListener('click', function(){

    document.body.classList.add('light');
    document.body.style.background=' #e2e4e7';

    this.style.display='none';
    moonn.style.display='block';
})




// -------------------------------------------------------------------

// let toggle = document.querySelector('.toggle');
// let nav = document.querySelector('.nav');

// function togglemenu(){
//     toggle.classList.toggle('active');
//     nav.classList.toggle('active');
// }

// ----------------------------------------------------------------
// let moonn = document.getElementById('moon');
// let sunn = document.getElementById('sun');

//     moonn.addEventListener('click', function(){
//     document.body.classList.add('light');
//     document.body.style.background=' #000000e3';
//     this.style.display='none';
//     sunn.style.display='block';
// })

// sunn.addEventListener('click', function(){
//     document.body.classList.remove('light');
//     document.body.style.background=' #e2e4e7';
//     this.style.display='none';
//     moonn.style.display='block';
// })
// -------------------------------------------------------------

// let projectbtn1 = document.getElementById('projectbtn1');
// let projectbtn2 = document.getElementById('projectbtn2');
// let projectbtn3 = document.getElementById('projectbtn3');

// let tickeet = document.querySelectorAll('#ticket');
// let fform = document.getElementById('wrapper');
// let ssend = document.getElementById('send');
// let all11 = document.getElementById('all1')
// let all22 = document.getElementById('all2')
// let all33 = document.getElementById('all3')

// tickeet.forEach((e) => {
//     e.addEventListener('click',()=>{
//         e.classList.add("active")
//         document.querySelector(".heads h3 span").innerText = +document.querySelector(".heads h3 span").innerText + 30;
//         console.log(e)
//         e.style.background='var(--secondary-color)';
//         e.style.color='var(--primary-color)';
//         fform.style.visibility = 'unset';
//     fform.style.transition = '2';
        
//     })
// });

// ssend.addEventListener('click',function(){
//     let tickets = document.querySelectorAll(".active")
//     tickets.forEach((e) => {
//         e.style.backgroundColor = "red"
//     })
// })

// tickeet.addEventListener('click',function(){
    
// })
// tickeet.addEventListener('click',function(){
//     this.style.background='var(--secondary-color)';
//     this.style.color='var(--primary-color)';
    
// })
projectbtn1.addEventListener('click',function(){      
    projectbtn1.style.boxShadow='0 0 50px var(--standard-color) ';
    projectbtn1.style.color= 'var(--standard-color)';
    projectbtn2.style.boxShadow='0 0 0px var(--premium-color) ';
    projectbtn2.style.color= 'var(--secondary-color)';
    projectbtn3.style.boxShadow='0 0 0px var(--vip-color)';
    projectbtn3.style.color= 'var(--secondary-color)';
    all11.style.display='flex';
    all22.style.display='none';
    all33.style.display='none';
})
projectbtn2.addEventListener('click',function(){      
    projectbtn1.style.boxShadow='0 0 0px var(--standard-color) ';
    projectbtn1.style.color= 'var(--secondary-color)';
    projectbtn2.style.boxShadow='0 0 50px var(--premium-color) ';
    projectbtn2.style.color= 'var(--premium-color)';
    projectbtn3.style.boxShadow='0 0 0px var(--vip-color)';
    projectbtn3.style.color= 'var(--secondary-color)';
    all11.style.display='none';
    all22.style.display='flex';
    all33.style.display='none';
})
projectbtn3.addEventListener('click',function(){      
    projectbtn1.style.boxShadow='0 0 0px var(--standard-color) ';
    projectbtn1.style.color= 'var(--secondary-color)';
    projectbtn2.style.boxShadow='0 0 0px var(--premium-color) ';
    projectbtn2.style.color= 'var(--secondary-color)';
    projectbtn3.style.boxShadow='0 0 50px var(--vip-color)';
    projectbtn3.style.color= 'var(--vip-color)';
    all11.style.display='none';
    all22.style.display='none';
    all33.style.display='flex';
})




// ------------------------------------------------------





// ------------------------------------------------------

// ------------------------------------------------------

// ------------------------------------------
// let arr = document.getElementById('arrow');

// window.onscroll = function(){
//     if(scrollY >= 660)
//     {
//         arr.style.display ='block';
//     }else{
//         arr.style.display ='none';
//     }
// }
// ------------------------------------------



// ------------------------------------------
