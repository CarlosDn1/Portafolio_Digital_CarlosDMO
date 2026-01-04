import './App.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { SiSqlite } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiAndroidstudio } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import img1 from './assets/images/proyecto1_c1.PNG'
import img2 from './assets/images/proyecto1_c2.PNG'
import img3 from './assets/images/proyecto1_c3.PNG'

import img4 from './assets/images/proyecto2_c1.PNG'
import img5 from './assets/images/proyecto2_c2.PNG'
import img6 from './assets/images/proyecto2_c3.PNG'

import img7 from './assets/images/proyecto3_c1.PNG'
import img8 from './assets/images/proyecto3_c2.PNG'
import img9 from './assets/images/proyecto3_c3.PNG'

import img10 from './assets/images/proyecto4_c1.PNG'
import img11 from './assets/images/proyecto4_c2.PNG'
import img12 from './assets/images/proyecto4_c3.PNG'

import imgyo1 from './assets/images/yo1.jpeg'
import imgyo2 from './assets/images/yo2.jpeg'

import Proyecto from './components/card_proyecto/proyecto';

const images_proyecto1 = [
  { imgSrc: img1 },
  { imgSrc: img2 },
  { imgSrc: img3 },
]

const images_proyecto2 = [
  { imgSrc: img4 },
  { imgSrc: img5 },
  { imgSrc: img6 },
]

const images_proyecto3 = [
  { imgSrc: img7 },
  { imgSrc: img8 },
  { imgSrc: img9 },
]

const images_proyecto4 = [
  { imgSrc: img10 },
  { imgSrc: img11 },
  { imgSrc: img12 },
]

const images_yo = [
  { imgSrc: imgyo1 },
  { imgSrc: imgyo2 },
]

