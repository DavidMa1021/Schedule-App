import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TaskCardComponent from './task-card-component';
import ModalWindow from './modal-window';
import UserInformationComponent from './user-information-component';
import { useSelector } from 'react-redux';



export default function TaskListComponent() {


  const URI = 'https://jsonplaceholder.typicode.com/posts'

  const [tasks, setTasks] = useState([])
  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const res = await axios.get(URI)
    setTasks(res.data)
  }

  const [modalState, setModalState] = useState(false)

  const userData = useSelector(state => state.userData.user)

  return (
    <div className='container-sm pt-5'>

      <div className='row my-5'>
        <h1 className='p-4' id='title'>MIS TAREAS</h1>
      </div>

      <div className='row justify-content-center m-3 m-md-0'>

        {tasks.map((task) => {
          return (<TaskCardComponent taskData={task} setModalState={setModalState} />)
        })}

      </div>

      <ModalWindow state={modalState} setState={setModalState}>
          <UserInformationComponent user={userData} />

      </ModalWindow>







    </div>
  )
}
