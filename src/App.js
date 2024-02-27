
import './App.css';
import LoginForm from './LoginForm';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
     <Navigation />
     <div className="container">
      <LoginForm/>
     </div>
    </div>
  );
}

export default App;
