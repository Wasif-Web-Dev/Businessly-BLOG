import React from 'react'
import SubmitButton from './SubmitButton'

function Comment() {
    return (
        <>

            <div className='p-24 bg-zinc-50 max-w-screen-lg m-auto h-[90vh]'>
                <h1 className='font-[Lora] text-2xl'>Leave a Comment</h1>
                <h3 className='mt-3 text-base'>Your email address will not be published. Required fields are marked *</h3>
                <textarea className='border-[1px] p-5 mt-5 bg-zinc-100 outline-1' cols={104} rows={10} name="Comment Area"
                    id="Leave-Comment_textArea" placeholder='Type Here...' />
                <form action='#' className='Name-Email-_Website flex justify-evenly mt-5 items-center'>
                    <input className='border-2 px-10 py-3' type="text" placeholder='Name*' />
                    <input className='border-2 px-10 py-3' type="email" name="" id="" placeholder='Email*' />
                    <input className='border-2 px-10 py-3' type="text" placeholder='Emial*' />
                </form>
                <input className='mt-5 ml-3' type="checkbox" name="Check Box" id="" />
                <span className='ml-5'>Save my name, email, and website in this browser for the next time I comment.</span>
                <div className='mt-4 ml-3'>

                </div>
                <SubmitButton text="Post Comment" />
            </div>
        </>
    )
}

export default Comment