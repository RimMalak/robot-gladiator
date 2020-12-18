var playerName = window.prompt("What is you robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 100;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//Random function

var randomNumber = function(min, max) 
{
    var value = Math.floor(Math.random()*(max - min + 1) + min) ;
    return value;
};

//Start function

var startGame = function() {  

    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 100;
    
    for (var i = 0; i < enemyNames.length; i++) {

        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiator! Round " + (i + 1));

        var pickedEnemyName = enemyNames[i];
        enemyHealth =  randomNumber(40, 60) ;

        fight(pickedEnemyName);

        if (playerHealth > 0 && i < enemyNames.length - 1) 
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

        if (playerHealth > 0) 
        {
            window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");    
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


var fight = function(enemyName) {

    while (enemyHealth > 0  && playerHealth > 0) 
    {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP the battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "SKIP" || promptFight === "skip") 
        {
            var confirmSkip = window.confirm("Are you sure you want to quit? ");
            if (confirmSkip) 
            {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = Math.max(0, playerMoney - 10);
                shop();
                break;
            }
        }
        var damage = randomNumber(playerAttack - 3, playerAttack);
        enemyHealth = Math.max( 0, enemyHealth - damage);
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died! ");
            playerMoney = playerMoney + 20;
            //
        break;
        }
        else
        {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        var damage = randomNumber(enemyAttack -3, enemyAttack);
        playerHealth = Math.max( 0, playerHealth - damage);
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " has now " + playerHealth + " health remaining.");

        if (playerHealth <= 0) 
        {
            window.alert(playerName + " has died!");
            break;
        }   
        else 
        {
                window.alert(playerName + " still has " + playerHealth + " health left.");
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
                if (playerMoney >= 7)
                {
                    window.alert("Refilling player's health by 20 for 7 Dollars.");
                    playerHealth += 20;
                    playerMoney -= 7;
                }
                else
                {
                    window.alert("You don't have enough money!");   
                }
                break;
            case "UPGRADE":
            case "upgrade":
                if (playerMoney >= 7)
                {
                    window.alert("Upgrading player's attack by 6 for 7 Dollars.");
                    playerAttack +=6;
                    playerMoney -= 7;
                }
                else
                {
                    window.alert("You don't have enough money!");  
                }
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


   