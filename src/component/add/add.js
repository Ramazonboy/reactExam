import './add.css'
import React, {useContext, useState} from 'react';
import { NavLink } from 'react-router-dom';
import {DateOBJ}  from '../../App'


export default function     Add() {

  const { datObj,setDatObj}= useContext(DateOBJ)
const [url,setUrl]=useState('')
const [name,setName]=useState('')
const [narx,SetNarx]=useState('')
return <div>
      <div className='container'>
          <h1>
              Qo’shish
          </h1>
          <div className='row'>
                <div className='col-md-6 p-2'>
                  <input className='form-control'  placeholder='Maxsulotni rasmi' onChange={(e)=>{setUrl(e.target.value)}}/>
                </div>
                <div className='col-md-6 p-2'>
                  <input className='form-control' placeholder='Maxsulotni nomi' onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className='col-md-6 p-2'>
                  <input className='form-control' placeholder='Maxsulotni narxi' onChange={(e)=>{SetNarx(e.target.value)}}/>
                </div>

                <div className='d-flex justify-content-center gap-3 align-items-center'>
                    <NavLink to='/'>
                <button>
                    Ortga qaytish
                </button>
                </NavLink>
                <NavLink to='/'>
                    <button onClick={()=>{
                      let a= {
                        id:datObj.length+1,
                        name:name,
                        price:narx,
                        imageurl:url,
                      }
                      setDatObj( datObj.push(a))
                      console.log(a,datObj);
                    }}>
                    saqlash 
                    </button>
                    </NavLink>
                </div>
          </div>

      </div>
  </div>;
}
