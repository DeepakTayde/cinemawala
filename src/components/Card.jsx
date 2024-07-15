import React from 'react'
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Card = ({data, trending, index}) => {
  const imageURL = useSelector((state) => state.movieData.imageURL);


  return (
    <Link to={"/"+data.media_type+"/"+data.id} className='w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden rounded relative'>
        <img src={imageURL+data?.poster_path} alt="movie" />
        <div className='absolute top-3'>
            {
                trending &&(
                    <div className='py-1 px-4 backdrop-blur-3xl rounded-r-full bg-black/60 overflow-hidden'>
                    #{index} Trending 
                    </div>
                )
            }
        </div>
        <div className='absolute bottom-0 h-16 w-full backdrop-blur-3xl bg-black/60 p-2'>
            <h2 className='text-ellipsis line-clamp-1 text-lg font-semibold'>{data?.title || data?.name}</h2>
            <div className='text-sm text-neutral-400 flex justify-between items-center'>
            <p >{moment(data?.release_date || data?.first_air_date).format('MMMM Do YYYY')}</p>
            <p className='bg-black px-1 text-xs rounded-full text-white'>Rating: {Number(data.vote_average).toFixed(1)}</p>
            </div>
        </div>
    </Link>
  )
}   

export default Card