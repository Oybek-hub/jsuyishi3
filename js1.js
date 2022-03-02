var num1 = +prompt("Son kiriting")
while (isNaN(num1) || num1 == 0) {
    num1 = prompt("Siz sondan boshqa narsa kiritdingiz!!! Iltimos Son kiriting")
}

if (num1 % 2 == 0) {
    alert("Siz tanlagan son juft " + num1)
}
else if (num1 % 2 == 1) {
    alert("Siz tanlagan son toq " + num1)

} 