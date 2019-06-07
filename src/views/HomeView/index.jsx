import React from 'react'

import './styles.css'

import Header from 'components/home/Header'
import Iframe from 'components/home/Iframe'
import View from 'components/View'

const HomeView = props => {
    const [url, setUrl] = React.useState('https://en.wikipedia.org')
    return (
        <View title="Home">
            <Header url={url} setUrl={setUrl} />
            <Iframe src={url} title={url} />
        </View>
    )
}

export default HomeView
