import * as TYPES from '../../types';
const initialState = {
  isLoading: false,
  apiResponse:false,
  apiResponseCode:0,
  responseText:'',
};
const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case TYPES.HIDE_LOADER:
      return {
        ...state,
        isLoading: false,
      };

    case TYPES.API_RESPONSE:
        return {
            ...state,
            apiResponse: actions.status
        }
    case TYPES.API_RESPONSE_CODE:
        return {
            ...state,
            apiResponseCode: actions.code
        }
    case TYPES.API_RESPONSE_TEXT:
        return {
            ...state,
            responseText: actions.message
        }

    default:
      return state;
  }
};
export default reducer;
