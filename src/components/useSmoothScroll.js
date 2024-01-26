// import React from 'react'

const useSmoothScroll = (elementId) => {
    const scrollToElement = () => {
        const element = document.getElementById(elementId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }
    return scrollToElement
}

export default useSmoothScroll