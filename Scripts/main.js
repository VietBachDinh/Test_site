var myImage = document.querySelector('img');

myImage.onclick=function(){
  var mysrc=myImage.getAttribute('src');
  if(mysrc==='Images/signs.jpg') {
    myImage.setAttribute('src','Images/geralt.jpg');
  } else {
    myImage.setAttribute ('src','Images/signs.jpg');
  }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter thou name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome, ' + myName;
}
if (!localStorage.getItem('name')) {
  setUserName();

} else {
  var storedName=localStorage.getItem('name');
  myHeading.textContent= 'Welcome,'+storedName;
}
myButton.onclick=function(){
  setUserName();
}
