//set canvas
var c = document.getElementById('canvas');
var ctx = c.getContext("2d");

resizeWindow();

// Default position
var DefaultPos = {x:0, y:0};

window.addEventListener('resize', resizeWindow);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

function setCanvasBG(){
	ctx.beginPath();
  ctx.rect(0, 0, c.width, c.height);
  ctx.fillStyle = "#1abc9c";
  ctx.fill();
}

//initialise canvas items
setCanvasBG();  //bg color



//window resize
function resizeWindow(){
	c.width  = window.innerWidth;
	c.height = window.innerHeight;
  setCanvasBG();  
  $('p').show();
}
//new mouse event position
function setPosition(e){
	DefaultPos.x = e.clientX;
	DefaultPos.y = e.clientY;
}
//drawing canvas object 
function draw(e){
  //left click define
  if (e.buttons !== 1) return;
 
	ctx.beginPath(); //path begin
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = "white";
  
  ctx.moveTo(DefaultPos.x, DefaultPos.y);
  setPosition(e);
  ctx.lineTo(DefaultPos.x, DefaultPos.y);
  
  ctx.stroke();
}

//save canvas
$("#save").click(function() {
  var html = " ";
  html += "<img src='" + c.toDataURL() + "' alt='from canvas'/>";
  var pageStyle = "<style>body{margin:0; padding: 0;}</style>";
  var tab = window.open();
  tab.document.write(html + pageStyle);
});

$('canvas, p').click(function(){
   $('p').hide();
});
//Clear canvas
$("#clear").click(function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
	setCanvasBG(); 
  $('p').show();
});





