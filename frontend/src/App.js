
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/Signup';
import Home from './components/Home';
import Login from './components/Login';
import { Toaster } from 'react-hot-toast';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  }
])


function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
