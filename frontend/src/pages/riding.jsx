import React, { use } from 'react'
import { Link,useLocation} from 'react-router-dom'
import { useEffect,useContext} from 'react';
import { SocketContext } from './../context/SocketContext';
import {useNavigate} from 'react-router-dom';
import LiveTracking from './../components/LiveTracking';

const Riding = () => {
    const location=useLocation();
    const {ride}=location.state||{}
    const {socket}=useContext(SocketContext)
    const navigate=useNavigate()

    socket.on('ride-ended', () => {
        navigate('/home')
    })

return(
    <div className='h-screen'>
        <Link to='/home' className='fixed right-2 top-2  h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className=" text-lg font-medium ri-home-9-fill"></i>
        </Link>
    <div className='h-1/2'>
    <LiveTracking/>
    </div>
    <div className='h-1/2 p-4'>
    <div className='flex items-center justify-between'>
         <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
         <div calssName='text-right'>
            <h2 calssName='text-lg font-medium capitalize'>{ride?.captain.fullname.firstname}</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>{ride?.captain.vehicle.plate}</h4>
            <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
         </div>
         </div>

          <div className='flex gap-2 justify-between flex-col items-center'>
          <div className=' w-full mt-5 '>

             <div className='flex items-center gap-5 p-3 border-b-1'>
             <i className="text-lg ri-map-pin-2-line"></i>
             <div>
               
                 <p className='text-sm -mt-1 text-gray-600'>{ride?.destination}</p>
             </div>
             </div>

             <div className='flex items-center gap-5 p-3'>
             <i className="ri-money-rupee-circle-fill"></i>
             <div>
                 <h3 className='text-lg  font-medium'>₹{ride?.fare}</h3>
                 <p className='text-sm -mt-1 text-gray-600'>Ride Cost</p>
             </div>
             </div>

          </div>
          
          </div>
          

    <button  className=' w-full   mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg' >Make a Payment </button>

    </div>
    </div>
)
}

export default Riding
