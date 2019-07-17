class ddwe {
	constructor(price, multiplier, production) {
		this.price = price;
		this.multiplier = multiplier;
		this.production = production
	}

	amount = 0;

	buy() {
		this.amount++;
		this.price *= this.multiplier;
	}
}

var heraldDdwe = new ddwe(1, 1.2, 0.1);
var guardianDdwe = new ddwe(10, 1.4, 20);
var crusaderDdwe = new ddwe(100, 1.6, 400);


console.log(heraldDdwe);