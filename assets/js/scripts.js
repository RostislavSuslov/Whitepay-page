const socialList = document.querySelector('.person-info__social');
const personPhoto = document.querySelector('.person-photo img');
let socialListItem = document.querySelectorAll('.person-info__social-item');
const page = document.querySelector('.person-page');

socialListItem.length == 4 ? socialList.style.width = 100+"%" : null;
socialListItem.length == 5 ? personPhoto.classList.add('small-photo') : null;


var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if(isSafari){
    page.classList.add('safary')
} 
	
 