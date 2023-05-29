//Header
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')

})

//Effects

let typed = new Typed('.auto-input',{
    strings:['Front-End Developer!', 'HTML', 'CSS', 'Javascript'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop:true,
})

let typed2 = new Typed('.auto-about',{
    strings:['Sobre mim', 'About me'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop:true,
})

let typed3 = new Typed('.auto-front',{
    strings:['Front-end', 'Dev'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop:true,
})

let typed4 = new Typed('.auto-skill',{
    strings:['Habilidades', 'Skills'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop:true,
})

let typed5 = new Typed('.auto-resume',{
    strings:['Resumo', 'Summary'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop:true,
})

let typed6 = new Typed('.auto-educ',{
    strings:['Educação', 'Education'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop:true,
})

let typed7 = new Typed('.auto-prof',{
    strings:['Experiência Profissional', 'Professional Experience'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop:true,
})

let typed8 = new Typed('.auto-port',{
    strings:['Portfólio', 'Portfolio'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop:true,
})

let typed9 = new Typed('.auto-cont',{
    strings:['Contato', 'Contact'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop:true,
})



let typed11 = new Typed('.auto-home',{
    strings:['Principal', 'Home'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop:true,
})

let typed12 = new Typed('.auto-about1',{
    strings:['Sobre mim', 'About me'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop:true,
})

let typed13 = new Typed('.auto-skills1',{
    strings:['Habilidades', 'Skills'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop:true,
})

let typed14 = new Typed('.auto-port1',{
    strings:['Portfólio', 'Portfolio'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop:true,
})

let typed15 = new Typed('.auto-cont2',{
    strings:['Contato', 'Contact'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop:true,
})

// Links

let navLinks = document.querySelectorAll('nav ul li a')

//Get Sections

let sections = document.querySelectorAll('section')

window.addEventListener('scroll', function(){
    const scrollPos = window.scrollY + 100 
    sections.forEach(section =>{
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link =>{
                            link.classList.remove('active');
                            if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                                link.classList.add('active')
                            }
                        });
        }
    })
})