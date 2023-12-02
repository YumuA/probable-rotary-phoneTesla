import React from "react";

class Contactame extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const {title, parraf, imgbg, btn, btnhref} = this.props
        return(
            <>
            <section className='bg-black h-screen w-screen text-center relative overflow-hidden'>
            
            <div className="z-30 relative h-screen flex flex-col">

              <header className=''>
                  <h2 className="text-white pt-40 text-5xl">{title}</h2>
                  <p className='text-white text-sm'>{parraf}</p>
              </header>

              <footer className=' flex flex-grow flex-nowrap justify-end flex-col pb-20'>
                <div>
                    <a href={btnhref} className='border-[3px] border-white backdrop-blur-xl text-sm rounded font-medium text-white px-10 py-2 inline-block hover:bg-white hover:text-black transition-colors '>
                        {btn}</a>
                </div>
              </footer>
            
            </div>
            
            <div className='absolute top-0 bottom-0 h-screen z-10 w-full bg-black '>
                <img className='object-center object-cover h-screen w-full' src={imgbg}/>


            </div>
            </section>
            </>
        )
    }
}

export default Contactame;