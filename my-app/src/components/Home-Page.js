import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Expanded from './Reusable-Components/ExpandToggle'

import '../Home-Page.css'

function ApiGet(){
    const [chefInfo, setInfo] = useState([]);

    useEffect(() =>{
        axios.get('https://chef-portfolio1-bw.herokuapp.com/api')
        .then((res) => {
            console.log(res);
            let newData = res.data.posts
            setInfo(newData)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    return(
        <div className="nextTry">
            { chefInfo.map((info, index) => (
                <section key = {index} className='foodContainer'>
                    <ul>
                        <li>
                            <figure>
                                <Expanded 
                                name={`${info.food_name}`} 
                                image={`${info.image}`} 
                                description={`${info.description}`} 
                                instructions={`${info.instructions}`} 
                                type={`${info.meal_type}`} />
                                <h1>{info.food_name}</h1>
                                 <h4>{info.meal_type}</h4>
                                 
                            </figure>
                        </li>
                    </ul>

                </section>
            ))}
        </div>
    )
}
export default ApiGet