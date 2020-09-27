import React from "react";
import { mount, configure } from "enzyme";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-16";
import { createStore } from "redux";
import App from "./App";
import { ACCTION_TYPE } from "./reducers/finance";
import Dashboard from "./components/Dashboard";
import Finance from "./components/Finance";

configure({ adapter: new Adapter() });

describe("App", () => {
  it("add amount", () => {
    const preventDefault = jest.fn();
    const reducer = jest.fn().mockReturnValue({
      finance: [{ desc: "Finance 1", qty: 250 }],
    });

    const store = createStore(reducer);
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { value: "Finance 2" } });
    wrapper
      .find("input")
      .at(1)
      .simulate("change", { target: { value: "999" } });
    wrapper.find("form").simulate("submit", { preventDefault });
    wrapper.find("button").at(1).simulate("click");
    const [a, ...rest] = reducer.mock.calls;
    expect(rest).toEqual([
      [
        { finance: [{ desc: "Finance 1", qty: 250 }] },
        { type: ACCTION_TYPE.ADD, payload: { desc: "Finance 2", qty: 999 } },
      ],
      [
        { finance: [{ desc: "Finance 1", qty: 250 }] },
        { type: ACCTION_TYPE.REMOVE, index: 0 },
      ],
    ]);
    console.log(wrapper);
    expect(preventDefault.mock.calls).toEqual([[]]);
    expect(wrapper.text().includes("Finance App")).toEqual(true);
    expect(wrapper.text().includes("Finance 1")).toEqual(true);
    expect(wrapper.text().includes("Finance 2")).toEqual(false);
    expect(wrapper.find("strong").text().includes("250")).toEqual(true);
  });
});
