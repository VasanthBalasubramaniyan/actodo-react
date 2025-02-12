
import ToDoItem from "./ToDoItem"

function ToDoList(props){

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr
    
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