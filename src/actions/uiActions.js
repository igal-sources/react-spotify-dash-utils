import * as types from "../shared/types";

export const updateViewType = title => {
  return {
    type: types.UPDATE_VIEW_TYPE,
    title
  };
};

export default { updateViewType };
