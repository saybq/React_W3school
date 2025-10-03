import { useState } from 'react';

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  return (
    <form>
      <label>First name:
      <input 
        type="text" 
        name="firstname" 
        value={inputs.firstname} 
        onChange={handleChange}
      />
      </label>
      <label>Last name:
        <input 
          type="text" 
          name="lastname" 
          value={inputs.lastname} 
          onChange={handleChange}
        />
        </label>
        <p>Current values: {inputs.firstname} {inputs.lastname}</p>
    </form>
  )
}

function ReactMultiInputs(){
    return(
        <>
            <MyForm />
        </>
    )
}
export default ReactMultiInputs