import React, { useEffect, useState } from 'react';
import Defaultlayout from '../Components/Defaultlayout';
import ItemFormModal from '../Components/ItemFormModal';
import TripItems from '../Components/TripItems';
import { GET_ITEMS } from '../utils/queries';


function Home() {


  return (
    <Defaultlayout>

   
   <ItemFormModal/>
   <TripItems/>
   

    </Defaultlayout>

  
  )
}

export default Home;