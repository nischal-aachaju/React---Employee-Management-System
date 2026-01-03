import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthDataContext from './context/AuthContext.jsx'
import { TaskDataContext } from './context/TaskContext.jsx'
createRoot(document.getElementById('root')).render(
    <TaskDataContext>
        <AuthDataContext>
            <App />
        </AuthDataContext> 
    </TaskDataContext>


)
