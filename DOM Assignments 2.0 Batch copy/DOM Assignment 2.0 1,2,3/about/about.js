// 2.2 Assignement

// let x =document.querySelector(".accordian-wrapper");
// let div =document.createElement("div");
// div.setAttribute("class","accordian")
// let heading =document.createElement("h3");
// heading.innerText="Skills";
// let para = document.createElement("p");
// para.innerText="I process good command over Full Stack developement technologies like MERN which can seen in my work over Github ";
// x.append(div);
// div.append(heading);
// div.append(para);

let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

// 2.1 Assignement
// let setcolor=document.querySelectorAll('h3');
// console.log(setcolor);
// setcolor.forEach(element =>{
//   element.style.backgroundColor="#d6bcf5";
// })


