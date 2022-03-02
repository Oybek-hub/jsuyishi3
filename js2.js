var son = +prompt("Son kiriting")
while (isNaN(son) || son == 0) {
    son = prompt("Siz sondan boshqa narsa kiritdingiz, iltimos son kiriting")
}
var daraja = +prompt("Darajani kiriting")
while (isNaN(daraja) || daraja == 0) {
    daraja = prompt("Siz darajaga boshqa narsa kiritdingiz, iltimos darajani kiriting")
}

alert("Javob: " + son ** daraja);