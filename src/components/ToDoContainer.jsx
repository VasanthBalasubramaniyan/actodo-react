import AddToDoForm from "./AddToDoForm"
import ToDoList from "./ToDoList"
import { useState } from "react"
function ToDoContainer() {
    const [activityArr,setActivityArr] = useState([
        {
            id:1,
            activity: "Go for a walk"
        },{
            id:2,
            activity:"Sleep for a while"
        }
    ])
    return(
        <div>
            <div className="flex gap-5 flex-wrap">
                <AddToDoForm activityArr = {activityArr} setActivityArr={setActivityArr}/>
                <ToDoList activityArr = {activityArr} setActivityArr={setActivityArr}/> 
            </div>
        </div>
    )
}
export default ToDoContainer