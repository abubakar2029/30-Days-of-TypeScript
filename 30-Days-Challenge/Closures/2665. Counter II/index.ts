type ReturnObj = {
    increment: () => number;
    decrement: () => number;
    reset: () => number;
  };
  
  function createCounter(init: number): ReturnObj {
    const initialNum: number = init;
    let operationalNum: number = initialNum;
    return {
      decrement: () => {
        operationalNum--;
        return operationalNum;
      },
      increment: () => {
        operationalNum++
        return operationalNum;
      },
      reset: () => {
        operationalNum = initialNum;
        return operationalNum;
      },
    };
  }