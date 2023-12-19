import React from 'react'
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import PasswordReset from './components/PasswordReset'
import NewPassword from './components/NewPassword'
import MenteeSignin from './components/MenteeSignin'
import MenteeSignUp from './components/MenteeSignUp'
import MenteeResetPassword from './components/MenteeResetPassword'
import MenteeNewPassword from './components/MenteeNewPassword'
import Active from './components/Active'
import Dashboard from './components/zenclass/Dashboard'
import Task from './components/zenclass/Task'
import Syllabus from './components/zenclass/Syllabus'
import Project from './components/zenclass/Project'
import Ticket from './components/zenclass/Ticket'
import CreateTicket from './components/zenclass/CreateTicket'
import Admin from './components/Mentee/Admin'
import AssignTickets from './components/Mentee/AssignTickets'


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/reset-password' element={<PasswordReset />} />
          <Route path='/reset-password/new-password/:OTP' element={<NewPassword />} />
          <Route path='/activate-account/:activationToken' element={ <Active/>} />
          <Route path='/mentee-signin' element={<MenteeSignin />} />
          <Route path='/mentee-signup' element={<MenteeSignUp />} />
          <Route path='/mentee-reset' element={<MenteeResetPassword />} />
          <Route path='/mentee-new' element={<MenteeNewPassword />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/task' element={<Task />} />
          <Route path='/syllabus' element={<Syllabus />} />
          <Route path='/project' element={<Project />} />
          <Route path='/ticket' element={<Ticket />} />
          <Route path='/create' element={<CreateTicket />} />
          <Route path='/admin' element=
            {<Admin />} />
          <Route path='/myTickets' element={ <AssignTickets/>} />
        </Routes>
    </div>
   </Router>
  )
}

export default App