import { useState } from 'react'
import React from 'react'

const FirstSection = ({ onAdd,texts }) => {

  const [text, setText] = useState('Enter Name')
  const [email, setEmail] = useState('Email Address')
  const [tel, setTel] = useState('Phone Number')
  const [intro, setIntro] = useState('About Me')

  const onSubmit = (e) => {
    e.preventDefault()

    onAdd({ text,intro,email,tel })

  }

  return (
    <>

    <form className='Form' onSubmit={onSubmit}>
      <div className='form-control'>
        <div className='logo'> EDRY </div>
        <input
          type='text'
          placeholder={texts}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type='email'
          placeholder={email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input
          type='tel'
          placeholder={tel}
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
        <textarea
          type='text'
          placeholder={intro}
          value={intro}
          onChange={(e) => setIntro(e.target.value)}
        />

      <input type='submit' value='Next' className='form-submit-button'/>
      </div>
    </form>
    </>
  )
}
FirstSection.defaultProps = {
    text: "EnterName"
 
  }
    

export default FirstSection;