import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Edit({item}) {
    console.log(item);
  return <div>
      <div className='container'>
          <h1>
          O’zgartirish
          </h1>
          <div className='row'>
                <div className='col-md-6 p-2'>
                  <input className='form-control' placeholder='Maxsulotni rasmi'/>
                </div>
                <div className='col-md-6 p-2'>
                  <input className='form-control' placeholder='Maxsulotni nomi'/>
                </div>
                <div className='col-md-6 p-2'>
                  <input className='form-control' placeholder='Maxsulotni narxi'/>
                </div>

                <div className='d-flex justify-content-center gap-3 align-items-center'>
                    <NavLink to='/'  >
                <button>
                    Ortga qaytish
                </button>
                </NavLink>
                    <button>
                    saqlash 
                    </button>
                </div>
          </div>

      </div>

  </div>;
}
