import React from "react";
import { Link } from "react-router-dom";

class PrincipalPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    program =[
        {   
            nombre: 'C++'
        },
        {   
            nombre: 'Python'
        },
        {   
            nombre: 'Javascript'
        }
    ]
    render(){
        const {title, parraf, moreparraf, imgbg, btn, btnhref} = this.props
        return(
            <>
            <section className='bg-black h-screen w-screen text-center relative overflow-hidden'>
            
                <div className="z-30 relative h-screen flex flex-col">

                    <header>
                        <h2 className="text-white pt-40 text-5xl mb-4">{title}</h2>
                        <div className='text-white text-sm'>
                            <p>{parraf}</p>
                            <p>{moreparraf}</p>
                        </div>
                    </header>

                    <footer className=' flex flex-grow flex-nowrap justify-end flex-col pb-20'>
                        <div>
                        <Link
                  to="/tme">
                    <button className="border-[3px] border-white backdrop-blur-xl text-sm rounded font-medium text-white px-10 py-2 inline-block hover:bg-white hover:text-black transition-colors">
                    {btn}
                  </button>
                </Link>
                        </div>
                    </footer>
                    
                </div>
                
                <div className='absolute top-0 bottom-0 h-screen z-10 w-full bg-black'>
                    <video muted loop autoPlay className='object-center object-cover h-screen w-full' src={imgbg}/>

                </div>
            </section>
            </>
        )
    }
}

export default PrincipalPage;