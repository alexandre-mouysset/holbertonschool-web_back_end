import Currency from "./3-currency.js";

export default class Pricing {
	constructor(amount, currency) {
		if (typeof amount !== 'number') {
			throw new TypeError('Amount must be a number')
		}
		this._amount = amount

		if (!(currency instanceof Currency)) {
			throw new TypeError('Currency must be a currency object')
		}
		this._currency = currency
	}

	get amount() {
		return this._amount
	}

	set amount(value) {
		if (typeof value !== 'number') {
			throw new TypeError('Amount must be a number')
		}
		this._amount = value
	}

	get currency() {
		return this._currency
	}

	set currency(value) {
		if (!(value instanceof Currency)) {
			throw new TypeError('Currency must be a currency object')
		}
		this._currency = value
	}

	displayFullPrice() {
		return (`${this._amount} ${this._currency._name} (${this._currency._code})`)
	}

	static convertPrice(amount, conversionRate) {
		return amount * conversionRate
	}
}
