var guestList = ["Snehashree", "Subhadeep", "Sayan", "ANkita"]
var guestName = prompt("Your name:");
if (guestList.includes(guestName)) {
  alert ("Welcome " + guestName);
} else {
    alert ("We are very sorry.");
}
