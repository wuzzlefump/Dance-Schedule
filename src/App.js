import logo from './logo.svg';
import * as React from 'react'
import {useMutation} from 'react-query'
import './App.css';
import Layout from './components/Layout/index'
import Schedule from './components/ScheduleForm/index'
import { Formik } from 'formik';

function App() {
  
const initial =[
  {title:"", content:""},
  {title:"", content:""},
  {title:"", content:""},
  {title:"", content:""},
  {title:"", content:""},
  {title:"", content:""},
  {title:"", content:""},
  {title:"", content:""},
  {title:"", content:""},
  {title:"", content:""},
  {title:"", content:""},
  {title:"", content:""},
  {title:"", content:""},
  {title:"", content:""},
  {title:"", content:""},
]
const savedPlanner = JSON.parse(localStorage.getItem("schedule"))


const  save = (e, values)=>{
  e.preventDefault()
  console.log(values)
  localStorage.setItem("schedule",JSON.stringify(values));
  console.log(savedPlanner)
}
    React.useEffect(()=>{
      

    },[])



  return (
    <div className="App">
      <Layout>
        { savedPlanner !== null ?
        <Formik
        initialValues={{
          lessonPlans:savedPlanner,
        }}

        >
        {(
         f
       ) => (
       <form>
        <div className={"scheduleContainer"}>
          
      <Schedule f={f} values={f.values.lessonPlans[0]} parentName={`lessonPlans[0]`} student={"Practice/Coaching"} lesson={"Before Work"} time={"11:15"}></Schedule>
      <Schedule f={f} values={f.values.lessonPlans[1]} parentName={`lessonPlans[1]`} student={"Subject"}  lesson={"Dance Session"} time={"12:00"}></Schedule>
      <Schedule f={f} values={f.values.lessonPlans[2]} parentName={`lessonPlans[2]`} student={"Student"}  lesson={"Lesson"} time={"12:30"}></Schedule>
      <Schedule f={f} values={f.values.lessonPlans[3]} parentName={`lessonPlans[3]`} student={"Student"}  lesson={"Lesson"} time={"1:15"}></Schedule>
      <Schedule f={f} values={f.values.lessonPlans[4]} parentName={`lessonPlans[4]`} student={"Student"}  lesson={"Lesson"} time={"2:00"}></Schedule>
      <Schedule f={f} values={f.values.lessonPlans[5]} parentName={`lessonPlans[5]`} student={"Student"}  lesson={"Lesson"} time={"2:45"}></Schedule>
      <Schedule f={f} values={f.values.lessonPlans[6]} parentName={`lessonPlans[6]`} student={"Clean"}  lesson={"Areas"} time={"3:30"}></Schedule>
      <Schedule f={f} values={f.values.lessonPlans[7]} parentName={`lessonPlans[7]`} student={"Meeting"}  lesson={"Topic"} time={"3:45"}></Schedule>
      <Schedule f={f} values={f.values.lessonPlans[8]} parentName={`lessonPlans[8]`} student={"Lunch"}  lesson={"Food"} time={"4:15"}></Schedule>
      <Schedule f={f} values={f.values.lessonPlans[9]} parentName={`lessonPlans[9]`} student={"Student"}  lesson={"Lesson"} time={"5:15"}></Schedule>
      <Schedule f={f} values={f.values.lessonPlans[10]} parentName={`lessonPlans[10]`} student={"Student"}  lesson={"Lesson"} time={"6:00"}></Schedule>
      <Schedule f={f} values={f.values.lessonPlans[11]} parentName={`lessonPlans[11]`} student={"Student"}  lesson={"Lesson"} time={"6:45"}></Schedule>
      <Schedule f={f} values={f.values.lessonPlans[12]} parentName={`lessonPlans[12]`} student={"Student"}  lesson={"Lesson"} time={"730"}></Schedule>
      <Schedule f={f} values={f.values.lessonPlans[13]} parentName={`lessonPlans[13]`} student={"Student"} Lesson={"Lesson"} time={"8:15"}></Schedule>
      <Schedule f={f} values={f.values.lessonPlans[14]} parentName={`lessonPlans[14]`} student={"Practice/Coaching"} Lesson={"After Work"} time={"9:00"}></Schedule>
          </div>
      <div className="footer">
        <button onClick={(e)=>save(e, f.values.lessonPlans)}>Save</button>
      </div>
      </form>)}
      </Formik> :
      
      <Formik
      initialValues={{
        lessonPlans:initial,
      }}

      >
      {(
       f
     ) => (
     <form>
      <div className={"scheduleContainer"}>
        
    <Schedule f={f} values={f.values.lessonPlans[0]} parentName={`lessonPlans[0]`} student={"Practice/Coaching"} lesson={"Before Work"} time={"11:15"}></Schedule>
    <Schedule f={f} values={f.values.lessonPlans[1]} parentName={`lessonPlans[1]`} student={"Subject"}  lesson={"Dance Session"} time={"12:00"}></Schedule>
    <Schedule f={f} values={f.values.lessonPlans[2]} parentName={`lessonPlans[2]`} student={"Student"}  lesson={"Lesson"} time={"12:30"}></Schedule>
    <Schedule f={f} values={f.values.lessonPlans[3]} parentName={`lessonPlans[3]`} student={"Student"}  lesson={"Lesson"} time={"1:15"}></Schedule>
    <Schedule f={f} values={f.values.lessonPlans[4]} parentName={`lessonPlans[4]`} student={"Student"}  lesson={"Lesson"} time={"2:00"}></Schedule>
    <Schedule f={f} values={f.values.lessonPlans[5]} parentName={`lessonPlans[5]`} student={"Student"}  lesson={"Lesson"} time={"2:45"}></Schedule>
    <Schedule f={f} values={f.values.lessonPlans[6]} parentName={`lessonPlans[6]`} student={"Clean"}  lesson={"Areas"} time={"3:30"}></Schedule>
    <Schedule f={f} values={f.values.lessonPlans[7]} parentName={`lessonPlans[7]`} student={"Meeting"}  lesson={"Topic"} time={"3:45"}></Schedule>
    <Schedule f={f} values={f.values.lessonPlans[8]} parentName={`lessonPlans[8]`} student={"Lunch"}  lesson={"Food"} time={"4:15"}></Schedule>
    <Schedule f={f} values={f.values.lessonPlans[9]} parentName={`lessonPlans[9]`} student={"Student"}  lesson={"Lesson"} time={"5:15"}></Schedule>
    <Schedule f={f} values={f.values.lessonPlans[10]} parentName={`lessonPlans[10]`} student={"Student"}  lesson={"Lesson"} time={"6:00"}></Schedule>
    <Schedule f={f} values={f.values.lessonPlans[11]} parentName={`lessonPlans[11]`} student={"Student"}  lesson={"Lesson"} time={"6:45"}></Schedule>
    <Schedule f={f} values={f.values.lessonPlans[12]} parentName={`lessonPlans[12]`} student={"Student"}  lesson={"Lesson"} time={"730"}></Schedule>
    <Schedule f={f} values={f.values.lessonPlans[13]} parentName={`lessonPlans[13]`} student={"Student"} lesson={"Lesson"} time={"8:15"}></Schedule>
    <Schedule f={f} values={f.values.lessonPlans[14]} parentName={`lessonPlans[14]`} student={"Practice/Coaching"} lesson={"After Work"} time={"9:00"}></Schedule>
        </div>
    <div className="footer"> 
      <button onClick={(e)=>save(e, f.values.lessonPlans)}>Save</button>
    </div>
    </form>)}
    </Formik> }
      </Layout>
    </div>
  );
}

export default App;
