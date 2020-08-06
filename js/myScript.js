/*eslint-disable*/
/*jslint plusplus: true, evil: true*/
/*global alert, confirm, console, prompt*/
/*jshint esversion: 6 */


//web on show on load
let spinner = document.getElementById('spinner');

window.onload = function () {

  setTimeout(function () {

    spinner.remove();

    document.body.style.overflow = "auto";

  }, 1000);

  setTimeout(function() {this.scrollTo(0, 0);},500);
};

//set height for slider
var upperBar = document.getElementById('upperBar'),

    sliderImg = document.getElementById('carousel'),

    overlay = document.getElementById('slideOverly'),

    upperH = upperBar.offsetHeight,

    windowH = window.innerHeight;


sliderImg.style.height = (windowH - upperH) + 'px';
overlay.style.height = (windowH - upperH) + 'px';

// scroll top
var btn = document.getElementById('goUp');

window.onscroll = function () {


  if (window.pageYOffset >= 500) {

      btn.style.opacity = "1";

  } else {

    btn.style.opacity = "0";
  }
};
//scroll to top on click
function scrollToTop(scrollDuration) {
 var scrollStep = -window.scrollY / (scrollDuration / 15),
   scrollInterval = setInterval(function(){
   if ( window.scrollY != 0 ) {
       window.scrollBy( 0, scrollStep );
   }
   else clearInterval(scrollInterval);
},15);
}

//create slider
var sliderImg = Array.from(document.querySelectorAll('.slides div')),

    sliderLength = sliderImg.length,

    activeSlide = 1,

    prev = document.getElementById('prev'),

    indicators = document.getElementById('indicators'),

    next = document.getElementById('next');

//create Ul

var ulElement = document.createElement('ul');

//set attribute
ulElement.setAttribute('id', 'list');

//add ul to the page
indicators.appendChild(ulElement);

//Li loope
for (var i = 1; i <= sliderLength; i++) {

  //create li
  var liItem = document.createElement('li');

  ulElement.appendChild(liItem);

  //add custome attribute
  liItem.setAttribute('data-slide', i);
}

//ul Arra
var ulArray = Array.from(document.querySelectorAll('#list li'));

    //addActiveClass
    function AddActiveClass() {

      'use strict';
      //trigger remove active fn
      RemoveActiveClass();

      sliderImg[activeSlide - 1].classList.add('active-slide');

      ulElement.children[activeSlide - 1].classList.add('active');

    }

AddActiveClass();

//Remove active class
function RemoveActiveClass() {
  'use strict';

  sliderImg.forEach(function (ech) {

    ech.classList.remove('active-slide');
  });

  ulArray.forEach(function (ech) {

    ech.classList.remove('active');
  });

  //add class of disable
  if (activeSlide == 1) {

    prev.classList.add('disabled');
  } else {

    prev.classList.remove('disabled');
  }

  if (activeSlide == sliderLength) {

    next.classList.add('disabled');
  } else {

    next.classList.remove('disabled');
  }
}

prev.onclick = function () {
  'use strict';

  if (this.classList.contains('disabled')) {

    //Do nothing
    return false;

  } else {

    activeSlide--;
    AddActiveClass();
  }
};

next.onclick = function () {
  'use strict';

  if (this.classList.contains('disabled')) {

    //Do Nothing
    return false;

  } else {

    activeSlide++;
    AddActiveClass();
  }
};

//activate indicators

for (var i = 0; i < ulArray.length; i++) {

  ulArray[i].onclick = function () {

    activeSlide = parseInt(this.getAttribute('data-slide'));
    AddActiveClass();
  };
}

// set timeout fn

setInterval( () => {

  let activeNo = Math.ceil(Math.random() * sliderLength);

  activeSlide = activeNo;
  AddActiveClass();
}, 6000);
