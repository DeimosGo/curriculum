import React from 'react';
import '../styles/Home.scss'

const Home = () => {
    return ( 
        <div className='main'>
            <section className='container'>
                <section className='container__item'>
                    <img className='container__img' src='https://w7.pngwing.com/pngs/600/159/png-transparent-computer-icons-color-symbol-employe-color-cartoon-business-thumbnail.png' alt='Developer profile  photo' />
                    
                    <div className='datos'>
                        <ul className='container__list first-list'>
                            <li className='contaniner__element'>Nombre:</li>
                            <li className='contaniner__element'>Edad:</li>
                            <li className='contaniner__element'>Profesión:</li>
                            <li className='contaniner__element'>Nacionalidad:</li>
                        </ul>

                        <ul className='container__list second-list' >
                            <li className='container__elemet'>David Castillo Ramirez</li>
                            <li className='container__elemet'>19 años</li>
                            <li className='container__elemet'>FrontEnd Developer</li>
                            <li className='container__elemet'>Piura - Perú</li>
                        </ul>
                    </div>
                    
                </section>

                <section className='container__item form'>
                <p>FORMACION</p>
                </section>

                <section className='container__item hab'>
                <p>HABILIDADES</p>
                </section>

                <section className='container__item port'>
                <p>PORTAFOLIOS</p>
                </section>

                <section className='container__item cont'>
                <p>CONTACTO</p>
                </section>

            </section>
        </div>
     );
}
 
export default Home;