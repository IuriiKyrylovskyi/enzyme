import { shallow } from "enzyme";
import React from "react";
import Day from "../../components/day/Day";

const props = {
  dataDay: 25,
  weekStartDate: new Date("2019-04-22T10:20:30Z"),
  weekDates: [new Date("2019-04-22T10:20:30Z"), new Date("2019-04-23T10:20:30Z"), new Date("2019-04-24T10:20:30Z"), new Date("2019-04-25T10:20:30Z"), new Date("2019-04-26T10:20:30Z"), new Date("2019-04-27T10:20:30Z"), new Date("2019-04-28T10:20:30Z")],
  dayEvents: [{ createdAt: "2021-06-08T06:15:05.972Z", date: "2021-06-17", description: "", endTime: "10:00", id: "30", name: "Kenneth Wiegand", startTime: "04:00", title: "" }],
  fetchEvents: jest.fn(() => Promise.resolve()),
  deleteEvent: jest.fn(),
};

describe("<Day />", () => {
  it("should", () => {
    const wrappedComponent = shallow(<Day {...props} />);

    expect(wrappedComponent).toMatchSnapshot();
  });
});
