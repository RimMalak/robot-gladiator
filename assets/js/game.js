//Random function

var randomNumber = function(min, max) 
{
    var value = Math.floor(Math.random()*(max - min + 1) + min) ;
    return value;
};

var getPlayerName = function()
{
    var name = "";
    while(name === "" || name === null)
    {
        name = prompt("What is your Robot's name? ");
    }
    console.log("Your robot's name is " + name);
};

var playerInfo =
{
    name : getPlayerName(),
    Health : 100,
    attack : 10,
    money : 10,
    reset: function()
    {
        this.Health = 100;
        this.money =10;
        this.attack = 10;    
    },
    refillHealth: function()
    {
        if (this.money >= 7)
        {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health +=20;
            this.money -=7;
        }
        else 
        {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function()
    {
        if (this.money >= 7)
        {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack +=6;
            this.money -=7;
        }
        else 
        {
            window.alert("You don't have enough money!");
        }
    }
};

var enemyInfo =
[
    {
        name : "Roborto",
        attack : randomNumber(10, 14),
    },
    {
        name : "Amy Android",
        attack : randomNumber(10, 14),
    },
    {
        name : "Robo Trumble",
        attack : randomNumber(10, 14),
    }
];

//Start function

var startGame = function() {  

    playerInfo.reset();
    
    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.Health > 0) {
            window.alert("Welcome to Robot Gladiator! Round " + (i + 1));
            

        var pickedEnemyObj = enemyInfo[i];
        pickedEnemyObj.Health =  randomNumber(40, 60) ;

        fight(pickedEnemyObj);

        if (playerInfo.Health > 0 && i < enemy.names.length - 1) 
        {
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
            if (storeConfirm)
            {
            shop();
            }
        }
        
        }
        else 
        {
            break;
        }

    }
        endGame();
    };

    //end function 
    var endGame = function() {
        window.alert("The game has now ended. Let's see how you did!");

        if (playerInfo.Health > 0) 
        {
            window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");    
        }
        else 
        {
            window.alert("You've lost your robot in battle.")
        }

        var playAgainConfirm = window.confirm("Would you like to play again?");
        if (playAgainConfirm) 
        {
            startGame();
        }
        else 
        {
                window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
    };


var fight = function(enemy) {

    while (enemy.Health > 0  && playerInfo.Health > 0) 
    {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP the battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "SKIP" || promptFight === "skip") 
        {
            var confirmSkip = window.confirm("Are you sure you want to quit? ");
            if (confirmSkip) 
            {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                shop();
                break;
            }
        }
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.Health = Math.max( 0, enemy.Health - damage);
        console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.Health + " health remaining.");

        if (enemy.Health <= 0) {
            window.alert(enemyName + " has died! ");
            playerInfo.money = playerInfo.money + 20;
            //
        break;
        }
        else
        {
            window.alert(enemy.name + " still has " + enemy.Health + " health left.");
        }
        var damage = randomNumber(enemy.attack -3, enemy.attack);
        playerInfo.Health = Math.max( 0, playerInfo.Health - damage);
        console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " has now " + playerInfo.Health + " health remaining.");

        if (playerInfo.Health <= 0) 
        {
            window.alert(playerInfo.name + " has died!");
            break;
        }   
        else 
        {
                window.alert(playerInfo.name + " still has " + playerInfo.Health + " health left.");
        }
    }
};
      
    var shop = function() 
    {
        var shopOptionPrompt = window.prompt(
            "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
        
        switch(shopOptionPrompt) 
        {
            case "REFILL":
            case "refill":
                playerInfo.refillHealth();
                break;
            case "UPGRADE":
            case "upgrade":
               playerInfo.upgradeAttack
                break;
            case "LEAVE":
            case "leave":

                window.alert("Leaving store.");
                break;
            default:
                window.alert("You did not pick a valid option. Try again.");
                shop();
                break;
        }
    };

   startGame();


   