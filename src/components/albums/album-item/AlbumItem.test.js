import React from "react";
import { shallow } from "enzyme";
import AlbumItem from "./AlbumItem";

describe("Test AlbumItem functionality", () => {
  const wrapper = shallow(<AlbumItem />);

  // it("should check that modal is rendering the text", () => {
  //   expect(findByIdAttr(wrapper, "ConfirmLogout-text")).toHaveLength(1);
  // });

  // it("should check that the component renders 2 buttons", () => {
  //   expect(wrapper.find(Button)).toHaveLength(2);
  // });
});
