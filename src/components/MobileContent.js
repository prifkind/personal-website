import React from 'react'
import { Slide } from 'react-awesome-reveal'
import headlamp from '../images/Headlamp-Framed-Mobile.png'

export default function MobileContent(props) {
    const {altText, imgPath} = props

  return (
    <div>
        <Slide direction={"up"} duration={1000}>
            <img src={imgPath} alt={altText} />
        </Slide>
    </div>
  )
}
