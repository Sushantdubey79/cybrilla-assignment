import { useState } from "react"

const Favlist = (props) => {
    const list = props.list
    const [showModal, setShowModal] = useState(false)
    const [toDelete,setTodelete] = useState("")

    const deletedata = (val) => {
      localStorage.removeItem(val)
      props.update()

    }

    const togleModal = () => {
        setShowModal(false)
        deletedata(toDelete)

    }

    const deletedatatoggle = (val) => {
      setTodelete(val)
      setShowModal(true)
      

    }


    return(
        <>
            <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full border">
                    <thead className="border-b">
                      <tr>
                        <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4 border-r">
                          <div className="flex items-start">
                          Package Name
                          </div>
                        </th>
                        <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4 border-r">
                        <div className="flex items-start">
                          Actions
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        list.map( (val,index) => (
                      <tr key={index} className="border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">{val.Favnpmpkg}</td>
                        <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={() => deletedatatoggle(val.Favnpmpkg)} >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                          </svg>
                        {showModal ? (
                            <>
                              <div
                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                              >
                                <div className="relative w-2/6 my-6 mx-auto max-w-3xl">
                                  {/*content*/}
                                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">
                                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        Are you sure you want to delete?
                                      </p>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-center p-6">
                                      <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                        type="button"
                                        onClick={() => togleModal()}
                                      >
                                        Yes
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                          ) : null}
                        </td>
                        
                      </tr> 
                      ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          

            
        
        </>
        
        )

}

export default Favlist