import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Users';
import UpdateUser from './UpdateUser';
import CreateUser from './CreateUser';
import SalaryU from './SalaryU';
import CreateSalary from './CreateSalary';
import UpdateSalary from './UpdateSal';
import EmpU from './empU';
import EmpLogin from './empLogin';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users />}></Route>
          <Route path='/create' element={<CreateUser />}></Route>
          <Route path='/update/:id' element={<UpdateUser />}></Route>
          <Route path='/salaryy' element={<SalaryU />}></Route>
          <Route path='/createsalary' element={<CreateSalary />}></Route>
          <Route path='/updatesal/:id' element={<UpdateSalary />}></Route>
          <Route path="/login" element={<EmpLogin onLogin={handleLogin} />} />
          <Route path="/emp/:id" element={<EmpU />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
