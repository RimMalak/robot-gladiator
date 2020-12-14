var playerName = window.prompt("What is you robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 10;

var fight = function() {
    window.alert("Welcome to Robot Gladiators! ");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP the battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log("the player chose: " + promptFight);

    if (promptFight === "FIGHT" || promptFight === "fight") {

        enemyHealth -= playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died! ");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + "health left.");
        }

        playerHealth -= enemyAttack;
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " has now " + playerHealth + " health remaining.");

        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + "health left.")
        }
    } else if (promptFight === "SKIP" || promptFight === "skip") {
        var confirmSkip = window.confirm("Are you sure you want to quit? ");
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 2;
            console.log(playerMoney);
        }
        else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!")
    }
};

fight();




