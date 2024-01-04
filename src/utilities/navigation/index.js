import * as React from 'react';
export const navigationRef = React.createRef();

function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

function back(name, params) {
    navigationRef.current?.goBack(name, params);
}

export {
    navigate,
    back
};