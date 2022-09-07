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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
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
            <form>
            <input className={styles.input} type="text" placeholder='First Name' required />
            <input className={styles.input} type="email" placeholder='Email' required />
            <input className={styles.input} type="number" placeholder='Contact Number' required />
            <input className={styles.input} type="text" placeholder='Graduation Year' required />
            <button type='submit' className={styles.btnwithback}>Let's Connect</button>
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
            <div className={styles.purchasetopcard}></div>
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
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <h2 className={styles.h2nox}>Week 1-3</h2>
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
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
                <div class="accordion" id="accordionExampleTwo">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                        <h2 className={styles.h2nox}>Week 4-6</h2>
                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExampleTwo">
                      <div class="accordion-body">
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
                <div class="accordion" id="accordionExampleThree">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                        <h2 className={styles.h2nox}>Week 6-8</h2>
                      </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExampleThree">
                      <div class="accordion-body">
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
                <div class="accordion" id="accordionExampleFour">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseOne">
                        <h2 className={styles.h2nox}>Week 9</h2>
                      </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExampleFour">
                      <div class="accordion-body">
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
                <div class="accordion" id="accordionExampleFive">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                        <h2 className={styles.h2nox}>Week 1-10</h2>
                      </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionExampleFour">
                      <div class="accordion-body">
                        How To Build a App?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.nox}>
              <button className={styles.noxbtn} data-bs-toggle="modal" data-bs-target="#exampleModal">Download Syllabus</button>
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Just One Step To Go...</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
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
              clickable: true,
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
            navigation={true}
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
          <div id="accordion-color" data-accordion="collapse" data-active-classes="bg-white text-blue-600">
            <h2 id="accordion-color-heading-1">
              <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                <span className='text-black'>What are the prerequisites for learning React JS?</span>
                <svg data-accordion-icon="" class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </h2>
            <div id="accordion-color-body-1" class="" aria-labelledby="accordion-color-heading-1">
              <div class="p-5 font-light ">
                <p class="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ratione deleniti at nesciunt itaque vitae doloremque, error eveniet corrupti odio veritatis facere mollitia blanditiis beatae corporis repellendus, ut quis! Voluptatibus autem esse cum. Atque itaque est iusto, aliquam, praesentium quas perspiciatis rerum labore, nostrum voluptatem nemo consequatur vero assumenda maxime ea magni quam totam ut impedit odit! Doloremque optio ea reprehenderit quas molestias dolor animi placeat modi nam nemo eaque tempora sequi, illum repellendus. Officiis illum autem sequi illo molestias vitae nemo unde, ut cumque quia aperiam molestiae qui perferendis dignissimos soluta non quam iure. Facere illo alias aliquid rem..</p>
              </div>
            </div>
            <h2 id="accordion-color-heading-2">
              <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
                <span className='text-black'>How much time will it take to learn React JS?</span>
                <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </h2>
            <div id="accordion-color-body-2" class="hidden" aria-labelledby="accordion-color-heading-2">
              <div class="p-5 font-light ">
                <p class="mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit impedit similique, sapiente explicabo ducimus fuga consequatur. Voluptate dignissimos sed porro eum quos, amet sequi, labore temporibus suscipit eos vitae praesentium, velit accusamus laborum. Omnis, ea! Adipisci eligendi ut quisquam mollitia similique commodi vel, perspiciatis labore laboriosam debitis tempore? Voluptatum assumenda libero facilis illo nihil alias reiciendis, dolor tempora expedita dolorum provident magnam, sint ut mollitia eveniet officiis asperiores quam a doloribus quae necessitatibus temporibus architecto! Culpa nulla beatae eligendi numquam recusandae, repudiandae tempore harum fugit labore id at atque sunt eius vel cumque veniam corporis. Nobis modi deserunt eius unde!</p>
              </div>
            </div>
            <h2 id="accordion-color-heading-3">
              <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left" data-accordion-target="#accordion-color-body-3" aria-expanded="false" aria-controls="accordion-color-body-3">
                <span className='text-black'>Is there any certification for React JS?</span>
                <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </h2>
            <div id="accordion-color-body-3" class="hidden" aria-labelledby="accordion-color-heading-3">
              <div class="p-5 font-light">
                <p class="mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam fugiat perspiciatis officiis magnam neque, dolorum iusto voluptate ducimus nobis facilis ratione ad sequi voluptatem! Illum, ducimus modi. Voluptas harum cupiditate, explicabo qui expedita eos at sequi, culpa nam quasi esse illo omnis quibusdam consectetur perspiciatis id, tenetur reiciendis vel aliquid soluta quae dicta praesentium? Voluptatum totam vero culpa consequatur provident ratione eaque necessitatibus sint. Esse fugiat distinctio nulla aliquid illo quos! Quidem neque illum esse. Qui dicta fuga error ducimus veniam voluptatum voluptate fugit illo, vitae tempora facilis expedita, beatae nihil molestias consectetur quod modi recusandae architecto quo, aspernatur nesciunt?.</p>
              </div>
            </div>
          </div>
          <div id="accordion-collapse" data-accordion="collapse" data-active-classes="bg-white text-blue-600 border-none">
            <h2 id="accordion-collapse-heading-1">
              <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left rounded-t-xl focus:ring-4 " data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                <span className='text-black'>Why is React JS better than Angular?</span>
                <svg data-accordion-icon="" class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </h2>
            <div id="accordion-collapse-body-1" class="" aria-labelledby="accordion-collapse-heading-1">
              <div class="p-5 font-light">
                <p class="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore mollitia accusamus maxime distinctio iure, commodi sed! Iure, rem maiores, incidunt nesciunt, odit autem iste impedit aspernatur quo laborum eos ut id harum. Cumque impedit ipsam quaerat delectus ad ullam expedita veniam officiis natus reiciendis vitae consequatur repellat, iure, voluptate eos. At, ea nostrum unde expedita possimus praesentium voluptates eveniet, suscipit odio incidunt accusantium quo non quos consectetur? Nulla sed, illum accusantium officiis, dicta voluptas qui commodi non autem debitis blanditiis excepturi! Iste aut expedita, quos error sit exercitationem molestias distinctio eius velit repellendus dolore enim quibusdam veniam harum ducimus cumque!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.connect}></div>
      <div className={styles.contactback}>
        <section className="text-white body-font relative w-full" id='contact'>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contact Us</h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <form >
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="name" className="leading-7 text-sm text-white">Name</label>
                    <input type="text" id="name" name="name" className="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="email" className="leading-7 text-sm text-white">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="name" className="leading-7 text-sm text-white">Phone No.</label>
                    <input type="number" id="name" name="name" className="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="name" className="leading-7 text-sm text-white">Company Name</label>
                    <input type="text" id="name" name="name" className="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label for="message" className="leading-7 text-sm text-white">Message</label>
                    <textarea id="message" name="message" className="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button type='submit' className={styles.btnwithback}>Submit</button>
                </div>
              </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Scrolltop />
      <Footer />
    </>
  );
}

export default Courses;