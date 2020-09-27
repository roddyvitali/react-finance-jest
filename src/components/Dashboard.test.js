import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Dashboard from "./Dashboard";

configure({ adapter: new Adapter() });

describe("Dashboard", () => {
  it("show amount", () => {
    const wrapper = shallow(<Dashboard amount={9990} />);
    const result = wrapper.text().includes("9990");
    expect(result).toEqual(true);
  });
});
