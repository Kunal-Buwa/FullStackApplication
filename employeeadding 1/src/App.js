import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import EmployeeList  from './component/EmployeeList';

function App() {
  let emparr=[{empid:1,ename:"kunal",sal:10000},
             {empid:2,ename:"avadhoot",sal:20000},
             {empid:3,ename:"sidd",sal:30000},
             {empid:4,ename:"durga",sal:40000}
            ]
  return (
    <div className="App">
     
     <Header/>
     <EmployeeList employees={emparr}></EmployeeList>
    </div>
  );
}

export default App;
   