import React, {useEffect, useState} from 'react';
import axios from "axios";

const Distance = (props) => {
    const[distanceListState, setDistanceListState] = useState();

    useEffect( () => {
        async function fetchDistance(){
            const list = await axios.get("https://zip-api.eu/api/v1/distance/US-11230/US-11230");

            //const list = await axios.get("https://zip-api.eu/api/v1/distance/US-"+props.zip1 + "/US-" + props.zip2);
            
            setDistanceListState({list: list.info});
            console.log(list.info);
            
        }
        fetchDistance();
    },[]);

    return(
        <div>
            <h2>Distance: {distanceListState.distance}</h2>
            <pre>{JSON.stringify(distanceListState, null, 2)}</pre>

            

        </div>
    );

}
export default Distance;