import React ,{ useState , useEffect} from 'react'
import { Link} from "react-router-dom";
import Button from './button';
import Favlist from './favlist';
const   Fav = () => {

    const [favarr,setFavarr] = useState([])

    useEffect(() => {
         updatelist()
    },[])

    const updatelist = () =>{
        setFavarr([])
        Object.keys(localStorage).forEach(function(key){
            setFavarr(favarr => [...favarr,{"Favnpmpkg":key, "why":localStorage.getItem(key)}]);
         });
    }
    

     return(
        <div className="container mx-auto ">
        <div className='flex justify-between mb-24'>
        <h1 className='text-2xl'>Welcome to Favorite NPM Packages</h1>
        { favarr.length === 0 ?"":<Link to='/addfav'><Button  name="Add Fav" /></Link>}
        </div>
        {
            favarr.length === 0 ? 
            
            <div className=" border-4 h-96 w-full p-4 flex flex-col items-center justify-center" > 
                <h1 className='block mb-4'>You don't have any favs yet. Please add.</h1>
                <Link to='/addfav' className='block'> <Button  name="Add Fav" /></Link>
                
            
            </div>
            
            : <Favlist list={favarr} update={updatelist} />
        }
        </div>

     )
}

export default Fav