
const Button = (props) => {

    const submitdata = (e) => {
        props.funct()
    }
    const nothing = (e) => {
        console.log("nothing")
    }

    return (
    <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-5 rounded" onClick={ props.name==='Submit'? submitdata: nothing } >{props.name}</button>
    
    )
}

export default Button