import logo from './logo.svg';
import LoginForm from './components/login_form';
import Logo from './components/logo'
import './App.css';

function App() {
  return (
    <div className='main_div' >
      <div className='sub_div'>
        <LoginForm/>
        <Logo/>
      </div>
    </div>
  );
}

export default App;
