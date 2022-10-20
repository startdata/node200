const Calculator = require("../calculator.js");

describe("Calculator", () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });
  it("init with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it("clear", () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("add", () => {
    cal.set(1);
    cal.add(3);
    expect(cal.value).toBe(4);
  });

  it("add > 101", () => {
    expect(() => {
      cal.add(130);
    }).toThrow("aa");
  });
  it("subtracts", () => {
    cal.subtract(1);
    expect(cal.value).toBe(-1);
  });

  it("multiplies", () => {
    cal.set(5);
    cal.multiply(4);
    expect(cal.value).toBe(20);
  });

  describe("divides", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it("1 / 0 === infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
  });
});

// 각각의 테스트는 독립적으로 인스턴스는 각각
// 중복을 줄이기 위해 beforeEach 시작전
