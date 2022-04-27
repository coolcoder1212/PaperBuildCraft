var canvas = new fabric.Canvas('myCanvas');

block_height = 30;
block_width = 30;

player_x = 100;
player_y = 100;

player_object = "";
block_object = "";

function playerupdate() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(140);
        player_object.scaleToHeight(150);
        player_object.set({
        top: player_y, left: player_x
    });
    canvas.add(player_object);
    });
}

function new_block(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
        top: player_y, left: player_x
    });
    canvas.add(block_object);
    });
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    keypressed = e.keyCode;
    console.log(keypressed)
    if (keypressed == "37") {
        left();
        console.log("Left key pressed");
    }
    if (keypressed == "38") {
         up();
        console.log("Up key pressed");
    }
    if (keypressed == "40") {
        down();
        console.log("Down key pressed");
    }
    if (keypressed == "39") {
        right();
        console.log("Right key pressed");
    }
    if (keypressed == "66") {
        new_block("brick.jpg");
        console.log("B key pressed")
    }
    if (keypressed == "84") {
        new_block("trunk.jpg");
        console.log("T key pressed")
    }
    if (keypressed == "71") {
        new_block("grass.png");
        console.log("G key pressed")
    }
    if (keypressed == "76") {
        new_block("leaves.png");
        console.log("L key pressed")
    }
    if (keypressed == "83") {
        new_block("sandstone.png");
        console.log("S key pressed")
    }
    if (keypressed == "78") {
        new_block("netherrack.jpg");
        console.log("N key pressed")
    }
    if (keypressed == "82") {
        new_block("rock.jpg");
        console.log("R key pressed")
    }
    if (keypressed == "85") {
        new_block("uniquestone.png");
        console.log("U key pressed")
    }
    if (keypressed == "68") {
        new_block("dirt.png");
        console.log("D key pressed")
    }

    if (e.shiftKey == true && keypressed == "80") {
        console.log("P key and shift key pressed together")
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }
    if (e.shiftKey == true && keypressed == "77") {
        console.log("M key and shift key pressed together")
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }
}

function up() {
    if (player_y > 0) {
        player_y = player_y - block_height;
        console.log("block_image height = " + block_height);
        console.log("When the up key is pressed, the x and y coordinates =" + block_width + " , " + block_height);
        canvas.remove(player_object);
        playerupdate();
    }
}

function down() {
    if (player_y < 510) {
        player_y = player_y + block_height;
        console.log("block_image height = " + block_height);
        console.log("When the up key is pressed, the x and y coordinates =" + block_width + " , " + block_height);
        canvas.remove(player_object);
        playerupdate();
    }
}

function left() {
    if (player_x > 0) {
        player_x = player_x - block_width;
        console.log("block_image width = " + block_width);
        console.log("When the up key is pressed, the x and y coordinates =" + block_width + " , " + block_height);
        canvas.remove(player_object);
        playerupdate();
    }
}

function right() {
    if (player_x < 1400) {
        player_x = player_x + block_width;
        console.log("block_image width = " + block_width);
        console.log("When the up key is pressed, the x and y coordinates =" + block_width + " , " + block_height);
        canvas.remove(player_object);
        playerupdate();
    }
}