export class Button {
    constructor(x, y, height, width, hovering, colourNormal, colourHover, colourPress, OnMouseDown) {
      this.height = height;
      this.width = width;
      this.x = x;
      this.y = y;
      this.hovering = false;
      this.colourNormal = colourNormal;
      this.colourHover = colourHover;
      this.colourPress = colourPress;
      this.OnMouseDown = OnMouseDown;
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
            this.OnMouseDown();
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

    OnMouseDown() {
        return this.height * this.width;
      }
  }