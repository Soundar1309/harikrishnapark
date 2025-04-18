import React from 'react';

//link
import {Link,} from 'react-router-dom';

// icons
import{BsArrowsFullscreen, BsPeople}from'react-icons/bs';

const Room = ({ room }) => {  
  
  const { id, name, image, size, maxPerson, description, price} = room;
  return <div className='bg-white shadow-2xl min-h-[500px] group'>
    {/* img */}
    <div className='overflow-hidden'>
      <img className='group-hover:scale-110 transition-all duration-300 w-full' src={image} alt=""/>
    </div>

    {/* details*/}
    <div className='bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base'>
      <div className='flex justify-between w-[80%]'>

        {/* Size  */}
          <div className='flex items-center gap-x-2'>
              <div className='text-brown'>
                <BsArrowsFullscreen className='text-[15px] font-semibold'/>
              </div> 
              <div className='flex gap-x-1'>
                  <div>Size</div>
                  <div>{size}m2</div>
              </div>
          </div>
        
         {/* People  */}
         <div className='flex items-center gap-x-2'>
              <div className='text-brown'>
                <BsPeople className='text-[18px] font-semibold'/>
              </div> 
              <div className='flex gap-x-1'>
                  <div>Max People</div>
                  <div>{maxPerson}</div>
              </div>
          </div>
      </div>    
    </div>

    {/* name & description */} 
    <div className='text-center'>
      <Link to={`/room/${id}`}>
          <h3 className='h3'>{name}</h3>
      </Link>
      <p className='max-w-[300px] mx-auto mb-3 lg:mb-6'>{description.slice(0,56)}</p>
    </div>

    {/* button */}

    <Link to={`/room/${id}`} className='btn btn-secondary btn-sm max-w-[240px] lg:text-md sm:text-[14.5px] mx-auto'>Book now from ₹.{price}</Link>


  </div>;
};

export default Room;
