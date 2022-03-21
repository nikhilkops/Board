let CanvasBoard = document.querySelector("canvas");
let tool = CanvasBoard.getContext("2d");
let body = document.querySelector("body");
let iX, iY, fX, fY, vX, vY;
let draw = false;
let w = CanvasBoard.getBoundingClientRect().left;
let h = CanvasBoard.getBoundingClientRect().top;
let cTool = "pencil";
document.body.style.cursor = "url('cursor/pecil.cur'),auto";
var x = document.getElementById("myRange");
var c = document.getElementById("head");
let first = 0;
let test=0;
CanvasBoard.height = window.innerHeight;
CanvasBoard.width = window.innerWidth;
tool.strokeStyle = c.value;
body.addEventListener("mousedown", function (down) {
  iX = down.clientX - w;
  iY = down.clientY - h;
    console.log(down);
  if (
    cTool == "pencil" ||
    cTool == "line" ||
    cTool == "eraser" ||
    cTool == "circle"
  ) {
    draw = true;
  }
});

body.addEventListener("mouseup", function (down) {
  fX = down.clientX - w;
  fY = down.clientY - h;
  if (cTool == "rectangle") {

    let wr = fX - iX;
    let hr = fY - iY;
    tool.beginPath();
    tool.strokeStyle = c.value;
    tool.globalCompositeOperation = "source-over";
    tool.lineWidth = x.value;
    tool.lineCap = "round";
    tool.strokeRect(iX + 5, iY + 35, wr, hr);
  }
  if (cTool == "line" && draw == true) {
    tool.beginPath();
    tool.globalCompositeOperation = "source-over";
    tool.strokeStyle = c.value;
    tool.moveTo(iX+5, iY + 35);
    tool.lineWidth = x.value;
    tool.lineCap = "round";
    tool.lineTo(fX+5, fY + 35);
    tool.stroke();
  }
  if (draw == true && cTool == "circle") {
    tool.beginPath();
    tool.globalCompositeOperation = "source-over";
    tool.strokeStyle = c.value;
    /* ctx.arc(x, y, radius, startAngle, endAngle[, counterclockwise] */
    tool.lineWidth = x.value;
    tool.ellipse(
      Math.abs(vX + iX) / 2,
      Math.abs(vY + iY) / 2,
      Math.abs(vX - iX) / 2,
      Math.abs(vY - iY) / 2,
      0,
      0,
      2 * Math.PI
    );
    tool.stroke();
  }
  if (cTool == "pencil" || cTool == "line" || cTool == "eraser") {
    draw = false;
    first = 0;
  }
});

body.addEventListener("mousemove", function (down) {
  vY = down.clientY - h + 35;
  vX = down.clientX - w;
  if (draw == true && cTool == "pencil") {
    tool.strokeStyle = c.value;
    tool.beginPath();
    if (first == 0) {
      tool.moveTo(iX, iY + 35);
      first++;
    } else {
      tool.moveTo(iX, iY);
    }

    tool.globalCompositeOperation = "source-over";
    tool.lineWidth = x.value;
    tool.lineCap = "round";
    tool.lineTo(vX, vY);
    tool.stroke();
    iX = vX;
    iY = vY;
  }

  if (draw == true && cTool == "eraser") {
    // tool
    tool.beginPath();
    tool.globalCompositeOperation = "destination-out";
    if (first == 0) {
      tool.moveTo(iX, iY + 25 + 5 + 2 + 2 + 4 + 2);
      first++;
    } else {
      tool.moveTo(iX, iY);
    }
    tool.lineWidth = x.value+5;
    tool.lineTo(vX, vY);
    tool.stroke();
    iX = vX;
    iY = vY;
  }
});
 