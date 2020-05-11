import React from 'react';
import StrengthCheck from 'react-password-strength-variant-indicator'
import './App.css';

function App() {
  const onchangeHandler=(val)=>{
      //
  }
  return (
    <div className="card">
     <form>
       <h4>Password</h4>
       <StrengthCheck changecallback={(val)=>onchangeHandler(val)} variant='line' inputprops={{ name: 'password', placeholder: 'line' }}/>
       <h4>Password</h4>
       <StrengthCheck changecallback={ (val)=>onchangeHandler(val) } variant='linear-stripped' inputprops={{ name: 'password', placeholder: 'linear-stripped' }} />
       <h4>Password</h4>
       <StrengthCheck changecallback={(val)=>onchangeHandler(val)} variant='discontinuous' inputprops={{ name: 'password', placeholder: 'discontinuous' }} />
       <h4>Password</h4>
       <StrengthCheck changecallback={(val)=>onchangeHandler(val)} variant='discontinuous-stripped' inputprops={{ name: 'password', placeholder: 'discontinuous-stripped' }} />
       <h4>Password</h4>
       <StrengthCheck changecallback={(val)=>onchangeHandler(val)} variant='circle' inputprops={{ name: 'password', placeholder: 'circle' }} />
       <h4>Password</h4>
       <StrengthCheck changecallback={(val)=>onchangeHandler(val)} variant='linear' inputprops={{ name: 'password', placeholder: 'linear' }} />    
     </form>
    </div>
  );
}

export default App;
