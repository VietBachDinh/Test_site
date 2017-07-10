var myimage = document.querySelector('img');

myimage.onclick=function(){
  var mysrc=myimage.getAttribute('src');
  if(mysrc==='Images/signs.jpg') {
    myimage.setAttribute('src','Images/geralt.jpg');
  } else {
    myimage.setAttribute ('src','Images/signs.jpg');
  }
}
var mybutton = document.querySelector('button');
var mybutton=document.querySelector('h1')
function setUserName() {
  var myname=prompt('Please enter thou name.');
  localStorage.setItem('name', myname);
  myHeading.textContent= 'Welcome,'+myname;
}
if (!localStorage.getItem('name')) {
  setUserName();

} else {
  var storedName=localStorage.getItem('name');
  myHeading.textContent= 'Welcome,'+storedName;
}
mybutton.onclick=function(){
  setUserName();
}
