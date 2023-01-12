// done by function component
const EmployeeList=(props)=>{
    console.log(props)
    //when a function code has single line then no need to write { }(curly braces)
  const  renderemployee=()=>
          props.employees.map((emp,index)=><tr key={index}>
            <td>{emp.empid}</td>
            <td>{emp.ename}</td>
            <td>{emp.sal}</td>
          </tr>)
    

    return(
        <div className="container">
            <div className="row">
            <div  className="col-sm-12 col-md-3"> {/*to give columns and rows to the image it is used */}
                {/*  to retrieve the data from public folder */}
                <img style={{width:"200px",heigth:"300px"}}src="/HD-wallpaper-royal-enfield.jpg"></img>
            </div>
            <h3>From Employee List</h3>
            <div  className="col-sm-12 col-md-5">
            <table border="2" className="table">
                <thead>
                <tr>
                    <th>Employee id</th>
                    <th>Employee Name</th>
                    <th>Salary</th>
                    

                </tr>
                </thead>
                <tbody>
                {renderemployee()}{/*function call ,from here the control will go to the renderemployyee function call*/}
                </tbody>
                
            </table>
            </div>
            </div>
            </div>
             
    )
} 
export default EmployeeList;