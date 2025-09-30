function Car(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

function Car1(myobj) {
  return (
    <h2>I am a {myobj.brand}!</h2>
  );
}

function Car2(props) {
  return (
    <h2>I am a {props.color} {props.brand} {props.model}!</h2>
  );
}

function Car3(props) {
  return (
    <h2>The car is from {props.year}!</h2>
  );
}

function Car4(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

let x = "Ford";


function Car5(props) {
  return (
    <>
      <h2>My favorite car is a {props.carinfo.name} {props.carinfo.model}!</h2>
      <p>But it has to from {props.years[0]}, {props.years[1]}, or {props.years[2]}.</p>
    </>
  );
}

let k = [1964, 1965, 1966];
let y = {name: "Ford", model: "Mustang"};

function Car6(props) {
  return (
    <>
      <h2>My {props.carinfo.name} {props.carinfo.model}!</h2>
      <p>It is {props.carinfo.color} and it is from {props.carinfo.year}!</p>
    </>
  );
}

const carInfo = {
  name: "Ford",
  model: "Mustang",
  color: "red",
  year: 1969
};

function Car7(props) {
  return (
    <h2>My car is a {props.carinfo[0]} {props.carinfo[1]}!</h2>
  );
}

const carInfo1 = ["Ford", "Mustang"];

function Car8(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car8 brand="Ford" />
    </>
  );
}

function SampleProps(){
    return(
        <>
            <Car brand="Ford" />
            <Car1 brand="Ford" />
            <Car2 brand="Ford" model="Mustang" color="red" />
            <Car3 year={1969} />
            <Car4 brand={x} />
            <Car5 years={x} carinfo={y} />
            <Car6 carinfo={carInfo} />
            <Car7 carinfo={carInfo1} />
            <Garage />
            
        </>
    );
}



export default SampleProps