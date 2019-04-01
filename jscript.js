/* function to remove inspect elements  */
/* I used this as reference https://codepen.io/Nielssg/pen/pbroPW  */

alert("Hello ! If The Website Content Does Not Appear Automatically Please Do Refresh The Page Instead. My Website is Optimize and Tested for Google Chrome but for Other Browser It Is Something That I cannot Guarantee.\n\nBut I'm Doing My Best To Improve It.\n\nThank You.\n  James.. ");

document.addEventListener('keydown', function() {
if (event.keyCode == 123) {
 alert("Ooops. I'm so sorry, But I decided to disable this function.");
  window.event.returnValue = false;
} else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
alert("Ooops. I'm so sorry, But I decided to disable this function.");

window.event.returnValue = false;
} else if (event.ctrlKey && event.keyCode == 85) {
 alert("Ooops. I'm so sorry, But I decided to disable this function.");
 window.event.returnValue = false;
}
}, false);

if (document.addEventListener) {
document.addEventListener('contextmenu', function(e) {
alert("Ooops. I'm so sorry, But I decided to disable this function.");
  e.preventDefault();
}, false);
} else {
document.attachEvent('oncontextmenu', function() {
alert("Ooops. I'm so sorry, But I decided to disable this function.");
  window.event.returnValue = false;
});
}



