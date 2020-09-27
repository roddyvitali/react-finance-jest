import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Title from "./Title";

configure({ adapter: new Adapter() });

describe("Title", () => {
  it("show title", () => {
    const wrapper = shallow(<Title />);
    const result = wrapper.text().includes("Finance App");
    expect(result).toEqual(true);
  });
});
