import React from "react";
import { shallow } from "enzyme";
import Navigation from "../../components/navigation/Navigation";

const mockWeekDates = [new Date("2019-04-22T10:20:30Z"), new Date("2019-04-23T10:20:30Z"), new Date("2019-04-24T10:20:30Z"), new Date("2019-04-25T10:20:30Z"), new Date("2019-04-26T10:20:30Z"), new Date("2019-04-27T10:20:30Z"), new Date("2019-04-28T10:20:30Z")];

describe("<Navigation />", () => {
  it("should display component", () => {
    const wrappedComponent = shallow(<Navigation weekDates={mockWeekDates} />);

    expect(wrappedComponent).toMatchSnapshot();
  });
});
