import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Scrolltop from '../components/scrolltop'
import styles from '../styles/Home.module.css'
import Script from 'next/script';
import Link from 'next/link'


export default function Home() {

  return (
    <>
    <Script src='https://smtpjs.com/v3/smtp.js'></Script>
      {/* use head and add meta tag in head component  */}
    <Head>
    <title>Reactjsofficial</title>
        <meta name="description" content="Reactjs official Web Application" />
        <link rel="icon" href="/YourFavicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
       {/* use layout and add other ui component  */}
      <Header/>
      <section id="Home" className={styles.home}>
        <div className={styles.hero}>
          <h1 className={styles.h1}>CHASING JOBS?</h1>
          <h2 className={styles.h2}>Let us help You!!!</h2>
          <p className={styles.p1}>Personalized Training - Guidance from top-notch faculities - job Assistance - Internship Programs - Enhance <br /> Skillsets Land a job of 8+ LPA Helped 500+ Students and many more to go...</p>
          <Link href="/courses">
          <button className={styles.button}>Explore Now</button>
          </Link>
        </div>
      </section>
      <div className={styles.container}>
      <section id="abouttraining">
        <div className={styles.info}>
          <div className={styles.infofirst}>
            <p className={styles.abth5}>About Our Remort Traning</p>
            <h1 className={styles.abth2}>Develope your Skills <br /> Shine Your Life</h1>
            <button className={styles.button}>Read More</button>
          </div>
          <div className={styles.infosecond}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscip it arcu. Quisque aliquam posuere tortor, sit amet convallis nunc sce leris is que in. Lorem ipsum dolor sit amet consectetur adipiscing elitorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus </p>
          </div>
          <div className={styles.infothird}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscip it arcu. Quisque aliquam posuere tortor, sit amet convallis nunc sce leris is que in. Lorem ipsum dolor sit amet consectetur adipiscing elitorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus </p>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.box}><span className='text-gray-900 text-3xl font-bold not-italic'>2.958</span><p className='font-normal not-italic leading-6'>freshed Sessions</p></div>
          <div className={styles.box}><span className='text-gray-900 text-3xl font-bold not-italic'>4.523+</span><p className='font-normal not-italic leading-6'>Entrolled Learners</p></div>
          <div className={styles.box}><span className='text-gray-900 text-3xl font-bold not-italic'>120+</span><p className='font-normal not-italic leading-6'>Online Instructors</p></div>
          <div className={styles.box}><span className='text-gray-900 text-3xl font-bold not-italic'>100%</span><p className='font-normal not-italic leading-6'>satisfacton Rate</p></div>
        </div>
      </section>
      <section id="cuppon" className={styles.cuppon}>
      <div className={styles.cupoo}>
          <h1 className={styles.ch1}>How Does Our Mentorship Help You to get 100% Profit?</h1>
          <h2 className={styles.ch2}>20% OFF - Use Code <strong data-bs-toggle="tooltip" data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="This top tooltip is themed via CSS variables.">"First20"</strong> to get 20% off for limited time</h2>
          <div className={styles.cuppomain}>
            <div className={styles.cupooleftimg}></div>
            <div className={styles.cupoocont}>
            <div className={styles.cupooinfo}>
            <div className={styles.feature}>
              <div className={styles.cupooinfobox}>
              <div className={styles.feachimg1}></div>
              <div className={styles.feachinfo}>
                <p className={styles.pb}>Personalised Lectures & Weekly Plan</p>
                <p className={styles.pbhookpbhook}>Learn through practical implementation and get your own weekly hands-on and videos to practice.</p>
                </div>
                </div>
                <div className={styles.cupooinfobox}>
                <div className={styles.feachimg2}></div>
              <div className={styles.feachinfo}>
                <p className={styles.pb}>Live coding sessions</p>
                <p className={styles.pbhookpbhook}>Learn all concepts through live coding sessions by our top 
industry experts.</p>
                </div>
                </div>
                <div className={styles.cupooinfobox}>
                <div className={styles.feachimg3}></div>
              <div className={styles.feachinfo}>
                <p className={styles.pb}>ONE TO ONE CLASS</p>
                <p className={styles.pbhookpbhook}>Topic wise Live Practical sessions with our top faculties. One-to-one classes to build your thought process.</p>
                </div>
            </div>
            </div>
          </div>
            </div>
            </div>
            </div>
      </section>
      <section id="aboutus" className={styles.aboutus}>
        <div className={styles.aboutinfo}>
          <h5 className={styles.aboutinfoh5}>About Us</h5>
          <h1 className={styles.aboutinfoh1}>Are You Working Proffesinal willing To Switch?</h1>
          <p className={styles.aboutinfop}>We have invented and perfected the best system to learn React. A dedicated team to help you land the best opportunities</p>
          <br />
          <ul className={styles.ul}>
                <li className={styles.li}>ON-DEMAND REAL-TIME PROJECTS</li>
                <li className={styles.li}>EXCLUSIVE CONTENT AND SUPPORT TEAM</li>
                <li className={styles.li}>JOB ASSISTANCE AND RESUME BUILDING</li>
                <li className={styles.li}>INTERVIEW PREP MODULES</li>
              </ul>
        </div>
        <div className={styles.aboutusimg}></div>
        <div className={styles.aboutusbottom}>
          <div className={styles.aboutusboxes}>
            <h2 className={styles.mockh2}>50k+ <br />Community</h2>
            <p className={styles.mockp}>Globally Connect through prople with the same goal.</p>
          </div>
          <div className={styles.aboutusboxes}>
            <h2 className={styles.mockh2}>Job <br />Assistance</h2>
            <p className={styles.mockp}>Exclusive Placement Support Team will you crack job interview.</p>
          </div>
          <div className={styles.aboutusboxes}>
            <h2 className={styles.mockh2}>Certification</h2>
            <br />
            <p className={styles.mockp}>Get Course Complition certificate as a full fledged React developer.</p>
          </div>
          <div className={styles.aboutusboxes}>
            <h2 className={styles.mockh2}>Doubt solving</h2>
            <p className={styles.mockp}>Getting Stuck While developing? Get all your doubt resolve by our expert.</p>
          </div>
</div>
      </section>
      </div>
      <section id="fyda" className={styles.fyda}>
        <h1 className={styles.fydah1bol}>How PrepBytes MentorShip driven <br />Personalized Learning Work?</h1>
        <div className={styles.allbtnfyda}>
        <div className={styles.fydabutton2}>
            <div className={styles.fydaleft2}><span><strong>1</strong></span><span>Steps</span></div>
            <div className={styles.fydaright2}><strong>Personalized Leactures and weekly Plan</strong><p>Get Learning Vidoes and weekly plans based on your coding skills</p></div>
          </div>
          <div className={styles.fydabutton1}>
            <div className={styles.fydaleft1}><span><strong>2</strong></span><span>Steps</span></div>
            <div className={styles.fydaright1}><strong>Personlised Coding Assigenments</strong><p>Practice Coding Questions that adopts based your progress</p></div>
          </div>
          <div className={styles.fydabutton1}>
            <div className={styles.fydaleft1}><span><strong>3</strong></span><span>Steps</span></div>
            <div className={styles.fydaright1}><strong>Doubt Solving By coding Expert</strong><p>Getting stucked While Coding? Get All Your Doubt Resolve</p></div>
          </div>
          <div className={styles.fydabutton2}>
            <div className={styles.fydaleft2}><span><strong>4</strong></span><span>Steps</span></div>
            <div className={styles.fydaright2}><strong>Code Live With Top Coders</strong><p>Top wise level coding sessions with top rated coders</p></div>
          </div>
          <div className={styles.fydabutton}>
            <div className={styles.fydaleft}><span><strong>5</strong></span><span>Steps</span></div>
            <div className={styles.fydaright}>Achive Your Coding Dreams</div>
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
      <Scrolltop/>
      <Footer/>
      </>
  )
}
