import { useState } from 'react'
import React from 'react'

const ThirdSection = ({ onAdd }) => {
    
  const [name, setName] = useState('Company Name')
  const [position, setPosition] = useState('Position Title')
  const [job, setJob] = useState('main tasks of your jobs')
  const [from, setFrom] = useState('From')
  const [to, setTo] = useState('To')


  const onSubmit = (e) => {
    e.preventDefault()
    onAdd({ name,position,job,from,to })

  }

  return (
    <>
    <form className='sndForm'  onSubmit={onSubmit}>
      <div className='form-control'>
      <div className='logo'> EDRY </div>

        <input
          type='text'
          placeholder={name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder={position}
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <textarea
          type='text'
          placeholder={job}
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
         <input
          type='text'
          placeholder={from}
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
          <input
          type='text'
          placeholder={to}
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
              <input type='submit' value='Generate CV'  className='form-submit-button' />

      </div>
    </form>
          </>

  )
}

export default ThirdSection;