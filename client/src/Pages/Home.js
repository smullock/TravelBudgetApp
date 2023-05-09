import React from 'react';
import Defaultlayout from '../Components/Defaultlayout';
import Header from '../Components/Header';

import ItemList from '../Components/ItemList';




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