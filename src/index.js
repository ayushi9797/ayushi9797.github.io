// ================================== colour change ====================================================================

const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light";
  }
});

let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Please come back :'(";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});
// ======================================== About ======================================================================
let i = 0;
let txt = "FULL STACK WEB Developer.";
let speed = 85;

typeWriter();

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("user-detail-name").style.color = "white";
    document.getElementById("demo1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    // reset the index when it reaches the end of the text
    i = 0;
    // clear the text
    document.getElementById("demo1").innerHTML = "";
    // make the recursive call
    document.getElementById("user-detail-name").style.color = "#71e281";
    setTimeout(typeWriter, speed);
  }
}
// ===========================================================

var typed = new Typed(".typing-2", {
  strings: ["Full Stack Web Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// =================================== SKILLS =========================================================================

async function fetchData(type = "skills") {
  let response;
  type === "skills"
    ? (response = await fetch("skills.json"))
    : (response = await fetch("./projects/project.json"));
  const data = await response.json();
  return data;
}

function showSkills(skills) {
  let skillsContainer = document.getElementsByClassName("skills-card");
  let skillHTML = "";
  skills.forEach((skill) => {
    skillHTML += `
      <div class="bar">
            <div class="info">
              <img src=${skill.icon} alt="skill" class="skills-card-img"/>
              <span class="skills-card-name">${skill.name}</span>
            </div>
          </div>`;
  });
  skillsContainer.innerHTML = skillHTML;
}

fetchData().then((data) => {
  showSkills(data);
});
