import './App.css';
import { useState } from 'react';

function App() {
  const [rate,setRate] = useState(0);
 const calculator =(basevalue)=>{
           let mul=Number(basevalue/100*rate);
        return (mul +rate).toFixed(2);
  }
return (
<div className="App">
  
      <h1 className='head'>GST Calculator</h1>
       <h2 className='headcontent'>want to know how much GST are you paying on a product that you purchase? Just put the amount..</h2>
        <input type="number" className='amount' placeholder='Amount' onChange={(e)=>setRate(Number(e.target.value))}/>
  <div className='container'>
      <div className='container1'>
      <div className='in'>
          <h1 className='in-text'>Phones</h1>
          <img src='/69af272b112bd2935f0f00559d76c966.png'/>
          <h2 className='in-text-content'> At present, the GST rate on mobile phones is 12%.</h2>
          <h2 className='amount-display'>GST Rate:{calculator(12)}</h2>
      </div>
      <div className='in'>
          <h1 className='in-text'>Residential Property</h1>
          <img src='house.png'/>
          <h2 className='in-text-content'>At present, the GST rate on Residential Property is 8%.</h2>
          <h2 className='amount-display'>GST Rate:{calculator(8)}</h2>
      </div>
      <div className='in'>
          <h1 className='in-text'>Home Appliance</h1>
          <img src='homeapplice.jpeg'/>
          <h2 className='in-text-content'>At present, the GST rate on Home Appliance is 18%.</h2>
          <h2 className='amount-display'>GST Rate:{calculator(18)}</h2>
      </div>
      <div className='in'>
          <h1 className='in-text'>Grocery</h1>
          <img src='gcoery.jpeg'/>
          <h2 className='in-text-content'>At present, the GST rate on Grocery is 5%.</h2>
          <h2 className='amount-display'>GST Rate:{calculator(5)}</h2>
      </div>
      <div className='in'>
          <h1 className='in-text'>Car</h1>
          <img src='carr.jpeg'/>
          <h2 className='in-text-content'>At present, the GST rate on Car is 28%.</h2>
          <h2 className='amount-display'>GST Rate:{calculator(28)}</h2>
      </div>
      <div className='in'>
          <h1 className='in-text'>Bike</h1>
          <img src='bike.jpeg'/>
          <h2 className='in-text-content'>At present, the GST rate on Bike is 31%.</h2>
          <h2 className='amount-display'>GST Rate:{calculator(31)}</h2>
      </div>
      <div className='in'>
          <h1 className='in-text'>Laptop</h1>
          <img src='laptop.jpeg'/>
          <h2 className='in-text-content'>At present, the GST rate on Laptop is 18%.</h2>
          <h2 className='amount-display'>GST Rate:{calculator(18)}</h2>
      </div>
      <div className='in'>
          <h1 className='in-text'>Medicine</h1>
          <img src='medicine.jpeg'/>
          <h2 className='in-text-content'>At present, the GST rate on Medicine is 5%.</h2>
          <h2 className='amount-display'>GST Rate:{calculator(5)}</h2>
      </div>
      <div className='in'>
          <h1 className='in-text'>Gold</h1>
          <img src='gold.jpeg'/>
          <h2 className='in-text-content'>At present, the GST rate on Gold is 3%.</h2>
          <h2 className='amount-display'>GST Rate:{calculator(3)}</h2>
      </div>
      <div className='in'>
          <h1 className='in-text'>Hotel</h1>
          <img src='hotel.jpeg'/>
          <h2 className='in-text-content'>At present, the GST rate on Hotel is 15%</h2>
          <h2 className='amount-display'>GST Rate:{calculator(15)}</h2>
      </div>
      </div>
  </div>
</div>
);
}


export default App;
