import {Routes, Route, Navigate} from 'react-router-dom'
import React from "react";
import { FaSearch, } from "react-icons/fa";
import './header.css'
export default function Header(){
    return(
        <>
        <div className="container">
            <div className="d-flex justify-content-between align-items-center ">
                <p className="Furniutr">
                Furniutr.
                </p>
                <FaSearch />
            </div>
            <div className="text-center">
                <p className="barcha">
                Barchasini ko’rish / qo’shish / o’zgartirish / o’chirish paneli
                </p>
             </div>
        </div>
        </>
    )
}