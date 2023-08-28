import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import {useState} from 'react';
import { Amplify, Analytics } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


function App() {
  
// this data is used for amplify configurations,don't mess with this
  Analytics.autoTrack('session', {
    enable: true,
    provider: 'AWSPinpoint'
});

    Analytics.enable();
    Analytics.record({ name: 'pageVisit' });
    Analytics.record({
     name: 'pageVisit',
    // Attribute values must be strings
     attributes: { name: 'new_user', artist: 'random' }
});

Analytics.record({
  name: 'pageVisit',
  attributes: {},
  metrics: { minutesListened: 30 }
});
  
    const [count,setCount] = useState(0);
    
    return (
    <div className="App flex flex flex-col justify-center items-center bg-violet-300 w-auto h-screen ">
      <header class = "text-lg">
      This is a Demo Application
      </header>
      <button data-amplify-analytics-on="click"
      data-amplify-analytics-name="click"
      class="bg-red-200 p-1 m-5 hover:bg-fuchsia-300 rounded hover:border border-indigo-600">
      <a target="_blank" href = "https://aws.amazon.com/">Go to AWS</a>
      </button>
      <button data-amplify-analytics-on="click"
      data-amplify-analytics-name="click"
      class="bg-red-200 p-1 m-5 hover:bg-fuchsia-300 rounded hover:border border-indigo-600">
      <a target="_blank" href = "https://azure.microsoft.com/en-in/get-started/azure-portal">Go to Azure</a>
      </button>
      <button 
      data-amplify-analytics-on="click"
      data-amplify-analytics-name="click"
      class="bg-red-200 p-1 m-5 hover:bg-fuchsia-300 rounded hover:border border-indigo-600">
      <a target="_blank" href = "https://cloud.google.com/?hl=en">Go to GCP</a>
      </button>
      <div class = "flex flex-row border border-indigo-700 rounded">
      <button 
      data-amplify-analytics-on="click"
      data-amplify-analytics-name="click"
      class="bg-lime-500 p-1 m-5 hover:bg-lime-300 rounded hover:border border-pink-100" onClick={()=> setCount(count+1)}>
      Increase count
      </button>
      <button 
      data-amplify-analytics-on="click"
      data-amplify-analytics-name="click"
      class="bg-red-500 p-1 m-5 hover:bg-lime-300 rounded hover:border border-gray-100" onClick={()=> setCount(count-1)}
      >Decrease count
      </button>
      <button 
       data-amplify-analytics-on="click"
      data-amplify-analytics-name="click"
      class="bg-blue-500 p-1 m-5 hover:bg-lime-300 rounded hover:border border-gray-100" onClick={()=> setCount(0)}>
      Reset count
      </button>
      <button
      data-amplify-analytics-on="click"
      data-amplify-analytics-name="click"
      data-amplify-analytics-attrs="tried:user,clicked:recorded"
      class="bg-red-200 p-1 m-5 hover:bg-fuchsia-300 rounded hover:border border-indigo-600">click here</button>
      </div>
      <p>No of clicks</p>
      <h1 class = "text-xl">{count}</h1>
    </div>
  );
}

export default App;
