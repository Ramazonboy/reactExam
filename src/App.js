import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import Add from './component/add/add'
import Header from './component/header/Header';
import Main from './component/main/main';
import Edit from './component/edit/edit';
import React,{useState} from 'react';
export const DateOBJ=React.createContext()
function App() {
  const [datObj,setDatObj]=useState([ {
    id:1,
    name:'Modern lamp study',
    price:'$258',
    imageurl:'https://ae01.alicdn.com/kf/HTB1u98bauuSBuNjSsziq6zq8pXaf/Willlustr.jpg_q50.jpg',
},
{
    id:2,
    name:'Modern lamp study',
    price:'$135',
    imageurl:'https://ae04.alicdn.com/kf/HTB1pNJIaeL2gK0jSZFmq6A7iXXaB/-.jpg',
},
{
    id:3,
    name:'Classic lamp',
    price:'$425',
    imageurl:'https://domosha.ru/upload/iblock/b68/b689e3a27525a5750cd2f0d7529dbf6d.jpg',
},
{
    id:4,
    name:'Clock cute',
    price:'$331',
    imageurl:'https://cdn1.ozone.ru/s3/multimedia-y/6042040006.jpg',
},
])
console.log(datObj);

  return (
    <DateOBJ.Provider value={{datObj,setDatObj}}  > 
     <BrowserRouter>
     <Header />
     <Routes>
     <Route path='/' element={<Main />}/>
     <Route path='/edit' element={<Edit/>}/>
       <Route path='/add' element={<Add/>}/>
     </Routes>
     </BrowserRouter>
     </DateOBJ.Provider>
  );
}

export default App;
