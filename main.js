var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 200;
block_image_height = 210;

var block_image_object= "";

function new_image(get_image)
{
	  fabric.Image.fromURL(get_image, function(Img){
      block_image_object = Img;

      block_image_object.scaleToWidth(block_image_width);
	  block_image_object.scaleToHeight(block_image_height);
	  block_image_object.set({
	  top:block_y,
	  left:block_x
	  });
      canvas.add(block_image_object);
	  });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
	{
		block_x =10;
		new_image('robin.png');
		console.log("r");
	}
	if(keyPressed == '67')
	{
		block_x = 249;
		new_image('cyborg : victor.jpeg');
		console.log("c");
	}
	
	if(keyPressed == '65')
	{
		block_x =420;
		new_image('raven.png');
		console.log("a");
	}
	if(keyPressed == '83')
	{
		block_x = 660;
		new_image('starfire.jpeg');
		console.log("s");
	}
	if(keyPressed == '66')
	{
		block_x = 1000;
	    new_image('beast boy.png');
		console.log("b");
	}
	
}

