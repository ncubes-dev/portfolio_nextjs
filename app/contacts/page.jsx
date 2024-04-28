'use client'
import { useState } from 'react'
import { Input } from '../components/input'
import { sendEmail } from '../components/sendEmail'
import NotificationProvider from '../components/NotificationProvider'
import { toast } from 'react-toastify'

const Contacts = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function nameChange (nm) {
    setName(nm.target.value)
  }
  function messageChange (mm) {
    setMessage(mm.target.value)
  }

  function isEmpty (str) {
    return str.trim().length == 0
  }
  const handleClick = async () => {
    if (isEmpty(email) || isEmpty(name) || isEmpty(message)) {
      toast.error('fill all fields')
    } else {
      if (validateEmail(email)) {
        setIsLoading(true)
        const result = await sendEmail({
          name: name,
          email: email,
          message: message
        })
        result.status == 'success'
          ? toast.success(result.message)
          : toast.error(result.message)
        setIsLoading(false)
      } else {
        toast.error('Invalid email address')
      }
    }
  }
  const [emailError, setEmailError] = useState('')

  const validateEmail = email => {
    // Regular expression for basic email validation
    let re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  const emailChange = event => {
    setEmail(event.target.value)
    if (validateEmail(event.target.value)) {
      setEmailError('')
    } else {
      setEmailError('Enter a valid email address')
    }
  }

  return (
    <div className='flex flex-col w-full items-center'>
      <div className='flex flex-col mt-2 pt-5  md:mt-10'>
        <div className='flex justify-center'>
          <span className='font-thin pr-3 text-3xl md:text-4xl text-center  text-black'>
            Contact
          </span>
          <span className='font-bold text-mediumBlue text-3xl md:text-4xl text-center '>
            Us On
          </span>
        </div>
      </div>
      <div className='container mx-auto justify-center p-2 mt-4 flex flex-col w-full '>
        <form className='p-6 bg-veryLightBlue rounded-lg shadow-lg'>
          <label class='block'>
            <span class='block text-sm font-medium text-slate-700'>
              Name/Organisation
            </span>
            <Input
              text={'text'}
              placeholder={'John'}
              onChange={nameChange}
              value={name}
            />
          </label>
          <label class='block'>
            <span class='block text-sm font-medium text-slate-700'>Email</span>
            <Input
              text={'email'}
              placeholder={'example@gmail.com'}
              onChange={emailChange}
              value={email}
            />
            {emailError && <p className='text-red-500'>{emailError}</p>}
          </label>
          <label class='block'>
            <span class='block text-sm font-medium text-slate-700'>
              Message
            </span>
            <textarea
              onChange={messageChange}
              value={message}
              type={'text'}
              placeholder={
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
              }
              className='mt-1 h-auto block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
            ></textarea>
            {/* <Input
              onChange={messageChange}
              value={message}
              text={'text'}
              placeholder={
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
              }
            /> */}
          </label>
          <NotificationProvider />
        </form>
      </div>
      <button
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
        className='focus:outline-none focus:ring focus:ring-violet-300 focus:bg-lightBlue bg-mediumBlue w-32 text-white hover:bg-darkBlue p-2 px-3 text-sm rounded-full shadow-lg shadow-lightBlue'
      >
        {isLoading ? 'Sending....' : 'Submit'}
      </button>
    </div>
  )
}
export default Contacts
