# 28th-Jan-JavaScript2.0-DOM-Assignment-
Assignment Answers

Assignment 1.1

  let selectnav = document.querySelector('ul');
  
  let addnav =document.createElement('li').innerText="Hire Me";
  
  selectnav.append(addnav)
  
Assignment 1.2

  document.querySelector('.search-field').firstChild.nextSibling.setAttribute("placeholder", "search My Project")
  
Assignment 1.3

  document.querySelectorAll('span')[3].innerText="iNeuron Intelligence Pvt Ltd."
  
Assignment 1.5

  let selectdiv =document.querySelector('.hero-right-section-btns');
  let addbtn =document.createElement("button");
  addbtn.innerText="Support Me"
  selectdiv.append(addbtn)

Assignment 2.1

  let setcolor=document.querySelectorAll('h3');
  
  setcolor.forEach(element =>{element.style.backgroundColor="#d6bcf5";})
  
Assignment 2.2

  let x =document.querySelector(".accordian-wrapper");
  
  let div =document.createElement("div");
  
  div.setAttribute("class","accordian")
  
  let heading =document.createElement("h3");
  
  heading.innerText="Skills";
  
  let para = document.createElement("p");
  
  para.innerText="I process good command over Full Stack developement technologies like MERN which can seen in my work over Github ";
  
  x.append(div);
  
  div.append(heading);
  
  div.append(para);
  
Assignment 3
  
  document.querySelector(".enterName").setAttribute("placeholder", "FAJS.2.0");
  
  document.querySelector(".enterMail").setAttribute("placeholder", "FAJS2@ineuron.ai");
  
  document.querySelector(".enterMessage").setAttribute("placeholder", "Hello World");
  
  document.querySelector(".userName").setAttribute("placeholder", "FAJS.2.0");
  
  document.querySelector(".userEmail").setAttribute("placeholder", "FAJS2@ineuron.ai");
  
  document.querySelector(".userMessage").setAttribute("placeholder", "Hello World");

  
Assignment 4
   
   let barbarian = document.querySelectorAll(".clash-card__unit-stats--barbarian");
   
    barbarian.forEach(event =>{event.style.backgroundColor="#ec9b3b"})
 
 letarcher = document.querySelectorAll(".clash-card__unit-stats--archer");
 
    archer.forEach(event =>{event.style.backgroundColor="#ee5487"})
 
 let giant = document.querySelectorAll(".clash-card__unit-stats--giant");
 
    giant.forEach(event =>{event.style.backgroundColor="#f6901a"})
 
 let wizard = document.querySelectorAll(".clash-card__unit-stats--wizard");
 
    wizard.forEach(event =>{event.style.backgroundColor="#4facff"})
 
 let goblin = document.querySelectorAll(".clash-card__unit-stats--goblin");
 
    goblin.forEach(event =>{event.style.backgroundColor="#82bb30"})
 
 let setcolor =document.querySelectorAll(".one-third");
 
    setcolor.forEach(event =>{event.style.color="white";})

Assignment 5
  
  const seclect_recipe_gallery = document.querySelector('.recipe-gallery');
  
  let x = document.createElement("div")
  
  x.classList.add("card")
  
  x.textContent="Add 6th card here"
  
  seclect_recipe_gallery.append(x)

Assignment 6.1
 
  const logo = document.querySelector('header').firstChild;
  
  logo.setAttribute("src","./assets/ineuron-logo.png");

Assignment 6.2
  
  const price = document.querySelector('span');
  
  price.innerText="$10";
  
Assignment 7.1
 
 let a1 = document.querySelectorAll("a");
 
 let select_div=document.querySelector("main__languages")
 
 let creat_div=document.createElement("div");
 
 a1.forEach(element => {if(element.innerText.includes(2.0)){
                          creat_div.append(element); }});
Assignment 7.2

  select_div.append(creat_div)
  
  document.querySelector("main__form-input").value= "Ineuron";
  
  let form = document.querySelector("main__form-btn");
  
  form.disabled = false;
  
  form.submit()


Assignment 8

  let sel_nav =document.querySelector(".navbar")
  
  let nav_item =document.querySelector(".list-btn")
  
  let sel_but=document.querySelector(".navbar-toggler")
  
  sel_but.addEventListener("click", function(){
  
        sel_nav.append(nav_item)
    });
   
   document.querySelector("col-lg-4").style.overflow = "scroll";
   
Assignment 9
  
  const title =document.querySelector('h1').style.color='red'
  
  const addcard =document.querySelector('.add-to-cart').style.backgroundColor='red'



  
  
