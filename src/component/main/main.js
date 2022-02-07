import { FaEdit, FaTrash } from "react-icons/fa";
import React, {  useContext } from "react";
import { FaPlus } from "react-icons/fa";
import './main.css'
import { NavLink, } from 'react-router-dom'
import {DateOBJ}  from '../../App'

export default function  Main(){
  const { datObj,setDatObj}= useContext(DateOBJ)
    
  console.log(datObj);
    return (

        <>
            <div className="container">
            <h1>
                Mahsulotlar
                </h1>
           
                <div className="text-center"> <span className="plus ">
                <NavLink to="/add" >
                    <FaPlus />
                </NavLink>
                </span>
               </div>
                <div className="row p-2">
                      {datObj.map((item,index)=>{
                          console.log(index); 
                          return(
                        <div  key={item.id} className="col-lg-3 col-md-6   ">
                         <div className="cardProduct ">
                            
                         <div style={{backgroundImage:`url(${item.imageurl})`}}  className="backImage" >
                           <div className="buttons">
                           <NavLink to="/edit" >
                               <FaEdit  className="edit"/>
                               </NavLink>
                            <FaTrash className="trash" onClick={({})=>{
                            
                                let a = datObj.splice(0,index)
                                let b = datObj.splice(index,datObj.length-1)
                                b.map(i=>{a.push(i)});
                                console.log(a,index);
                                 setDatObj(()=>a)
                                }
                                }/>

                           </div>

                            </div>
                         <h3 className="text-center">{item.name}</h3>
                            <p className="text-center">{item.price}</p>

                         </div>
                    </div>
                          )
                    })

                     }
                </div>
                <footer>
                    
                </footer>
            </div>
        </>
    )
} 