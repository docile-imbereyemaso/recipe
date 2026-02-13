import React from 'react'

const Form = (props) => {
    console.log(props);
  return (
    <form className='space-x-10 flex flex-col sm:flex-row space-y-5 md:space-y-0 items-center'>
        <input placeholder='e.g. organa' className='w-full sm:w-lg  py-3 px-2 rounded-md border border-gray-300 focus:ring-1 focus:ring-indigo-500/50 outline-none transition-all caret-indigo-400'/>
        <button className='py-3 px-6 bg-black text-white rounded-lg hover:bg-zinc-700 transition-all ease-in-out'>+ Add ingredient</button>
    </form>
  )
}

export default Form
