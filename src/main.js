import './assets/main.scss';

var canvas = document.getElementById('app');
var ctx = canvas.getContext('2d');

var step = 1;
var vw = 800;
var vh = vw * 2 / 3;
canvas.width = vw;
canvas.height = vh;
var time = 0;

function degToPi(deg) {
  return deg / 360 * 2 * Math.PI;
}

function drawGrid() {
  let span = 50;
  ctx.beginPath()
  for (let i = 0; i < vw; i += span) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, vh);
  }
  for (let i = 0; i < vh; i += span) {
    ctx.moveTo(0, i);
    ctx.lineTo(vw, i);
  }

  ctx.strokeStyle = 'rgba(255,255,255,0.2)'
  ctx.stroke();
}

function drawBackground() {
  ctx.fillStyle = '#001d2e'
  ctx.fillRect(0, 0, vw, vh)
}

// function step1() {

//   function draw() {
//     requestAnimationFrame(draw);
//     drawBackground()
//     drawGrid()

//     ctx.save()
//     ctx.translate(vw / 2, vh / 2);

//     ctx.beginPath()
//     ctx.lineWidth = 0.5
//     ctx.arc(0, 0, 220, 0, degToPi(360));
//     ctx.strokeStyle = "rgba(255,255,255,.4)"
//     ctx.stroke();

//     ctx.beginPath()
//     ctx.lineWidth = 2
//     ctx.arc(0, 0, 150, 0, degToPi(360));
//     ctx.strokeStyle = "white"
//     ctx.stroke();
//     ctx.restore()
//     ctx.beginPath();

//     // R //
//     ctx.moveTo(431.2, 213.5);
//     ctx.bezierCurveTo(431.2, 216.2, 430.5, 218.8, 429.1, 221.1);
//     ctx.bezierCurveTo(427.7, 223.5, 425.6, 225.5, 422.8, 227.2);
//     ctx.bezierCurveTo(424.1, 227.7, 425.3, 228.4, 426.2, 229.3);
//     ctx.bezierCurveTo(427.2, 230.1, 428.0, 231.1, 428.6, 232.2);
//     ctx.bezierCurveTo(429.2, 233.3, 429.7, 234.5, 430.0, 235.7);
//     ctx.bezierCurveTo(430.3, 237.0, 430.4, 238.2, 430.4, 239.4);
//     ctx.lineTo(430.4, 248.3);
//     ctx.bezierCurveTo(430.4, 249.4, 430.7, 250.7, 431.2, 252.2);
//     ctx.bezierCurveTo(431.8, 253.7, 432.5, 255.2, 433.4, 256.8);
//     ctx.lineTo(422.1, 256.8);
//     ctx.bezierCurveTo(421.7, 256.1, 421.3, 255.4, 421.0, 254.6);
//     ctx.bezierCurveTo(420.8, 253.9, 420.6, 253.1, 420.4, 252.4);
//     ctx.bezierCurveTo(420.3, 251.7, 420.2, 251.0, 420.2, 250.3);
//     ctx.bezierCurveTo(420.1, 249.7, 420.1, 249.1, 420.1, 248.6);
//     ctx.lineTo(420.1, 239.3);
//     ctx.bezierCurveTo(420.1, 238.4, 419.9, 237.5, 419.6, 236.6);
//     ctx.bezierCurveTo(419.3, 235.7, 414.6, 238.1, 414.0, 237.4);
//     ctx.bezierCurveTo(413.3, 236.7, 416.6, 232.8, 415.5, 232.4);
//     ctx.bezierCurveTo(414.4, 231.9, 413.0, 231.7, 411.4, 231.7);
//     ctx.lineTo(395.8, 231.7);
//     ctx.lineTo(395.8, 256.8);
//     ctx.lineTo(385.5, 256.8);
//     ctx.lineTo(385.5, 195.6);
//     ctx.lineTo(411.4, 195.6);
//     ctx.bezierCurveTo(414.6, 195.6, 417.4, 196.1, 419.9, 197.2);
//     ctx.bezierCurveTo(422.3, 198.2, 424.4, 199.6, 426.1, 201.3);
//     ctx.bezierCurveTo(427.8, 203.0, 429.0, 204.9, 429.9, 207.0);
//     ctx.bezierCurveTo(430.8, 209.2, 431.2, 211.3, 431.2, 213.5);
//     ctx.closePath();
//     // R///
//     ctx.moveTo(395.8, 223.0);
//     ctx.lineTo(411.4, 223.0);
//     ctx.bezierCurveTo(412.7, 223.0, 413.9, 222.8, 415.0, 222.3);
//     ctx.bezierCurveTo(416.1, 221.9, 417.1, 221.3, 418.0, 220.5);
//     ctx.bezierCurveTo(418.9, 219.6, 419.6, 218.7, 420.0, 217.5);
//     ctx.bezierCurveTo(420.5, 216.4, 420.8, 215.1, 420.8, 213.8);
//     ctx.bezierCurveTo(420.8, 212.4, 420.6, 211.2, 420.1, 210.0);
//     ctx.bezierCurveTo(419.6, 208.8, 419.0, 207.9, 418.1, 207.0);
//     ctx.bezierCurveTo(417.3, 206.2, 416.3, 205.5, 415.2, 205.0);
//     ctx.bezierCurveTo(414.0, 204.6, 412.8, 204.3, 411.4, 204.3);
//     ctx.lineTo(395.8, 204.3);
//     ctx.lineTo(395.8, 223.0);
//     ctx.closePath();
//     ctx.fillStyle = 'white'
//     ctx.fill();

