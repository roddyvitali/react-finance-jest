import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Form from "./Form";

configure({ adapter: new Adapter() });

describe("Form", () => {
  it("add amount", () => {
    const addAmount = jest.fn();
    const preventDefault = jest.fn();
    const wrapper = shallow(<Form addAmount={addAmount} />);
    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { value: "description" } });
    wrapper
      .find("input")
      .at(1)
      .simulate("change", { target: { value: "250" } });
    wrapper.find("form").simulate("submit", { preventDefault });
    expect(addAmount.mock.calls).toEqual([[{ desc: "description", qty: 250 }]]);
    expect(preventDefault.mock.calls).toEqual([[]]);
  });
});
