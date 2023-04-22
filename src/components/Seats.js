import React, { useState } from 'react'
import audiData from '../utils/Audi';

const Seats = (props) => {
    let aud = props.aud;

    const [occupySeat, setOccupySeat] = useState(false);

    function clickHandler() {
        setOccupySeat(!occupySeat);
    }

    console.log('printing audi data in seats.js');
    console.log(aud);

  return (
    <div className='relative top-10'>
      <div className='flex flex-wrap gap-x-5 mx-auto w-[500px] h-[400px]'>
        {/* {
            audi.seatInfo.map( (seat) => 
                (
                    !seat && <button className={`w-[50px] h-[50px] border-blue-900 border-2 rounded-md ${!occupySeat && !seat? 'bg-blue-900' : 'bg-white'}`} onClick={clickHandler}></button>
                )
            )
        } */}

        {
            audiData.map( (audi) => {
            audi.id === aud && (
            audi.seatInfo.map( (seat) => 
                (
                    !seat && <button className={`w-[50px] h-[50px] border-blue-900 border-2 rounded-md ${!occupySeat && !seat? 'bg-blue-900' : 'bg-white'}`} onClick={clickHandler}></button>
                )
            )
            )
          })
        }
      </div>
    </div>
  )
}

export default Seats
