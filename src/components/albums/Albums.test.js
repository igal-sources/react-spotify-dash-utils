import React from "react";
import { mount } from "enzyme";
import { GetCurrentUsersSavedAlbums } from "apis";
import Albums from "./Albums";
import AlbumItem from "../albums/album-item/AlbumItem";
import albumsData from "albums/albums.json";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
const axiosMock = new MockAdapter(axios);
jest.mock("../../apis");

describe("Test Albums functionality", () => {
  //GetCurrentUsersSavedAlbums.mockImplementation(albums => albumsData);
  const wrapper = mount(<Albums />);

  it("should check AlbumItem rendering", () => {
    axiosMock.onAny().reply(() => {
      return [200, albumsData];
    });
    expect(wrapper.find(".Albums-container")).toHaveLength(1);
  });

  it("should check albums rendering", () => {
    console.log("wrapper: ", wrapper.debug());
    //expect(wrapper.find(".Albums-items").children()).toHaveLength(30);
  });
});
