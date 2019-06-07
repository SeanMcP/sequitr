import React from 'react'

const Iframe = ({ className, title, ...props }) => {
    return (
        <iframe
            {...props}
            className={`Home__Iframe ${className ? className : ''}`}
            title={title}
        />
    )
}

export default Iframe
