import React from 'react'

const About = () => {
  return (
    <div>

<div>
  
  



  <div>
    <h1 className='border bg-gray-00 w-[200px] h-[100px] text-3xl font-serif font-bold text-center p-5 m-10 text-black '>About us</h1>

    <div className='flex md:flex-row flex-col m-10'>
      <div className='w-1/2 md:order-1 order-2 '>
        <h2 className='text-sm'>About us</h2>
        <h3 className='text-4xl font-bold p-2 text-blue-500'>Converging the Key Pillars of the Corporate Sector: CA, CS, and CMA - All Under One Roof</h3>
        <p className='text-gray-700'>At The Corporate Hub, we are more than just a platform - we are your dedicated team of accomplished professionals specializing in Chartered Accountancy (CA), Company Secretary (CS) and Cost & Management Accountancy (CMA). With a wealth of expertise and a commitment to excellence, we are here to guide you through every step of your business journey</p>
         <h4 className='text-2xl font-semibold '>Our Mission:</h4>
         <p className='text-gray-700'>Our mission is clear - to be the bridge that transforms your business aspirations into reality. We understand the complexities of starting, growing, and maintaining a business. That’s why we’ve brought together a team of highly qualified experts to provide comprehensive solutions that cater to all your business needs</p>

      </div>
      <div className='w-1/2 md:order-2 order-1'>
        <img src="https://www.corporatehub.in/wp-content/uploads/2024/03/us-transformed.jpeg" alt="" />
      </div>

    </div>

  </div>


  {/* why choose corporate hub  */}


 <div className='w-full h-screen bg-blue-800 '>
  <h1 className='text-3xl text-white p-10 text-center'>Why Choose Corporate Hub?</h1>
  <div className='flex md:flex-row flex-col p-10 '>

  <div className='basis-[45%] pl-14 '>
    <img className='w-[300px] border shadow-lg shadow-blue-100 object-contain ' src="https://www.corporatehub.in/wp-content/uploads/2024/02/AdobeStock-PfvUwTc64k-1.webp" alt="" />
  </div>
  <div className=' basis-[55%] text-white text-lg  '>
    <li><p>
      	

        Corporate Hub Legitimate LLP is a platform formed and managed by a team of qualified and skilled professionals of CA CS and CMA.
   
       </p></li>

       <li>
        <p>
        We function to provide you assistance in registration of new business with respective authorities as well as any future modifications in the same
        </p>
       </li>

       <li>
        <p>
        We also undertake periodical, annual and event-based compliances with various regulatory authorities like ROC, SEBI, RBI, FEMA, INCOME TAX, GST, Accounts, etc.
        </p>
       </li>

       <li>
        <p>
        Corporate Hub also deals in business expansion matters that are IPO (SME as well as BSE main Board), Corporate Restructuring, and Investor Funding.
        </p>
       </li>

       <li>
        <p>
       We also deals in EXPORT BUSINESS SET UP which includes Business Registration and Import-Export licenses
       </p>
        </li>

        <li>
          <p>
          We at Corporate hub look beyond the obvious constraints and offer easy, cost-effective and curated solutions that are practical and sustainable so that you can pursue your business goals effortlessly.
          </p>
        </li>

        <li>
          <p>
          In the nutshell, we aim at furnishing all the wide range of services needed to materialize the much-celebrated slogans “Ease of doing business”, “Startup India” and “Make in India”
          </p>
        </li>
    

  </div>
  </div>
 </div>

{/* our team  */}

<div className='m-5'>
  <h1 className='text-3xl text-blue-800 text-center '>
  Our Team
  </h1>

  <div className='flex md:flex-row flex-col m-10 border shadow-xl p-10 '>
    <div className=' border border-black '>
      <img className='p-2 w-[300px] h-[250px]' src="robin.jpg" alt="" />
    </div>
    <div className='p-5'>
      <h3 className='text-xl text-blue-700 p-5'>robin singh</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, soluta nostrum ex hic quod fuga voluptatem aliquid aliquam at perspiciatis fugit, enim tenetur dolore doloremque eos sit sapiente odit quas.</p>
    </div>

  </div>

  

  <div className='m-10 border shadow-xl p-10'>
    <h2 className='text-3xl text-blue-800'>Team and Associates</h2>
    <p>CorporateHub takes pride in its team of dedicated interns and professionals, collaborating seamlessly to execute and support the firm across secretarial, legal, and financial service domains. Additionally, CorporateHub has established partnerships with Advocates, Merchant Bankers, Registered Valuers, Bankers, and Venture Capitalists, ensuring a comprehensive and integrated approach to client service</p>
  </div>
</div>







 </div>


    </div>
  )
}

export default About