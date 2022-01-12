const history1 = document.getElementById("event1Bubble");
const history2 = document.getElementById("event2Bubble");
const history3 = document.getElementById("event3Bubble");
const history4 = document.getElementById("event4Bubble");
const history5 = document.getElementById("event5Bubble");
const history6 = document.getElementById("event6Bubble");
const history7 = document.getElementById("event7Bubble");
const history8 = document.getElementById("event8Bubble");
const button = document.getElementById("timeline-END");
const date1 = document.getElementById("Timeline-background");
const date2 = document.getElementById("Timeline-background2");
const date3 = document.getElementById("Timeline-background3");
const date4 = document.getElementById("Timeline-background4");
const date5 = document.getElementById("Timeline-background5");
const date6 = document.getElementById("Timeline-background6");
const date7 = document.getElementById("Timeline-background7");
const date8 = document.getElementById("Timeline-background8");

function init() {
  history1.style.display = "none";
  history2.style.display = "none";
  history3.style.display = "none";
  history4.style.display = "none";
  history5.style.display = "none";
  history6.style.display = "none";
  history7.style.display = "none";
  history8.style.display = "none";
  date1.style.display = "none";
  date2.style.display = "none";
  date3.style.display = "none";
  date4.style.display = "none";
  date5.style.display = "none";
  date6.style.display = "none";
  date7.style.display = "none";
  date8.style.display = "none";
}

function afficher() {
  if (history1.style.display == "none") {
    history1.style.display = "block";
    history2.style.display = "none";
    history3.style.display = "none";
    history4.style.display = "none";
    history5.style.display = "none";
    history6.style.display = "none";
    history7.style.display = "none";
    history8.style.display = "none";
    date1.style.display = "block";
    date2.style.display = "none";
    date3.style.display = "none";
    date4.style.display = "none";
    date5.style.display = "none";
    date6.style.display = "none";
    date7.style.display = "none";
    date8.style.display = "none";
  }
}

function afficher2() {
  if (history2.style.display == "none") {
    history2.style.display = "block";
    history1.style.display = "none";
    history3.style.display = "none";
    history4.style.display = "none";
    history5.style.display = "none";
    history6.style.display = "none";
    history7.style.display = "none";
    history8.style.display = "none";
    document.getElementById("Timeline").style.transform =
      "translate3d(0px, 0, 0)";
    document.getElementById("Timeline").style.transitionDuration = "1s";
    date1.style.display = "none";
    date2.style.display = "block";
    date3.style.display = "none";
    date4.style.display = "none";
    date5.style.display = "none";
    date6.style.display = "none";
    date7.style.display = "none";
    date8.style.display = "none";
  }
}

function afficher3() {
  if (history3.style.display == "none") {
    history3.style.display = "block";
    history1.style.display = "none";
    history2.style.display = "none";
    history4.style.display = "none";
    history5.style.display = "none";
    history6.style.display = "none";
    history7.style.display = "none";
    history8.style.display = "none";
    document.getElementById("Timeline").style.transform =
      "translate3d(-400px, 0, 0)";
    document.getElementById("Timeline").style.transitionDuration = "1s";
    date3.style.display = "block";
    date2.style.display = "none";
    date1.style.display = "none";
    date4.style.display = "none";
    date5.style.display = "none";
    date6.style.display = "none";
    date7.style.display = "none";
    date8.style.display = "none";
  }
}

function afficher4() {
  if (history4.style.display == "none") {
    history4.style.display = "block";
    history2.style.display = "none";
    history3.style.display = "none";
    history1.style.display = "none";
    history5.style.display = "none";
    history6.style.display = "none";
    history7.style.display = "none";
    history8.style.display = "none";
    document.getElementById("Timeline").style.transform =
      "translate3d(-800px, 0, 0)";
    document.getElementById("Timeline").style.transitionDuration = "1s";
    date4.style.display = "block";
    date2.style.display = "none";
    date3.style.display = "none";
    date1.style.display = "none";
    date5.style.display = "none";
    date6.style.display = "none";
    date7.style.display = "none";
    date8.style.display = "none";
  }
}

function afficher5() {
  if (history5.style.display == "none") {
    history5.style.display = "block";
    history2.style.display = "none";
    history3.style.display = "none";
    history4.style.display = "none";
    history1.style.display = "none";
    history6.style.display = "none";
    history7.style.display = "none";
    history8.style.display = "none";
    document.getElementById("Timeline").style.transform =
      "translate3d(-1200px, 0, 0)";
    document.getElementById("Timeline").style.transitionDuration = "1s";
    date5.style.display = "block";
    date2.style.display = "none";
    date3.style.display = "none";
    date4.style.display = "none";
    date1.style.display = "none";
    date6.style.display = "none";
    date7.style.display = "none";
    date8.style.display = "none";
  }
}

function afficher6() {
  if (history6.style.display == "none") {
    history6.style.display = "block";
    history2.style.display = "none";
    history3.style.display = "none";
    history4.style.display = "none";
    history5.style.display = "none";
    history1.style.display = "none";
    history7.style.display = "none";
    history8.style.display = "none";
    document.getElementById("Timeline").style.transform =
      "translate3d(-1600px, 0, 0)";
    document.getElementById("Timeline").style.transitionDuration = "1s";
    date6.style.display = "block";
    date2.style.display = "none";
    date3.style.display = "none";
    date4.style.display = "none";
    date5.style.display = "none";
    date1.style.display = "none";
    date7.style.display = "none";
    date8.style.display = "none";
  }
}

function afficher7() {
  if (history7.style.display == "none") {
    history7.style.display = "block";
    history2.style.display = "none";
    history3.style.display = "none";
    history4.style.display = "none";
    history5.style.display = "none";
    history6.style.display = "none";
    history1.style.display = "none";
    history8.style.display = "none";
    date7.style.display = "block";
    date2.style.display = "none";
    date3.style.display = "none";
    date4.style.display = "none";
    date5.style.display = "none";
    date6.style.display = "none";
    date1.style.display = "none";
    date8.style.display = "none";
  }
}

function afficher8() {
  if (history8.style.display == "none") {
    history8.style.display = "block";
    history2.style.display = "none";
    history3.style.display = "none";
    history4.style.display = "none";
    history5.style.display = "none";
    history6.style.display = "none";
    history7.style.display = "none";
    history1.style.display = "none";
    date8.style.display = "block";
    date2.style.display = "none";
    date3.style.display = "none";
    date4.style.display = "none";
    date5.style.display = "none";
    date6.style.display = "none";
    date7.style.display = "none";
    date1.style.display = "none";
  }
}

function retour() {
  document.getElementById("Timeline").style.transform =
    "translate3d(0px, 0, 0)";
  document.getElementById("Timeline").style.transitionDuration = "1s";
  history1.style.display = "none";
  history2.style.display = "none";
  history3.style.display = "none";
  history4.style.display = "none";
  history5.style.display = "none";
  history6.style.display = "none";
  history7.style.display = "none";
  history8.style.display = "none";
  date5.style.display = "none";
  date2.style.display = "none";
  date3.style.display = "none";
  date4.style.display = "none";
  date1.style.display = "none";
  date6.style.display = "none";
  date7.style.display = "none";
  date8.style.display = "none";
}
