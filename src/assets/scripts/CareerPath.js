let cursorX = 0;
var screenWidth = window.innerWidth * 0.1;

var careerModal = document.querySelector(".career_modal");
var careerSlide = document.querySelector(".career_slide");
var careerIconGroup = document.querySelector(".career_icongroup");
var careerIcons = document.querySelectorAll(".career_icon");

var compressedPer = 0;

if (myLocation === window.location.origin + "/aboutme/") {
  if (window.innerWidth > 700) {
    openCareerModal("0");

    document
      .querySelector(".career_container")
      .addEventListener("mousemove", (e) => {
        cursorX = Math.round(e.clientX * 0.1);

        openCareerModal(cursorX);
      });
  } else {
    loadOne(
      careerModal,
      careerSlide,
      careerIcons,
      careerIconGroup,
      compressedPer
    );
  }
}

function openCareerModal(cursor) {
  if (window.innerWidth > 700) {
    var itemSize = careerIconGroup.getBoundingClientRect().width * 0.1 - 13;
    var iconPercentage = [];
    for (var i = 0; i < careerIcons.length - 1; i++) {
      var iconNumber = 100 / (careerIcons.length - 1);
      iconPercentage.push(
        percentage(iconNumber * (i + 1), Math.round(itemSize))
      );
    }

    var myMiddle = iconPercentage[0] / 2;
    var mySides = (screenWidth - itemSize) / 2;
    iconPercentage.unshift(0);

    careerModal.innerHTML = "";

    for (var i = 0; i < careerIcons.length; i++) {
      careerIcons[i].classList.remove("career_active");
    }

    for (var i = 0; i < iconPercentage.length; i++) {
      compressedPer = compressNumbers(iconPercentage[i], itemSize);
      if (
        cursor - mySides >= 0 &&
        cursor - mySides < iconPercentage[1] - myMiddle &&
        i == 0
      ) {
        loadOne(
          careerModal,
          careerSlide,
          careerIcons,
          careerIconGroup,
          compressedPer
        );
        return;
      } else if (
        cursor - mySides >= iconPercentage[i] - myMiddle &&
        cursor - mySides < iconPercentage[i] + myMiddle
      ) {
        if (i == 1) {
          for (var i = 0; i < careerIcons.length; i++) {
            careerIcons[i].classList.remove("career_active");
          }
          loadTwo(
            careerModal,
            careerSlide,
            careerIcons,
            careerIconGroup,
            compressedPer
          );
          return;
        } else if (i == 2) {
          for (var i = 0; i < careerIcons.length; i++) {
            careerIcons[i].classList.remove("career_active");
          }
          loadThree(
            careerModal,
            careerSlide,
            careerIcons,
            careerIconGroup,
            compressedPer
          );
          return;
        } else if (i == 3) {
          for (var i = 0; i < careerIcons.length; i++) {
            careerIcons[i].classList.remove("career_active");
          }
          loadFour(
            careerModal,
            careerSlide,
            careerIcons,
            careerIconGroup,
            compressedPer
          );
          return;
        } else if (i == 4) {
          for (var i = 0; i < careerIcons.length; i++) {
            careerIcons[i].classList.remove("career_active");
          }
          loadFive(
            careerModal,
            careerSlide,
            careerIcons,
            careerIconGroup,
            compressedPer
          );
          return;
        } else if (i == 5) {
          for (var i = 0; i < careerIcons.length; i++) {
            careerIcons[i].classList.remove("career_active");
          }
          loadSix(
            careerModal,
            careerSlide,
            careerIcons,
            careerIconGroup,
            compressedPer
          );
          return;
        }
      } else if (cursor - mySides > itemSize) {
        loadSix(
          careerModal,
          careerSlide,
          careerIcons,
          careerIconGroup,
          compressedPer
        );
      } else {
        compressedPer = 0;
        loadOne(
          careerModal,
          careerSlide,
          careerIcons,
          careerIconGroup,
          compressedPer
        );
      }
    }
  } else {
    var itemSize = careerIconGroup.getBoundingClientRect().width * 0.1 - 13;
    var iconPercentage = [];

    for (var i = 0; i < careerIcons.length - 1; i++) {
      var iconNumber = 100 / (careerIcons.length - 1);
      iconPercentage.push(
        percentage(iconNumber * (i + 1), Math.round(itemSize))
      );
    }

    var myMiddle = iconPercentage[0] / 2;
    var mySides = (screenWidth - itemSize) / 2;
    iconPercentage.unshift(0);

    careerModal.innerHTML = "";

    for (var i = 0; i < careerIcons.length; i++) {
      careerIcons[i].classList.remove("career_active");
    }

    for (var i = 0; i < iconPercentage.length; i++) {
      iconPercentage[i] = compressNumbers(iconPercentage[i], itemSize);
    }

    if (this.classList.contains("path_00") === true) {
      for (var i = 0; i < careerIcons.length; i++) {
        careerIcons[i].classList.remove("career_active");
      }
      compressedPer = iconPercentage[0];
      loadOne(
        careerModal,
        careerSlide,
        careerIcons,
        careerIconGroup,
        compressedPer
      );
      return;
    } else if (this.classList.contains("path_01") === true) {
      for (var i = 0; i < careerIcons.length; i++) {
        careerIcons[i].classList.remove("career_active");
      }
      compressedPer = iconPercentage[1];
      loadTwo(
        careerModal,
        careerSlide,
        careerIcons,
        careerIconGroup,
        compressedPer
      );
      return;
    } else if (this.classList.contains("path_02") === true) {
      for (var i = 0; i < careerIcons.length; i++) {
        careerIcons[i].classList.remove("career_active");
      }
      compressedPer = iconPercentage[2];
      loadThree(
        careerModal,
        careerSlide,
        careerIcons,
        careerIconGroup,
        compressedPer
      );
      return;
    } else if (this.classList.contains("path_03") === true) {
      compressedPer = iconPercentage[3];
      for (var i = 0; i < careerIcons.length; i++) {
        careerIcons[i].classList.remove("career_active");
      }
      loadFour(
        careerModal,
        careerSlide,
        careerIcons,
        careerIconGroup,
        compressedPer
      );
      return;
    } else if (this.classList.contains("path_04") === true) {
      compressedPer = iconPercentage[4];
      for (var i = 0; i < careerIcons.length; i++) {
        careerIcons[i].classList.remove("career_active");
      }
      loadFive(
        careerModal,
        careerSlide,
        careerIcons,
        careerIconGroup,
        compressedPer
      );
      return;
    } else if (this.classList.contains("path_05") === true) {
      compressedPer = iconPercentage[5];
      for (var i = 0; i < careerIcons.length; i++) {
        careerIcons[i].classList.remove("career_active");
      }
      loadSix(
        careerModal,
        careerSlide,
        careerIcons,
        careerIconGroup,
        compressedPer
      );
      return;
    } else {
      compressedPer = 0;
      loadOne(
        careerModal,
        careerSlide,
        careerIcons,
        careerIconGroup,
        compressedPer
      );
      return;
    }
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
  } else if (this.classList.contains("path_05") === true) {
    window.open("https://trazos.net/", "_blank");
  }
}
// var careerModal = document.querySelector(".career_modal");
// var careerSlide = document.querySelector(".career_slide");
// var careerIconGroup = document.querySelector(".career_icongroup");
// var careerIcons = document.querySelectorAll(".career_icon");
// var compressedPer = 0;
// loadOne(
//   careerModal,
//   careerSlide,
//   careerIcons,
//   careerIconGroup,
//   compressedPer
// );
//
// function openCareerModal() {
//   var itemSize = careerIconGroup.getBoundingClientRect().width * 0.1 - 13;
//   var iconPercentage = [];
//
//   for (var i = 0; i < careerIcons.length - 1; i++) {
//     var iconNumber = 100 / (careerIcons.length - 1);
//     iconPercentage.push(
//       percentage(iconNumber * (i + 1), Math.round(itemSize))
//     );
//   }
//
//   var myMiddle = iconPercentage[0] / 2;
//   var mySides = (screenWidth - itemSize) / 2;
//   iconPercentage.unshift(0);
//
//   careerModal.innerHTML = "";
//
//   for (var i = 0; i < careerIcons.length; i++) {
//     careerIcons[i].classList.remove("career_active");
//   }
//
//   for (var i = 0; i < iconPercentage.length; i++) {
//     iconPercentage[i] = compressNumbers(iconPercentage[i], itemSize);
//   }
//
//   console.log(itemSize);
//   if (this.classList.contains("path_00") === true) {
//     for (var i = 0; i < careerIcons.length; i++) {
//       careerIcons[i].classList.remove("career_active");
//     }
//     compressedPer = iconPercentage[0];
//     loadOne(
//       careerModal,
//       careerSlide,
//       careerIcons,
//       careerIconGroup,
//       compressedPer
//     );
//     return;
//   } else if (this.classList.contains("path_01") === true) {
//     for (var i = 0; i < careerIcons.length; i++) {
//       careerIcons[i].classList.remove("career_active");
//     }
//     compressedPer = iconPercentage[1];
//     loadTwo(
//       careerModal,
//       careerSlide,
//       careerIcons,
//       careerIconGroup,
//       compressedPer
//     );
//     return;
//   } else if (this.classList.contains("path_02") === true) {
//     for (var i = 0; i < careerIcons.length; i++) {
//       careerIcons[i].classList.remove("career_active");
//     }
//     compressedPer = iconPercentage[2];
//     loadThree(
//       careerModal,
//       careerSlide,
//       careerIcons,
//       careerIconGroup,
//       compressedPer
//     );
//     return;
//   } else if (this.classList.contains("path_03") === true) {
//     compressedPer = iconPercentage[3];
//     for (var i = 0; i < careerIcons.length; i++) {
//       careerIcons[i].classList.remove("career_active");
//     }
//     loadFour(
//       careerModal,
//       careerSlide,
//       careerIcons,
//       careerIconGroup,
//       compressedPer
//     );
//     return;
//   } else if (this.classList.contains("path_04") === true) {
//     compressedPer = iconPercentage[4];
//     for (var i = 0; i < careerIcons.length; i++) {
//       careerIcons[i].classList.remove("career_active");
//     }
//     loadFive(
//       careerModal,
//       careerSlide,
//       careerIcons,
//       careerIconGroup,
//       compressedPer
//     );
//     return;
//   } else if (this.classList.contains("path_05") === true) {
//     compressedPer = iconPercentage[5];
//     for (var i = 0; i < careerIcons.length; i++) {
//       careerIcons[i].classList.remove("career_active");
//     }
//     loadSix(
//       careerModal,
//       careerSlide,
//       careerIcons,
//       careerIconGroup,
//       compressedPer
//     );
//     return;
//   } else {
//     compressedPer = 0;
//     loadOne(
//       careerModal,
//       careerSlide,
//       careerIcons,
//       careerIconGroup,
//       compressedPer
//     );
//   }
// }

