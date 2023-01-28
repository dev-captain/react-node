import { useState, useRef, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from "axios"

// const baseurl = import.meta.env.REACT_APP_API_BASE_URL;
// function App() {
//   const [namelist,setname] = useState([
//   ])
//   const addref = useRef();
//   function getUserList() {
//     var config = {
//       method: 'POST',
//       headers: { 
//         'Content-Type': 'application/json'
//       },
//       url: `${baseurl}/user/getuser`
//     };
//     axios(config)
//     .then(async (response)=>{
//       await setname(() => {return response.data.data});
//     })
//     .catch((error)=>{
//         console.log(error)
//     });
//   }
//   useEffect(()=>{
//     getUserList();
//   },[]);
//   function addname(){
//       var config = {
//         method: 'post',
//         url: `${baseurl}/user/addname`,
//         headers: { 
//           'Content-Type': 'application/json'
//         },
//         data: {
//           addusername : addref.current.value
//         }
//       };
//       axios(config)
//       .then(async (response)=>{
//         await getUserList();
//         addref.current.value = ""
//       }).catch((error)=>{
//         console.error(error);
//       });
//   }
//   function Delete(id){
//     const confirmed = window.confirm("are you sure to delete???")
//     if(confirmed){
//       var config = {
//         method: 'post',
//         url: `${baseurl}/user/deletename`,
//         headers: { 
//           'Content-Type': 'application/json'
//         },
//         data: {
//           id : id
//         }
//       };
//       axios(config)
//       .then(async (response)=>{
//         await getUserList();
//        alert(response.data.data)
//       }).catch((error)=>{
//         console.error(error);
//       });
//     }
//   }
//   function Edit(id,e){
//     var text = e.target.parentElement.children[0].value;
    var config = {
      method: 'post',
      url: `${baseurl}/user/updatename`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data: {
        id: id,
        text : text
      }
    };
//     axios(config)
//     .then(async (response)=>{
//       await getUserList();
//       alert('Name was updated')
      
//     }).catch((error)=>{
//       console.error(error);
//     });
    
//   }
//   function changedata(id,e){
    
//     setname(()=>{
//       return namelist.map((temp, index)=>{
//          return index === id ? {...temp, name:e.target.value}: {...temp}
//        })
//       });
//   }
//   return (
//     <div className='content'>
//       <h1>Name</h1>
//       <ul>
//         {namelist.map((temp, index)=>{
//             return(<li key={index}>
//               <input value={temp.name} onChange={()=>changedata(index,event)}/>
//               <input type='button' onClick={()=> Edit(temp._id,event)} value='Edit' className="btn"/>
//               <input type='button' onClick={() => Delete(temp._id)} value='Delete' className="btn"/>
//             </li>)
//           })}
//       </ul>
//       <div>
//         <input type='text' ref={addref} className='add_input'/>
//         <button onClick={addname} className="add_btn">Add</button>
//       </div>
//     </div>
//   )
// }
const newurl = "https://api.tenderly.co/api/v1/account/simonvoight/project/project/transactions?page=1&perPage=1000"
function App() {

  function ten() {
    var config = {
            method: 'get',
            url: `${newurl}`,
            // data: {
             
            // },
            headers: {
              'X-Access-Key': '1A5o22csR02Tf5T8oYk9iFWredaqFy2h',
              'Content-Type': 'application/json'
            }
          };
          axios(config)
          .then(async (response)=>{
            var i =0;
            for(i++; i<response.data.length;){
              console.log(response.data[i].addresses);
            }
            
            
          }).catch((error)=>{
            console.error(error);
          });
        }
        return (
              <div className='content'>
                <button onClick={ten}>click on me</button>
                
              </div>
            )
}
export default App
