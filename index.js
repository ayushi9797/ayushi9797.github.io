// const toggle = document.querySelector(".toggle");
// toggle.addEventListener("click", (e) => {
//   const html = document.querySelector("html");
//   if (html.classList.contains("dark")) {
//     html.classList.remove("dark");
//     e.target.innerHTML = "Dark";
//   } else {
//     html.classList.add("dark");
//     e.target.innerHTML = "Light";
//   }
// });
var myNav = document.getElementById('nav-menu');
var myNav2 = document.getElementById('main');
window.onscroll = function () { 
    if ( document.documentElement.scrollTop >= 15 ) {
        myNav.classList.add("nav-colored");
        myNav2.classList.add("nav-colored");
        // myNav.classList.remove("nav-transparent");
    } 
    else {
        // myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
        myNav2.classList.remove("nav-colored");
    }
};

async function fetchData(type = "skills") {
  let response
  type === "skills" ?
      response = await fetch("skills.json")
      : 
      response = await fetch("./projects/project.json")
  const data = await response.json();
  return data;
}

function showSkills(skills) {
  let skillsContainer = document.getElementById("row");
  let skillHTML = "";
  skills.forEach(skill => {
      skillHTML += `
      <div class="bar">
            <div class="info">
              <img src=${skill.icon} alt="skill" class="skills-card-img"/>
              <span class="skills-card-name">${skill.name}</span>
            </div>
          </div>`
  });
  skillsContainer.innerHTML = skillHTML;
}


fetchData().then(data => {
  showSkills(data);
});






document.getElementById("resume-button-1").onclick=()=>{
    window.location.assign("https://drive.google.com/file/d/1jzan2pIg7CBVGlm7XLy6kNtdvCfbGjUQ/view?usp=share_link", "_blank");
}

document.getElementById("resume-button-2").onclick=()=>{
   window.location.assign("https://drive.google.com/file/d/1jzan2pIg7CBVGlm7XLy6kNtdvCfbGjUQ/view?usp=share_link", "_blank");
}
   

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.display= "block";
}



let i=0;
let txt="Full Stack Web Developer.";
let speed=75;

typeWriter()

function typeWriter() {
    if(i < txt.length){
      document.getElementById("user-detail-name").style.color="red";
      document.getElementById("demo1").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    else {
     
      i = 0;
     
      document.getElementById("demo1").innerHTML = "";
      
      document.getElementById("user-detail-name").style.color="#71e281";
      setTimeout(typeWriter, speed);
    }
  }


 



