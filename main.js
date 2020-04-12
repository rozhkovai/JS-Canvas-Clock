var pmCanvas = document.getElementById("pmCanvas");
var ctx = pmCanvas.getContext("2d"); 
var radius = pmCanvas.height/2;
var image = document.getElementById('source');


    ctx.translate(radius,radius);
     radius = radius*0.90;
     drawClock();
     setInterval(drawClock,1000);
     function drawClock(){
      drawFace(ctx, radius);
      drawNumbers(ctx, radius);
      drawTime(ctx, radius);
     }
     function drawFace(ctx,radius){
      var grad;
      ctx.beginPath();
      ctx.arc(0,0,radius,0,2*Math.PI);
      ctx.fillStyle = "#ffff66";
      ctx.fill();
      grad = ctx.createRadialGradient(0,0,radius*0.95,0,0,radius*1.05);
      grad.addColorStop(0,'#66ffff');
      grad.addColorStop(0.5, 'purple');
      grad.addColorStop(1, 'orange');
      ctx.strokeStyle = grad;
      ctx.lineWidth =radius*0.1;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0,0,radius*0.1,0,2*Math.PI);
      ctx.fillStyle = "red";
      ctx.fill();
     }
     function drawNumbers(ctx,radius){
      var angle;
      var number;
      ctx.font = radius*0.15 + "px arial";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      
       
        for (i = 1; i <= 60; i++) {
            ang = Math.PI / 30 * i;
            sang = Math.sin(ang);
            cang = Math.cos(ang);
           
            if (i % 5 == 0) {
                ctx.lineWidth = 5;
                sx = sang * 115;
                sy = cang * -115;
                ex = sang * 140;
                ey = cang * -140;
                nx = sang * 100;
                ny = cang * -100;
        ctx.fillStyle = "red";
                ctx.fillText(i / 5, nx, ny);
                
            } else {
                ctx.lineWidth = 2;
                sx = sang * 120;
                sy = cang * 120;
                ex = sang * 130;
                ey = cang * 130;

            }
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.lineTo(ex, ey);
            ctx.stroke();
        }
     }
     function drawTime(ctx,radius){
          var now = new Date();
          var hour = now.getHours();
          var minute = now.getMinutes();
          var second = now.getSeconds();
          hour = hour%12;
          hour = (hour*Math.PI/6) + (minute*Math.PI/(6*60) ) + (second*Math.PI/(360*60));
          drawHand(ctx, hour, radius*0.5, radius*0.07);
          minute = (minute*Math.PI/30) + (second *Math.PI/(30*60));
          drawHand(ctx,minute,radius*0.75,radius*0.06);
          second  = (second*Math.PI/30);
          drawHand(ctx,second,radius*0.9,radius*0.02);
     }    
     function drawHand(ctx ,pos, length, width){
          ctx.beginPath();
          ctx.lineWidth = width;
          ctx.lineCap = "round";
          ctx.moveTo(0,0);
          ctx.rotate(pos);
          ctx.lineTo(0,-length);
          ctx.stroke();
          ctx.rotate(-pos);
     } 
var d = new Date();
var month = new Array("Января","Февраля","Марта","Апреля","Мая","Июня",
"Июля","Августа","Сентября","Октября","Ноября","Декабря");
document.write(d.getDate()+ " " + month[d.getMonth()]);



