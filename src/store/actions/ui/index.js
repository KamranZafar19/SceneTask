import * as TYPES from '../../types';
export const showLoader = () => {
    return {
        type: TYPES.SHOW_LOADER
    }
}
export const hideLoader = () => {
    return {
        type: TYPES.HIDE_LOADER
    }
}

export const apiResponse = (status) => {
    return {
        type: TYPES.API_RESPONSE,
        status: status
    }
}

export const apiResponseText = (message) => {
    return {
        type: TYPES.API_RESPONSE_TEXT,
        message: message
    }
}

export const apiResponseCode = (code) => {
    return {
        type: TYPES.API_RESPONSE_CODE,
        code: code
    }
}