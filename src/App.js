import React from 'react'
import { useState } from 'react'
import FirstSection from './components/FirstSection'
import Cv from './components/Cv'
import SecondSection from './components/SecondsSection'
import ThirdSection from './components/ThirdSection'


const App = () => {

  const [tasks, setTasks] = useState([])
  const [seconds, setSecond] = useState([])
  const [thirds, setThird] = useState([])
  const [isActive, setIsActive] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [isShwon, setIsShown] = useState(false);
  const [isCv, setIsCv] = useState(false);



  const addTask =  (task) => {
    setIsReady(current => !current);
    setIsActive(current => !current);

    setTasks(prevState => ({
      ...prevState,
      text: task.text,
      tel:task.tel,
      email: task.email,
      intro:task.intro
  }));
  }
  const addSecond =  (second) => {  
    setIsReady(current => !current);
    setIsShown(current => !current);


    setSecond(prevState => ({
      ...prevState,
      school: second.school,
      title:second.title,
      date: second.date,
      finish: second.finish
  }));
  }
  const addThird =  (third) => {  
    setIsShown(current => !current);
    setIsCv(current => !current);


    setThird(prevState => ({
      ...prevState,
      name: third.name,
      position:third.position,
      job: third.job,
      from: third.from,
      to: third.to

  }));
  }
  const edit =  () => {
    setIsActive(current => !current);
    setIsCv(current => !current);

   
  }

 


  return (
      <div>
        {isActive &&  <FirstSection onAdd={addTask}/>}
      
  {isReady && <SecondSection onAdd={addSecond} />}
  {isShwon &&   <ThirdSection onAdd={addThird} />}     
  {isCv &&   <Cv edit={edit} tasks={tasks} seconds={seconds} thirds={thirds}/>}     

      </div>
  )
}


export default App;