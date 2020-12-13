import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import ExercisesList from './components/ExercisesList';
import EditExercise from './components/EditExercises';
import CreateExercise from './components/CreateExercises';
import CreateUser from './components/CreateUsers';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <br/>
        <div className="container">
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/" exact component={ExercisesList} />
        </div>
      </div>
    </Router>
  );
}

export default App;
