import axios from "axios"
import ModalWindow from "./modal-window"
import { useState } from "react"
import UserInformationComponent from "./user-information-component";
import { useDispatch } from 'react-redux';
import { storeData } from "../features/userDataSlice";


export default function TaskCardComponent({ taskData, setModalState }) {

    const dispatch = useDispatch();

    const viewUser = async (userId) => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users/' + userId)
        console.log(res.data)
        dispatch(storeData(res.data))
        setModalState(true)


    }

    return (
        <>
    
            <div className="card mx-3 my-2 shadow " style={{ maxWidth: '1920px' }} onClick={() => { viewUser(taskData.userId) }}>
                <div className="row g-0  align-items-center">
                    <div className="col-md-1 mt-4 mt-md-0 text-center">
                        <p id="card-subtitle"><strong>{taskData.id}</strong></p>
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <h5 className="card-title text-break" id="subtitle">{taskData.title}</h5>
                            <p className="card-text text-break" id="text">{taskData.body}</p>
                        </div>
                    </div>
                    <div className="col-md-2 text-center my-3 my-md-0" >
                        <button className="btn my-sm-2 my-md-3 my-0 text-break" id="action"><strong>Ver responsable</strong></button>

                    </div>
                </div>
            </div>


        </>
    )
}
