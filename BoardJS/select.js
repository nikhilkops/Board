let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let line = document.querySelector("#line");
let rectangle = document.querySelector("#Rectangle");
let Upload = document.querySelector("#Upload");
let Download = document.querySelector("#Download");
let undo = document.querySelector("#undo");
let redo = document.querySelector("#redo");
let note = document.querySelector("#note");
let clear = document.querySelector("#clear");
let circle = document.querySelector("#circle");
pencil.addEventListener("click", function () {
  cTool = "pencil";

  document.body.style.cursor = "url('cursor/pecil.cur'),auto";
});
rectangle.addEventListener("click", function () {
  cTool = "rectangle";

  document.body.style.cursor = "url('cursor/rectangle.cur'),auto";
});
line.addEventListener("click", function () {
  cTool = "line";
  document.body.style.cursor = "url('cursor/line.cur'),auto";
});
circle.addEventListener("click", function () {
  cTool = "circle";
  document.body.style.cursor = "url('cursor/circle.cur'),auto";
});
undo.addEventListener("click", function () {
  alert("Available Soon!....");
});
redo.addEventListener("click", function () {
  alert("Available Soon!....");
});
eraser.addEventListener("click", function () {
  cTool = "eraser";
  document.body.style.cursor = "url('cursor/eraser.cur'),auto";
});
Upload.addEventListener("click", function () {
  alert("Available Soon!....");
});
Download.addEventListener("click", function () {
  let name = prompt("Enter Name of the Image");
  if (!!name) {
    var link = document.createElement("a");
    link.download = name + ".png";
    link.href = document.querySelector("canvas").toDataURL();
    link.click();
  } else {
    alert("Please Enter  Name of file ");
  }
});
note.addEventListener("click", function () {
  cTool = "note";
});

clear.addEventListener("click", function () {
  let bar = confirm("Confirm Clear");

  if (bar == true) {
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
});
