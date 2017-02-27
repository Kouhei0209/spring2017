var main = document.getElementByClassName("main");
main[0].insertAdjacentHTML('afterbegi', '<p> Learning JavaScript </p>');


function sample() {

    console.log("これはjsのサンプルです");
}();



var Cat = function (name) {
    this.name = name;
    this.run = function () {
        console.log(this.name + "頑張って走る");
    }:
};

Cat.prototype.run = function () {

    console.log(this.name + "頑張って走る");

}
var tama = new Cat("タマ")
tama.run();
console.log(tama.naem);