import React from "react";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";
import AlbumItem from "./AlbumItem";

describe("Test AlbumItem functionality", () => {
  const album = {
    album_type: "album",
    id: "63RFu6O3lPLu74zJ4s5d7L",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273c8379b92a211d2c00d266c8d",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02c8379b92a211d2c00d266c8d",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851c8379b92a211d2c00d266c8d",
        width: 64,
      },
    ],
    label: "earMUSIC",
    name: "Live in Concert",
    popularity: 25,
    release_date: "2019-02-15",
    release_date_precision: "day",
    total_tracks: 12,
    type: "album",
    uri: "spotify:album:63RFu6O3lPLu74zJ4s5d7L",
  };

  const wrapper = shallow(<AlbumItem {...album} />);

  it("should check artist name is rendering", () => {
    // Reading text from custom component
    expect(wrapper.find("LongTextTooltip").render().text()).toEqual("Live in Concert");
  });

  it("should check link to album-songs", () => {
    expect(wrapper.find(Link).props().to).toBe(`/album-songs/${album.id}`);
  });
});
