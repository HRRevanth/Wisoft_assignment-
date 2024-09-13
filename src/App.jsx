import React from 'react';
import TaskList from './components/TaskList';
import Header from './components/Header';
import { TaskProvider } from './context/TaskContext';
import './styles.css';

const App = () => {
  return (
    <div >
    <TaskProvider>
      <Header />
      <TaskList />
    </TaskProvider>
    </div>
  );
};

export default App;
  