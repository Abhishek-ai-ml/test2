import React, { useState } from 'react'
import Seats from '../components/Seats';


const SeatSelection = (props) => {
    let audi = props.audi;
    let currentAudi = 1;

    const [presentAudi, setPresentAudi] = useState(false);

    function clickHandler() {
      setPresentAudi(!presentAudi);
    }

  return (
    <div className='relative top-44'>
      <div className='w-9/12 pt-10 mx-auto flex gap-x-10'>
        {
            audi.map((aud) => (
                <div key={aud.id}>
                    {
                        <button className='border-blue-900 border-4 px-5 py-2 rounded-lg text-blue-900 font-extrabold hover:bg-blue-900 hover:text-white transition-all duration-200 ease-in' onClick={clickHandler}><span>Audi - </span>{aud}</button>
                    }
                </div>
            ))
        }
      </div>

      <div>
        {
          presentAudi ? <Seats aud={currentAudi}/> :<Seats aud={1}/>
        }
      </div>
    </div>
  )
}

export default SeatSelection
