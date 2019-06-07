import React from 'react'

import './styles.css'

const View = ({ children, title, ...props }) => {
    React.useEffect(() => {
        document.title = `${title} - Sequitr`
    }, [title])
    return (
        <div {...props} className={`View View--${title}`}>
            {children}
        </div>
    )
}

export default View
