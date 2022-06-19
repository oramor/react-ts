import { jsx as _jsx } from "react/jsx-runtime";
//import React from 'react';
export function Test() {
    return (_jsx("div", Object.assign({ id: "testRoot" }, { children: _jsx("h1", { children: "Hello!" }) })));
}
