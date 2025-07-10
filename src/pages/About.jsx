import Product from '../assets/image/choose_mattress.png'
import Footer from '../components/Footer';

const About = () => (
  <>
      <section className='our_story_area mt-[60px] pt-16 py-18 lg:w-7xl w-full mx-auto'>
        <div className="section_title text-center mb-14">
            <h2 className='text-4xl text-[#3E0478] capitalize font-bold'>Our Journey</h2>
        </div>
        <div>
            <div className="journey_start text-center xl:mr-[50%] lg:mr-[50%] md:mr-[50%]">
                <h3>start</h3>
            </div>
            <div className="flex justify-center-safe">
            <div>
                <div className="journey_box stp_2">
                    <h3 class="date">2nd Feb, 2018</h3>
                    <span>Exhibition Planning & Exhibition Management</span>
                </div>
                <div className="journey_box stp_4">
                    <h3 className="date">21st Jul, 2018</h3>
                    <span>Growth internationallyfirst half of the 2018s</span>
                </div>
                <div className="journey_box stp_6">
                    <h3 className="date">19th Aug, 2018</h3>
                    <span>The purpose of the business plan</span>
                </div>
                <div className="journey_box stp_8">
                    <h3 className="date">2nd Jan, 2019</h3>
                    <span>Focus business history on what matters to planning</span>
                </div>
                <div className="journey_box stp_9">
                    <h3 className="date">22nd Feb, 2018</h3>
                    <span>Exhibition Planning & Exhibition Management</span>
                </div>
            </div>
            <div className="journey_right_box">
                <div className="journey_box stp_1">
                    <h3 class="date">12th Jan, 2018</h3>
                    <span>Establishment of Constrio</span>
                </div>
                <div class="journey_box stp_3">
                    <h3 class="date">8th Jul, 2018</h3>
                    <span>Registered as a company</span>
                </div>
                <div class="journey_box stp_5">
                    <h3 class="date">18th Aug, 2018</h3>
                    <span>Construction bought the Greek company Delta</span>
                </div>
                <div class="journey_box stp_7">
                    <h3 class="date">27th Sep, 2018</h3>
                    <span>For lean business plans, operational plans, and strategic plans</span>
                </div>
                <div class="journey_box stp_10">
                    <h3 class="date">8th Jul, 2019</h3>
                    <span>Exhibition Planning & Exhibition Management</span>
                </div>
            </div>
            </div>
            <div className="journey_last text-center xl:mr-[46%] lg:mr-[46%] md:mr-[46%] mr-[36%]">
                <h3>Journey going on</h3>    
            </div>
        </div>
      </section>
      <section className=' px-8 py-18 lg:w-7xl w-full mx-auto flex justify-between flex-wrap items-center'>
          <div>
            <img src={Product} alt="mattress"/>
          </div>
          <div>
              <div className="mb-10">
                  <h2 className='text-4xl capitalize font-bold'>Why Choose Mattress</h2>
              </div>
              <div>
                    <ul>
                        <li className='text-base text-[#212529] mb-2.5'><i class="fa-brands fa-hornbill text-[#3E0478] mr-2.5"></i> Euro asia Mattress Gives good support to your back-bone,</li>
                        <li className='text-base text-[#212529] mb-2.5'><i class="fa-brands fa-hornbill text-[#3E0478] mr-2.5"></i> It alsomaintains the natural  curvature of your back-bone while you sleep</li>
                        <li className='text-base text-[#212529] mb-2.5'><i class="fa-brands fa-hornbill text-[#3E0478] mr-2.5"></i> Ensures a back-pain free sleep.</li>
                        <li className='text-base text-[#212529] mb-2.5'><i class="fa-brands fa-hornbill text-[#3E0478] mr-2.5"></i> Its gream and dust free</li>
                        <li className='text-base text-[#212529] mb-2.5'><i class="fa-brands fa-hornbill text-[#3E0478] mr-2.5"></i> Durability 20 years for normal use</li>
                        <li className='text-base text-[#212529] mb-2.5'><i class="fa-brands fa-hornbill text-[#3E0478] mr-2.5"></i> One side soft, One side hard</li>
                        <li className='text-base text-[#212529] mb-2.5'><i class="fa-brands fa-hornbill text-[#3E0478] mr-2.5"></i> Prevents dust allergry and asthma</li>
                    </ul>
                </div>
          </div>
      </section>
      <Footer/>
  </>
);

export default About;
