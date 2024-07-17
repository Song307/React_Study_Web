
import './App.css';
import Body from './component/Body';
import Body1 from './component/Body1';
import Body2 from './component/Body2';
import Comp from './component/Comp';
import InputTest from './InputList/InputTest';
import Counter from './Project/Counter';
import Exam1 from './Project/Exam1';
import Testcomp from './Project/Testcomp';
import Login from './LoginForm/Login';

function ChildComp(){
  return <div>ChildComp</div>
}

function App() {

  const props = {
    name : "송하성",
    age : "23",
    favorList : ["Java", "FrontEnd", "DB"],
  };
  
  return (
    <div className='App'>
      
      <div className='AppBody'>
      <Body {...props}> <ChildComp />
      </Body>
      <Body1/>
      <Body2/>
      <Comp/>
      <Counter/>
      </div>
      <div className='AppBody'>
      
      <Exam1/>
      <Testcomp/>
      <InputTest/>
      <Login/>
      </div>
      
    </div>
  );
}

export default App;
