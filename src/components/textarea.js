import { useState } from "react"

const Textarea = (props) => {
    const [data,setData] = useState("")

    const handleChange = (e) =>{
        setData(e.target.value);
        props.whydata(e.target.value)

    }
    return(
        <textarea required className="w-full h-32 border-2 border-gray-500 p-4" type="textarea" value={data} onChange={handleChange} />
    )
}

export default Textarea