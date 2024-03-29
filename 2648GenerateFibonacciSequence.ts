function* fibGenerator(): Generator<number, any, number> {
  yield 0;
  yield 1;
  let num1: number = 0;
  let num2: number = 1;
  while (true) {
    let temp: number = num1 + num2;
    num1 = num2;
    num2 = temp;
    yield temp;
  }
}

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
