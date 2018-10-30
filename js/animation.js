
var audio = new Audio("song.mp3");
      var noiceSound = new Audio("../assets/noice.mp3")
      audio.play();
    function init() {
      setImgConsts();
      tidepod.style.top = rick.offsetTop + rick.height/2 + 25;
      pacman.style.top = rick.offsetTop + rick.height/2;
      // Let the fun (horror) begin!
      startPacman();
    }
      
    function setImgConsts() {
      var pacman = document.getElementById('pacman');
      var tidepod = document.getElementById('tidepod');
      var rick = document.getElementById('rick');
    }
      
      
    function mreset() {
        document.getElementById("rick").src = "rick.png";
    }
    function mopen() {
      document.getElementById("rick").src = "rickopen.png";
    }
    function mclose() {
      document.getElementById("rick").src = "rickclosed.png";
    }
      
    function chomp() {
      mopen();
      setTimeout(function(){mclose(); 
        pacman.style.visibility="hidden";
        tidepod.style.visibility="hidden";
        noiceSound.play();}, 500);
      setTimeout(mreset, 1000);
    }
      
    function startPacman() {
      let ppos = -100;
      let tpos = 0;
      let tdest = rick.offsetLeft + (rick.width-50)/2
      let incr = (rick.offsetLeft + (rick.width-50)/2)/10
      let instp = setInterval(frame, 300);
      
      function frame() {
//        console.log(pacman.offsetLeft);
//        console.log(tidepod.offsetLeft);
        if (tidepod.offsetLeft < tdest){ //240
//          console.log(tpos);
          pacman.style.left = ppos + 'px';
          tidepod.style.left = tpos + 'px';
          ppos += incr;
          tpos += incr;
        }
        else {
          chomp();
          clearInterval(instp);
          setTimeout(function(){audio.pause();}, 500);
          setTimeout(function(){location="https://google.com";}, 3000);
        }
      }
    }