//import { Button } from './classes.js';

//CLASSES

class InputClass {
    constructor(mouseX, mouseY, mouseDown, mouseUpThisFrame) {
        this.mouseX = mouseX;
        this.mouseY = mouseY;
        this.mouseDown = mouseDown;
      }
}

class Button {
    constructor(x, y, height, width, hovering, colourNormal, colourHover, colourPress, OnMouseDown) {
      this.height = height;
      this.width = width;
      this.x = x;
      this.y = y;
      this.hovering = false;
      this.colourNormal = colourNormal;
      this.colourHover = colourHover;
      this.colourPress = colourPress;
      this.OnMouseDown = false;
    }


    Update() {

        if (Input.mouseX > this.x && Input.mouseY > this.y)
        {
            if (Input.mouseX < this.x + this.width && Input.mouseY < this.y + this.height)
            {
                this.hovering = true;
            }
        }

        if (this.hovering && Input.mouseUpThisFrame)
        {
            this.OnMouseDown = true;
        }

        this.Draw();
      }

    Draw() {
        if (this.hovering)
        {
            ctx.fillStyle = this.colourHover;
        }
        else
        {
            ctx.fillStyle = this.colourNormal;
        }

        if (this.hovering && Input.mouseDown)
        {
            ctx.fillStyle = this.colourPress;
        }

        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

var Input = new InputClass();

var icon = new Image();
icon.src = 'Icon.png';


const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const panel = document.getElementById('panel');

function Update()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgb(21, 21, 21)';

    ctx.fillRect(0, 0, canvas.width, 30);

    

    const p = new Button();
    p.x = 0;
    p.y = 30;
    p.width = 50;
    p.height = 25;
    p.colourHover = 'rgb(83, 83, 83)';
    p.colourNormal = 'rgb(15, 15, 15)';
    p.colourPress = 'rgb(47, 47, 47)';

    p.Update();

    const q = new Button();
    q.x = 50;
    q.y = 30;
    q.width = 500;
    q.height = 25;
    q.colourHover = 'rgb(83, 83, 83)';
    q.colourNormal = 'rgb(15, 15, 15)';
    q.colourPress = 'rgb(47, 47, 47)';

    q.Update();


    console.log(p.OnMouseDown);

    
    ctx.font = "14px Arial";
    ctx.fillStyle = 'rgb(93, 93, 93)';
    ctx.fillText("File", 5, 41);

    ctx.font = "19px Arial";
    ctx.fillText("GDMod  -  Seggs-Mode.gdmm", 30, 22);

    ctx.drawImage(icon, 3, 3, 23, 23);

    ctx.fillStyle = 'rgb(15, 15, 15)';

    ctx.fillRect(0, 55, 50, canvas.height);


    window.requestAnimationFrame(Update);
    if (Input.mouseUpThisFrame)
    {
        Input.mouseUpThisFrame = false;        
    }
}


const start = () => {
    window.requestAnimationFrame(Update);
  }
window.addEventListener('load', start);





canvas.addEventListener("mousemove", function(e) { 
    var cRect = canvas.getBoundingClientRect();        // Gets CSS pos, and width/height
    var canvasX = Math.round(e.clientX - cRect.left);  // Subtract the 'left' of the canvas 
    var canvasY = Math.round(e.clientY - cRect.top);   // from the X/Y positions to make  
                                                       // (0,0) the top left of the canvas

    Input.mouseX = canvasX;
    Input.mouseY = canvasY;
});

const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    panel.style.width = window.innerWidth;

    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }
  
resize();
window.addEventListener('resize', resize);

const onMouseDown = () => {
    Input.mouseDown = true;
  }
const onMouseUp = () => {
    Input.mouseDown = false;
    Input.mouseUpThisFrame = true;
  }
window.addEventListener('mousedown', onMouseDown);
window.addEventListener('mouseup', onMouseUp);