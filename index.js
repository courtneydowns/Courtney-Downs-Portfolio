function skillHTML() {
  clearIconClicks();
  let html = document.getElementById("skill-html");
  let html5css = document.getElementById("html-css");
  let fahtml5 = document.getElementById("fa-html5");
  html.style.display = "none";
  html5css.style.color = "#000000";
  fahtml5.style.color = "#000000";
  if (html.style.display === "none") {
    html.style.display = "block";
    fahtml5.style.color = "#c5247e";
    html5css.style.color = "#c5247e";
  } else {
    html.style.display = "none";
    fahtml5.style.color = "";
    html5css.style.color = "";
  }
}

// BOOTSTRAP
function skillBootstrap() {
  clearIconClicks();
  let boot_html = document.getElementById("skill-bootstrap");
  let bootstrap = document.getElementById("bootstrap-5");
  let fabootstrap = document.getElementById("fa-bootstrap");
  boot_html.style.display = "none";
  bootstrap.style.color = "";
  fabootstrap.style.color = "";
  if (boot_html.style.display === "none") {
    boot_html.style.display = "block";
    fabootstrap.style.color = "#c5247e";
    bootstrap.style.color = "#c5247e";
  } else {
    boot_html.style.display = "none";
    fabootstrap.style.color = "";
    bootstrap.style.color = "";
  }
}

// WIREFRAMING
function skillWireframe() {
  clearIconClicks();
  let wireframe_html = document.getElementById("skill-wireframe");
  let wireframe = document.getElementById("wire-frame");
  let faedit = document.getElementById("fa-edit");
  wireframe_html.style.display = "none";
  wireframe.style.color = "";
  faedit.style.color = "";
  if (wireframe_html.style.display === "none") {
    wireframe_html.style.display = "block";
    faedit.style.color = "#c5247e";
    wireframe.style.color = "#c5247e";
  } else {
    wireframe_html.style.display = "none";
    faedit.style.color = "";
    wireframe.style.color = "";
  }
}

// JAVASCRIPT
function skillJavascript() {
  clearIconClicks();
  let javascript_html = document.querySelector(".skill-js");
  let javascript = document.getElementById("java-script");
  let fajssquare = document.querySelector(".fa-js-square");
  javascript_html.style.display = "none";
  javascript.style.color = "";
  fajssquare.style.color = "";
  if (javascript_html.style.display === "none") {
    javascript_html.style.display = "block";
    fajssquare.style.color = "#c5247e";
    javascript.style.color = "#c5247e";
  } else {
    javascript_html.style.display = "none";
    jssquare.style.color = "";
    javascript.style.color = "";
  }
}

function skillReact() {
  clearIconClicks();
  let react_html = document.querySelector(".skill-react");
  let react = document.getElementById("re-act");
  let fareact = document.getElementById("fa-react");
  react_html.style.display = "none";
  react.style.color = "";
  fareact.style.color = "";
  if (react_html.style.display === "none") {
    react_html.style.display = "block";
    fareact.style.color = "#c5247e";
    react.style.color = "#c5247e";
  } else {
    react_html.style.display = "none";
    fareact.style.color = "";
    react.style.color = "";
  }
}

// NODE.JS
function skillNode() {
  clearIconClicks();
  let node_html = document.querySelector(".skill-node");
  let node = document.getElementById("node-js");
  let fanodejs = document.querySelector(".fa-node-js");
  node_html.style.display = "none";
  node.style.color = "";
  fanodejs.style.color = "";
  if (node_html.style.display === "none") {
    node_html.style.display = "block";
    fanodejs.style.color = "#c5247e";
    node.style.color = "#c5247e";
  } else {
    node_html.style.display = "none";
    node.style.color = "#000000";
  }
}

// GITHUB
function skillGit() {
  clearIconClicks();
  let git_html = document.querySelector(".skill-git");
  let git = document.getElementById("git-hub");
  let fagithub = document.querySelector(".fa-github");
  git_html.style.display = "none";
  git.style.color = "";
  fagithub.style.color = "";
  if (git_html.style.display === "none") {
    git_html.style.display = "block";
    fagithub.style.color = "#c5247e";
    git.style.color = "#c5247e";
  } else {
    git_html.style.display = "none";
    git.style.color = "#000000";
  }
}

function clearIconClicks() {
  //HTML
  let html = document.getElementById("skill-html");
  let html5css = document.getElementById("html-css");
  let fahtml5 = document.getElementById("fa-html5");
  html.style.display = "none";
  html5css.style.color = "#000000";
  fahtml5.style.color = "#000000";

  //BOOTSTRAP
  let boot_html = document.getElementById("skill-bootstrap");
  let bootstrap = document.getElementById("bootstrap-5");
  let fabootstrap = document.getElementById("fa-bootstrap");
  boot_html.style.display = "none";
  bootstrap.style.color = "";
  fabootstrap.style.color = "";

  //WIREFRAMING
  let wireframe_html = document.getElementById("skill-wireframe");
  let wireframe = document.getElementById("wire-frame");
  let faedit = document.getElementById("fa-edit");
  wireframe_html.style.display = "none";
  wireframe.style.color = "";
  faedit.style.color = "";

  //JAVASCRIPT
  let javascript_html = document.querySelector(".skill-js");
  let javascript = document.getElementById("java-script");
  let fajssquare = document.querySelector(".fa-js-square");
  javascript_html.style.display = "none";
  javascript.style.color = "";
  fajssquare.style.color = "";

  //REACT
  let react_html = document.querySelector(".skill-react");
  let react = document.getElementById("re-act");
  let fareact = document.getElementById("fa-react");
  react_html.style.display = "none";
  react.style.color = "";
  fareact.style.color = "";

  //NODE.JS
  let node_html = document.querySelector(".skill-node");
  let node = document.getElementById("node-js");
  let fanodejs = document.querySelector(".fa-node-js");
  node_html.style.display = "none";
  node.style.color = "";
  fanodejs.style.color = "";

  //GITHUB
  let git_html = document.querySelector(".skill-git");
  let git = document.getElementById("git-hub");
  let fagithub = document.querySelector(".fa-github");
  git_html.style.display = "none";
  git.style.color = "";
  fagithub.style.color = "";
}

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

let displayDate = new Date().getFullYear();
document.getElementById("copyright").innerHTML = displayDate;

//RESUME DOWNLOAD

function download() {
  window.open("./assets/CourtneyDownsResume.pdf", "_blank");
}
