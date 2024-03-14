import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Feed from '../src/components/Feed'
import Header from '../src/components/Header'
import LeftNav from '../src/components/LeftNav'
import LeftNavMenuItem from '../src/components/LeftNavMenuItem'
import SearchResult from '../src/components/SearchResult'
import SearchResultVideoCard from '../src/components/SearchResultVideoCard'
import VideoDetails from '../src/components/VideoDetails'



import { AppContext } from './context/contextApi'

const App = () => {
  return (
    <>

      <AppContext>
        <BrowserRouter>

          {/* ctrl + space for option for tailwind css  */}
          <div className='flex flex-col h-full'>



          {/* ju cheez hr jagah dikhani isko routes se bahir rakho  */}
          
          <Header/>


            <Routes>

            {/* <Route path='/*' element={<Header />} /> */}

  
              {/* element means ke kis route pr konsa component chle ga  */}
               {/* exact likhne se on load pr wahi wala route call hota  */}
              <Route path='/' exact  element={<Feed />} />
              {/* url me search searchResult likha ae ga or is ke a ge searchQuery ju bhi user ne di hu gi wu ae gi .  */}
              {/* e.g user ne search kia latest song tu searchQuery me latest song ajae ga tu url is tarah show hu ga */}
              {/* searchResult/latestsong  . it is a dynamic query*/}
              <Route path='searchResult/:searchQuery' element={<SearchResult />} />

              {/* individual video page  */}
              <Route path='/video/:id' element={<VideoDetails />} />

            </Routes>


          </div>

        </BrowserRouter>
      </AppContext>
    </>
  )
}

export default App
