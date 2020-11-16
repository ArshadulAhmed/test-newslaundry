import { CREATE_MESSAGE, GET_ERRORS, CLEAR_ERROR } from "./types";

// CREATE MESSAGE
export const createMessage = msg => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  };
};

// RETURN ERRORS
export const returnErrors = (msg, status, data) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status, data }
  };
};

// Clear Error
export const clearError = () => {
  return {
    type: CLEAR_ERROR
  }
}