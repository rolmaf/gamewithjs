function start(){
    let greeting = "Как тебя зовут?";
    let name = prompt(greeting);
    while (name == ""){
        name = prompt(greeting);
    }
    if (name == null){
        alert("Ну тогда пока. Возвращайся еще)");
    }
    else{
        let readiness = "Ну что, " + name + ", ты готов?";
        let start = prompt(readiness);
        while (name == "" ){
            start = prompt(readiness);
        }
        if (name == null){
            alert("Ну тогда пока. Возвращайся еще)");
        }
        else{
            
        }
        start = start.toLowerCase();
        if (start == "yes" || start == "y" || start == "да" || start == "д"){
            game();
        }
        else{
        alert("Ну тогда до скорых встреч, " + name);   
    }
    }
}
function game(){
    alert('Я загадал число от 1 до 100. Попробуй угадать его за наименьшее количество попыток. После каждой попытки я скажу "Слишком много", "Слишком мало" или "Угадал"');
    let number = random(100);
    let attemps = 1;
    let guess = prompt("Как ты думаешь, какое число я загадал?");
    while (guess != number){
        attemps = attemps + 1;
        if(guess > number){
            guess = prompt("Не угадал. Слишком много. Попробуй еще раз");
        }
        else if (guess < number){
            guess = prompt("Не угадал. Слишком мало. Попробуй еще раз");
        }
        else {
            guess = prompt("Введите число");
        }
    }
    if (guess == number){
        if (attemps == 0){
            attemps = attemps + 1;
        }
        alert("Поздравляю! Вы угадали! Это было число " + number + ". Вам потребовалось " + attemps + " попыток.");
    }
}