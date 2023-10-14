function whosPaying(names) {
    var numsOfPerson = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numsOfPerson);
    var randomPerson = names[randomPersonPosition];
    
    
    return randomPerson + " is going to buy lunch today!";

}
