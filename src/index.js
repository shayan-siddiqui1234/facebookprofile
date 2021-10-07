
import ReactDOM from 'react-dom';
import React  from 'react';
import A from './henry.jpg';
import B from './shahid.jpg';
import C from './man.jpg';
import './index.css'


// function Hi() {
  
//   return <div> Hello <strong className="hello">"Shayan!"</strong><br/>
// <div className="mat"> Shayan favourite Crickers  By using order list </div>
//  <ol>
//    <li>Babar Azam </li>
//    <li> Shoaib Malik</li>
//    <li> Sarfaraz Ahmed</li>
//    <li> Muhammad Amir</li>
//    </ol>
//    <div className="mat"> Shayan favourite Crickers  By using unorder list </div>
//  <ul>
//    <li>Babar Azam </li>
//    <li> Shoaib Malik</li>
//    <li> Sarfaraz Ahmed</li>
//    <li> Muhammad Amir</li>
//    </ul>
//    <div className="mat">  5 + 10 Sum is equal to {5+10} </div>
//      </div>;


// function Hi(shayan){
// return "Hey+ ";
// }


// function Hi(pops){
// return   <p>Hey {pops.nme}!</p>;
//     }

// function Hi({name}){
//     return   <p>Hey {name}!</p>;
//         }
    //     const Hi = () =>  (
    //   <div><div>Hello Shayan!</div>
    //  <div>Hello Rafay!</div>
    //  <div>Hello Hamza!</div>
    //     <div>Hello Saeed!</div>
    //     </div>
    //    )
    //  


    function Hi() {
        return <div> <h1>  <center>facebook Page</center> </h1>
         <div  className="first">  <h1> <center>Henry Michael</center> </h1>
        <p><b>Profile Picture updated</b></p> <p>  &nbsp;23 Hours ago</p>
        <img src={A} alt="A cricket picture" width="1280px" height="800px"/>
       <p> <b><h3> <center> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &#128077; Like   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#128238;Commit   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9166;Share </center> </h3></b> </p>  
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
        
        <div  className="first">  <h1> <center>Shahid Afridi</center> </h1>
        <p><b>Profile Picture updated</b></p> <p>  &nbsp;12 Hours ago</p>
        <img src={B} alt="A cricket picture" width="1280px" height="800px"/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <p> <b><h3> <center> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &#128077; Like   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#128238;Commit   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9166;Share </center> </h3></b> </p>  
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       
     
     <div  className="first">  <h1> <center>Johan Williamson</center> </h1>
        <p><b>Profile Picture updated</b></p> <p>  &nbsp;2 days ago</p>
        <img src={C} alt="A cricket picture" width="1280px" height="800px"/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <p> <b><h3> <center> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &#128077; Like   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#128238;Commit   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9166;Share </center> </h3></b> </p>  
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        </div>
        </div>
        </div>
            }

           
           
ReactDOM.render(<Hi/> ,document.querySelector('#root') );
// ReactDOM.render(<Gate isOpen="true"/>, document.querySelector('#root'));
// ReactDOM.render(<Mode/>, document.querySelector('#root'));


