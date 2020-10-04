window.onload = function() {
  if (localStorage.darkmode == "on") {
    let element = document.querySelector('body');
    element.classList.add('darkmode');
  }

  if (localStorage.language == "de") {
    let element = document.querySelector('body');
    element.classList.add('language-de');
  }
}

let lazy = lazyload();

setTimeout(function(){
  let element = document.querySelector('body');
  element.classList.remove('intro');
}, 200);


function setClass(className) {
  let element = document.getElementById('app');
  element.classList.remove('page-animate-in');
  element.classList.add('page-animate-out');

  setTimeout(function(){
    scrollTo(document.body, 0, 100);
    element.className = className;

    setTimeout(function(){
      element.classList.add('page-animate-in');
    }, 200);

  }, 200);
}

function toggleDarkmode() {
  let element = document.querySelector('body');

  if (localStorage.darkmode == "on") {
    localStorage.setItem("darkmode", "off");
    element.classList.remove('darkmode');
  } else {
    localStorage.setItem("darkmode", "on");
    element.classList.add('darkmode');

  }
}

function toggleLanguage() {
  let element = document.querySelector('body');

  if (localStorage.language == "de") {
    localStorage.setItem("language", "en");
    element.classList.remove('language-de');
  } else {
    localStorage.setItem("language", "de");
    element.classList.add('language-de');
  }
}
