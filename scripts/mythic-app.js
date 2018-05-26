$(document).ready( () => {
  const $cards = $(".deck li");
  const $back = $('.deck li i');
  let moves = 0;
  let timer = [0, 0];
  let timeRunning = false;
  let timerFunc;
  let currentTime;
  let lockCounter = 0;
  const resetAudio = document.getElementById("reset-sound");
  const correctAudio = document.getElementById("correct-sound");
  const failAudio = document.getElementById("fail-sound");
  const flipAudio = document.getElementById("flip-sound");
  const winAudio = document.getElementById("win-sound");
  const starLossAudio = document.getElementById("star_loss-sound");
  const volOnAudio = document.getElementById("volume_on-sound");
  
  const shuffleDeck = [
    '<span><img src="../imgs/phoenix.svg" alt="Fiery phoenix creature">Phoenix</span>',
    '<span><img src="../imgs/phoenix.svg" alt="Fiery phoenix creature">Phoenix</span>',
    '<span><img src="../imgs/dragon.svg" alt="Green dragon">Dragon</span>',
    '<span><img src="../imgs/dragon.svg" alt="Green dragon">Dragon</span>',
    '<span><img src="../imgs/pegasus.svg" alt="Rearing pegasus">Pegasus</span>',
    '<span><img src="../imgs/pegasus.svg" alt="Rearing pegasus">Pegasus</span>',
    '<span><img src="../imgs/golem.svg" alt="Golem rock creature">Golem</span>',
    '<span><img src="../imgs/golem.svg" alt="Golem rock creature">Golem</span>',
    '<span><img src="../imgs/siren.svg" alt="Siren singing">Siren</span>',
    '<span><img src="../imgs/siren.svg" alt="Siren singing">Siren</span>',
    '<span><img src="../imgs/hydra.svg" alt="Hydra ready to attack">Hydra</span>',
    '<span><img src="../imgs/hydra.svg" alt="Hydra ready to attack">Hydra</span>',
    '<span><img src="../imgs/elf.svg" alt="Elf head, long pointy ears">Elf</span>',
    '<span><img src="../imgs/elf.svg" alt="Elf head, long pointy ears">Elf</span>',
    '<span><img src="../imgs/dwarf.svg" alt="Dwarf with helmet and thick beard">Dwarf</span>',
    '<span><img src="../imgs/dwarf.svg" alt="Dwarf with helmet and thick beard">Dwarf</span>'
  ];
  
  const score = [
    '<li><img src="../imgs/primary-star.svg"></li>',
    '<li id="second"><img src="../imgs/primary-star.svg" alt="golden star"></li>',
    '<li id="third"><img src="../imgs/primary-star.svg" alt="golden star"></li>',
    '<li id="fourth"><img src="../imgs/primary-star.svg" alt="golden star"></li>',
    '<li id="fifth"><img src="../imgs/primary-star.svg" alt="golden star"></li>'
  ];
  
  const emptyStar = ['<li><img src="../imgs/empty-star.svg" alt="empty star"></li>'];
  
  //shuffle the deck of cards randomly
  function shuffle() {
    let copy = shuffleDeck.slice(0); //make copy of shuffleDeck array
    let currentI = copy.length;
    let num = 0;
    
    while (currentI > 0) {
      let rand = Math.floor(Math.random() * currentI);
    
      $($cards[num]).append(copy[rand]);
      copy.splice(rand, 1);
      currentI--;
      num++;
    }
  }
  
  //reset game
  function reset() {
    resetAudio.play();
    moves = 0;
    $(".info div.reset").addClass("reset-animate");
    $(".count").remove();
    $(".moves").prepend('<span class="count"> - </span>');
    $("li.card").removeClass("correct");
    $("li.card").removeClass("selected");
    $(".deck li.card").find("span").remove();
    shuffle();
    $(".deck li span").addClass("default");
    $back.show();
    $(".rating li").remove();
    $(".rating").append(score);
    clearInterval(timerFunc);
    timer = [0, 0];
    timeRunning = false;
    $(".timer span").remove();
    $(".timer").append("<span>--:--</span>");
    lockCounter = 0;
    $("#mythic-win").hide();
    $("#mythic-text").remove();
    $(".modal-content img#reg-win").removeClass("default");
    $(".modal-content h2").removeClass("default");
    setTimeout(function resetAnim() {
      $(".info div").removeClass("reset-animate");
    }, 625);
  }
  
  //Check current move count to determine score
  function scoreCheck() {
    let copy = emptyStar.slice(0);
    switch (moves) {
      case 13:
        starLossAudio.play();
        $("#fifth").remove();
        $(".rating").append(copy);
        break;
      case 19:
        starLossAudio.play();
        $("#fourth").remove();
        $(".rating").append(copy);
        break;
      case 25:
        starLossAudio.play();
        $("#third").remove();
        $(".rating").append(copy);
        break;
      case 31:
        starLossAudio.play();
        $("#second").remove();
        $(".rating").append(copy);
        break;
    }
  }

  //Check to see if win condition is met
  function winCheck() {
    if ($("li.card.correct").length >= 14) {
        const $win = $(".correct");

        if ($win.length === 16) {
          let score = 0;
          let $rating = $(".rating li");
          let copyR = $rating.slice(0);
          
          clearInterval(timerFunc);
          $("p.cleanup").remove();
          
          $(".modal-content h2").after(`<p class="cleanup">You made ${moves} moves and scored a rating of: </p>`);
          
          while (score <= copyR.length) {
            $(".modal-content p").append(copyR[score]);
            score++;
          }
          
          $(".modal-content p").after(`<p class="cleanup">You took ${currentTime} to complete this game.</p>
            <p class="cleanup">Try to win in fewer moves and less time!</p>`);
          
          winAudio.play();
          
          if (moves <= 12) {
            $("#mythic-win").toggle();
            $("img#reg-win").addClass("default");
            $(".modal-content h2").addClass("default");
            $("#mythic-win").after('<h2 id="mythic-text">Mythic Victory! You are godlike!</h2>');
          }
          
          $(".modal").toggle();
      }
    }
  }
  
  //add leading 0's to timer
  function leadingZero(time) {
    if (time <= 9) {
      time = `0${time}`;
    }
    return time;
  }
  
  shuffle();
  const $front = $(".deck li span");
  $front.addClass("default");
  
  //on card click
  $($cards).click( (evt) => {
    if (!timeRunning) {
      timeRunning = true;
      timerFunc = setInterval(function runTimer() {
      timer[1]++;

      if (timer[1] > 59) {
        timer[1] = 0;
        timer[0]++;
      }

      currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]);
      $('.timer span').remove();
      $('.timer').append(`<span>${currentTime}<span>`);
      }, 1000);
    }
    
    //lock cards if 2 have already been selected
    const lockUnlock = function cardLock() {
        if (lockCounter === 2) {
          $('.card').addClass("lock");
        } else {
          $('.card').removeClass("lock");
        }
      }
    
    lockCounter++;
    let cur = evt.currentTarget;
    $(cur).find("i").toggle();
    $(cur).find("span").toggle();
    $(cur).addClass("selected");
    const $selection = $(".selected");
    setTimeout(lockUnlock, 0);
    flipAudio.play();
    
    //selection check
     setTimeout(function check() {
        if ($selection.length === 2) {
          let select1 = $selection[0].textContent;
          let select2 = $selection[1].textContent;
          let correct1 = $selection[0];
          let correct2 = $selection[1];

          if (select1 === select2) {
            correctAudio.play();
            $(correct1).addClass("correct");
            $(correct2).addClass("correct");
            $("li.card.correct span").removeClass("default");
            $("li.card").removeClass("selected");
            moves++;
            scoreCheck();
            $(".count").remove();
            $(".moves").prepend('<span class="count">' + moves + '</span>');
            lockCounter = 0;
            winCheck();
          } else {
            failAudio.play();
            $(".selected").addClass("incorrect");
            $($cards).removeClass("selected");
            $(".default").hide();
            $(".default").prev().show();
            $("li.card").removeClass("selected");
            moves++;
            scoreCheck();
            $(".count").remove();
            $(".moves").prepend('<span class="count">' + moves + '</span>');
            setTimeout(function wrongAnim() {
              $("li.card").removeClass("incorrect");
            }, 425);
            lockCounter = 0;
          }
        }
     }, 500);
    
    setTimeout(lockUnlock, 510);
    
  });
  
  $("div.sound").click( () => {
    $("#mute").toggle();
    $("#play").toggle();
    if (resetAudio.muted === true){
      volOnAudio.play();
      resetAudio.muted = false;
      failAudio.muted = false;
      correctAudio.muted = false;
      flipAudio.muted = false;
      winAudio.muted = false;
      starLossAudio.muted = false;
    } else {
      resetAudio.muted = true;
      failAudio.muted = true;
      correctAudio.muted = true;
      flipAudio.muted = true;
      winAudio.muted = true;
      starLossAudio.muted = true;
    }
  });
  
  $(".play-again").click( () => {
    reset();
    $(".modal").toggle();
  });
  
  $(".close").click( () => {
    $(".modal").toggle();
  });
  
  $(".reset").click( () => {
    reset();
  });
  
});