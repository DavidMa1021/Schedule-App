import React from 'react'
import { BrowserRouter, Routes, Route, Link, useMatch, resolvePath, useResolvedPath } from "react-router-dom";
import TaskListComponent from './task-list-component';
import DashboardComponent from './dashboard-component';


function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className="nav-item btn-primary " id="navigation-button">
            <Link to={to} {...props} className={isActive ? "nav-link p-4 active" : "nav-link p-4"} aria-current="page" id='navi-link'>{children}</Link>
        </li>
    )
}

export default function NavBarComponent() {


    return (
        <>
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img src="https://cdn-icons-png.flaticon.com/512/1053/1053091.png?w=740&t=st=1680367801~exp=1680368401~hmac=706232832c8e97c01c60689122609ad64295faf6e914935e227cbc86d5ec0423" alt="Bootstrap" width="40" height="40"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <CustomLink to='/tasks'>TAREAS</CustomLink>
                                <CustomLink to='/dashboard'>DASHBOARD</CustomLink>

                            </ul>

                        </div>
                    </div>
                </nav>

                <Routes>
                    <Route path='/tasks' element={<TaskListComponent />}></Route>
                    <Route path='/dashboard' element={<DashboardComponent />}></Route>

                </Routes>

            </BrowserRouter>

        </>
    )
}
