import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter} from 'react-router-dom'
import { useRoutes } from './routes';
import {AuthContext} from './context/AuthContext';
import useAuth from './hooks/useAuth';


function App() {
  const auth = useAuth();
  const isLogined = !!auth.token
  const routes = useRoutes(isLogined)

  return (
    <AuthContext.Provider value={{...auth, isLogined}}>
      <BrowserRouter>
        <Navbar />
          {routes}
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
