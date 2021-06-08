import React from "react";
import { shallow } from "enzyme";
import Week from "../../components/week/Week";

const props = {
  weekStartDate: new Date("2019-04-22T10:20:30Z"),
  weekDates: [new Date("2019-04-22T10:20:30Z"), new Date("2019-04-23T10:20:30Z"), new Date("2019-04-24T10:20:30Z"), new Date("2019-04-25T10:20:30Z"), new Date("2019-04-26T10:20:30Z"), new Date("2019-04-27T10:20:30Z"), new Date("2019-04-28T10:20:30Z")],
  events: [{ createdAt: "2021-06-08T06:15:05.972Z", date: "2021-06-17", description: "", endTime: "10:00", id: "30", name: "Kenneth Wiegand", startTime: "04:00", title: "" }],
  fetchEvents: jest.fn(() => Promise.resolve()),
  deleteEvent: jest.fn(),
};

describe("<Week />", () => {
  it("should display component", () => {
    const wrappedComponent = shallow(<Week {...props} />);

    expect(wrappedComponent).toMatchSnapshot();
  });
});
