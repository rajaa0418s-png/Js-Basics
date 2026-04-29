const links=[['Home','index.html'],['About','about.html'],['Works','works.html'],['Expertise','expertise.html'],['Blog','blog.html'],['FAQ','faq.html'],['Contact','contact.html'],['Shop','shop.html'],['Privacy','privacy.html'],['Terms','terms.html']];
function nav(){return `<header><div class='container nav'><strong>NovaGrowth</strong><nav class='nav-links'>${links.map(([n,u])=>`<a href='${u}'>${n}</a>`).join('')}</nav><button id='theme' class='btn'>Theme</button></div></header>`}
function footer(){return `<footer><div class='container'>© 2026 NovaGrowth • AI-powered digital growth systems.</div></footer>`}
document.querySelector('[data-nav]')?.insertAdjacentHTML('afterbegin',nav());
document.querySelector('[data-footer]')?.insertAdjacentHTML('beforeend',footer());
document.addEventListener('click',e=>{if(e.target.id==='theme'){document.documentElement.classList.toggle('light');localStorage.setItem('light',document.documentElement.classList.contains('light')?'1':'0')}});
if(localStorage.getItem('light')==='1') document.documentElement.classList.add('light');
if(window.gsap){gsap.registerPlugin(ScrollTrigger);gsap.utils.toArray('section,.card,.case').forEach(el=>gsap.from(el,{opacity:0,y:24,duration:.6,scrollTrigger:{trigger:el,start:'top 85%'}}))}
const pop=document.getElementById('exitPopup');let shown=false;document.addEventListener('mouseout',e=>{if(!shown&&e.clientY<10&&pop){pop.showModal();shown=true}});
