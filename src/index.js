class SmartCalculator {
    constructor(initialValue) {
        this.calculatorArray = [initialValue];
        // your implementation
    }

    add(number) {
        this.calculatorArray.push("+", number);
        return this;
        // your implementation
    }

    subtract(number) {
        this.calculatorArray.push("-", number);
        return this;
        // your implementation
    }

    multiply(number) {
        this.calculatorArray.push("*", number);
        return this;
        // your implementation
    }

    devide(number) {
        this.calculatorArray.push("/", number);
        return this;
        // your implementation
    }

    pow(number) {
        this.calculatorArray.push("^", number);
        return this;
        // your implementation
    }

    calculate() {
        var tempCalculateArray = this.calculatorArray;
        var lengthOfArray = this.calculatorArray.length;
        tempCalculateArray.reverse();
        for (var i = 0; i < lengthOfArray; i++) {
            if (tempCalculateArray[i] == '^') {
                var pow = Math.pow(tempCalculateArray[i + 1], tempCalculateArray[i - 1]);
                tempCalculateArray.splice(i - 1, 3, pow);
                i--;
            }
        }
        this.calculatorArray = tempCalculateArray;
        var lengthOfArray = this.calculatorArray.length;
        this.calculatorArray.reverse();
        for (let i = 0; i < lengthOfArray; i++) {
            if (this.calculatorArray[i] == '*') {
                var multiply = (this.calculatorArray[i - 1] * this.calculatorArray[i + 1]);
                this.calculatorArray.splice(i - 1, 3, multiply);
                i--;
            }
        }
        for (let i = 0; i < lengthOfArray; i++) {
            if (this.calculatorArray[i] == '/') {
                var devide = (this.calculatorArray[i - 1] / (this.calculatorArray[i + 1]));
                this.calculatorArray.splice(i - 1, 3, devide);
                i--;
            }
        }
        for (let i = 0; i < lengthOfArray; i++) {
            if (this.calculatorArray[i] == '+') {
                var addition = (this.calculatorArray[i - 1] + this.calculatorArray[i + 1]);
                this.calculatorArray.splice(i - 1, 3, addition);
                i--;
            }
            if (this.calculatorArray[i] == '-') {
                var subtract = (this.calculatorArray[i - 1] - this.calculatorArray[i + 1]);
                this.calculatorArray.splice(i - 1, 3, subtract);
                i--;
            }
        }
        return Number(this.calculatorArray);
    }
    valueOf(calculatorArray) {
        return this.calculate();
    }
}

module.exports = SmartCalculator;