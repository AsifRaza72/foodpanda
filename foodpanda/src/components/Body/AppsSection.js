import React from 'react'
import './AppsSection.css'
const AppsSection=()=> {

return(

    <section className="home_apps_section">
    <img src="../Images/abbotabad.jpeg" alt=""/>
    <h1>App</h1>
    <h3>Put us in your pocket</h3>
    <div className="home_apps">
      <h2 >Download the food and groceres you love</h2>
      {/* <p >It's all at your fingertips – the restaurants and shops you love. Find the right food and groceries to suit your mood, and make the first bite last. Go ahead, download us.</p> */}
    <div className='link'>
    <a title="Download it on play store" href="#1">

    </a>
  </div>
    </div>

    {/* <div class="grid-container">
  <div class="item1">Header</div>
  <div class="item2">Menu</div>
  <div class="item3">Main</div>  
  <div class="item4">Right</div>
  <div class="item5">Footer</div>
  <div class="item1">Header</div>
  <div class="item2">Menu</div>
  <div class="item3">Main</div>  
  <div class="item4">Right</div>
  <div class="item5">Footer</div>
</div> */}

   </section>

  )
}

export default AppsSection