import reducer, { addAmount, removeAmount, ACCTION_TYPE } from "./finance";

describe("Finance", () => {
  describe("Action creators", () => {
    it("addAmount", () => {
      const payload = "Dummy";
      const result = addAmount(payload);
      expect(result).toEqual({
        type: ACCTION_TYPE.ADD,
        payload,
      });
    });
    it("removeAmount", () => {
      const result = removeAmount(1);
      expect(result).toEqual({
        type: ACCTION_TYPE.REMOVE,
        index: 1,
      });
    });
  });

  describe("Reducers", () => {
    it("ADD", () => {
      const result = reducer([1], { type: ACCTION_TYPE.ADD, payload: 2 });
      expect(result).toEqual([1, 2]);
    });

    it("REMOVE", () => {
      const result = reducer([1, 67, 100], {
        type: ACCTION_TYPE.REMOVE,
        index: 0,
      });
      expect(result).toEqual([67, 100]);
    });

    it("DEFAULT", () => {
      const result = reducer([100], { type: "default" });
      expect(result).toEqual([100]);
    });
  });
});
