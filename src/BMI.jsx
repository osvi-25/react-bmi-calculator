import { use, useState } from 'react'
import './BMI.css'

export const BMI = () => {
   
   const [height, setHeight] = useState();
   const [weight, setWeight] = useState();
   const [bmi, setBmi] = useState(null);
   const [bmiStatus, setBmiStatus] = useState("");
   const [errorMessage, setErrorMessage] = useState("");

   const calculateBMI = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    if(isValidHeight && isValidWeight){
       const heightInMeters = height / 100;
       const bmiValue = weight / (heightInMeters*heightInMeters);
       setBmi(bmiValue.toFixed(2));
       if(bmiValue<18.5){
      setBmiStatus("Underweight");
      }
      else if(bmiValue>=18.5 && bmiValue<24.9){
      setBmiStatus("Normal Weight");
      }
      else if(bmiValue>=25 && bmiValue<29.9){
      setBmiStatus("Overweight");
      }
      else if(bmiValue>=30){
      setBmiStatus("Obese");
      }
      setErrorMessage("");
    }
      else{
      setBmi(null);
      setBmiStatus("");
      setErrorMessage("Please enter valid numeric value for height and weight.");
      }
    }
   
  const clearAll = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiStatus("");
  }

  return (
    <div>
        <div className="app-container">
           <div className="app-image"></div>
           <div className="data">
            <h1>BMI Calculator</h1>
           {errorMessage && <p className="error">{errorMessage}</p>}
            <div className="input-container">
                <label htmlFor="height">Height (cm) </label>
                <input type="text" id="height" value={height} onChange={(e)=>setHeight(e.target.value)}/>
            </div>
             <div className="input-container">
                <label htmlFor="weight">Weight (kg) </label>
                <input type="text" id="weight" value={weight} onChange={(e)=>setWeight(e.target.value)} />
            </div>
            <div className="button">
              <button onClick={calculateBMI}>Calulate BMI</button>
              <button onClick={clearAll}>Clear</button>
            </div>
           {bmi!==null && (<div className="result">
                <p>Your BMI is <span>{bmi}</span></p>
                <p>Status : <span>{bmiStatus}</span></p>
            </div>)}
           </div>
        </div>
    </div>
  )
}
