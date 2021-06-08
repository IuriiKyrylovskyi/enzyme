import { shallow } from "enzyme";
import React from "react";
import Event from "../../components/event/Event";

const props = {
  id: "fake-id",
  height: 100,
  marginTop: 10,
  title: "fake-title",
  time: "12:25",
  startTime: 1623187031296,
  handleDelete: jest.fn(),
  fetchEvents: jest.fn(() => Promise.resolve()),
};

describe("<Event />", () => {
  it("should render component", () => {
    const wrappedComponent = shallow(<Event {...props} />);

    expect(wrappedComponent).toMatchSnapshot();
  });

  it("should open delet modal on click", () => {
    const mockOnDelete = jest.fn();
    const wrappedComponent = shallow(<Event {...props} onClick={mockOnDelete} />);
    wrappedComponent.find(".event").simulate("click");

    expect(wrappedComponent.find(".delete-event-btn").length).toEqual(1);
  });

  it("should delet event", () => {
    const mockOnDelete = jest.fn();
    const wrappedComponent = shallow(<Event {...props} onClick={mockOnDelete} />);
    wrappedComponent.find(".event").simulate("click");
    wrappedComponent.find(".delete-event-btn").simulate("click");

    expect(props.handleDelete).toBeCalledWith("fake-id");
  });

  it("should close delete modal", () => {
    const mockOnDelete = jest.fn();
    const wrappedComponent = shallow(<Event {...props} onClick={mockOnDelete} />);
    wrappedComponent.find(".event").simulate("click").simulate("click");

    expect(props.handleDelete).toBeCalledTimes(1);
  });

  it("should not delet event", () => {
    global.alert = jest.fn();
    const mockOnDelete = jest.fn();
    props.startTime = 1629187031296;
    const wrappedComponent = shallow(<Event {...props} onClick={mockOnDelete} />);
    wrappedComponent.find(".event").simulate("click");
    wrappedComponent.find(".delete-event-btn").simulate("click");

    expect(props.handleDelete).toBeCalledWith("fake-id");
  });
});
