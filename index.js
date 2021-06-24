// function colorChange() {
//   let icon = document.getElementsByClassName("fab fa-html5");
//   console.log(icon);
//   icon.style.backgroundColor = "#c5247e";
// }
// icon.addEventListener("click", function ()) {
//     document.getElementsByClassName
// };
// event.target.style.color = "#c5247e"

// icon.addEventListener.target.style.color = "#c5247e"

// let icon=document.getElementsByClassName("far");

// $("button#jQueryColorChange" ).click(function() {
//     $(this).toggleClass( "selected" );
// });=""

// let htmlAndCss = document.query(".fab fa-html5");

// btnhtmlAndCss.addEvenListerner(
//   "click",
//   () => (btnhtmlAndCss.backgroundcolor = "#ffffff")
// );

// let icon = document.getElementsByClassName("fab");
// let icon1 = document.getElementsByClassName("far");

// icon.addEventListener("click", functionShowText);
// icon1.addEventListener("click", functionShowText);

// function functionShowText() {
//   let html = document.getElementsByClassName("skill-html");
//   let bootstrap = document.getElementsByClassName("skill-bootstrap");
//   let wireframe = document.getElementsByClassName("skill-wireframe");
//   let js = document.getElementsByClassName("skill-js");
//   let react = document.getElementsByClassName("skill-react");
//   let git = document.getElementsByClassName("skill-git");
//   let node = document.getElementsByClassName("skill-node");

//   let faHtml = document.getElementsByClassName("fa-html5");
//   let faBootstrap = document.getElementsByClassName("fa-bootstrap");
//   let faWireframe = document.getElementsByClassName("fa-edit");
//   let faJs = document.getElementsByClassName("fa-js-square");
//   let faReact = document.getElementsByClassName("fa-react");
//   let faGit = document.getElementsByClassName("fa-github");
//   let faNode = document.getElementsByClassName("fa-node-js");

//   if() {

//   } else if () {

//   } else if () {

//   } else if () {

//   } else if () {

//   } else if () {

//   } else if () {

//   } else {

//   }
// }

function skillHTML() {
  let html = document.getElementById("skill-html");
  if (html.style.display === "none") {
    let fahtml5 = document.getElementById("fa-html5");
    let htmlcss = document.getElementById("html-css");
    html.style.display = "block";
    fahtml5.style.color = "#c5247e";
    htmlcss.style.color = "#c5247e";
  } else {
    html.style.display = "none";
    fahtml5.style.color = "#000000";
  }
}

function skillBootstrap() {
  let html = document.getElementById("skill-bootstrap");
  if (html.style.display === "none") {
    let fabootstrap = document.getElementById("fa-bootstrap");
    let bootstrap = document.getElementById("bootstrap-5");
    html.style.display = "block";
    fabootstrap.style.color = "#c5247e";
    bootstrap.style.color = "#c5247e";
  } else {
    html.style.display = "none";
    fabootstrap.style.color = "#000000";
  }
}

function skillWireframe() {
  let html = document.getElementById("skill-wireframe");
  if (html.style.display === "none") {
    let faedit = document.getElementById("fa-edit");
    let wireframe = document.getElementById("wire-frame");
    html.style.display = "block";
    faedit.style.color = "#c5247e";
    wireframe.style.color = "#c5247e";
  } else {
    html.style.display = "none";
    faedit.style.color = "#000000";
  }
}

function skillJavascript() {
  let html = document.getElementById("skill-js");
  if (html.style.display === "none") {
    let jssquare = document.getElementById("js-square");
    let javascript = document.getElementById("java-script");
    html.style.display = "block";
    jssquare.style.color = "#c5247e";
    javascript.style.color = "#c5247e";
  } else {
    html.style.display = "none";
    jssquare.style.color = "#000000";
  }
}

function skillReact() {
  let html = document.getElementById("skill-react");
  if (html.style.display === "none") {
    let fareact = document.getElementById("fa-react");
    let react = document.getElementById("re-act");
    html.style.display = "block";
    fareact.style.color = "#c5247e";
    react.style.color = "#c5247e";
  } else {
    html.style.display = "none";
    fareact.style.color = "#000000";
  }
}

function skillNode() {
  let html = document.getElementById("skill-node");
  if (html.style.display === "none") {
    let fanodejs = document.getElementById("fa-node-js");
    let nodejs = document.getElementById("node-js");
    html.style.display = "block";
    fanodejs.style.color = "#c5247e";
    nodejs.style.color = "#c5247e";
  } else {
    html.style.display = "none";
    fanodejs.style.color = "#000000";
  }
}

function skillGit() {
  let html = document.getElementById("skill-git");
  if (html.style.display === "none") {
    let fagithub = document.getElementById("fa-github");
    let github = document.getElementById("git-hub");
    html.style.display = "block";
    fagithub.style.color = "#c5247e";
    github.style.color = "#c5247e";
  } else {
    html.style.display = "none";
    fagithub.style.color = "#000000";
  }
}
