import React from "react";
import { mount, shallow } from "enzyme";
import { AppProvider } from "../../context";
import Hour from "../../components/hour/Hour";

describe("<Hour />", () => {
  const props = {
    weekStartDate: new Date("2019-04-22T10:20:30Z"),
    weekDates: [new Date("2019-04-22T10:20:30Z"), new Date("2019-04-23T10:20:30Z"), new Date("2019-04-24T10:20:30Z"), new Date("2019-04-25T10:20:30Z"), new Date("2019-04-26T10:20:30Z"), new Date("2019-04-27T10:20:30Z"), new Date("2019-04-28T10:20:30Z")],
    hourEvents: [{ createdAt: "2019-04-23T10:20:30Z", date: "2019-04-23", description: "", endTime: "10:00", id: "30", name: "Kenneth Wiegand", startTime: "04:00", title: "to do something" }],
    fetchEvents: jest.fn(() => Promise.resolve()),
    deleteEvent: jest.fn(),
    dataDay: 23,
    dataHour: 10,
  };

  const wrappedComponent = mount(
    <AppProvider>
      <Hour {...props} />
    </AppProvider>
  );

  it("should display component", () => {
    expect(wrappedComponent).toMatchSnapshot();
  });

  it("should not open modal on click", () => {
    const onOpenModal = jest.fn();
    wrappedComponent.find(".calendar__time-slot div").at(0).prop("onClick");

    expect(onOpenModal).not.toBeCalled();
  });

  // it("should open modal on click", () => {
  //   const onOpenModal = () => jest.fn(10, 15);
  //   props.dataDay = 10;
  //   wrappedComponent.find(".calendar__time-slot div").at(0).prop("onClick");

  //   expect(onOpenModal).toBeCalled();
  // });
});

//---------------------------------------------

describe("Hour component", () => {
  const props = {
    weekStartDate: new Date("2019-04-22T10:20:30Z"),
    weekDates: [new Date("2019-04-22T10:20:30Z"), new Date("2019-04-23T10:20:30Z"), new Date("2019-04-24T10:20:30Z"), new Date("2019-04-25T10:20:30Z"), new Date("2019-04-26T10:20:30Z"), new Date("2019-04-27T10:20:30Z"), new Date("2019-04-28T10:20:30Z")],
    hourEvents: [],
    fetchEvents: jest.fn(() => Promise.resolve()),
    deleteEvent: jest.fn(),
    dataDay: 23,
    dataHour: 10,
  };
  
  const setUp = () =>
    mount(
      <AppProvider>
        <Hour {...props} />
      </AppProvider>
    );

  let component;
  let instance;

  beforeEach(() => {
    component = setUp();
    instance = component.instance();
  });

  it("should render Hour component", () => {
    expect(component).toMatchSnapshot();
  });

  it("should open modal on click", () => {
    const btn = component.find(".calendar__time-slot div").at(0);
    btn.simulate("click");

    expect(component).toMatchSnapshot();
  });
});
