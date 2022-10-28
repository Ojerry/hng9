import React from 'react'

const BodyBtn = (props) => {
  return (
    <div className='app-content'>
        <a className={props.className} href={props.href}>{props.text}</a>
    </div>
  )
}

export default BodyBtn