import React,{useState} from "react";
import data from './data'
import Tours from "./components/Tours";

const App = () => {
    const[tours, settours]=useState(data)

    function removeTour(id){
        const newTours = tours.filter(tour=> tour.id !==id);
        setTours(newTours);
    }

    if(tours.length==0) {
        return(
            <div className="refresh">
                <h2>No Tours Left </h2> 
                <button className="btn-white" onClick={() => setTours(data)}>
                    Refresh
                    </button>
                    </div>
        )
    }
    return ( 
          <div className="App">
              <tours tours={tours} removetour={removeTour}> </tours>
           </div>)

   
};

export default App;