'use client';
import React from 'react';
import { Slide } from 'react-awesome-reveal';
import Navbar from './navbar';
import Footer from './footer';



const Home = () => {
  return (

    


    <div>
      <Navbar />
      {/* <div className='min-h-screen bg-[url("/home.jpg")] bg-cover'>
    <div className='p-40 text-right  '>
      <Slide duration={600} direction='up' delay={200}>
      <h1 className='font-bold text-4xl uppercase my-5'>corporate hub</h1>
      
        <p className='my-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione labore vero asperiores adipisci animi dignissimos magni, quaerat distinctio quibusdam neque suscipit unde ut laboriosam accusantium vel repellat! Ipsam, laboriosam illum.</p>
        <button className='my-10 px-5 py-2 border rounded-xl bg-orange-400'>about more</button>
        </Slide>
   
    </div>


  </div> */}




{/* home page  */}


<div className='min-h-screen bg-[url("/home.jpg")] bg-cover transparent'>

<div className='p-36  text-right  '>

{/* <p className='boder w-[650px] h-[200px] bg-slate-600 '></p> */}
<Slide duration={600} direction='right' delay={200}>
  
    <h1 className='font-bold text-4xl uppercase my-5 p-5'>Welcome to The Corporate Hub <br />  Your Partner in Business Success</h1>
    <p className='my-10 px-5 py-2  text-lg font-semibold text-gray-700'>Step into Success: Your Trusted Trio of CS Professionals, Committed to Your Business Success</p>
     
     </Slide>
     </div>
       {/* base  */}
       <Slide duration={600} direction='up' delay={200}>
     <div className='grid md:grid-cols-2 lg:grid-cols-4 bg-slate-400 px-5'>
      <div className='flex p-4'>
        <div >icon</div>
        <div>
          <h2 className='text-2xl text-black'>Corporate Laws</h2>
          <p>Our comprehensive Corporate Laws services ensure legal compliance and governance for businesses.</p>
        </div>
        
      </div>



      <div className='flex p-4'>
        <div>icon</div>
        <div>
          <h2 className='text-2xl text-black'>SEBI Regulations</h2>
          <p>Our company ensures strict adherence to SEBI regulations, fostering transparency, and investor protection.</p>
        </div>
        
      </div>


      <div className='flex p-4'>
        <div>icon</div>
        <div>
          <h2 className='text-2xl text-black'>Tax Laws</h2>
          <p>Navigating the complex landscape of tax laws, we offer expert guidance for compliance and optimization.</p>
        </div>
        
      </div>


      <div className='flex p-4'>
        <div>icon</div>
        <div>
          <h2 className='text-2xl text-black'>
          Intellectual Property </h2>
          <p>Safeguard your innovations with Corporate Hub's IPR solutions, ensuring protection & fostering a culture of creativity</p>
        </div>
        
      </div>

     </div>
     </Slide>
  </div>

{/* about  */}

<div className='p-10'>
    <h1 className='text-sm'>About us</h1>

    <div className='flex md:flex-row flex-col'>
    <Slide duration={600} direction='left' delay={200}>
      <div className='md:order-1 order-2 p-2'>
        
        <h3 className='text-4xl font-bold p-2 text-blue-500'>Converging the Key Pillars of the Corporate Sector: CS - All Under One Roof</h3>
        <p className='text-gray-700'>At The Corporate Hub, we are more than just a platform - we are your dedicated team of accomplished professionals specializing in Chartered Accountancy (CA), Company Secretary (CS) and Cost & Management Accountancy (CMA). With a wealth of expertise and a commitment to excellence, we are here to guide you through every step of your business journey</p>
         <h4 className='text-2xl font-semibold '>Our Mission:</h4>
         <p className='text-gray-700'>Our mission is clear - to be the bridge that transforms your business aspirations into reality. We understand the complexities of starting, growing, and maintaining a business. That’s why we’ve brought together a team of highly qualified experts to provide comprehensive solutions that cater to all your business needs</p>
         <button className='my-10 px-5 py-2 border rounded-md bg-blue-700'>about us</button>
      </div >
      </Slide>
      <Slide duration={600} direction='right' delay={200}> 
      <div className='md:order-2 order-1 p-1'>
        <img src="https://www.corporatehub.in/wp-content/uploads/2024/03/us-transformed.jpeg" alt="" />
      </div>
      </Slide>

    </div>

  </div>

  {/* Areas of Legal Excellence  */}


  {/* <div>

    <h1>Areas of Legal Excellence</h1>
    <p>Navigate legal complexities with precision. Our Areas of Legal Excellence ensure comprehensive and strategic solutions</p>

    <div>
      <div>
       <p>icon</p> 
       <h2>Company Registration</h2>
       <p>Our company offers efficient Company Registration services for seamless business establishment.</p>
       <button>Read more </button>

      </div>
      <div>
       <p>icon</p> 
       <h2>Company Registration</h2>
       <p>Our company offers efficient Company Registration services for seamless business establishment.</p>
       <button>Read more </button>

      </div>
      <div>
       <p>icon</p> 
       <h2>Start-up India Registration</h2>
       <p>Elevate your entrepreneurial journey with our seamless Start-Up India registration assistance.</p>
       <button>Read more </button>

      </div>
      <div>
       <p>icon</p> 
       <h2>Corporate Compliances</h2>
       <p>Facilitate farmer producer company registration effortlessly with our specialized guidance..</p>
       <button>Read more </button>

      </div>
      <div>
       <p>icon</p> 
       <h2>Trademark Registration </h2>
       <p>Safeguard your brand with efficient and thorough trademark registration services.</p>
       <button>Read more </button>

      </div>
    </div>
  </div>  */}



  {/* Benefit  */}

  <div className='text-center'>
    <p className='text-sm' >Benefit</p>
    <h2 className='text-4xl font-bold p-2 text-blue-500'>We're not just financial experts, we're <br /> strategic partners in your success.</h2>

    <div  className='p-10'>

    

    <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-5 '>
    <Slide duration={600} direction='left' delay={200}> 
      <div className='flex border-2  hover:shadow-black shadow-md  rounded-lg bg-gray-100 p-5 '>
        <div>icon</div>
        <div><h3 className='text-2xl font-sans text-blue-500 p-2'>Expertise and Professionalism </h3>
        <p className='text-slate-700 '>Exemplifying unwavering expertise and professionalism, our team consistently delivers exceptional results with a commitment to excellence. </p></div>
      </div>
      </Slide>

      <Slide duration={600} direction='right' delay={200}> 

      <div className='flex border-2  hover:shadow-black shadow-md  rounded-lg bg-gray-100 p-5'>
        <div>icon</div>
        <div><h3 className='text-2xl font-sans text-blue-500 p-2'>Comprehensive Services </h3>
        <p>Offering diverse services—from accounting to IP management—we support businesses of all sizes for holistic growth. </p></div>
      </div>
      </Slide>

      <Slide duration={600} direction='left' delay={200}> 
      <div className='flex border-2  hover:shadow-black shadow-md  rounded-lg bg-gray-100 p-5'>
        <div>icon</div>
        <div><h3 className='text-2xl font-sans text-blue-500 p-2'>Client-Centric Approach </h3>
        <p className='text-slate-700 '>Prioritizing client satisfaction, we build trust through personalized, transparent, and integrity-driven relationships for optimal advisory support.  </p></div>
      </div>
      </Slide>
      <Slide duration={600} direction='right' delay={200}> 

      <div className='flex border-2  hover:shadow-black shadow-md  rounded-lg bg-gray-100 p-5'>
        <div>icon</div>
        <div><h3 className='text-2xl font-sans text-blue-500 p-2'>Strategic Partnerships </h3>
        <p className='text-slate-700 '>Collaborating with leading firms enhances our capabilities, providing clients access to a broad range of expertise.  </p></div>
      </div>

      </Slide>
    </div>
    </div>

  </div>



  {/* Need More Help?  */}

  <div >

    <div className= 'w-full h-72  text-center bg-transparent  bg-[url("/need.jpg")] bg-cover '>
      <h2 className='text-4xl font-bold pt-5 text-blue-800'>Need More Help?</h2>
      <p className='text-black pt-5 text-lg'>In times of struggle, reaching out is crucial. Seeking assistance fosters growth and resilience.</p>
    </div>

    <div className='px-10 relative bottom-10 md:m-5'>

    <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-3'>

    <Slide duration={600} direction='left' delay={200}> 
    
      <div className='text-center border-2 shadow-black shadow-md  rounded-lg bg-gray-100 p-5'>
        <p className=''>icon</p>
        <h4 className='text-2xl font-sans text-blue-700 p-2'>Consultations </h4>
        <p>Gain valuable insights through expert <br /> consultations tailored to your specific <br /> needs and goals.</p>
        <button className='my-10 px-5 py-2 border rounded-md bg-blue-700'>chat us</button>
      </div>
      </Slide>

      <Slide duration={600} direction='down' delay={200}> 
      <div className='text-center border-2 shadow-black shadow-md  rounded-lg bg-gray-100 p-5'>
        <p>icon</p>
        <h4 className='text-2xl font-sans text-blue-700 p-2'>
        Get an Appointment  </h4>
        <p>Schedule your appointment easily and <br /> efficiently to secure your preferred <br /> time and date </p>
        <button className='my-10 px-5 py-2 border rounded-md bg-blue-700'>contact us</button>
      </div>
      </Slide>

      <Slide duration={600} direction='right' delay={200}> 
      <div className='text-center border-2 shadow-black shadow-md  rounded-lg bg-gray-100 p-5'>
        <p>icon</p>
        <h4 className='text-2xl font-sans text-blue-700 p-2'>Insight  </h4>
        <p>Unlock profound insights, illuminating the <br /> path to understanding and innovation in a <br /> rapidly evolving world </p>
        <button className='my-10 px-5 py-2 border rounded-md bg-blue-700'>chat us</button>
      </div>
      </Slide>


    </div>
    </div>

  </div>



    <Footer />
    </div>

 
    
  )
}

export default Home;