//     ctx.save()
//     ctx.translate(300, 300);
//     ctx.fillStyle = 'yellow'
//     ctx.fillRect(0, 0, 20, 40);
//     ctx.restore()
//   }

//   setInterval(draw, 30);
//   requestAnimationFrame(draw);
// }

step2()

function step2() {
  class Ship {
    constructor(args) {
      let def = {
        x: 0,
        y: 0,
        r: 50,
        deg: degToPi(180),
      }
      Object.assign(def, args);
      Object.assign(this, def);
    }
    draw() {

      ctx.rotate(this.deg);

      // fire
      ctx.fillStyle = 'white'
      ctx.fillRect(this.r + 5, -15 / 2, 10, 15);

      // dash 
      ctx.beginPath()
      ctx.arc(0, 0, this.r + 30, 0, 2 * Math.PI)
      ctx.strokeStyle = 'rgba(255,255,255,0.2)'
      ctx.stroke()

      // shield 
      ctx.beginPath()
      ctx.lineWidth = 5
      ctx.arc(0, 0, this.r + 40, Math.PI - degToPi(45), Math.PI + degToPi(45));
      ctx.strokeStyle = 'white'
      ctx.stroke()

      ctx.beginPath()
      ctx.lineWidth = 12;
      ctx.arc(0, 0, this.r, 0, Math.PI * 2);
      ctx.strokeStyle = 'white'
      ctx.shadowBlur = 20;
      ctx.shadowColor = 'white'
      ctx.stroke()

      for (let i = 0; i < 3; i++) {
        ctx.lineWidth = 5
        ctx.beginPath()
        ctx.moveTo(0, 0);
        ctx.lineTo(this.r, 0);
        ctx.stroke()
        ctx.rotate(2 * Math.PI / 3);
      }
    }
  }

  class Bullet {
    constructor(args) {
      let def = {
        x: 0,
        y: 0,
        v: {
          x: 0,
          y: 0
        }
      }
      Object.assign(def, args);
      Object.assign(this, def);
    }
    update() {
      this.x += this.v.x;
      this.y += this.v.y;
    }
    draw() {
      ctx.save()
      ctx.translate(this.x, this.y)
      ctx.beginPath()
      ctx.fillStyle = 'white'
      ctx.arc(0, 0, 3, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }
  }

  var ship;

  function draw() {
    requestAnimationFrame(draw);
    drawBackground()
    drawGrid()

    // ship
    ctx.save()
    ctx.translate(vw / 2, vh / 2)
    ship.draw();
    ctx.restore()

    bullets.forEach(b => b.draw())
  }
  var bullets = []

  function update() {
    ship.deg = mousePos.x / 100;
    time++;
    if (time % 10 == 0) {
      let b = new Bullet({
        x: vw / 2 + Math.cos(ship.deg) * ship.r,
        y: vh / 2 + Math.sin(ship.deg) * ship.r,
        v: {
          x: Math.cos(ship.deg) * 30,
          y: Math.sin(ship.deg) * 30
        }
      })
      bullets.push(b);
    }
    bullets.forEach(ele => {
      ele.update();
    })
  }

  function init() {
    ship = new Ship({
      x: 0,
      y: 0,
      deg: degToPi(0),
      r: 40
    })

  }

  init();
  setInterval(update, 30);
  requestAnimationFrame(draw);

  let mousePos = {
    x: 0,
    y: 0
  }
  canvas.addEventListener('mousemove', (e) => {
    // console.log(e.offsetX, e.offsetY)
    mousePos.x = e.offsetX;
    mousePos.y = e.offsetY;
  })
}
