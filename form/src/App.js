import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: "Antonio", email: "antoniolvitall@gmail.com", bio: "Sou dev", role: "admin"}}/>
    </div>
  );
}

export default App;
