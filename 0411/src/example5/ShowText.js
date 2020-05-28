import React, { useContext } from "react"
import { ColorContext } from "./Color"


export default () => {
    let { color } = useContext(ColorContext)
    return <div style={{ color }}>
        字体颜色为{color}
    </div>
}