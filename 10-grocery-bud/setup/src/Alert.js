import React, { useEffect } from 'react'

const Alert = ({ msg, type, handleAlert }) => {

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleAlert();
    }, 2000)
    return () => clearTimeout(timeout);
  },[])
  return <p className={`alert alert-${type}`}>{msg}</p>;
}

export default Alert
