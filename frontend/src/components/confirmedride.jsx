import React from 'react'
const ConfirmedRide = (props) => { 
    return(
        <div>
           <h5 className='p-1 text-center w-full absolute top-0' onClick={()=>{
                props.setvehiclepanelopen(false)
            }}><i className="text-3xl text-black-200 ri-arrow-down-wide-line"></i></h5>
             <h3 className='text-2xl font-semibold mb-5'>Confirm your ride</h3>

             <div className='flex gap-2 justify-between flex-col items-center'>
             <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
             <div className=' w-full mt-5 '>

                <div className='flex items-center gap-5 p-3 border-b-1'>
                <i className="ri-map-pin-user-line"></i>
                <div>
                   
                    <p className='text-sm -mt-1 text-gray-600'>{props.pickUp}</p>
                </div>
                </div>

                <div className='flex items-center gap-5 p-3 border-b-1'>
                <i className="text-lg ri-map-pin-2-line"></i>
                <div>
                    
                    <p className='text-sm -mt-1 text-gray-600'>{props.destination}</p>
                </div>
                </div>

                <div className='flex items-center gap-5 p-3'>
                <i className="ri-money-rupee-circle-fill"></i>
                <div>
                    <h3 className='text-lg  font-medium'>₹{props.fare[props.vehicleType]}</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Ride Cost</p>
                </div>
                </div>

             </div>
            
             <button onClick={()=>{
               props.setlookingfordriver(true)
               props.setconfirmedridepanel(false)
               props.createRide()
    
             }
             } className=' w-full   mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg' >Confirm</button>
             </div>


        </div>
    )

}

export default ConfirmedRide