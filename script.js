let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};





let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll =()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top<offset+height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+ ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('.header');
header.classList.toggle('sticky', window.scrollY > 100);
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};



const toggleIcon = document.querySelector('.toggle-icon');
const skill_1 = document.querySelector('.skill-box1');
 const skill_2 = document.querySelector('.skill-box2');


toggleIcon.addEventListener('click', ()=>{
    toggleIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
   
    skill_1.setAttribute("class",'dark-mode-skills');
    skill_2.setAttribute("class",'dark-mode-skills');
});

//  function change(){
//     if (skill_1.getAttribute==dark-mode-skills) {
//         skill_1.setAttribute("class", 'root')
//     } else {
        
//     }
//  }



// const home = document.getElementById("home")
// location.reload(home)
// let darkModeIcon = document.querySelector('#darkMode-icon');
// darkModeIcon.onclick = () =>{
//     darkModeIcon.classList.toggle('bx-sun');
//     document.body.classList.toggle('dark-mode');
// }