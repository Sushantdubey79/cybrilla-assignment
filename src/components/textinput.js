import { useState } from "react"

const Textinput = (props) => {
    const [data,setData] = useState("")

    const handlechange = (e) => {
        setData(e.target.value)
        props.search(e.target.value)

    }
    return(
        <input type="text" value={data} onChange={handlechange} className="border border-gray-300 rounded w-full h-10 p-4" />
    )
}
export default Textinput