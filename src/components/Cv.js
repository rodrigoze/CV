
import { FaPhoneVolume } from 'react-icons/fa';
import { FaVoicemail } from 'react-icons/fa';



const Cv = ({tasks,seconds,thirds,edit}) => {


  return (
    <>
    <div className='cv' >
        <div className='text' >
            {tasks.text}
            </div>
            <div className='tels'>
            {thirds.position}
            </div>
            <div className="intros">
                About Me
            </div>
            <div className="intro">
                {tasks.intro}
            </div>
            <div className="intros">
                Education
            </div>
            <div className='education'>
              <div className='tit'>
            {seconds.title}
            </div>
            <div className='school'>
            {seconds.school}
            </div>
            <div className='date'>
            {seconds.date} - {seconds.finish}
            </div>
            </div>
            <div className="education">
            <div className="intros">
                Experience
            </div>
              <div className='tit'>
            {thirds.name}
            </div>
            <div className='pos'>
            {thirds.position} 
            </div>
            <div className='school'>
            {thirds.job} 
            </div>
            <div className='date'>
            {thirds.from} - {thirds.to}
            </div>
      </div>
    
      <div className='tel'>
      <FaPhoneVolume />      {tasks.tel} 
            </div>
            <div className='tel'>
      <FaVoicemail />      {tasks.email} 
            </div>
        <button className='edit' onClick={edit}>Edit</button>

          

    

    </div>
   
    
    </>
  );
};

export default Cv;