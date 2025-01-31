function AddToDoForm(){
    return(
        <div>
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-medium">Manage Activities</h1>
                <div>
                    <input type="text" className="border border-black bg-transparent p-1"placeholder="Next Activity?" />
                    <button className="text-white bg-black p-1 border border-black">Add</button>
                </div>
            </div>
        </div>
    )
}
export default AddToDoForm