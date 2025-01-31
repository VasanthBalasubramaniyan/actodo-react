import AddToDoForm from "./AddToDoForm"
import ToDoList from "./ToDoList"

function ToDoContainer() {
    return(
        <div>
            <div className="flex gap-5 flex-wrap">
                <AddToDoForm/>
                <ToDoList/> 
            </div>
        </div>
    )
}
export default ToDoContainer