function loadOne(modal, iconslide, icon, icongroup, percentage) {
  icon[0].classList.add("career_active");
  modal.innerHTML =
    "<p class = 'text-headline'>2012 - 2014</p>" +
    "<p class = 'text-display'>BACHELOR OF PLASTIC ARTS, DESIGN AND IMAGE</p>" +
    "<p class = 'text-title'><a href = 'https://www.colegiosramonycajal.es/' target = '_blank'>Colegios Ramón y Cajal</a></p>";
  icongroup.setAttribute("data-class", "path_00");
  iconslide.style.width = percentage + "%";
}

function loadTwo(modal, iconslide, icon, icongroup, percentage) {
  icon[1].classList.add("career_active");
  modal.innerHTML =
    "<p class = 'text-headline'>2014 - 2015</p>" +
    "<p class = 'text-display'>MEDIA & ART + ENGLISH LEVEL CERTIFICATION C2</p>" +
    "<p class = 'text-title'><a href = 'https://www.ef.com.es/' target = '_blank'>EF International Language Centers</a>, London</p>";
  icongroup.setAttribute("data-class", "path_01");
  iconslide.style.width = percentage + "%";
}

function loadThree(modal, iconslide, icon, icongroup, percentage) {
  icon[2].classList.add("career_active");
  modal.innerHTML =
    "<p class = 'text-headline'>2015 - 2020</p>" +
    "<p class = 'text-display'>DEGREE IN VISUAL DESIGN OF DIGITAL CONTENTS</p>" +
    "<p class = 'text-title'><a href = 'https://www.u-tad.com/' target = '_blank'>U-Tad</a></p>";
  icongroup.setAttribute("data-class", "path_02");
  iconslide.style.width = percentage + "%";
}

