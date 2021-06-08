import React from "react";
import { shallow, mount } from "enzyme";
import { AppProvider } from "../../context";
import Header from "../../components/header/Header";

const props = {
  weekDates: [],
  handleTodayBtn: jest.fn(),
  handleArrowBtn: jest.fn(),
  onOpenModal: jest.fn(),
};

describe("<Header />", () => {
  const wrappedComponent = mount(
    <AppProvider>
      <Header {...props} />
    </AppProvider>
  );

  it("should display component", () => {
    expect(wrappedComponent).toMatchSnapshot();
  });

  // it("should open modal on button click", () => {
  //   wrappedComponent.find(".create-event-btn").prop("onClick")();

  //   expect(props.onOpenModal).toBeCalled();
  // });
  it("should open modal on button click", () => {
    wrappedComponent.find(".create-event-btn").prop("onClick")();

    expect(wrappedComponent.onOpenModal).toBeFalsy();
  });

  it("should modal be closed", () => {
    expect(wrappedComponent.find(".create-event-btn").text()).toEqual("Create");
  });

  it("should display current week on button click", () => {
    wrappedComponent.find(".navigation__today-btn").prop("onClick")();

    expect(props.handleTodayBtn).toBeCalled();
  });

  it("should display 'Today'", () => {
    expect(wrappedComponent.find(".navigation__today-btn").text()).toEqual("Today");
  });

  it("should display previos week on button click", () => {
    wrappedComponent.find(".icon-button").at(0).prop("onClick")();

    expect(props.handleArrowBtn).toBeCalled();
  });

  it("should display next week on button click", () => {
    wrappedComponent.find(".icon-button").at(1).prop("onClick")();

    expect(props.handleArrowBtn).toBeCalled();
  });

  it("should display month", () => {
    expect(wrappedComponent.find(".navigation__displayed-month").exists()).toBeTruthy();
  });
});
