

var playerName = window.prompt("What is you robot's name?");
var playerHealth = 40;
var playerAttack = 10;
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
                    onsole.log("playerMoney", playerMoney);
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


for (var i = 0; i < enemyNames.length; i++) {
    debugger;
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 20;
    fight(pickedEnemyName);
}
