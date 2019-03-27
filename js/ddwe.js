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

console.log(heraldDdwe);