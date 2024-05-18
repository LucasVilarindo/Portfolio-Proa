import { useState } from 'react';
import img from '../assets/lucasft.png';
import svg from '../assets/Vector.svg';
import {FaTimes} from 'react-icons/fa';
import resume from '../assets/CURRÍCULO_LUCAS_VILARINDO.pdf';
import { HiMenuAlt1 } from "react-icons/hi";


const Header = () => {
    const [click, setClick] = useState('')
    const handleClick = () =>  setClick(!click); 

    const content =  <nav className='z-10 lg:hidden fixed top-0 left-0 bottom-0 pt-[50px] bg-[#1c1331] backdrop-filter backdrop-blur-lg bg-opacity-30 w-[300px] flex gap-[20px] flex-col items-center transition ease-out duration-700'>
           <button className="absolute top-[25px] right-[25px] sm:hidden hover:transition" onClick={handleClick}>
             {click &&  <FaTimes className="text-white"/>}
         </button>
           </nav>
    return (
        <div className="bg-cover text-white min-h-screen bg-[url('assets/background.png')] lg:px-[100px] lg:py-[60px] p-[40px]">
           <nav className='flex justify-between items-center'>
            <h2>LucasLFV</h2>
            <ul className='text-[#A6A9B8] text-[18px] lg:flex hidden gap-[36px]'>
            <li>Sobre</li>
            <li>Estudos</li>
            <li>Referencias</li>
            <li>Redes</li>
            </ul> 
            <button className='text-white px-[28px] py-[8px] rounded-[6px] bg-gradient-to-r from-[#3A198A] to-[#9D7FDB] lg:flex hidden'> Contato</button>
           {
             <button className="block sm:hidden hover:transition-none " onClick={handleClick}>
             {!click &&  <HiMenuAlt1 className="text-white text-[25px]"/>}
         </button>

           }
           </nav>

           {/*  */}

           {
            click && content
           }
           
           <div className='pt-[110px] flex justify-between lg:flex-row flex-col-reverse lg:mx-[30px] lg:gap-[160px] gap-[20px] lg:text-start items-center text-center'>
            <div className='lg:w-[50%] w-full'>
            <h2 className='lg:text-[66px] text-[40px] font-bold whitespace-wrap'><span className='text-[#9D7FDB]'>Bem-Vindo</span> Esse é o meu portfolio web! </h2>
            <p className='py-[40px] text-[20px] text-[#A6A9B8]'>Olá meu nome é Lucas. Sou desenvolvedor Front-end. Vamos Explorar. Este é o meu site de portfólio onde estou apresentando meus projetos e serviços. </p>
            <button className='text-white px-[28px] py-[8px] rounded-[6px] bg-gradient-to-r from-[#3A198A] to-[#9D7FDB]'><a  href={resume} target="_blank" download='resume'  >Baixar meu CV</a></button>
            </div>
            <div className='lg:relative'> 
            <img className='lg:absolute lg:block hidden top-0 right-0 w-[90px]' src={svg} alt="" />
            <img src={img} alt="" />
            </div>
           </div>
        </div>
    );
};

export default Header;