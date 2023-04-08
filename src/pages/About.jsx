import React from 'react';

import Navigation from '../components/componentsMain/menu/Navigation';
import MenuExplorer from '../components/componentsArticles/MenuExplorer.jsx';
import Canva from '../components/componentsMain/menu/OffCanvas';
import Toast from '../components/componentsMain/container/Toast';
import About from '../components/componentsMain/container/About';
import Contact from '../components/componentsMain/container/Contact';
import Footer from '../components/componentsMain/container/Footer';
import ButtonFloat from '../components/componentsMain/buttons/ButtonFloat';

export default function Main() {
  return (
    <body className="" id="homePage">
      <Navigation />
      <header>
        <MenuExplorer/>
        <h1 className=' titleAbout '>Reserve aqui também :</h1>
        <Toast />
        <div className=" servicesAbout dragscroll " id="">

          <div class=" boxFrontAbout boxFrontAboutOne">
            <div className='textButton'>Booking</div>
          </div>

          <div class=" boxFrontAbout boxFrontAboutTwo ">
            <div className='textButton'>Airbnb</div>
          </div>

          <div class=" boxFrontAbout boxFrontAboutTree ">
            <div className='textButton'>Expedia</div>
          </div>

        </div>

        <div className='containerAbout'>
          <About />
          <Contact />
        </div>
        <Footer />
      </header>
      <ButtonFloat />
    </body>
  );
};
