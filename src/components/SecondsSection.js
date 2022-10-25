import { useState } from 'react'
import React from 'react'

const SecondSection = ({ onAdd }) => {
    
  const [school, setSchool] = useState('School Name')
  const [title, setTitle] = useState('Title Of Study')
  const [date, setDate] = useState('From')
  const [finish, setFinish] = useState('To')





  const onSubmit = (e) => {
    e.preventDefault()
    onAdd({ school,title,date,finish })

  }

  return (
    <>
    <form className='sndForm'  onSubmit={onSubmit}>
      <div className='form-control'>
      <div className='logo'> EDRY </div>

        <input
          type='text'
          placeholder={school}
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
        <input
          type='text'
          placeholder={title}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type='text'
          placeholder={date}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
         <input
          type='text'
          placeholder={finish}
          value={finish}
          onChange={(e) => setFinish(e.target.value)}
        />
              <input type='submit' value='Next'  className='form-submit-button' />

      </div>
    </form>
          </>

  )
}

export default SecondSection;