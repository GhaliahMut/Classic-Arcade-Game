// Enemies our player must avoid
/*let interval;
let endGame =  false;
let timer = document.querySelector(".timer");
timer.innerHTML = "0 mins : 0 secs";*/ 

// Enemies Class
var Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Calculate Enemies Position and Speed
Enemy.prototype.update = function(dt) {
	this.x += this.speed *dt;

	if (this.x > 510) {
		this.x = -50;
		this.speed = 100 + Math.floor(Math.random() * 222);
	}

// Move Player to the his initial place if collision occures
	if (player.x < this.x + 80 && player.x + 80 > this.x && player.y < this.y + 60 && player.y + 60 > this.y) {
		player.x = 202;
		player.y = 405;	
	}
}

// Draw the Enimes on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}


// Player Class
var Player = function(x,y) {
	this.x = x;
	this.y =y;
	this.player = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {

}

// Draw the Player on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
}

// Handle Player Movement and its location through keyboard clicks
Player.prototype.handleInput = function(keyClicked) {
	
	if (keyClicked == 'left' && this.x > 0) {
		this.x -= 102;
	}

	if (keyClicked == 'right' && this.x < 405) {
		this.x += 102;
	}

	if (keyClicked == 'up' && this.y > 0) {
		this.y -= 83;
	}

	if (keyClicked == 'down' && this.y < 405) {
		this.y += 83;
	}


// Player wins when reaching water
	if (this.y < 0) {
		setTimeout (function () {
			player.x = 202;
			player.y = 405;
			console.log('YOU WON!');
			sweetAlert('Congratulations! <i class="em em-dancers"></i>','You have reached to the safe zone!','success', 'Play again', 'Stay Here');
		}, 600);
	}
}

// Instantiate allEnimes Objects and their location
var allEnemies = [];
var enemySpot = [63, 147, 230];
enemySpot.forEach (function (locationE) {
	enemy = new Enemy(0, locationE, 150);
	allEnemies.push(enemy);
});

// Instantiate Player Object
var player = new Player(202, 405);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// SweetAlert Winning Message
function sweetAlert(titleMessage, textMessage ,typeMessage, confirmbtnText = null, cancelbtnText = null , confirmStyle = null){
    swal({
      title: titleMessage,
      text: textMessage,
      type: typeMessage,
      showCancelButton: cancelbtnText ? true : false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: confirmbtnText,
      cancelButtonText: cancelbtnText,
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        swal({
          title: 'Reloading' ,
          text:  'HAVE FUN!',
          type : 'success',
          timer : 2500
        })

        setTimeout(function(){
            window.location.reload();
        }, 2000);

      } else if (result.dismiss === 'cancel') {
        swal({
          title: 'Cancelled',
          text: 'Refresh the page to play again',
          type: 'info',
          animation: false,
          customClass: 'markedAsUnmatched tada',
          timer: 2000
        })
      }
    })

}

/*// calculate playing time

function getTimer(){
	return $('#timer').text();
};

let second = 0, minute = 0; hour = 0;
function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+" mins "+" : "+second+" secs";
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}*/