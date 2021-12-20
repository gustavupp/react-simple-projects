import React, { useState, useEffect } from 'react'


const SingleColor = ({rgb, hexColor, weight,index}) => {
const [alert, setAlert] = useState(false);

  useEffect(() => {
    const alertUser = setTimeout(() => {
      setAlert(false);
    },3000)
  },[alert])

  const backGroundColor = rgb.join(",");
  let hexaColor = `#${hexColor}`;
  return (
    <article
      onClick={() => {
        navigator.clipboard.writeText(hexaColor)
        setAlert(true);
      }}
      key={index}
      style={{backgroundColor: `rgb(${backGroundColor})`}}
      className={`color ${index > 20 && 'color-light'}`}>
      <p className='percent-value' >{weight}%</p>
      <p className='color-value'>{hexaColor}</p>
      {alert && <p className='alert' >copied to clipboard</p>}
    </article>
    )
}

export default SingleColor
