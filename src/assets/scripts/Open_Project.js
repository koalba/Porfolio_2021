function openModal() {
  document.body.classList.add("noscroll");
  var myModal = document.querySelector(".modal");
  myModal.classList.add("open_modal");

  var mySecImages;

  var myModalPanel = document.querySelector(".modal_panel");
  myModalPanel.innerHTML = "";
  var myModalPanelImages = document.createElement("div");
  myModalPanelImages.innerHTML = "";
  myModalPanelImages.classList.add("modal_panel_images");

  var myProjectURL = this.childNodes[1].currentSrc;
  myProjectURL = myProjectURL.split("_").shift();

  console.log(myProjectURL);

  var myProject = this.getAttribute("data-number");

  for (var i = 0; i < misURL.length; i++) {
    if (misURL[i].number == myProject) {
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

document.querySelectorAll(".Projects").forEach(function (element) {
  element.addEventListener("click", openModal, false);
});

function closeModal() {
  document.body.classList.remove("noscroll");
  var myModal = document.querySelector(".modal").classList.remove("open_modal");
}

document
  .querySelector(".modal_close")
  .addEventListener("click", closeModal, false);
