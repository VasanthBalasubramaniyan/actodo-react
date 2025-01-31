import Header from "./components/header";
import Card from "./components/Card";
import ToDoContainer from "./components/ToDoContainer";

function App() {
  return (
    <>
      <div className="bg-black p-16">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
          {/* Header */}
          <Header></Header>

          {/* Card */}
          <div className="flex justify-between gap-7 my-5 flex-wrap">
            <Card bgcolor={"#8272DA"} title={"23°"} desc={"Chennai"} />
            <Card bgcolor={"#FD6663"} title={"January 31"} desc={"10:17:03"} />
            <Card bgcolor={"#FCA201"} title={"Built using"} desc={"React"} />
          </div>

          {/* ToDo Container */}
          <ToDoContainer/>
          
        </div>
      </div>
    </>
  );
}

export default App;
