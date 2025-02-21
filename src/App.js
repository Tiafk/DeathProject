import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Home from './components/Home/Home.jsx';
import Funeral from './components/Funeral/Funeral.jsx';
import Monument from './components/Monument/Monument.jsx';
import Stock from './components/Stock/Stock.jsx';
import Сremation from './components/Сremation/Сremation.jsx';


export default function App() {

  const [navCoffis] = useState([
    { text: "Гробы 1", to:'#'},
    { text: "Гробы 2", to:'#'},
    { text: "Гробы 3", to:'#'},
    { text: "Гробы 4", to:'#'},
    { text: "Гробы 5", to:'#'},
    { text: "Гробы 6", to:'#'},
    { text: "Гробы 7", to:'#'},
    { text: "Гробы 8", to:'#'},
    { text: "Гробы 9", to:'#'},
  ]);

  
  const allCoffins = [
    {
      text: 'Гроб 1', 
      img:'...', 
      price:'1111$',
      category: '1'
    },
    {
      text: 'Гроб 2', 
      img:'...', 
      price:'22222$',
      category: '4'
    },
    {
      text: 'Гроб 3', 
      img:'...', 
      price:'33333$',
      category: '4'
    },
    {
      text: 'Гроб 4', 
      img:'...', 
      price:'213$',
      category: '4'
    },
    {
      text: 'Гроб 5', 
      img:'...', 
      price:'113213$',
      category: '4'
    },
    {
      text: 'Гроб 6', 
      img:'...', 
      price:'11321$',
      category: '3'
    },
    {
      text: 'Гроб 1', 
      img:'...', 
      price:'231$',
      category: '2'
    },
    {
      text: 'Гроб 2', 
      img:'...', 
      price:'54$',
      category: '1'
    },
    {
      text: 'Гроб 9', 
      img:'...', 
      price:'2333$',
      category: '2'
    }
];

const [coffins, setCoffins] = useState (allCoffins);

const [categories] = useState([
  {
    key:'all',
    name: 'Все'
  },
  {
    key:'1',
    name: '1 версия'
  },
  {
    key: '2',
    name: '2 версия'
  },
  {
    key:'3',
    name: '3 версия'
  },
  {
    key: '4',
    name: '4 версия'
  }
]);

function chooseCategory(key) {

  if(key === 'all') {
    setCoffins(allCoffins)
    console.log('all');
    return
  }

  const filteredCoffins = allCoffins.filter(el => el.category === key);
  setCoffins(filteredCoffins);
  console.log(key);
};

  return (
    <main className="main">
      <Header/>
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Funeral" element={
            <Funeral 
              chooseCategory={chooseCategory}
              categories={categories} 
              coffins={coffins} 
              navCoffis={navCoffis}/>} 
            />
          <Route path="/Monument" element={<Monument />} />
          <Route path="/Сremation" element={<Сremation />} />
          <Route path="/Stock" element={<Stock />} />
        </Routes>
      </div>
    </main>
  );
};