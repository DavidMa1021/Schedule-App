import axios from "axios"
import ModalWindow from "./modal-window"
import { useState } from "react"
import UserInformationComponent from "./user-information-component";
import { useDispatch } from 'react-redux';
import { storeData } from "../features/userDataSlice";


export default function TaskCardComponent({ taskData, setModalState }) {

    const dispatch = useDispatch();
    
    const viewUser = async (userId) => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users/'+ userId)
            console.log(res.data)
            dispatch(storeData(res.data))
            setModalState(true)
        
        
    }

    return (
        <>
            <div className="card mx-3 my-2" style={{ maxWidth: '1920px' }} onClick={()=>{viewUser(taskData.userId)}}>
                <div className="row g-0 justify-content-center align-items-center">
                    <div className="col-md-1">
                        <p><strong>{taskData.id}</strong></p>
                    </div>
                    <div className="col-md-11">
                        <div className="card-body">
                            <h5 className="card-title">{taskData.title}</h5>
                            <p className="card-text">{taskData.body}</p>
                            <p className="card-link" ><strong>Ver responsable</strong></p>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    )
}
