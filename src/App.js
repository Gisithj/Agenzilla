import './App.css';
import {Outlet} from "react-router-dom";
import { AuthProvider} from './Auth/AuthContext';

function App() {

  return (
    <AuthProvider>
    <div>
      <Outlet/>
    </div>
    </AuthProvider>
  );
}

export default App;
