// routes and what not:

// import Game from "./models/game.json"

// incorrect guesses lead to loss of 1 life/hp dperhaps not even bother with life hp but delay users real world time(affects score)?

// low attach would have a range of 1-15/ (this value scales to hp of monster) mid attack 1-30 and so on 

// if math.r is greater or equal to .5 the attack is success if equal or less than .5 in order to add a success fail rate

// math.rand per monster to determine the spread of the "hp" that the random number can be generated in

//  <br> below is to add time to the experience

// logic that allows for "time outs" (delays game by 5min to 10 minutes)

// if math.rand is less  .1  monster regens health 

// 5% attacks are limited to 1pt hp attack

// monster might have ability to absorb damage

//  maybe add some damage boost? 

// object of power ups inside assign description ultra boost that picks a rnd boost 


  // more than likely the logic to go with..  

  // ===========Define Variables=====//
  //===============User=============//
  var user;
  //  = [
  //   {
  //   name: '',
  //   poke: poke,
  //   unapprovingGlare: unapprovingGlare,
  //   fryingPan: fryingPan,
  //   usedSpork: usedSpork,
  //   yoyo: yoyo
  //   }
  // ];
  // ==========Monster List=========//
  var monster =[
    {
    name: "sammie wilkonson",
    hp: 50,
    // heal:  randomNum(0.5),
    },
//     {
//     name: "Brian Wilanoski",
//     hp: 100,
//     // heal:  randomNum(0.5),
//     // shell: randomNum(0.5),
//     },
//     {
//     name: "Bobby Corwin",
//     hp: 150,
//     // heal:  randomNum(0.5),
//     // shell: randomNum(0.5),
//     // barrier: randomNum(0.5),
//     },
//     {
//     name: "Willie Freeman",
//     hp: 200,
//     // heal:  randomNum(0.5),
//     // shell: randomNum(0.5),
//     // barrier: randomNum(0.5),
//     }
 ];

 initUser(user, "user name", "user attacks");
 //  monster(monster, "monster hp");
 //Function InitUser
  //Sets up the initial battle screen
  function initUser(user){
    //Sets up HP and displays
    monster.hp = user;
  }
    //Sets up rest of stats
    // var tempStatString = "<p>poke<p> " + user.poke 
    //   + "</p><p>Unapproving Glare " + user.unapprovingGlare 
    //   + "</p><p>philosophy "+ user.philosophy 
    //   +"</p><p>used Spork " + user.usedSpork 
    //   +"</p><p>used yoyo " + user.yoyo
    //   + "</p>";
    //  document.getElementById(charStats_id).innerHTML = tempStatString;
  
    //Handles Damage and Hit Chance attack poke
    function poke(monster){
      var userRoll = roll(1,8);
      console.log("u",userRoll);
      var monsterRoll =roll(1,8);
      console.log('m',monsterRoll);
      if(userRoll >= monsterRoll){
        //hit monsterhp 
        monster.hp = monster.hp - userRoll;
        document.querySelector('#monster').innerHTML = monster.hp;

        console.log("hit")
        return true;
      }else{
        //miss 
        console.log('miss');
        return false;
      }
    }
  
      // Handles Damage and Hit Chance attack glare
    function unapprovingGlare(monster){
      var userRoll = roll(9,16);
      // console.log("u2",userRoll);
      var monsterRoll =roll(9,16);
      // console.log('m2',monsterRoll);
      if(userRoll >= monsterRoll){
        monster.hp = monster.hp - userRoll;
        document.querySelector('#monster').innerHTML = monster.hp;
        //hit 
        return true;
      }else{
        //miss 
        console.log('miss');
        return false;
      }
    }

    //Handles Damage and Hit Chance attack pan
  function fryingPan(user, monster){
    var userRoll = roll(17,32);
    // console.log("u3",userRoll);
    var monsterRoll =roll(17,32);
    // console.log('m3',monsterRoll);
    if(userRoll >= monsterRoll){
      monster.hp = monster.hp - userRoll;
      document.querySelector('#monster').innerHTML = monster.hp;
      //hit 
      return true;
    }else{
      //miss 
      console.log('miss');
      return false;
    }
  }

    //Handles Damage and Hit Chance attack Spork
    function usedSpork(user, monster){
      var userRoll = roll(33,64);
      // console.log("u4",userRoll);
      var monsterRoll =roll(33,64);
      // console.log('m4',monsterRoll);
      if(userRoll >= monsterRoll){
        //hit 
      monster.hp = monster.hp - userRoll;
      document.querySelector('#monster').innerHTML = monster.hp;
      return true;
    }else{
      //miss 
      console.log('miss');
      return false;
    }
  }

    //Handles Damage and Hit Chance attack yoyo
    function yoyo(user, monster){
      var userRoll = roll(65,125);
      // console.log("u",userRoll);
      var monsterRoll =roll(65,125);
      // console.log('m',monsterRoll);

      if(userRoll >= monsterRoll){
        //hit 
      monster.hp = monster.hp - userRoll;
      document.querySelector('#monster').innerHTML = monster.hp;
      return true;
    }else{
      //miss 
      console.log('miss');
      return false;
    }
  }

  //Simple Roll Function
    function roll(maxRoll, noOfDice){
      var total=0;
      for (var i=noOfDice; i>0; i--){
        var tempRoll = Math.ceil(Math.random() * 2 ); //maxRoll
        // console.log('t', tempRoll)
        total += tempRoll;
      }
      // console.log("roll", total)
        return total;
    }
 
  function damageHP(monster, damage){
    if(monster.hp - damage < 0){
      //dead
      monster.hp = 0;
      document.getElementById("monster_hp").innerHTML = "KOed";
      console.log("monster defeated you may pass");
    }else{
      monster.hp -= damage;
      document.getElementById("monster_hp").innerHTML = "HP " + monster.hp;
    }
  }