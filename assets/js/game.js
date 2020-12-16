

var playerName = window.prompt("What is you robot's name?");
var playerHealth = 10;
var playerAttack = 50;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 20;
var enemyAttack = 10;

var fight = function(enemyName) {

    while (enemyHealth > 0  && playerHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP the battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "SKIP" || promptFight === "skip") {
            var confirmSkip = window.confirm("Are you sure you want to quit? ");
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = playerMoney - 2;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
                enemyHealth -= playerAttack;
                console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

                if (enemyHealth <= 0) {
                    window.alert(enemyName + " has died! ");
                    playerMoney = playerMoney + 20;
                    console.log("playerMoney", playerMoney);
                    break;
                }
                else {
                    window.alert(enemyName + " still has " + enemyHealth + " health left.");
                }

                playerHealth -= enemyAttack;
                console.log(enemyName + " attacked " + playerName + ". " + playerName + " has now " + playerHealth + " health remaining.");

                if (playerHealth <= 0) {
                    window.alert(playerName + " has died!");
                    break;
                }   
                else {
                        window.alert(playerName + " still has " + playerHealth + " health left.");
                }
            }
        
    };

var startGame = function() {   

    playerHealth = 10;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {

        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiator! Round " + (i + 1));

        var pickedEnemyName = enemyNames[i];
        enemyHealth = 10;

        fight(pickedEnemyName);
        }
        else {
                window.alert("You have lost your robot in battle! Game Over!");
                break;
            }
        }
        endGame();
    };

    var endGame = function() {
        if (playerHealth > 0) {
            window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");    
        }
        else {
            window.alert("You've lost your robot in battle.")
        }

        var playAgainConfirm = window.confirm("Would you like to play again?");
        if (playAgainConfirm) {
            startGame();
        }
        else {
                window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
    };


   startGame();