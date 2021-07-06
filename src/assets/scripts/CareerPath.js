let cursorX = 0;
var screenWidth = window.innerWidth * 0.1;

if (myLocation === "http://localhost:4000/aboutme/") {
  openCareerModal("0");

  document
    .querySelector(".career_icongroup")
    .addEventListener("mousemove", (e) => {
      cursorX = Math.round(e.clientX * 0.1);

      openCareerModal(cursorX);
    });
}

function openCareerModal(cursor) {
  var cero_per = percentage(20, screenWidth);
  var one_per = percentage(40, screenWidth);
  var two_per = percentage(60, screenWidth);
  var three_per = percentage(80, screenWidth);
  var four_per = percentage(100, screenWidth);

  var careerModal = document.querySelector(".career_modal");
  var careerIconGroup = document.querySelector(".career_icongroup");
  var careerIcons = document.querySelectorAll(".career_icon");

  careerModal.innerHTML = "";

  for (var i = 0; i < careerIcons.length; i++) {
    careerIcons[i].classList.remove("career_active");
  }

  if (cursor <= cero_per) {
    loadOne(careerModal, careerIconGroup, careerIcons);
  } else if (cursor > cero_per && cursor <= one_per) {
    loadTwo(careerModal, careerIconGroup, careerIcons);
  } else if (cursor > one_per && cursor <= two_per) {
    loadThree(careerModal, careerIconGroup, careerIcons);
  } else if (cursor > two_per && cursor <= three_per) {
    loadFour(careerModal, careerIconGroup, careerIcons);
  } else if (cursor > three_per && cursor <= four_per) {
    loadFive(careerModal, careerIconGroup, careerIcons);
  } else {
    loadOne(careerModal, careerIconGroup, careerIcons);
  }
}

function openCareerLink() {
  if (this.classList.contains("path_00") === true) {
    window.open("https://www.colegiosramonycajal.es/", "_blank");
  } else if (this.classList.contains("path_01") === true) {
    window.open("https://www.ef.com.es/", "_blank");
  } else if (this.classList.contains("path_02") === true) {
    window.open("https://www.u-tad.com/", "_blank");
  } else if (this.classList.contains("path_03") === true) {
    window.open("https://www.grupo-sm.com/", "_blank");
  } else if (this.classList.contains("path_04") === true) {
    window.open("https://internaftis.com/", "_blank");
  }
}

function loadOne(modal, icongroup, icon) {
  icon[0].classList.add("career_active");
  modal.innerHTML =
    "<p class = 'text-headline'>2012 - 2014</p>" +
    "<p class = 'text-display'>BACHELOR OF PLASTIC ARTS, DESIGN AND IMAGE</p>" +
    "<p class = 'text-title'><a href = 'https://www.colegiosramonycajal.es/' target = '_blank'>Colegios Ramón y Cajal</a></p>";
  modal.setAttribute("data-class", "path_00");
  icongroup.setAttribute("data-class", "path_00");
}

function loadTwo(modal, icongroup, icon) {
  icon[1].classList.add("career_active");
  modal.innerHTML =
    "<p class = 'text-headline'>2014 - 2015</p>" +
    "<p class = 'text-display'>MEDIA & ART + ENGLISH LEVEL CERTIFICATION C2</p>" +
    "<p class = 'text-title'><a href = 'https://www.ef.com.es/' target = '_blank'>EF International Language Centers</a>, London</p>";
  modal.setAttribute("data-class", "path_01");
  icongroup.setAttribute("data-class", "path_01");
}

function loadThree(modal, icongroup, icon) {
  icon[2].classList.add("career_active");
  modal.innerHTML =
    "<p class = 'text-headline'>2015 - 2020</p>" +
    "<p class = 'text-display'>DEGREE IN VISUAL DESIGN OF DIGITAL CONTENTS</p>" +
    "<p class = 'text-title'><a href = 'https://www.u-tad.com/' target = '_blank'>U-Tad</a></p>";
  modal.setAttribute("data-class", "path_02");
  icongroup.setAttribute("data-class", "path_02");
}

function loadFour(modal, icongroup, icon) {
  icon[3].classList.add("career_active");
  modal.innerHTML =
    "<p class = 'text-headline'>2 Jan 2019 - 30 June 2019</p>" +
    "<p class = 'text-display'>INTERACTIVE TECHNOLOGY COORDINATION</p>" +
    "<p class = 'text-title'>Internship - <a href = 'https://www.grupo-sm.com/' target = '_blank'>Grupo SM</a></p>";
  modal.setAttribute("data-class", "path_03");
  icongroup.setAttribute("data-class", "path_03");
}

function loadFive(modal, icongroup, icon) {
  icon[4].classList.add("career_active");
  modal.innerHTML =
    "<p class = 'text-headline'>2020 - 2021</p>" +
    "<p class = 'text-display'>FREELANCER - FRONTEND WEB DESIGN WITH DIVI</p>" +
    "<p class = 'text-title'>Collab. with <a href = 'https://internaftis.com/' target = '_blank'>Internaftis</a></p>";
  modal.setAttribute("data-class", "path_04");
  icongroup.setAttribute("data-class", "path_04");
}

function percentage(percent, total) {
  return (percent / 100) * total;
}
