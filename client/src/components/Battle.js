import React from "react";


  // ===========Define Variables=====//
  //===============User=============//
  var user;
  //==============Monster List======//
  var monster =[
    {
    name: "sammie wilkonson",
    hp: 50,
    // heal:  randomNum(0.5),
    },
    {
    name: "Brian Wilanoski",
    hp: 100,
    // heal:  randomNum(0.5),
    // shell: randomNum(0.5),
    },
    {
    name: "Bobby Corwin",
    hp: 150,
    // heal:  randomNum(0.5),
    // shell: randomNum(0.5),
    // barrier: randomNum(0.5),
    },
    {
    name: "Willie Freeman",
    hp: 200,
    // heal:  randomNum(0.5),
    // shell: randomNum(0.5),
    // barrier: randomNum(0.5),
    }
 ];

 function Battle(props) {
  console.log("Battle", props);
    // initUser(user, "user name", "user attacks");
    //     //  monster(monster, "monster hp");
    //     //Sets up the initial battle screen
    // function initUser(user){
    //     //Sets up HP and displays
    //     monster.hp = user;
    // }  

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
  function fryingPan(monster){
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
    function usedSpork(monster){
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
    function yoyo(monster){
      var userRoll = roll(65,125);
      // console.log("u",userRoll);
      var monsterRoll =roll(65,125);
      // console.log('m',monsterRoll);

      if(userRoll >= monsterRoll){
        //hit 
      monster.hp = monster.hp - userRoll;
      return true;
    }else{
      //miss 
      console.log('miss');
      return false;
    }
  }

  //Simple Roll Function
    function roll(noOfDice){
      var total=0;
      for (var i=noOfDice; i>0; i--){
        var tempRoll = Math.ceil(Math.random() * 2 ); 
        // console.log('t', tempRoll)
        total += tempRoll;
      }
      // console.log("roll", total)
        return total;
    }

    function damageHP(monster, damage){
        if(monster.hp < 0){
        //dead
        monster.hp = 0;
        console.log("monster defeated you may pass");
        }else{
        monster.hp -= damage;
        }
    }
  }
    export default Battle;