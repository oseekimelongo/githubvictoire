import React, { useState } from 'react';
import Iconmen from "./component/Iconmen";
import Iconmenu from "./component/Iconmenu";

function PlanB(props) {

    const [isMore, setIsMore] = useState(false);

    console.log(isMore);

    return (
<div>



    
        <div className='shadow-xl pt-52 pb-28 h-11/12 mx-auto grid grid-cols-2 gap-2 border-b-4 border-orange-200 ' >

            <div className="flex justify-center pl-40 pt-1 relative">
                <div className=' w- pr-2 '><img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/4876cb5a-6586-4875-a08a-8df0beb3280d.__CR0,0,362,453_PT0_SX362_V1___.jpg" alt="" /></div>
                <div className=' pt-40'><img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/4876cb5a-6586-4875-a08a-8df0beb3280d.__CR0,0,362,453_PT0_SX362_V1___.jpg" alt="" /></div>
            </div>

            <div className=" w-11/12">

                <div className=" bg-gradient-to-r from-gray-100 to-yellow-50 hover:bg-[#E84D3A]/50 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5  dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 w-11/12 pb-10 pt-10 pl-5 ">
                    <p className="pt-2">BEAUTY FASHON</p>
                    <h1 className="pt-5 font-extrabold text-5xl">
                        WE UNDERSTAND
                    </h1>
                    <h2 className="text-4xl">YOUR STYLE</h2>
                    <p className="pt-10">
                        but also the
                        leap into electronic typesetting,
                        unchanged. It was popularised in the 1960s
                        of Letraset sheets containing Lorem Ipsum.
                        unchanged. It was popularised in the 1960s
                        of Letraset sheets containing Lorem Ipsum.lectronic,
                    </p>


                    <div className="w-8/12 ">
                        <div className="pt-10 flex justify-between">
                            <div className="flex">
                                <p><Iconmen /></p>
                                <p className="pt-3 pl-2">bronches</p>
                            </div>

                            <div className="flex">
                                <p><Iconmenu /></p>
                                <p className="pt-3 pl-2">hoppy custonners </p>
                            </div>
                        </div>
                    </div>
                </div> <div className='pl-16 pt-16  '>
              
              <h2 className='font-bold  pt-2 text-slate-100 pl-40' id="welcome">welcome...</h2>
            </div>
            </div>  
                </div>
<div className=' bg-yellow-50'>
<div className="items-center text-center bg-yellow-50">
                    <p className="pt-10 font-bold text-3xl">CORE VALUES:</p>
                <div className='pl-96 pb-10 pt-8 grid grid-cols-3 items-center gap-4 w-5/6'>
<div className=' '>1. At the heart of The Hair Oasis are three core values that guide our business:
1. Empowerment: We believe in empowering women to embrace their
unique beauty and feel confident in their own skin. Our salon is a safe
space where women can explore and express their personal style..</div>
<div className='pl-2'>2. Self-Confidence: We are dedicated to helping women unlock their inner
beauty and feel comfortable in their own bodies. Our personalized
approach ensures that each client leaves our salon feeling radiant and
self-assured..</div>
<div className='pl-2'>3. Personalized Beauty: We understand that beauty is not one-size-fits-all.
Our team of skilled stylists works closely with each client to deliver
tailored solutions that accentuate their individual features and
preferences.</div>
</div>
</div>
</div>
               
      
  
      <div className=" flex justify-center pt-1  bg-slate-600 pb-10 ">
        <div className="pl-20 justify-between text-gray-300 pr-32 w-8/12">
        <p className="pt-10 pb-5 text-4xl ">SERVICES 100% NATURELS PRODUCTS </p>
        <p>Retrouvez sérénité et confiance en vous grâce à une perruque en cheveux naturels. Réalisme, confort, légèreté : elles ont tous les atouts dont vous avez besoin pour retrouver votre qualité de vie pendant la perte des cheveux. Incontestablement, si vous avez un peu l'expérience des perruques, vous sentirez, quand vous passez la main dans vos cheveux, à quel point ces derniers sont soyeux et doux au toucher ! </p>

          <div className="pt-5">
        
<div onClick={() => isMore ? setIsMore(false): setIsMore(true)} className="text-white bg-transparent hover:bg-blue-900 border border-gray-500 font-bold p-3 w-24 rounded-lg  cursor-pointer mx-auto">
                Voir plus 
            </div>


<div className={ `${isMore ? 'grid' : 'hidden' }  pt-10 m-auto grid-cols-4 gap-8  w-4/6`} id="affiche">
           
           <div className='shadow-xl pb-2'>
                <p className="pt-2 pb-2"><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpv9v7c8j1Ivae4jgHrU0IZHNYKU_FzXsEhQ&s"} className="rounded-t-2xl w-2/2" /></p>
                 <div className="pb-2 box-content ">
                  <h className="font-extrabold pl-1">
                  Les perruques synthétiques
                  </h>
              </div>
           </div>

           <div className='shadow-xl pb-2'>
                <p className="pt-2 pb-2"><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNk-xE8Otv7sr8HHCHDVqqIZH9yL1OnO2rhg&s"} className="rounded-t-2xl w-2/2" /></p>
                 <div className="pb-2 box-content ">
                  <h className="font-extrabold pl-1">
                  Synthétiques ondulées et bouclées

                  </h>
              </div>
           </div>

           <div className='shadow-xl pb-2'>
                <p className="pt-2 pb-2"><img src={"https://img.joomcdn.net/0a1813a7453c1da33f8a651bf5e2f2c80638538f_original.jpeg"} className="rounded-t-2xl w-2/2" /></p>
                 <div className="pb-2 box-content ">
                  <h className="font-extrabold pl-1">
                  24 pouces vague d'eau maïs skin

                  </h>
              </div>
           </div>

           <div className='shadow-xl pb-2'>
                <p className="pt-2 pb-2"><img src={"https://img.joomcdn.net/5c7ac56077d7fa7d6329a1dc741edca202d74d61_original.jpeg"} className="rounded-t-2xl w-2/2" /></p>
                 <div className="pb-2 box-content ">
                  <h className="font-extrabold pl-1">
                  24 pouces vague d'eau maïs noir

                  </h>
              </div>
           </div>
{/*            
           la limite */}

<div className='shadow-xl pb-2'>
                <p className="pt-2 pb-2"><img src={"https://img.joomcdn.net/8dea93b3c3c97cff24903632384992b8f8fd71b0_original.jpeg"} className="rounded-t-2xl w-2/2" /></p>
                 <div className="pb-2 box-content ">
                  <h className="font-extrabold pl-1">
                  Vague d'eau maïs brown

                  </h>
              </div>
           </div>

           <div className='shadow-xl pb-2'>
                <p className="pt-2 pb-2"><img src={"https://img.joomcdn.net/8bf98d4be29e004494280cfe2ee1c114410b3390_original.jpeg"} className="rounded-t-2xl w-2/2" /></p>
                 <div className="pb-2 box-content ">
                  <h className="font-extrabold pl-1">
                  Vague d'eau maïs

                  </h>
              </div>
           </div>

           <div className='shadow-xl pb-2'>
                <p className="pt-2 pb-2"><img src={"https://img.joomcdn.net/737beb5ad555c4dce72f35bbc98478072921bc4d_original.jpeg"} className="rounded-t-2xl w-2/2" /></p>
                 <div className="pb-2 box-content ">
                  <h className="font-extrabold pl-1">
                  SNOILITE 80g 

                  </h>
              </div>
           </div>

           <div className='shadow-xl pb-2'>
                <p className="pt-2 pb-2"><img src={"https://img.joomcdn.net/cae7bd41e342590bb43658675807aabec4503766_original.jpeg"} className="rounded-t-2xl w-2/2" /></p>
                 <div className="pb-2 box-content ">
                  <h className="font-extrabold pl-1">
                  SNOILITE Chignons

                  </h>
              </div>
           </div>

          </div> 

            




           </div>
       </div>
       </div>
         

                <div className="items-center text-center bg-yellow-50">
                    <p className="pt-10">BEAUTY FASHON</p>
            <h4 className="text-center text-5xl font-bold  ">EXPLORE OUR SERVICES</h4>
            <p className="pt-4"> unchanged. It was popularised in theof Letraset sheets containing Lorem Ipsum.lectronic,</p>
            <p> popularised in theof Letraset sheets containing Lorem Ipsum.lectronic,</p>
            
            </div>

              {/* premiere ligne des articles  */}

        <div className=' pt-10 pb-24 m-auto grid grid-cols-3 gap-8  w-4/6'>
           
           <div className='shadow-xl pb-6'>
           <p className="pt-5  pb-6 "><img src={"https://i.pinimg.com/564x/7f/5e/4c/7f5e4cbbae893bcfd8c9e8d65a4f9220.jpg"} className="rounded-t-2xl w-2/2" /></p>
           <div className=" w-96 pl-10 pb-2 ">
                  <h className="font-extrabold text-xl">
                  Gray hair: 11 
                  </h>
                 <p className="pt-3">
                 stunning hairstyles for black women aged 50. What hairstyle should you choose to stand out with gray hair? If you are tired of coloring to camouflage your white hair, Afroculture
                  
               </p>
              </div>
           </div>
           <div className='shadow-xl '>
           <p className="pt-5  pb-6"><img src={ "https://www.extension-perruque.fr/cdn/shop/products/perruque-chatain-ondulee-racine-noire-femme-739.jpg?v=1624887588&width=2048" } className="rounded-t-2xl  w-2/2" /></p>
           <div className=" w-96 pl-10 pb-2 ">
                  <h className="font-extrabold text-xl">
                       Multi Application Hair color
                  </h>
                 <p className="pt-3">
                  all the ipsum generators on the internet tend <br></br>&nbsp;&nbsp; &nbsp;to repeat predefined chunks as necessary
               </p>
              </div>
           </div>
           <div className='shadow-xl'>
           <p className="pt-5 pb-6 "><img src={"https://d1rul2a3ub0mat.cloudfront.net/media-library/255/dde9bf3a440d93e877d8dc3d5d9f831be66b50fe.jpg"} className="rounded-t-2xl  w-2/2" /></p>
               <div className=" w-96 pl-10 pb-2 ">
                  <h4 className=" font-extrabold text-xl">
                       Sunny to Velvety Brown Hair
                  </h4>
                 <p className="pt-3 ">
                 all the ipsum generators on the internet tend <br></br>&nbsp;&nbsp; &nbsp;to repeat predefined chunks as necessary
               </p>
              </div>
           </div>

          </div> 
          

          <footer>
                    <div className="bg-[#f3f4f6]">
                        <div><div className=" w-4/6 gap-8 m-auto">
                            <p className=" pt-10 text-yellow-700  ">The air Oasis </p>
                            <p className=" pt-20">Mission Statement:
The Hair Oasis&#39; mission is to provide women in the DRC with a transformative
beauty experience that empowers them to feel beautiful, confident, and self-
expressed. Through our wide selection of high-quality wigs and personalized
hairstyling services, we aim to help our clients unveil their inner radiance and
become the best versions of themselves.
What Sets Us Apart:
What distinguishes The Hair Oasis from our competitors is our unwavering
commitment to exceptional customer service and individualized care. We go
above and beyond to understand the unique needs and preferences of each
client, ensuring that they leave our salon feeling truly pampered and fulfilled.
Our dedication to staying at the forefront of hair trends and using the finest
products further sets us apart as a premier destination for women&#39;s beauty in
the DRC.

</p>

                            <div className="pt-20 pb-10 flex">
                                <p className=""> © kitwa   2024 – victoire –   </p>
                                <p className=" text-yellow-700 "> <a href="#"> &nbsp;the hair oasis</a> </p>
                                <p className=" text-yellow-700 "> <a href="#"> &nbsp;&nbsp;–&nbsp; ventes de perruques </a></p>
                                <p className=" text-yellow-700 "> <a href="#"> &nbsp; –&nbsp; contact  </a></p>
                            </div>

                        </div>
                            <div className="h-10 bg-[#e2e8f0] w-auto"> </div>
                        </div>
                    </div>
                </footer>
                </div> 





    )
}

export default PlanB;