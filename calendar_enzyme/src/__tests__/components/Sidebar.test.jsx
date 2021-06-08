import React from "react";
import { shallow } from "enzyme";
import Sidebar from "../../components/sidebar/Sidebar";

describe("<Sidebar />", () => {
  it("should display component", () => {
    const wrappedComponent = shallow(<Sidebar />);

    expect(wrappedComponent).toMatchSnapshot();
  });
});
