import React from 'react'
// import { useForm } from '@formcarry/react'

export default () => {
  // const { state, submit } = useForm({ id: 'iNCgi8I-NKeP' })

  // //success message
  // if (state.submitted) {
  //   return <div>Thank you! We recieved your submission!</div>
  // }
  return (
    <form
      action="https://formcarry.com/s/iNCgi8I-NKeP"
      method="POST"
      acceptCharset="UTF-8"
      className="max-w-md flow-root px-auto mx-auto"
    >
      <div className="block items-center mb-6">
        <div className="block">
          <label
            htmlFor="email"
            className="block text-gray-500 font-bold text-center mb-1 mb-0 pr-4"
          >
            Email
          </label>
          <div className="block px-10">
            <input
              id="email"
              type="email"
              name="email"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
        </div>
      </div>
      <div className="block items-center mb-6">
        <div className="block">
          <label
            htmlFor="message"
            className="block text-gray-500 font-bold text-center mb-1 mb-0 pr-4"
          >
            Message
          </label>
          <div className="block px-10">
            <input
              id="message"
              name="message"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
        </div>
      </div>
      <div className="block items-center text-center">
        <button
          type="submit"
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        >
          Send
        </button>
      </div>
    </form>
  )
}
