let menuToggle = document.querySelector(".dcContainer");
let menuBox = document.querySelector(".menuContainer");
let noificationButton = document.querySelector(".notification");
let alertBox = document.querySelector(".alertBox");
let ctaCancel = document.querySelectorAll(".ctaCancelButton, #ctaCancel");
let ctaContainer = document.querySelector('.ctaContainer');
let searchContainer = document.querySelector("#search_container");
let searchInput = document.querySelector("#searchInput");
let accordionItems = document.querySelector('.accordionItems');

let arrowDown = document.querySelector(".setup-container__down_btn");
let arrowUp = document.querySelector(".setup-container__up_btn");

let SetupSteps = document.querySelector(".accordion");
let progressNum = document.querySelector("#completed_indicator");
let progressBar = document.querySelector("#progress-bar-fill");
let checkBox = document.querySelectorAll(".accordion label");
let summarys = document.querySelectorAll(".accordion__content summary");


// Search bar focus and pressed logic
searchInput.addEventListener("focus", () => {
  searchContainer.classList.add("focus");
});

searchInput.addEventListener('blur', () => {
  searchContainer.classList.remove('focus');
});

ctaCancel.forEach(function(element) {
  element.addEventListener('click', function() {
    ctaContainer.style.display = 'none';
  });
})

function toggleAccordion() {
  if (accordionItems.style.display === 'none') {
    accordionItems.style.display = 'block';
    accordionIcon.src = 'https://crushingit.tech/hackathon-assets/icon-arrow-up.svg';
  } else {
    accordionItems.style.display = 'none';
    accordionIcon.src = 'https://crushingit.tech/hackathon-assets/icon-arrow-down.svg';
  }
}

function toggleMenu() {
  if (menuBox.style.visibility == "visible") {
    menuBox.style.visibility = "hidden";
  } else {
    menuBox.style.visibility = "visible";
  }
}

function notificationMenu() {
  if (alertBox.style.visibility == "visible") {
    alertBox.style.visibility = "hidden";
  } else {
    alertBox.style.visibility = "visible";
  }
}

ctaCancel.forEach(function (element) {
  element.addEventListener('click', function () {
    ctaContainer.classList.add('hidden');
  });
});

// Arrow toggle and onBoarding display logic
arrowDown.addEventListener("click", () => {
  arrowDown.style.display = "none";
  arrowUp.style.display = "flex";
  SetupSteps.style.display = "grid";
});

arrowUp.addEventListener("click", () => {
  arrowDown.style.display = "flex";
  arrowUp.style.display = "none";
  SetupSteps.style.display = "none";
});


// Make accordion to expand one at a time and checked accordion opens the next unchecked accordion
summarys.forEach((summary) => (
  summary.addEventListener("click", () => {
    let details = document.body.querySelectorAll("details");
    details.forEach((e) => {
      e.hasAttribute('open') ? e.removeAttribute("open") : "";
    });
  
    let nextStage = Array.from(checkBox).find((e) => e.dataset.completed === "");
    if (nextStage) {
      nextStage.parentElement.parentElement.open = true;
      nextStage.parentElement.parentElement.ariaExpanded = "true";
      details[0].removeAttribute('open');
    } 
    })
))

// stage completion feature
checkBox.forEach((btn) => {
  btn.addEventListener("click", function () {
    btn.dataset.completed = btn.dataset.completed ? "" : "true";
    let completedStages = getCompletedStages();
    progressNum.textContent = completedStages;

    // register progress on progress bar
    progressBar.value = completedStages;

    
  });
});

// Get number of completed stages
function getCompletedStages() {
  return document.querySelectorAll("[data-completed=true]").length;
}