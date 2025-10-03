function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

function Goal1(props) {
  const isGoal = props.isGoal;
  return (
    <>
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  );
}

function Car(props) {
  return (
    <>
      {props.brand && <h1>My car is a {props.brand}</h1>}
    </>
  );
}


function ReactConditionals (){
    return (
        <>
            <Goal isGoal={false} />
            <Car brand="Ford" />
            <Goal isGoal={true} />
        </>
    )
}

export default ReactConditionals