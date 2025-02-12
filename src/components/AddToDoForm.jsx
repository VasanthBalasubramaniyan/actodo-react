import { useState } from "react"


function AddToDoForm(props){
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    const [inputValue,setInput] = useState("")
    function handleChange(evt) {
        setInput(evt.target.value)
    }
    function addActivity(){
        setActivityArr([...activityArr,{id:activityArr.length+1,activity:inputValue}])
        setInput("")
    }
    return(
        <div>
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-medium">Manage Activities</h1>
                <div>
                    <input value={inputValue} onChange={handleChange} type="text" className="border border-black bg-transparent p-1"placeholder="Next Activity?" />
                    <button onClick={addActivity} className="text-white bg-black p-1 border border-black">Add</button>
                </div>
            </div>
        </div>
    )
}
export default AddToDoForm