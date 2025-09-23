import { createRoot } from 'react-dom/client'

function Car() {
  return (
    <h1 className="myclass">Hello World</h1>
  );
}

function Car1() {
  const x = "myclass";
  return (
    <h1 className={x}>Hello World</h1>
  );
}

function Car2() {
  const myfunc = () => {
    alert('Hello World');
  };
  return (
    <button onClick={myfunc}>Click me</button>
  );
}

function Car3() {
  const myfunc = () => {
    alert('Hello World');
  };
  return (
    <button onClick={myfunc} disabled>Click me</button>
  );
}

function Car4() {
  const myfunc = () => {
    alert('Hello World');
  };
  return (
    <button onClick={myfunc} disabled={true}>Click me</button>
  );
}
function Car5() {
  const myfunc = () => {
    alert('Hello World');
  };
  return (
    <button onClick={myfunc} disabled={false}>Click me</button>
  );
}


function Car6() {
  const mystyles = {
    color: "red",
    fontSize: "20px",
    backgroundColor: "lightyellow",
  };

  return (
    <>
      <h1 style={mystyles}>My car</h1>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <>
    <Car />
    <Car1 />
    <Car2 />
    <Car3 />
    <Car4 />
    <Car5/>
    <Car6 />
  </>
  
  
)
