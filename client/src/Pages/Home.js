import React, { useEffect, useState } from 'react';
import Defaultlayout from '../Components/Defaultlayout';
import Header from '../Components/Header';
import ItemFormModal from '../Components/ItemFormModal';
import ItemList from '../Components/ItemList';
import TripItems from '../Components/TripItems';
import { GET_ITEMS } from '../utils/queries';



function Home() {


  return (
    <Defaultlayout>
    <Header/>
   <div className="table-analtics d-flex">

    <ItemList/>
    </div> 

    </Defaultlayout>

  
  )
}

export default Home;