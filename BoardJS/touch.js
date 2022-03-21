body.addEventListener("touchstart", function (down) {
    iX = down.touches[0].pageX - w;
    iY = down.touches[0].pageY - h;
    console.log("start"+ down.targetTouches[0].force);

    if (
      cTool == "pencil" ||
      cTool == "line" ||
      cTool == "eraser" ||
      cTool == "circle"
    ) {
      draw = true;
    }
    // console.log(iX+y)
  },false);
  
  body.addEventListener("touchend", function (down) {
    fX = down.changedTouches[0].pageX - w;
    fY = down.changedTouches[0].pageY - h;
    console.log(down);
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
  },false);
  
  body.addEventListener("touchmove", function (down) {
    console.log(down);  
    vY = down.touches[0].pageY - h + 25 + 5 + 2 + 2 + 2 + 4;
    vX = down.touches[0].pageX - w;
    if (draw == true && cTool == "pencil") {
      document.body.style.cursor = "url('cursor/pecil.cur'),auto"; tool.strokeStyle = c.value;
      tool.beginPath();
      if (first == 0) {
        tool.moveTo(iX, iY +  35);
        first++;
      } else {
        tool.moveTo(iX, iY);
      }
  
      tool.globalCompositeOperation = "source-over";
      tool.lineWidth = x.value*down.targetTouches[0].force;
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
        tool.moveTo(iX, iY +  35);
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
  },false);

  