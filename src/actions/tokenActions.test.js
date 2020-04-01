import allActions from "actions";
import * as types from "../shared/types";

describe("Test token actions", () => {
  it("should test set token", () => {
    const token = "BQB5zpmUENEINlVXVbtLYHLnHwBrwxTItE5mcMkfgY2P66fizelCuOmEmFr40x";

    const result = {
      type: types.SET_TOKEN,
      payload: token
    };

    expect(allActions.tokenActions.setToken(token)).toEqual(result);
  });
});
