
import ReactDOM from 'react-dom';
import React  from 'react';
import A from './a.jpg';
import B from './b.jpg';
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


    function Hi({title,body,image}) {
        return <div> <h1>  facebook Page </h1>
         <div  className="first">  <h1> <center>{title}</center> </h1>
        <p>{body}</p>
        <img src={A} alt="A cricket picture" width="1280px" height="800px"/>
       
            <div  className="second">  <h1> <center>cricket</center> </h1>
        <p>cricket
        </p>
        <img src={B} alt="A cricket picture" width="1280px" height="800px"/>
        </div>
        <div  className="second">  <h1> <center>cricket</center> </h1>
        <p>cricket
        </p>
        <img src={B} alt="A cricket picture" width="1280px" height="800px"/>
        </div>
        <div  className="second">  <h1> <center>cricket</center> </h1>
        <p>cricket
        </p>
        <img src={B} alt="A cricket picture" width="1280px" height="800px"/>
        </div>
        <div  className="second">  <h1> <center>cricket</center> </h1>
        <p>cricket
        </p>
        <img src={B} alt="A cricket picture" width="1280px" height="800px"/>
        </div></div>
            </div>
            }

            // const Gate = ({isOpen})  => {
            //     return isOpen ? <p>Open</p> : <p>closed</p>
            //  } 
           
            // const Mode = () => { 
            //     const isLit = state[0];
            //     const setLit = state[1];
                
    
            //     const state = React.useState(true)
            //     return <div>  the room is {isLit ? "lit" : "dark"}</div>
            // }

           
ReactDOM.render(<Hi title="picture" body="this os the picture" /> ,document.querySelector('#root') );
// ReactDOM.render(<Gate isOpen="true"/>, document.querySelector('#root'));
// ReactDOM.render(<Mode/>, document.querySelector('#root'));


