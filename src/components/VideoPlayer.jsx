import React from 'react'
import { IoClose } from "react-icons/io5";
import useFetchDetails from '../hooks/useFetchDetails';
const VideoPlayer = ({data, close, media_type}) => {
    const {data:videoData}=useFetchDetails(`${media_type}/${data?.id}/videos`)
        console.log("video data", data)
        console.log("video ", videoData)

  return (
    <section className='fixed bg-neutral-700 top-0 right-0 left-0 bottom-0 z-40 bg-opacity-50 flex justify-center items-center'>
        <div className="bg-black w-full max-h-[80vh] max-w-screen-lg aspect-video rounded overflow-hidden relative">
            <button onClick={close} className='absolute  right-1 top-1 hover:scale-105 transition-all'>
            <IoClose className="text-2xl text-white"
            />
            </button>

            <iframe className='w-full h-full' title={videoData?.results[0].name} src={`https://www.youtube.com/embed/${videoData?.results[0]?.key}`}/>
            
        </div>
    </section>
  )
}

export default VideoPlayer