function App() {
  let backgrounds = ["bg1", "bg2", "bg3", "bg4", "bg5", "bg", "bg7"]

  useEffect => ({


  }, [])

  return (
    <>
      <header className="bg-[#0B132B] text-white">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center text-xl">
          <a href="#" className="logo">Mi Portafolio</a>
          <ul className="flex flex-direction-row gap-6 h-16 justify-center items-center shadow-lg">
            <li><a href="#sobre-mi" className="transition duration-400 hover:text-[#F9AA33]">Sobre Mí</a></li>
            <li><a href="#skills" className="transition duration-400 hover:text-[#F9AA33]">Habilidades</a></li>
            <li><a href="#proyectos" className="transition duration-400 hover:text-[#F9AA33]">Proyectos</a></li>
          </ul>
        </nav>
      </header>

      <main className="bg-[#1C2541] min-h-screen flex flex-col items-center gap-8 py-10">

      <section id="sobre-mi" className="max-w-4xl w-full shadow-lg bg-[#1D7386] rounded-l-full flex flex-row p-4 items-center space-x-6">  
          <div className="w-[200px] h-[200px] bg-[#0B132B] rounded-full overflow-hidden ">
            <img src={imgyo2} alt="Yo" className="shadow-lg"/>
          </div> 
          <div></div>
          <div className="flex flex-col justify-center ml-4">
            <h1 className="font-bold text-3xl text-white">Carlos Daniel Muñiz Osorio</h1>
            <h2 className="text-xl font-semibold mt-2 text-white">Desarrollador Web</h2>
            <div className="flex gap-4 mt-4">
            <FaWhatsappSquare size={40} color={"#25D366"} className="hover:scale-110 transition-transform duration-200 hover:cursor-pointer" onClick={() => window.open("https://wa.me/7225533495", "_blank")}/>
            <FaFacebookSquare size={40} color={"#3b5998"} className="hover:scale-110 transition-transform duration-200 hover:cursor-pointer" onClick={() => window.open("https://www.facebook.com/Carlos D Muñiz Osorio", "_blank")}/>
            <FaLinkedin size={40} color={"#0077b5"} className="hover:scale-110 transition-transform duration-200 hover:cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/carlos-daniel-muñiz-osorio-a06a2b376", "_blank")}/>
            <SiGmail size={40} color={"#EA4335"} className="hover:scale-110 transition-transform duration-200 hover:cursor-pointer" onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=carlosdm123212@gmail.com&su=Contacto%20desde%20portafolio&body=Hola%20Carlos,%20te%20escribo%20porque...", "_blank")}/>
            </div>
          </div>
      </section>


        <section id="sobre-mi" className="max-w-4xl w-full p-6 shadow-lg bg-[#1D7386] rounded-xl">  
          <h2 className="text-3xl font-bold mb-4 text-white text-center">Sobre Mí</h2>
          <h3 className="inline-flex items-center gap-2 text-white"><FaPhone />  722 553 3495 
          <IoIosMail /> carlosdm123212@gmail.com </h3>
          <p className="text-white text-lg leading-relaxed">Hola, soy Carlos Daniel Muñiz Osorio, un desarrollador web apasionado por crear experiencias digitales atractivas y funcionales. Tengo experiencia en HTML, CSS, JavaScript y frameworks modernos como React y Angular.js.</p>
        </section>

        <section id="skills" className="max-w-4xl w-full p-6 shadow-lg bg-[#1D7386] rounded-xl">

          {/* Skills Section */}

          <h2 className="text-3xl font-bold mb-4 text-white text-center">Habilidades</h2>
          <div id="habilidades" className="flex gap-4 flex-wrap justify-center">
          <div className="w-[200px] h-[60px] bg-[#AF4319] rounded-md text-white text-center">
            <h2 className="font-semibold py-1">HTML <FaHtml5 className="inline-block mb-1" /></h2>
            <div className="w-full h-[50%] bg-[#D295BF] shadow-xl items-center flex">
              <div className="w-[100%] h-[40%] bg-white mx-[6px] rounded-md">
                <div className="w-[90%] h-[100%] bg-[#FFC53A] rounded-md"></div>
              </div>
            </div>
          </div>

          <div className="w-[200px] h-[60px] bg-[#AF4319] rounded-md text-white text-center">
            <h2 className="font-semibold py-1">CSS <FaCss3Alt className="inline-block mb-1" /></h2>
            <div className="w-full h-[50%] bg-[#D295BF] shadow-xl items-center flex">
              <div className="w-[100%] h-[40%] bg-white mx-[6px] rounded-md">
                <div className="w-[84%] h-[100%] bg-[#FFC53A] rounded-md"></div>
              </div>
            </div>
          </div>

          <div className="w-[200px] h-[60px] bg-[#AF4319] rounded-md text-white text-center">
            <h2 className="font-semibold py-1">JavaScript <IoLogoJavascript className="inline-block mb-1" /></h2>
            <div className="w-full h-[50%] bg-[#D295BF] shadow-xl items-center flex">
              <div className="w-[100%] h-[40%] bg-white mx-[6px] rounded-md">
                <div className="w-[90%] h-[100%] bg-[#FFC53A] rounded-md"></div>
              </div>
            </div>
          </div>

          <div className="w-[200px] h-[60px] bg-[#AF4319] rounded-md text-white text-center">
            <h2 className="font-semibold py-1">React <FaReact className="inline-block mb-1" /></h2>
            <div className="w-full h-[50%] bg-[#D295BF] shadow-xl items-center flex">
              <div className="w-[100%] h-[40%] bg-white mx-[6px] rounded-md">
                <div className="w-[85%] h-[100%] bg-[#FFC53A] rounded-md"></div>
              </div>
            </div>
          </div>

          <div className="w-[200px] h-[60px] bg-[#0D21A1] rounded-md text-white text-center">
            <h2 className="font-semibold py-1">PostgreSQL <DiPostgresql className="inline-block mb-1" /></h2>
            <div className="w-full h-[50%] bg-[#D295BF] shadow-xl items-center flex">
              <div className="w-[100%] h-[40%] bg-white mx-[6px] rounded-md">
                <div className="w-[84%] h-[100%] bg-[#FFC53A] rounded-md"></div>
              </div>
            </div>
          </div>

          <div className="w-[200px] h-[60px] bg-[#0D21A1] rounded-md text-white text-center">
            <h2 className="font-semibold py-1">SQLite <SiSqlite className="inline-block mb-1" /></h2>
            <div className="w-full h-[50%] bg-[#D295BF] shadow-xl items-center flex">
              <div className="w-[100%] h-[40%] bg-white mx-[6px] rounded-md">
                <div className="w-[70%] h-[100%] bg-[#FFC53A] rounded-md"></div>
              </div>
            </div>
          </div>

          <div className="w-[200px] h-[60px] bg-[#0D21A1] rounded-md text-white text-center">
            <h2 className="font-semibold py-1">NodeJS <FaNodeJs className="inline-block mb-1" /></h2>
            <div className="w-full h-[50%] bg-[#D295BF] shadow-xl items-center flex">
              <div className="w-[100%] h-[40%] bg-white mx-[6px] rounded-md">
                <div className="w-[70%] h-[100%] bg-[#FFC53A] rounded-md"></div>
              </div>
            </div>
          </div>

          <div className="w-[200px] h-[60px] bg-[#0D21A1] rounded-md text-white text-center">
            <h2 className="font-semibold py-1">Android Studio <SiAndroidstudio className="inline-block mb-1" /></h2>
            <div className="w-full h-[50%] bg-[#D295BF] shadow-xl items-center flex">
              <div className="w-[100%] h-[40%] bg-white mx-[6px] rounded-md">
                <div className="w-[70%] h-[100%] bg-[#FFC53A] rounded-md"></div>
              </div>
            </div>
          </div>
        
        </div>
          
        </section>

        <section id="proyectos" className="max-w-4xl w-full p-6 shadow-lg bg-[#1D7386] rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Proyectos</h2>  
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-6">
            <div className="bg-[#0B132B] p-4 rounded-lg shadow-md text-white">
              <h3 className="text-2xl font-semibold mb-2">Tienda de ropa</h3>
              <div className="w-[400px] h-[234px] bg-gradient-to-r from-red-500 to-yellow-600 p-4 py-4 rounded-lg shadow-md relative">
              <Proyecto images={images_proyecto1} />
              <button
                href="https://carlosdn1.github.io/tienda_enlinea/"
                target="_blank"
                className="bg-white text-black py-[6px] px-[6px] rounded-md relative left-82 bottom-9 z-1 w-[30px] h-[30px] flex items-center justify-center shadow-xl 
                transition duration-200 border border-transparent hover:bg-[#AFBFC0] hover:border-black hover:cursor-pointer"
              >
                <FaGithub />
              </button>
              </div>
            </div>
            <div className="bg-[#0B132B] p-4 rounded-lg shadow-md text-white">
              <h3 className="text-2xl font-semibold mb-2"> Servicio Adopcion Mascotas </h3>
              <div className="w-[400px] h-[234px] bg-gradient-to-r from-red-500 to-yellow-600 p-4 py-4 rounded-lg shadow-md relative">
              <Proyecto images={images_proyecto2} />
              <button
                href="https://carlosdn1.github.io/adopcion_web.github.io/"
                target="_blank"
                className="bg-white text-black py-[6px] px-[6px] rounded-md relative left-82 bottom-9 z-1 w-[30px] h-[30px] flex items-center justify-center shadow-xl 
                transition duration-200 border border-transparent hover:bg-[#AFBFC0] hover:border-black hover:cursor-pointer"
              >
                <FaGithub />
              </button>
              </div>
            </div>
            <div className="bg-[#0B132B] p-4 rounded-lg shadow-md text-white ">
              <h3 className="text-2xl font-semibold mb-2">Tienda de componentes de PC</h3>
              <div className="w-[400px] h-[234px] bg-gradient-to-r from-red-500 to-yellow-600 p-4 py-4 rounded-lg shadow-md relative">
              <Proyecto images={images_proyecto3} />
              <button
                href="https://carlosdn1.github.io/TecnoParts.github.io/"
                target="_blank"
                className="bg-white text-black py-[6px] px-[6px] rounded-md relative left-82 bottom-9 z-1 w-[30px] h-[30px] flex items-center justify-center shadow-xl 
                transition duration-200 border border-transparent hover:bg-[#AFBFC0] hover:border-black hover:cursor-pointer"
              >
                <FaGithub />
              </button>
              </div>
            </div>
            <div className="bg-[#0B132B] p-4 rounded-lg shadow-md text-white">
              <h3 className="text-2xl font-semibold mb-2">Escuela CEULDP</h3>
              <div className="w-[400px] h-[234px] bg-gradient-to-r from-red-500 to-yellow-600 p-4 py-4 rounded-lg shadow-md relative">
              <Proyecto images={images_proyecto4} />
              <button
                href="https://carlosdn1.github.io/escuela_web.github.io/"
                target="_blank"
                className="bg-white text-black py-[6px] px-[6px] rounded-md relative left-82 bottom-9 z-1 w-[30px] h-[30px] flex items-center justify-center shadow-xl 
                transition duration-200 border border-transparent hover:bg-[#AFBFC0] hover:border-black hover:cursor-pointer"
              >
                <FaGithub />
              </button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default App
