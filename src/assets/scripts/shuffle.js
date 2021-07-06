function shuffleProjects() {
  var myRandomProject;

  myRandomProject = Math.floor(Math.random() * misURL.length);

  if (whatRandom.indexOf(myRandomProject) !== -1) {
    shuffleProjects();
  } else {
    whatRandom.push(myRandomProject);
    if (whatRandom.length === misURL.length) {
      whatRandom = [];
    }
    getShuffledProject(myRandomProject);
  }
}

function getShuffledProject(myRandomProject) {
  document.body.classList.add("noscroll");
  var myModal = document.querySelector(".modal");
  myModal.classList.add("open_modal");

  var mySecImages;

  var myModalPanel = document.querySelector(".modal_panel");
  myModalPanel.innerHTML = "";
  var myModalPanelImages = document.createElement("div");
  myModalPanelImages.innerHTML = "";
  myModalPanelImages.classList.add("modal_panel_images");

  if (myRandomProject < 10) {
    myRandomProject = "0" + myRandomProject;
  }

  var myProjectURL =
    window.location.origin +
    "/assets/images/Projects/" +
    myRandomProject +
    "/" +
    myRandomProject;

  for (var i = 0; i < misURL.length; i++) {
    if (misURL[i].number == myRandomProject) {
      var p = document.createElement("p");
      p.innerHTML = misURL[i].nombre;
      p.classList.add("text-headline");
      myModalPanel.appendChild(p);
      if (misURL[i].theURL != "none") {
        var a = document.createElement("a");
        var linkText = document.createTextNode("CLICK HERE TO CHECK IT OUT!");
        a.appendChild(linkText);
        a.classList.add("text-body");
        a.href = misURL[i].theURL;
        a.setAttribute("target", "_blank");
        myModalPanel.appendChild(a);
      }
      var p2 = document.createElement("p");
      p2.innerHTML = "RE-ROLL!";
      p2.classList.add("text-subheader");
      p2.classList.add("shuffle_modal_button");
      p2.addEventListener("click", shuffleProjects);
      myModalPanel.appendChild(p2);

      mySecImages = misURL[i].img_sec;
      mySecImages = mySecImages.split("/");
    }
  }

  myModalPanel.appendChild(myModalPanelImages);
  var count = 0;

  for (var i = 0; i < mySecImages.length; i++) {
    (function (i) {
      var img = new Image();
      var imgSRC = myProjectURL + mySecImages[i];

      img.src = imgSRC;

      img.onload = function () {
        if (
          (img.naturalHeight >= img.naturalWidth &&
            img.naturalHeight < 3000 &&
            img.naturalWidth != 1000) ||
          img.naturalWidth <= 600
        ) {
          if (i >= mySecImages.length - 2) {
            count = count + 1;
            if (count >= 2) {
              img.setAttribute("data-img", "twoLastBig");
            }
          }
          img.classList.add("bigImage");
        } else if (
          img.naturalWidth == 1000 &&
          img.naturalHeight >= 1770 &&
          img.naturalHeight <= 1780
        ) {
          img.classList.add("wallpaperImage");
        }
      };

      myModalPanelImages.appendChild(img);
    })(i);
  }
}
