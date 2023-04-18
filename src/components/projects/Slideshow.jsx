import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import projectImage_0 from '../../assets/images/projectImages/roboticRenaissance.JPG'
import projectImage_1 from '../../assets/images/projectImages/f4t.JPG'
import projectImage_2 from '../../assets/images/projectImages/lol_db.JPG'
import projectImage_3 from '../../assets/images/projectImages/hopeIsLostEcom.JPG'
import projectImage_4 from '../../assets/images/projectImages/nbaAllStarTeams.JPG'
import projectImage_5 from '../../assets/images/projectImages/navigation.JPG'
import projectImage_6 from '../../assets/images/projectImages/teamBuilder.JPG'
import projectImage_7 from '../../assets/images/projectImages/twoApisOneSun.JPG'
import projectImage_8 from '../../assets/images/projectImages/techAgram.JPG'
import projectImage_9 from '../../assets/images/projectImages/socialButterflyApi.JPG'

// using inline styles to over ride the default styles of the swiper components
const styles = {
    color: 'var(--green)',
    fontWeight: 'bold',
    backgroundColor: '#00ffbf20',
    padding: '1.9rem',
    borderRadius: '50%',
    border: '1px solid var(--green)',
    display: 'none',
}

const Slideshow = () => 
  (
    <div className="wrapper">
        <div className="container">
            {/* Swiper component values, taken from Swiper's website docs */}
            <Swiper
                effect={ 'coverflow' }
                grabCursor={ true }
                centeredSlides={ true }
                loop={ true }
                slidesPerView={ 'auto' }
                coverflowEffect= { { rotate: 0, stretch: 0, depth: 100, modifier: 5 } }
                pagination= { { el: '.swiper-pagination', clickable: true } }
                navigation= { { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', clickable: true } }
                modules= { [ EffectCoverflow, Pagination, Navigation ] }
                className='swiper_container'>
                {/* Carousel slides */}
                <SwiperSlide>
                    <div className="projFrame">
                        <div className="projWindow">
                            <img className='slides' src={ projectImage_0 } alt="Robotic RenAIssance" title='Robotic RenAIssance' />
                            <i className="slideTitle slideTitle0">Robotic RenAIssance</i>
                        </div>  
                        <div className="projBtns">
                            <a href='https://robotic-renaissance.herokuapp.com/' target='_blank' rel="noreferrer" className='btn'>Demo</a>
                            <a href='https://github.com/jk377y/Robotic_RenAIssance' target='_blank' rel="noreferrer" className='btn'>Repo</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="projFrame">
                        <div className="projWindow">
                            <img className='slides' src={ projectImage_1 } alt="Food4Thought" title='Food4Thought' />
                            <i className="slideTitle slideTitle1">Food 4 Thought</i>
                        </div>  
                        <div className="projBtns">
                            <a href='https://f4t.herokuapp.com/' target='_blank' rel="noreferrer" className='btn'>Demo</a>
                            <a href='https://github.com/jk377y/f4t' target='_blank' rel="noreferrer" className='btn'>Repo</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="projFrame"> 
                        <div className="projWindow"> 
                            <img className='slides' src={ projectImage_2 } alt="League of Legends DB" title='League of Legends DB' />
                            <i className="slideTitle slideTitle2">League of Legends</i>
                        </div>
                        <div className="projBtns">
                            <a href='https://lol-mern.herokuapp.com//' target='_blank' rel="noreferrer" className='btn'>Demo</a>
                            <a href='https://github.com/jk377y/leagueOfLegendsMERN' target='_blank' rel="noreferrer" className='btn'>Repo</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="projFrame">  
                        <div className="projWindow">
                            <img className='slides' src={ projectImage_3 } alt="Hope Is Lost Ecommerce" title='Hope Is Lost Ecommerce' />
                            <i className="slideTitle slideTitle3">Hope Is Lost</i>
                        </div>
                        <div className="projBtns">
                            <a href='https://drive.google.com/file/d/1zHgSKQft9Vsuqbi4qznfZ3LQwc_NXZWD/view' target='_blank' rel="noreferrer" className='btn'>Demo</a>
                            <a href='https://github.com/jk377y/hope-is-lost-ecomm-backend' target='_blank' rel="noreferrer" className='btn'>Repo</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="projFrame">  
                        <div className="projWindow">
                            <img className='slides' src={ projectImage_4 } alt="2022 NBA All Star Roster" title='2022 NBA All Star Roster' />
                            <i className="slideTitle slideTitle4">All Star Teams</i>
                        </div>
                        <div className="projBtns">
                            <a href='https://drive.google.com/file/d/1iQcTlfoJxcwo01Hm3B9_rHV--jlMZIJX/view' target='_blank' rel="noreferrer" className='btn'>Demo</a>
                            <a href='https://github.com/jk377y/2022-nba-all-stars-employee-tracker' target='_blank' rel="noreferrer" className='btn'>Repo</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="projFrame">  
                        <div className="projWindow">
                            <img className='slides' src={ projectImage_5 } alt="Navigation App" title='Navigation App' />
                            <i className="slideTitle slideTitle5">Navigation App</i>
                        </div>
                        <div className="projBtns">
                            <a href='https://jk377y.github.io/Navigation-Project/' target='_blank' rel="noreferrer" className='btn'>Demo</a>
                            <a href='https://github.com/jk377y/Navigation-Project' target='_blank' rel="noreferrer" className='btn'>Repo</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="projFrame">  
                        <div className="projWindow">
                            <img className='slides' src={ projectImage_6 } alt="Navigation App" title='Navigation App' />
                            <i className="slideTitle slideTitle6">Team Builder</i>
                        </div>
                        <div className="projBtns">
                            <a href='https://drive.google.com/file/d/1ICPI2OT8n1BinQNu2tJpJRmQLBHdlgcX/view' target='_blank' rel="noreferrer" className='btn'>Demo</a>
                            <a href='https://github.com/jk377y/WhackARole-Team-Builder' target='_blank' rel="noreferrer" className='btn'>Repo</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="projFrame">  
                        <div className="projWindow">
                            <img className='slides' src={ projectImage_7 } alt="Two Apis One Sun" title='Two Apis One Sun' />
                            <i className="slideTitle slideTitle7">Two Apis One Sun</i>
                        </div>
                        <div className="projBtns">
                            <a href='https://jk377y.github.io/Two-API-s-One-Sun/' target='_blank' rel="noreferrer" className='btn'>Demo</a>
                            <a href='https://github.com/jk377y/Two-API-s-One-Sun' target='_blank' rel="noreferrer" className='btn'>Repo</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="projFrame">  
                        <div className="projWindow">
                            <img className='slides' src={ projectImage_8 } alt='techAgram' title='techAgram' />
                            <i className="slideTitle slideTitle8">techAgram</i>
                        </div>
                        <div className="projBtns">
                            <a href='https://tech-a-gram.herokuapp.com/' target='_blank' rel="noreferrer" className='btn'>Demo</a>
                            <a href='https://github.com/jk377y/techAgram' target='_blank' rel="noreferrer" className='btn'>Repo</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="projFrame">  
                        <div className="projWindow">
                            <img className='slides' src={ projectImage_9 } alt="Social Butterfly API" title='Social Butterfly API' />
                            <i className="slideTitle slideTitle9">Social Butterfly API</i>
                        </div>
                        <div className="projBtns">
                            <a href='https://www.google.com' target='_blank' rel="noreferrer" className='btn'>Demo</a>
                            <a href='https://github.com/jk377y/Social-Butterfly-API' target='_blank' rel="noreferrer" className='btn'>Repo</a>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Pagination bullets and arrows for switching slides */}
                <div className="slider-controller">
                    <div className="swiper-button-prev slider-arrow" style={styles}>
                        <i name='arrow-back-outline'></i>
                    </div>
                    <div className="swiper-button-next slider-arrow" style={styles}>
                        <i name='arrow-forward-outline'></i>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    </div>
  )

export default Slideshow