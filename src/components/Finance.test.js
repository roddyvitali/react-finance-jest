import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Finance from "./Finance";

configure({ adapter: new Adapter() });

describe("Finance", () => {
  it("call removeAmount", () => {
    const finance = [
      { desc: "Finance 1", qty: 100 },
      { desc: "Finance 2", qty: 54 },
    ];
    const removeAmount = jest.fn();
    const wrapper = shallow(
      <Finance finance={finance} removeAmount={removeAmount} />
    );
    wrapper.find("button").at(0).simulate("click");
    expect(removeAmount.mock.calls).toEqual([[0]]);
    const result1 = wrapper.text().includes("Finance 1");
    const result2 = wrapper.text().includes("Finance 2");
    expect(result1).toEqual(true);
    expect(result2).toEqual(true);
  });
});
