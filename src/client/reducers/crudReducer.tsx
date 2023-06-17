import {
  ENTITY_CREATE,
  ENTITY_UPDATE,
  ENTITY_FETCH,
  SELECT_ENTITY_ITEM,
  ENTITY_DELETE,
  CLEAR_ENTITY_LIST,
} from '../constants/actionType';

let initialState = {
  users: [] as any,
  selectedItem: {
    user: {} as any,
  },
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
export default function (state:any, action:any) {
  state = state || initialState;
  let newState : any;

  switch (action.type) {
    case ENTITY_CREATE:
      newState[action.entity] = Object.assign({}, state, action.data);
      return newState;

    case ENTITY_UPDATE:
      newState[action.entity] = Object.assign({}, state, action.data);
      return newState;

    case ENTITY_FETCH:
      newState[action.entity] = Object.assign({}, state, action.data);
      return newState;

    case ENTITY_DELETE:
      const data = Object.assign({}, state);
      newState[action.entity] = data.filter((data:any) => data.id !== action.data.id);
      return newState;

    case SELECT_ENTITY_ITEM:
      newState.selectedItem[action.entity] = Object.assign({}, state, action.data);
      return newState;

    case CLEAR_ENTITY_LIST:
      newState[action.entity] = {};
      return newState;

    default:
      return state;
  }
}
