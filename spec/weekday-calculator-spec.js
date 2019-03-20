import { monthTranslator, dayTranslator } from './../src/calculator.js'

describe("monthTranslator", function(){
  it("text input should return the correct number for the month.", function(){
    let testMonthInput = "april";

    let testMonth = monthTranslator(testMonthInput);
    let testDate = new Date(2005, testMonth, 15);

    expect(testDate.getMonth()).toEqual(3);
  });

  it("number input should return the correct number for the month.", function(){
    let testMonthInput = "1";

    let testMonth = monthTranslator(testMonthInput);
    let testDate = new Date(2005, testMonth, 15);

    expect(testDate.getMonth()).toEqual(0);
  });
});

describe("dayTranslator", function(){
  it("should return the correct day of the week.", function(){
    let testDate = new Date(2019, 2, 20);

    let testAnswer = testDate.getDay();
    let finalAnswer = dayTranslator(testAnswer);

    expect(finalAnswer).toEqual("Wednesday");
  });
});
