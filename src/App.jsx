
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';
import { useState } from 'react';


function App() {
  
  const loadedCoffees=useLoaderData();

  const [coffees,setCoffees]=useState(loadedCoffees);
  return (
    <>
     
     <div className='m-10 '>
       
     <h2 className=' text-center text-4xl font-bold mb-4'>Coffee length: {coffees.length}</h2>
      <div className='grid md:grid-cols-2 gap-4'>
      {
        coffees.map(coffee=><CoffeeCard
           key={coffee._id}
           coffees={coffees}
           setCoffees={setCoffees}
           coffee={coffee}
           ></CoffeeCard>)
      }
      </div>
     </div>
      
    </>
  )
}

export default App