function loadFour(modal, iconslide, icon, icongroup, percentage) {
  icon[3].classList.add("career_active");
  modal.innerHTML =
    "<p class = 'text-headline'>2 Jan 2019 - 30 June 2019</p>" +
    "<p class = 'text-display'>INTERACTIVE TECHNOLOGY COORDINATION</p>" +
    "<p class = 'text-title'>Internship - <a href = 'https://www.grupo-sm.com/' target = '_blank'>Grupo SM</a></p>";
  icongroup.setAttribute("data-class", "path_03");
  iconslide.style.width = percentage + "%";
}

function loadFive(modal, iconslide, icon, icongroup, percentage) {
  icon[4].classList.add("career_active");
  modal.innerHTML =
    "<p class = 'text-headline'>2020 - 2021</p>" +
    "<p class = 'text-display'>FREELANCER - FRONTEND WEB DESIGN WITH DIVI</p>" +
    "<p class = 'text-title'>Collab. with <a href = 'https://internaftis.com/' target = '_blank'>Internaftis</a></p>";
  icongroup.setAttribute("data-class", "path_04");
  iconslide.style.width = percentage + "%";
}

function loadSix(modal, iconslide, icon, icongroup, percentage) {
  icon[5].classList.add("career_active");
  modal.innerHTML =
    "<p class = 'text-headline'>October 2021 (WIP)</p>" +
    "<p class = 'text-display'>MASTER IN FULL STACK WEB DESIGN</p>" +
    "<p class = 'text-title'><a href = 'https://trazos.net/' target = '_blank'>Trazos</a></p>";
  icongroup.setAttribute("data-class", "path_05");
  iconslide.style.width = percentage + "%";
}

function percentage(percent, total) {
  return (percent / 100) * total;
}

function compressNumbers(OldValue, OldMax) {
  var NewValue = ((OldValue - 0) * (100 - 0)) / (OldMax - 0) + 0;
  return Math.round(NewValue);
}
