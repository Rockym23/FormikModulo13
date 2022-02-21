import React from "react";
import {useFormik} from 'formik'
// TODO: import useFormik from formik library

var finalMessage = 'Hola'
function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      name: '',
      serviceaccount: '',
      domain: '',
      access_db: false
    },

    onSubmit: values => {
      console.log('form:', values);
      validateFields(values);
    },

    validate: values => {
      let errors = {};
      if(!values.name) errors.name = 'The Owner Name is required';
      if(!values.serviceaccount) errors.serviceaccount = 'The Service Account Name is Required';
      if(!values.domain) errors.domain = 'Must select a Domain';
      return errors;
    }

  });

  function validateFields(values){
    console.log("Validating Fields " , values.serviceaccount);

    if(values.serviceaccount.startsWith("sac") || values.serviceaccount.startsWith("SAC") ){
      alert ("Service Account should not start with sac");
      return;
    }else{
      values.serviceaccount = 'sac_' + values.serviceaccount;
    }

    alert("Completed");
    document.getElementById('form_result').innerHTML = printRegistry(values);    
  }

  function printRegistry(values){
    return `Owner: ${values.name} , Service Account: ${values.serviceaccount}, Domain: ${values.domain}, AccessDB: ${values.access_db} ` ;
  }


  return (
    <div>
     <form onSubmit={formik.handleSubmit}>
        <div>Owner Name</div>
         <input name="name" type="text" onChange={formik.handleChange} values={formik.values.name}/>
            {formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div>: null}
        <div>Service Account</div>
            <input  name="serviceaccount" type="text"  onChange={formik.handleChange} values={formik.values.serviceaccount}/>
            {formik.errors.serviceaccount ? <div style={{color:'red'}}>{formik.errors.serviceaccount}</div>: null}
        <div>Domain</div>
        <select name="domain" value={formik.values.domain} onChange={formik.handleChange}>
            <option value="" >Select a Domain</option>
            <option value="AMERICA" >America</option>
            <option value="EUROPE" >Europe</option>
            <option value="EAST_EUROPE">Eastern Europe</option>
            <option value="ASIA">Asia</option>    
            <option value="SOUTH_ASIA"> South Asia</option>    
        </select>
        {formik.errors.domain ? <div style={{color:'red'}}>{formik.errors.domain}</div>: null}
        <div><input type="checkbox" name="access_db" value={formik.values.access_db} /> 
            Require to Access Databases
        </div>
        <button type="Submit">Submit</button>
      
       </form>

       <p><span id="form_result"></span></p>
    </div>
  );
}

export default App;


//<p>
//The app is ready! You can proceed with the task instructions. TODO:
//build you form here.
//</p>