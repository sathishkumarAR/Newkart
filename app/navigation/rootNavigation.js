import React, { createRef } from 'react'

export const navigationRef = createRef();

const navigate= (name, params)=>{
    //if "navigationRef.current" is not available, nothing happens
    navigationRef.current?.navigate(name,params);
}

export default {
    navigate
}