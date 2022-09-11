import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Scrolltop from '../components/scrolltop'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import styles from '../styles/courses.module.css'


function Courses() {

  return (
    <>
      <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" />
      <Head>
        <title>Reactjsofficial</title>
        <meta name="description" content="Reactjs official Web Application" />
        <link rel="icon" href="/YourFavicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"></link>
      </Head>
      <Header />
      <section className={styles.section1}>
        <div className={styles.coursehero}>
          <div className={styles.courseheroleft}>
            <h1 className={styles.h1}>Advanced Front End
              Web Development Course
              — React.js </h1>
            <h3 className={styles.h3}>for Beginners and Experienced Learners</h3>
            <p className={styles.p}>Learn to build interactive web pages using React.js — The framework used by Facebook, Discord and more.</p>
            <button className={styles.btnwithback}>Explore Now</button>
            <button className={styles.btnwithoutback}>Try for free</button>
            <div className={styles.herobottom}>
              <div className={styles.herobox}>
                <span>13K+</span>Students Enrolled
              </div>
              <div className={styles.herobox}>
                <span>8</span>Projects
              </div>
              <div className={styles.herobox}>
                <span>18</span>Months
              </div>
              <div className={styles.herobox}>
                <span>50+</span>Hours of Video Lectures
              </div>
            </div>
          </div>
          <div className={styles.courseheroright}>
            <h4 className={styles.h4}>Need help Choosing?</h4>
            <p className={styles.p}>Talk to our team to find the right course for your career</p>
            <form action="https://formsubmit.io/send/50a5d3f9-5964-4094-bf8f-a49a870e7648" method='POST'>
            <input className={styles.input} type="text" placeholder='First Name' required />
            <input className={styles.input} type="email" placeholder='Email' required />
            <input className={styles.input} type="number" placeholder='Contact Number' required />
            <input className={styles.input} type="text" placeholder='Graduation Year' required />
            <input type='submit' value="Let's Connect" className={styles.btnwithback}/>
            </form>
          </div>
        </div>
      </section>
      <section className={styles.section2}>
        <div className={styles.sec2boxleft}>
          <h2 className={styles.h2}>Products that have been <br />
            built using React </h2>
          <div className={styles.sec2leftimg}></div>
        </div>
        <div className={styles.sec2boxright}>
          <h2 className={styles.h2}>Companies currently hiring
            <br /> React developers </h2>
          <p className={styles.p2}>Generally startups who require a jack of all trades and someone who knows to handle both front end and back end. </p>
          <div className={styles.sec2boxrightlogos}>
            <div className={styles.sec2boxrightlogo}></div>
            <div className={styles.sec2boxrightlogo1}></div>
            <div className={styles.sec2boxrightlogo2}></div>
            <div className={styles.sec2boxrightlogo3}></div>
          </div>
        </div>
      </section>
      <section className={styles.section3}>
        <p className={styles.p3}>Web Development </p>
        <h2 className={styles.h2d}>Projects that you will build</h2>
        <div className={styles.coursetopboxs}>
          <div className={styles.coursetopbox}>
            <div className={styles.courseicon}></div>
            <span className={styles.span3}>iPod</span>
            <p className={styles.pmock}>Build a clone of iPod nano 5th gen </p>
          </div>
          <div className={styles.coursetopbox}>
            <div className={styles.courseicon2}></div>
            <span className={styles.span3}>Shopping Cart </span>
            <p className={styles.pmock}>Build the basic functionality of shopping cart</p>
          </div>
          <div className={styles.coursetopbox}>
            <div className={styles.courseicon3}></div>
            <span className={styles.span3}>Movie App </span>
            <p className={styles.pmock}>Search any movie and store it as your favourite </p>
          </div>
        </div>
        <div className={styles.purchase}>
          <div className={styles.purchaseleft}>
            <h1 className={styles.h2purchase}>Select a plan based on your needs</h1>
            <div className={styles.purchasetopcard}>
              <div className={styles.topcardbox}>
                <div className={styles.topcardboximg}></div>
                <span>13 <br />Months</span>
              </div>
              <div className={styles.topcardbox}>
                <div className={styles.topcardboximg1}></div>
                <span>110+ <br />Hours</span>
              </div>
              <div className={styles.topcardbox}>
                <div className={styles.topcardboximg2}></div>
                <span>8+ <br />Projects</span>
              </div>
              <div className={styles.topcardbox}>
                <div className={styles.topcardboximg3}></div>
                <span>90+ <br />Tasks</span>
              </div>
              <div className={styles.topcardbox}>
                <div className={styles.topcardboximg4}></div>
                <span>400+<br />Doubts</span>
              </div>
            </div>
            <div className={styles.basicfeatures}>
              <h1 className={styles.justatext}>Bonus Features</h1>
              <ul className={styles.ul}>
                <li className={styles.li}>Premium Hirist Account</li>
                <li className={styles.li}>NASSCOM Certificate</li>
                <li className={styles.li}>Dedicated Placement Cell with curated job opening</li>
              </ul>
            </div>
            <div className={styles.basicfeatures}>
              <h1 className={styles.justatext}>Modules Covered</h1>
              <ul className={styles.ul}>
                <li className={styles.li}>Introduction to Programming</li>
                <li className={styles.li}>Data Structures and Algorithms</li>
                <li className={styles.li}>Frontend web development - HTML/CSS/Javascript</li>
                <li className={styles.li}>Advanced frontend with React.js </li>
              </ul>
            </div>
            <div className={styles.basicfeatures}>
              <h1 className={styles.justatext}>Modules Covered</h1>
              <ul className={styles.ul}>
                <li className={styles.li}>1:1 Mock-Interview & Guidance-session with Industry Mentors</li>
                <li className={styles.li}>Workshops for building your resume and
                  Linkedin/Github profiles</li>
                <li className={styles.li}>Curated interview problems</li>
                <li className={styles.li}>DSA based product companies Mock Test Series</li>
                <li className={styles.li}>2 months Free Course Extension</li>
                <li className={styles.li}>120 Days Course Pause</li>
                <li className={styles.li}>1:1 Doubt support with Teaching Assistants </li>
              </ul>
            </div>
            <div className={styles.bottompurchase}>
              <h1 className={styles.h1blow}>₹44,071/- </h1>
              <button className={styles.buybtn}>Enroll Now</button>
            </div>
          </div>
          <div className={styles.purchaseright}>
            <h1 className={styles.h2purchaseright}>Program Syllabus & Projects</h1>
            <p>We have reverse engineered our syllabus by talking to the best
              companies and understanding what skills the industry needs the most right now.</p>
            <div className={styles.purchaserightbox1}>
              <span className={styles.righttextbox}>Web Development Basics - HTML, CSS, BootStrap</span>
              <p className={styles.p5}>Get to learn how websites work. Start your web development journey with the basics of HTML and learn how to create impressive websites using</p>
              <div className={styles.kuchnahi}>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <h2 className={styles.h2nox}>Week 1-3</h2>
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        How To Build a App?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.purchaserightbox1}>
              <span className={styles.righttextbox}>Javascript</span>
              <p className={styles.p5}>Deep dive into the world of Javascript, one of the commonly used languages for web development. Explore the basics of JS, promises, closures, and com-</p>

              <div className={styles.kuchnahi}>
                <div className="accordion" id="accordionExampleTwo">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                        <h2 className={styles.h2nox}>Week 4-6</h2>
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExampleTwo">
                      <div className="accordion-body">
                        Looks Like a Joker
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.purchaserightbox1}>
              <span className={styles.righttextbox}>ReactJS</span>
              <p className={styles.p5}>Most of the websites getting built nowadays are using React, so why should you stay behind. Learn all the components of React, understand how React</p>
              <div className={styles.kuchnahi}>
                <div className="accordion" id="accordionExampleThree">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                        <h2 className={styles.h2nox}>Week 6-8</h2>
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExampleThree">
                      <div className="accordion-body">
                        Not Now!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.purchaserightbox1}>
              <span className={styles.righttextbox}>Code Review + Deployment</span>
              <p className={styles.p5}>Developers don't just write code, they write production level code. Learn how to write production-level code, deploy your projects, and flaunt it to the</p>
              <div className={styles.kuchnahi}>
                <div className="accordion" id="accordionExampleFour">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseOne">
                        <h2 className={styles.h2nox}>Week 9</h2>
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExampleFour">
                      <div className="accordion-body">
                        How To Build a App?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.purchaserightbox1}>
              <span className={styles.righttextbox}>Projects</span>
              <p className={styles.p5}>You will build 5+ projects during the whole program. Starting from building basic apps to bring your learning to the application, to building a real-world.</p>
              <div className={styles.kuchnahi}>
                <div className="accordion" id="accordionExampleFive">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                        <h2 className={styles.h2nox}>Week 1-10</h2>
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionExampleFour">
                      <div className="accordion-body">
                        How To Build a App?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.nox}>
              <button className={styles.noxbtn} data-bs-toggle="modal" data-bs-target="#exampleModal">Download Syllabus</button>
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Just One Step To Go...</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div className={styles.courseheroright}>
                        <h4 className={styles.h4}>Let's Know Each Other</h4>
                        <p className={styles.p}>Don't Worry We Don't Spam!</p>
                        <form>
                        <input className={styles.input} type="text" placeholder='First Name' required />
                        <input className={styles.input} type="email" placeholder='Email' required />
                        <input className={styles.input} type="number" placeholder='Contact Number' required />
                        <input className={styles.input} type="text" placeholder='Graduation Year' required />
                        <input type="submit" className={styles.btnwithback} value="Download Syllabus" />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.secton4}>
        <h2 className={styles.sec4h2}>What our students say about this course?</h2>
        <div className={styles.allreviews} id='slidemock'>
          <Swiper
            slidesPerView={3}
            spaceBetween={500}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: false,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 3,
                spaceBetween: 500,
              },
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            loop="true"
            className="mySwiper"
          >
            <SwiperSlide className={styles.nextpower}><div className={styles.reviewcard}>
              <div className={styles.topreview}>
                <div className={styles.imagesec4}></div>
                <div className={styles.textleftsec4}>
                  <h6 className={styles.h6}>Harish Nishad</h6>
                  <p className={styles.bio}>recommends Coding Ninjas </p>
                </div>
              </div>
              <div className={styles.bottomreview}>
                <p className={styles.bioinfo}>Best teachers ever available for 24*7 hours for any kind of problem or doubt so that they are able to clear. There are videos that teach us to the best of the concepts and help us do all the coding questions. Excellent place, Dedicated staff, Well maintained, Best infrastructure </p>
              </div>
            </div></SwiperSlide>
            <SwiperSlide className={styles.nextpower}><div className={styles.reviewcard}>
              <div className={styles.topreview}>
                <div className={styles.imagesec4}></div>
                <div className={styles.textleftsec4}>
                  <h6 className={styles.h6}>Harish Nishad</h6>
                  <p className={styles.bio}>recommends Coding Ninjas </p>
                </div>
              </div>
              <div className={styles.bottomreview}>
                <p className={styles.bioinfo}>Best teachers ever available for 24*7 hours for any kind of problem or doubt so that they are able to clear. There are videos that teach us to the best of the concepts and help us do all the coding questions. Excellent place, Dedicated staff, Well maintained, Best infrastructure </p>
              </div>
            </div></SwiperSlide>
            <SwiperSlide className={styles.nextpower}><div className={styles.reviewcard}>
              <div className={styles.topreview}>
                <div className={styles.imagesec4}></div>
                <div className={styles.textleftsec4}>
                  <h6 className={styles.h6}>Harish Nishad</h6>
                  <p className={styles.bio}>recommends Coding Ninjas </p>
                </div>
              </div>
              <div className={styles.bottomreview}>
                <p className={styles.bioinfo}>Best teachers ever available for 24*7 hours for any kind of problem or doubt so that they are able to clear. There are videos that teach us to the best of the concepts and help us do all the coding questions. Excellent place, Dedicated staff, Well maintained, Best infrastructure </p>
              </div>
            </div></SwiperSlide>
            <SwiperSlide className={styles.nextpower}><div className={styles.reviewcard}>
              <div className={styles.topreview}>
                <div className={styles.imagesec4}></div>
                <div className={styles.textleftsec4}>
                  <h6 className={styles.h6}>Harish Nishad</h6>
                  <p className={styles.bio}>recommends Coding Ninjas </p>
                </div>
              </div>
              <div className={styles.bottomreview}>
                <p className={styles.bioinfo}>Best teachers ever available for 24*7 hours for any kind of problem or doubt so that they are able to clear. There are videos that teach us to the best of the concepts and help us do all the coding questions. Excellent place, Dedicated staff, Well maintained, Best infrastructure </p>
              </div>
            </div></SwiperSlide>
            <SwiperSlide className={styles.nextpower}><div className={styles.reviewcard}>
              <div className={styles.topreview}>
                <div className={styles.imagesec4}></div>
                <div className={styles.textleftsec4}>
                  <h6 className={styles.h6}>Harish Nishad</h6>
                  <p className={styles.bio}>recommends Coding Ninjas </p>
                </div>
              </div>
              <div className={styles.bottomreview}>
                <p className={styles.bioinfo}>Best teachers ever available for 24*7 hours for any kind of problem or doubt so that they are able to clear. There are videos that teach us to the best of the concepts and help us do all the coding questions. Excellent place, Dedicated staff, Well maintained, Best infrastructure </p>
              </div>
            </div></SwiperSlide>
            <SwiperSlide className={styles.nextpower}><div className={styles.reviewcard}>
              <div className={styles.topreview}>
                <div className={styles.imagesec4}></div>
                <div className={styles.textleftsec4}>
                  <h6 className={styles.h6}>Harish Nishad</h6>
                  <p className={styles.bio}>recommends Coding Ninjas </p>
                </div>
              </div>
              <div className={styles.bottomreview}>
                <p className={styles.bioinfo}>Best teachers ever available for 24*7 hours for any kind of problem or doubt so that they are able to clear. There are videos that teach us to the best of the concepts and help us do all the coding questions. Excellent place, Dedicated staff, Well maintained, Best infrastructure </p>
              </div>
            </div></SwiperSlide>
            <SwiperSlide className={styles.nextpower}><div className={styles.reviewcard}>
              <div className={styles.topreview}>
                <div className={styles.imagesec4}></div>
                <div className={styles.textleftsec4}>
                  <h6 className={styles.h6}>Harish Nishad</h6>
                  <p className={styles.bio}>recommends Coding Ninjas </p>
                </div>
              </div>
              <div className={styles.bottomreview}>
                <p className={styles.bioinfo}>Best teachers ever available for 24*7 hours for any kind of problem or doubt so that they are able to clear. There are videos that teach us to the best of the concepts and help us do all the coding questions. Excellent place, Dedicated staff, Well maintained, Best infrastructure </p>
              </div>
            </div></SwiperSlide>
            <SwiperSlide className={styles.nextpower}><div className={styles.reviewcard}>
              <div className={styles.topreview}>
                <div className={styles.imagesec4}></div>
                <div className={styles.textleftsec4}>
                  <h6 className={styles.h6}>Harish Nishad</h6>
                  <p className={styles.bio}>recommends Coding Ninjas </p>
                </div>
              </div>
              <div className={styles.bottomreview}>
                <p className={styles.bioinfo}>Best teachers ever available for 24*7 hours for any kind of problem or doubt so that they are able to clear. There are videos that teach us to the best of the concepts and help us do all the coding questions. Excellent place, Dedicated staff, Well maintained, Best infrastructure </p>
              </div>
            </div></SwiperSlide>
            <SwiperSlide className={styles.nextpower}><div className={styles.reviewcard}>
              <div className={styles.topreview}>
                <div className={styles.imagesec4}></div>
                <div className={styles.textleftsec4}>
                  <h6 className={styles.h6}>Harish Nishad</h6>
                  <p className={styles.bio}>recommends Coding Ninjas </p>
                </div>
              </div>
              <div className={styles.bottomreview}>
                <p className={styles.bioinfo}>Best teachers ever available for 24*7 hours for any kind of problem or doubt so that they are able to clear. There are videos that teach us to the best of the concepts and help us do all the coding questions. Excellent place, Dedicated staff, Well maintained, Best infrastructure </p>
              </div>
            </div></SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className={styles.section5}>
        <h2 className={styles.h2d}>Frequently Asked Questions</h2>
        <div className={styles.questions}>
        <div className="accordion mb-28" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header mb-3" id="headingTwo">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <h2 className={styles.h2nox}>What are the prerequisites for learning React JS?</h2>
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        How To Build a App?
                      </div>
                    </div>
                    <h2 className="accordion-header mb-3" id="headingTwo">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        <h2 className={styles.h2nox}>How much time will it take to learn React JS?</h2>
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        How To Build a App?
                      </div>
                    </div>
                    <h2 className="accordion-header mb-3" id="headingThree">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                        <h2 className={styles.h2nox}>Is there any certification for React JS?</h2>
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        How To Build a App?
                      </div>
                    </div>
                    <h2 className="accordion-header mb-3" id="headingFour">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                        <h2 className={styles.h2nox}>Why is React JS better than Angular?</h2>
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        How To Build a App?
                      </div>
                    </div>
                  </div>
                </div>
        </div>
      </section>
      <div className={styles.connect}>
        <div className={styles.connectleft}>
          <h1 className={styles.connecth1}>Find us at the office</h1>
          <p className={styles.connectp}>Bangalore,<br/>India<br/>Email: reactjsofficial1@gail.com</p>
        </div>
        <div className={styles.connectmiddle}>
          <div className={styles.or}>OR</div>
        </div>
        <div className={styles.connectright}>
        <h1 className={styles.connecth1}>Give us a ring</h1>
          <p className={styles.connectp}>Reactjsofficial<br/>+91 7209 236123, +91 7764056669<br />Mon - Sat, 10:00am-10:00pm</p>
        </div>
      </div>
      <div className={styles.contactback}>
      <section className="text-white body-font relative w-full" id='contact'>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contact Us</h1>
            </div>
            <form action="https://formsubmit.io/send/50a5d3f9-5964-4094-bf8f-a49a870e7648" method='POST'>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-white">Name</label>
                    <input type="text" id="name" name="name" className="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-blue-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-blue-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-white">Phone No.</label>
                    <input type="number" id="phone" name="phone" className="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-blue-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-white">Company Name</label>
                    <input type="text" id="companyname" name="companyname" className="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-blue-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm text-white">Message</label>
                    <textarea id="message" name="message" className="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-blue-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className={styles.btnwithback}>Submit</button>
                </div>
              </div>
            </div>
            </form>
          </div>
        </section>
      </div>
      <Scrolltop />
      <Footer />
    </>
  );
}

export default Courses;