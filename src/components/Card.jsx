function Card(props) {
  return (
    <>
      <div
        style={{ backgroundColor: props.bgcolor }}
        className="px-10 py-5  border-0 rounded-md text-center flex-grow"
      >
        <h1 className="font-medium text-2xl">{props.title}</h1>
        <p>{props.desc}</p>
      </div>
    </>
  );
}

export default Card;
