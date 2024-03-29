class Calculator {
  initialValue: number = 0;
  constructor(value: number) {
    this.initialValue = value;
  }

  add(value: number): Calculator {
    this.initialValue += value;
    return this;
  }

  subtract(value: number): Calculator {
    this.initialValue -= value;
    return this;
  }

  multiply(value: number): Calculator {
    this.initialValue *= value;
    return this;
  }

  divide(value: number): Calculator {
    if (value == 0) throw new Error("Division by zero is not allowed");
    this.initialValue /= value;
    return this;
  }

  power(value: number): Calculator {
    this.initialValue = Math.pow(this.initialValue, value);
    return this;
  }

  getResult(): number {
    return this.initialValue;
  }
}
