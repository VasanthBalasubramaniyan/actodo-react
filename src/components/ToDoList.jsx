import { useState } from "react"
import ToDoItem from "./ToDoItem"

function ToDoList(){
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
        <div className="bg-[#BDB4EA] border-0 rounded-md p-2 grow"> 
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            {activityArr.length===0?<p>You haven't added anything yet</p>:""}
            
            {
                activityArr.map(function(item,index){
                    return <ToDoItem id={item.id} activity={item.activity} index={index} activityArr = {activityArr} setActivityArr ={setActivityArr}/>
                })
            }
        </div> 
    )
}
export default ToDoList