import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import Creatable from 'react-select/creatable';
import './index.css';


function Form() {

  const options = [
    { label: "Reading", value: "Reading" },
    { label: "Singing", value: "Singing" },
    { label: "Learning a new language", value: "Learning a new language" },
    { label: "Journaling", value: "Journaling" },
    { label: "Staying informed", value: "Staying informed" },
    { label: "Vacation planning", value: "Vacation planning" },
    { label: "Gardening", value: "Gardening" },
    { label: "Hiking", value: "Hiking" },
  ];
  // cfare ndodh
  const initionalValues =  {firstName: "",lastName: "",email:""};
  //menaxhojme gjendjen e fieldeve duke perdorur setState()
  const [formValues,setFormValues] = useState(initionalValues);//useState merr  si parameter "initionalValues".Elementete useState jane:gjendja e meparshme e fildeve"formValues" dhe funksionin "setFormValues"qe updaton gjendjet
  const [formErrors,setFormErrors] = useState({});
  const [selected, setSelected] = useState();

  const handleOption = (field,value) =>{
  switch(field){ 
    case 'options':
      setSelected (value)
      break
      default:
        break
  }
  
  };
  // cfare ndodh
  const handleChange = (e)=>{
  const {name,value} = e.target;
  //[object HTMLObjectElement]-- objekti me key-name dhe vlere-value
  setFormValues({...formValues,[name]:value});
  console.log(name);//Vendosim vlerat e formes duke marr te gjitha vlerat e
};//fillestare "..formValues" dhe per cdo vlere qe marrim e shtoj te objekti [name]:value(name si key dhe value si vlera e objekteve) 
 //cdo gje qe shkruajme ne forme,do te shtojme vlerat qe kemi plotesuar ne formValues

  const handleSubmit = (e) =>{
  e.preventDefault();
  setFormErrors(validate(formValues));
};
  

  const validate =(values1)=>{ //duhet qe te validojme formen
  const errors = {};
  const emailformat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const allowvalue =/^[a-zA-Z\s]*$/;

     if(!values1.firstName){//kontrollojme nese ka apo jo vlere field-i nese jo vjen nje sms qe duhet plotesuar
      errors.firstName ="**Firstname is required!";
     }
     else if (!allowvalue.test(values1.firstName)){
      errors.firstName = "**Invalid value for first name!";
     }
     if(!values1.lastName){
      errors.lastName ="**Lastname is required!";
     }
     else if (!allowvalue.test(values1.lastName)){
      errors.lastName = "**Invalid value for last name!";
     }
     if(!values1.email){
      errors.email ="**Email is required!";
     }
     else if(!emailformat.test(values1.email)){
      errors.email = "**Invalid email format!";
     }
     return errors;
     };

  return (
    <div>
    <div class="shembull" >
      <div class="forms" id="forms" >
       <form onSubmit ={handleSubmit}>
        <label className='name'>
          <b>First name: </b><b><big><i class="bi bi-pencil-fill"></i></big></b>
           <input
           class="form-control"
           type="text"
           name="firstName"
           value={formValues.firstName}
           onChange ={handleChange} 
          />
        </label>
        <p class="titull2">{formErrors.firstName}</p>
      
        <label className='name'>
         <b>Last name: </b><b><big><i class="bi bi-pencil-fill"></i></big></b>
        <input
          class="form-control"
          type="text"
          name="lastName"
          value={formValues.lastName}//formValue merr cdo vlere te fieldeve "formValues.lastName"tashme jane te lidhura me useState
          onChange ={handleChange}//duhet qe cfaredo qe shkuajme ne fielde duhet te update-ojme vlerat e "initianalValues"
          //prandaj krijojme funksionin handleChange
          />
        </label>
        <p class="titull2">{formErrors.lastName}</p>

      <label className='name'>
        <b>E-mail: </b><b><big><i class="bi bi-pencil-fill"></i></big></b>
        <input
          class="form-control"
          type="text"
          name="email"
          value={formValues.email}//formValue merr cdo vlere te fieldeve "formValues.email"
          onChange ={handleChange}
          
        />
      </label>
      <p class="titull2">{formErrors.email}</p>
      
      <label className='name'>
      <big><b><i>Select hobies!</i></b></big><b><big><i class="bi bi-list"></i></big></b>
        <Creatable
        isClearable
        isMulti
        options={options}
        value={selected}
        onChange={(v)=>handleOption('options',v)}
/>
      </label><br></br><br></br>
      <button  class="btn btn-info" type="submit"><b><i>Submit</i></b></button>
    </form>
      </div>
    </div>

    <div class="te_dhena" >
      <p class="style"><i><b>Fields information</b></i></p><br></br>
      <h4 class="titull3">{formValues.firstName}<br></br></h4>
      <h4 class="titull3">{formValues.lastName}<br></br></h4>
      <h4 class="titull3">{formValues.email}<br></br></h4>
      <h4 class="titull3">{JSON.stringify(selected)}</h4>
     </div>
</div>
    
  );
}
export default Form;
