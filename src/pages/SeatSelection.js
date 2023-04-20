import React from 'react'
import audiData from '../utils/Audi';
import Seats from '../components/Seats';
import SideBar from '../components/SideBar'
import ShowDates from '../components/ShowDates'

const SeatSelection = (props) => {
    let audi = props.audi;
  return (
    <div className='relative top-44'>
      <div>
        {
            audiData.map((aud) => (
                <div>
                    {
                        aud.id === audi && <Seats aud={aud}/> 
                    }
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default SeatSelection
