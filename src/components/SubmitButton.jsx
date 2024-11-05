import React from 'react'

function SubmitButton({text = "Sign in"}) {
    return (
        <div>
            <button className='px-8 py-2 border-2 text-zinc-950 font-semibold border-black bg-transparent hover:bg-zinc-900 hover:text-white transition-all'>{text}</button>

        </div>
    )
}

export default SubmitButton