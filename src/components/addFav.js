import React ,{ useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from './button';
import Textarea from './textarea';
import Textinput from './textinput';
const Addfav = () => {

    const [apidata, setApidata] = useState([])
    const [searchval , Setsearchval] = useState("")
    const [whydata , setWhydata] = useState("")
    const [selected,setSelected] = useState("")
    const navigate = useNavigate()

    useEffect( () => {
        fetch(
            "https://api.npms.io/v2/search?q=reactjs")
                        .then((res) => res.json())
                        .then((json) => {
                            setApidata(json.results);
                        })
                        
                }
                
                ,[])

        const updatesearch = (val) =>{ 
            Setsearchval(val)
        }

        const updatewhydata = (val) =>{ 
            setWhydata(val)
        }


        const onsubmit = () =>{
            if (selected === "" || whydata === "" ){
                alert("input required")
            }
            else if ( localStorage.hasOwnProperty(selected) === true){
                alert("Already in list")
            }
            else{
                localStorage.setItem(selected,whydata)
                navigate("/")
            }
        }

     return(

        <div className="container mx-auto ">
            <div className='flex justify-end mb-14'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 bg-gray-400 p-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>&nbsp;&nbsp;<a className='text-base underline text-gray-500' href='https://api.npms.io/v2/search?q=reactjs'>https://api.npms.io/v2/search?q=reactjs</a>
            </div>
            <div className='mb-6'>
                <h1>Search for NPM Packages</h1>
                <Textinput search={updatesearch} name="input"/>
            </div>
            <div>
                <h1 className='font-bold mb-6'>Results</h1>
                <div className=" flex flex-row justify-start h-auto mb-16">


                <div className=" w-full max-h-24 overflow-y-auto">

                    {
                    apidata.filter((val) => ( searchval.toString().toLowerCase() === '' ? val : val.package.name.toString().toLowerCase().includes(searchval))).map((val) => (
                    <div class="flex items-center mb-4">
                        <input id={val.package.name}  name="default-radio"  type="radio" value={val.package.name} onChange={(e) => setSelected(e.target.value)} checked={selected===val.package.name} />
                        <label for={val.package.name} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{val.package.name}</label>
                    </div>
                    ))
                    
                    }
                    </div>
                    </div>
                <h1 className='font-bold mb-6'>Why is this your fav?</h1>
                <div className='mb-8'><Textarea whydata={updatewhydata} /> </div>
                <div className='flex justify-end'><Button name="Submit" funct={onsubmit} /></div>
            </div>
        </div>


     )
}

export default Addfav