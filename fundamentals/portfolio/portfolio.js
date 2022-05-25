
let sections = ["about", "skills", "portfolio", "contact"]

function nav_bar_action(section){
  for (let i = 0; i < sections.length; i++){
      if (sections[i] != section) {
        document.getElementById(sections[i]  + "_section").style.display = "none";
        document.getElementById(sections[i]  + "_button").classList.remove("active");
      }
      else {
        document.getElementById(sections[i]  + "_section").style.display = "block";
        document.getElementById(sections[i]  + "_button").classList.add("active");
      }
  }
}
document.getElementById("about_button").onclick = function(){
  nav_bar_action("about")
};

document.getElementById("skills_button").onclick = function(){
  nav_bar_action("skills")
};

document.getElementById("portfolio_button").onclick = function(){
  nav_bar_action("portfolio")
};

document.getElementById("contact_button").onclick = function(){
  nav_bar_action("contact")
};