import React from 'react'

import './styles.css'

const Header = props => {
    const handleSubmit = e => {
        e.preventDefault()
        const url = new FormData(e.target).get('url')
        props.setUrl(url)
    }
    return (
        <header className="Home__Header">
            <form onSubmit={handleSubmit}>
                <button type="button" onClick={() => props.setUrl(props.url)}>
                    Refresh
                </button>
                <input defaultValue={props.url} name="url" />
            </form>
        </header>
    )
}

export default Header
