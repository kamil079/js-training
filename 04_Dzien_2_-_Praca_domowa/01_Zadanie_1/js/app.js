let Tree = function (type) {
    this.type = type;
};

Tree.prototype.bloom = function () {
    console.log("is blooming");
};

let tree1 = new Tree("wooden");
let tree2 = new Tree('plastic');
let tree3 = new Tree("steel");

console.log(tree1.type);
console.log(tree2.type);
console.log(tree3.type);

tree1.bloom();
tree2.bloom();
tree3.bloom();


