function projectButtons() {
  if (this.classList.contains("twoD-button") == true) {
    twoDButton.classList.add("active");
    threeDButton.classList.remove("active");
    webButton.classList.remove("active");
    myProjects.setAttribute("data-class", "twoD");
    myProjectsNav.setAttribute("data-class", "twoD");
    myProjectTitle.setAttribute("data-class", "twoD");
    sessionStorage.setItem("whatProject", "twoD");
  } else if (this.classList.contains("threeD-button") == true) {
    threeDButton.classList.add("active");
    twoDButton.classList.remove("active");
    webButton.classList.remove("active");
    myProjects.setAttribute("data-class", "threeD");
    myProjectsNav.setAttribute("data-class", "threeD");
    myProjectTitle.setAttribute("data-class", "threeD");
    sessionStorage.setItem("whatProject", "threeD");
  } else if (this.classList.contains("web-button") == true) {
    webButton.classList.add("active");
    twoDButton.classList.remove("active");
    threeDButton.classList.remove("active");
    myProjects.setAttribute("data-class", "web");
    myProjectsNav.setAttribute("data-class", "web");
    myProjectTitle.setAttribute("data-class", "web");
    sessionStorage.setItem("whatProject", "web");
  }

  filterProjects();
}

function projectButtonsNewPage() {
  var myProjectType = sessionStorage.getItem("whatProject");

  if (myProjectType === null) {
    myProjectType = "threeD";
  }
  if (myProjectType === "threeD") {
    threeDButton.classList.add("active");
    twoDButton.classList.remove("active");
    webButton.classList.remove("active");
    myProjects.setAttribute("data-class", "threeD");
    myProjectsNav.setAttribute("data-class", "threeD");
    myProjectTitle.setAttribute("data-class", "threeD");
  } else if (myProjectType === "twoD") {
    twoDButton.classList.add("active");
    threeDButton.classList.remove("active");
    webButton.classList.remove("active");
    myProjects.setAttribute("data-class", "twoD");
    myProjectsNav.setAttribute("data-class", "twoD");
    myProjectTitle.setAttribute("data-class", "twoD");
  } else if (myProjectType === "web") {
    webButton.classList.add("active");
    twoDButton.classList.remove("active");
    threeDButton.classList.remove("active");
    myProjects.setAttribute("data-class", "web");
    myProjectsNav.setAttribute("data-class", "web");
    myProjectTitle.setAttribute("data-class", "web");
  }

  filterProjects();
}

function filterProjects() {
  var myTwoDProjects = document.querySelectorAll(".Projects.item_twoD");
  var myThreeDProjects = document.querySelectorAll(".Projects.item_threeD");
  var myWebProjects = document.querySelectorAll(".Projects.item_web");

  if (twoDButton.classList.contains("active") == true) {
    myWebProjects.forEach(function (element) {
      element.classList.remove("activeImg");
    });

    myThreeDProjects.forEach(function (element) {
      element.classList.remove("activeImg");
    });

    myTwoDProjects.forEach(function (element) {
      element.classList.add("activeImg");
    });
  } else if (threeDButton.classList.contains("active") == true) {
    myTwoDProjects.forEach(function (element) {
      element.classList.remove("activeImg");
    });

    myWebProjects.forEach(function (element) {
      element.classList.remove("activeImg");
    });

    myThreeDProjects.forEach(function (element) {
      element.classList.add("activeImg");
    });
  } else if (webButton.classList.contains("active") == true) {
    myTwoDProjects.forEach(function (element) {
      element.classList.remove("activeImg");
    });

    myThreeDProjects.forEach(function (element) {
      element.classList.remove("activeImg");
    });

    myWebProjects.forEach(function (element) {
      element.classList.add("activeImg");
    });
  }
}

if (myLocation === "http://localhost:4000/projects/") {
  projectButtonsNewPage();
  filterProjects();
}
