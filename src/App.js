import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import LifecycleA from './components/LifecycleA'
function App() {
  return (
    <div className="App">
    <LifecycleA/>
    {/*<UserGreeting/>
    <ParentComponent/>
     <EventBind/>
    {/*<ClassClick/>
       <FunctionClick/> */}
     {/* <Welcome name="Diana" hero="Wonder Woman"/>
      <Greet name="Bruce" hero="Batman"/>
      <Message/>
      <Counter/>
      <Greet name="Bruce" hero="Batman"/>
      <Welcome name="Diana" hero="Wonder Woman"/>*/}
    </div>
  );
}

export default App;
