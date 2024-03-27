import logo from '../assets/react.svg'
import hero from '../assets/hero-bg.png'
import feature1 from '../assets/illustration-features-tab-1.png'
import feature2 from '../assets/illustration-features-tab-2.png'
import feature3 from '../assets/illustration-features-tab-3.png'
import chrome from '../assets/logo-chrome.svg'
import firefox from '../assets/logo-firefox.svg'
import opera from '../assets/logo-opera.svg'

const Header = () => {
  return (
    <>
      <header className='container'>
        <nav className='text-purple flex item-start py-4 mt-4 sm:mt-12'>
          <div className='py-1 flex flex-1 items-center gap-1'>
            <img src={logo} alt='' />
            Book<span className='text-md font-bold'>µ</span>ark
          </div>
          <ul className='hidden sm:flex flex-1 justify-end items-center text-slate-500 uppercase text-md  gap-12'>
            <li className='cursor-pointer'>Features</li>
            <li className='cursor-pointer'>Pricing</li>
            <li className='cursor-pointer'>Contact</li>
            <button
              type='button'
              className=' bg-red-500 text-white rounded-md px-7 py-3 uppercase'
            >
              Login
            </button>
          </ul>
          <div className='flex sm:hidden flex-1 justify-end'>
            <i className='text-2xl fa-solid fa-bars cursor-pointer'></i>
          </div>
        </nav>
      </header>
      {/* Hero */}
      <section className='relative'>
        <div className='container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-20'>
          {/* Content */}
          <div className='flex flex-1 flex-col items-center lg:item-start md:items-start'>
            <h2 className='text-blue-500 text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6'>
              A Simple Bookmark Manager
            </h2>
            <p className='text-gray-400 text-lg text-center lg:text-left mb-6'>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and try it for free.
            </p>
            <div className='flex justify-center flex-wrap gap-6'>
              <button
                type='button'
                className='bg-purple text-white shadow-md py-3 px-6 rounded-md transition duration-300
                 hover:bg-white hover:text-black'
              >
                Get it on chrome
              </button>
              <button
                type='button'
                className=' bg-white shadow-md py-3 px-6 rounded-md transition duration-300 
                hover:bg-purple hover:text-white'
              >
                Get it on firefox
              </button>
            </div>
          </div>
          {/* image */}
          <div className='flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10'>
            <img
              className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full '
              src={hero}
              alt=''
            />
          </div>
        </div>
        {/* Rounded rectangle */}
        <div className='hidden md:block overflow-hidden bg-purple rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-38'></div>
      </section>

      {/* Features */}
      <section className='relative bg-slate-50 py-20 mt-20 lg:mt-60'>
        {/* Heading */}
        <div className='sm:3/4 lg:5/12 mx-auto px-2'>
          <h1 className='text-3xl text-center text-blue-500'>Features</h1>
          <p className='text-center text-gray-400 mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iusto
            incidunt unde, animi quisquam vel pariatur perspiciatis fuga odit
            quasi eos ipsam nam ducimus sint repudiandae id debitis iste
            eligendi!
          </p>
        </div>
        {/* Feature #1 */}
        <div className='relative mt-20 lg:mt-24'>
          <div className='container flex flex-col lg:flex-row items-center justify-center gap-x-24'>
            {/* Image */}
            <div className='flex flex-1 z-10 mb-10 lg:mb-0'>
              <img src={feature1} alt='' />
            </div>
            <div className='flex flex-1 flex-col  items-center md:items-start lg:justify-start'>
              <h1 className='text-3xl text-blue-500'>Bookmark in one click</h1>
              <p className='text-gray-400 my-4 text-center md:text-start  lg:text-start sm:w-3/4 lg:w-full'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam asperiores nesciunt quasi est obcaecati nulla
                reprehenderit soluta? Harum quibusdam, provident facilis maiores
                animi error aspernatur numquam obcaecati sit, ipsam alias!
              </p>
              <button
                type='button'
                className='bg-purple text-white shadow-md py-3 px-6 rounded-md transition duration-300
                 hover:bg-white hover:text-black'
              >
                More Info
              </button>
            </div>
          </div>
          {/* Rounded rectangle */}
          <div className='hidden lg:block overflow-hidden bg-purple rounded-r-full absolute h-80 w-2/4  -bottom-24 -left-36'></div>
        </div>

        {/* Feature #2 */}
        <div className='relative mt-20 lg:mt-52'>
          <div className='container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24'>
            {/* Image */}
            <div className='flex flex-1 z-10 mb-10 lg:mb-0'>
              <img src={feature2} alt='' />
            </div>
            <div className='flex flex-1 flex-col  items-center md:items-start lg:justify-start'>
              <h1 className='text-3xl text-blue-500'>Inteligence Search</h1>
              <p className='text-gray-400 my-4 text-center md:text-start  lg:text-start sm:w-3/4 lg:w-full'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam asperiores nesciunt quasi est obcaecati nulla
                reprehenderit soluta? Harum quibusdam, provident facilis maiores
                animi error aspernatur numquam obcaecati sit, ipsam alias!
              </p>
              <button
                type='button'
                className='bg-purple text-white shadow-md py-3 px-6 rounded-md transition duration-300
                 hover:bg-white hover:text-black'
              >
                More Info
              </button>
            </div>
          </div>
          {/* Rounded rectangle */}
          <div className='hidden lg:block overflow-hidden bg-purple rounded-l-full absolute h-80 w-2/4  -bottom-14 -right-36'></div>
        </div>

        {/* Feature #3 */}
        <div className='relative mt-20 lg:mt-52'>
          <div className='container flex flex-col lg:flex-row items-center justify-center gap-x-24'>
            {/* Image */}
            <div className='flex flex-1 z-10 mb-10 lg:mb-0'>
              <img src={feature3} alt='' />
            </div>
            <div className='flex flex-1 flex-col  items-center md:items-start lg:justify-start'>
              <h1 className='text-3xl text-blue-500'>Share your Bookmark</h1>
              <p className='text-gray-400 my-4 text-center md:text-start  lg:text-start sm:w-3/4 lg:w-full'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam asperiores nesciunt quasi est obcaecati nulla
                reprehenderit soluta? Harum quibusdam, provident facilis maiores
                animi error aspernatur numquam obcaecati sit, ipsam alias!
              </p>
              <button
                type='button'
                className='bg-purple text-white shadow-md py-3 px-6 rounded-md transition duration-300
                 hover:bg-white hover:text-black'
              >
                More Info
              </button>
            </div>
          </div>
          {/* Rounded rectangle */}
          <div className='hidden lg:block overflow-hidden bg-purple rounded-r-full absolute h-80 w-2/4  -bottom-24 -left-36'></div>
        </div>
      </section>

      {/* Download */}
      <section className='py-10 mt-2'>
        {/* Heading */}
        <div className='sm:3/4 lg:5/12 mx-auto px-2'>
          <h1 className='text-3xl text-center text-blue-500'>
            Download the extension
          </h1>
          <p className='text-center text-gray-400 mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iusto
            incidunt unde, animi quisquam vel pariatur perspiciatis fuga odit
            quasi eos ipsam nam ducimus sint repudiandae id debitis iste
            eligendi!
          </p>
        </div>
        {/* Card */}
        <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-lg mt-16'>
          {/* Card 1 */}
          <div className='flex flex-col rounded-md shadow-md lg:mb-16'>
            <div className='p-6 flex flex-col items-center'>
              <img src={chrome} alt='' />
              <h3 className='mt-5 mb-2 text-blue-500 text-lg'>Add to Chrome</h3>
              <p className='mb-2 text-gray-400 font-light'>Minimum version 2</p>
            </div>
            <hr className='border-b border-white' />
            <div className='flex p-6'>
              {' '}
              <button
                type='button'
                className=' flex-1 bg-purple text-white shadow-md py-3 px-6 rounded-md transition duration-300
                 hover:bg-white hover:text-black'
              >
                Add & Install Extension
              </button>
            </div>
          </div>
          {/* Card 2 */}
          <div className='flex flex-col rounded-md shadow-md lg:my-8'>
            <div className='p-6 flex flex-col items-center'>
              <img src={firefox} alt='' />
              <h3 className='mt-5 mb-2 text-blue-500 text-lg'>
                Add to Firefox
              </h3>
              <p className='mb-2 text-gray-400 font-light'>Minimum version 2</p>
            </div>
            <hr className='border-b border-white' />
            <div className='flex p-6'>
              {' '}
              <button
                type='button'
                className=' flex-1 bg-purple text-white shadow-md py-3 px-6 rounded-md transition duration-300
                 hover:bg-white hover:text-black'
              >
                Add & Install Extension
              </button>
            </div>
          </div>
          {/* Card 3 */}
          <div className='flex flex-col rounded-md shadow-md lg:mt-16'>
            <div className='p-6 flex flex-col items-center'>
              <img src={opera} alt='' />
              <h3 className='mt-5 mb-2 text-blue-500 text-lg'>Add to Opera</h3>
              <p className='mb-2 text-gray-400 font-light'>Minimum version 2</p>
            </div>
            <hr className='border-b border-white' />
            <div className='flex p-6'>
              {' '}
              <button
                type='button'
                className=' flex-1 bg-purple text-white shadow-md py-3 px-6 rounded-md transition duration-300
                 hover:bg-white hover:text-black'
              >
                Add & Install Extension
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='bg-slate-50 py-20'>
        <div className='container'>
          {/* Heading */}
          <div className='sm:3/4 lg:5/12 mx-auto px-2'>
            <h1 className='text-3xl text-center text-blue-500'>
              Frequently And Questions
            </h1>
            <p className='text-center text-gray-400 mt-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              iusto incidunt unde, animi quisquam vel pariatur perspiciatis fuga
              odit quasi eos ipsam nam ducimus sint repudiandae id debitis iste
              eligendi!
            </p>
          </div>
          {/* FAQ Items */}
          <div className='flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto'>
            <div className='flex items-center border-b py-4'>
              <span className='flex-1'>What is Bookmark?</span>
              <i className=' text-blue-500 fa-solid fa-chevron-down cursor-pointer'></i>
            </div>
            <div className='flex items-center border-b py-4'>
              <span className='flex-1'>How can I request new browser?</span>
              <i className=' text-blue-500 fa-solid fa-chevron-down cursor-pointer'></i>
            </div>
            <div className='flex items-center border-b py-4'>
              <span className='flex-1'>Is there a mobile app?</span>
              <i className=' text-blue-500 fa-solid fa-chevron-down cursor-pointer'></i>
            </div>
            <div className='flex items-center border-b py-4'>
              <span className='flex-1'>What about other chromium browser?</span>
              <i className=' text-blue-500 fa-solid fa-chevron-down cursor-pointer'></i>
            </div>
            <button
              type='button'
              className='flex self-center bg-purple text-white shadow-md mt-5 py-3 px-6 rounded-md transition duration-300
                 hover:bg-white hover:text-black'
            >
              More Info
            </button>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className='bg-blue-500 text-white py-20'>
        <div className='container'>
          <div className='sm:w-3/4 lg:w-2/4 mx-auto'>
            <p className='font-light uppercase text-center mb-8'>
              35,000+ ALREADY JOINED
            </p>
            <h1 className='text-2xl text-center'>
              Stay up-to-date about what we are doing
            </h1>
            <div className='flex flex-col sm:flex-row gap-6 mt-8'>
              <input
                type='text'
                placeholder='Enter your email address'
                className='focus:outline-none flex-1 px-2 py-3 rounded-md text-black'
              />
              <button
                type='button'
                className='flex self-center bg-red-500 text-white shadow-md   py-3 px-6 rounded-md transition duration-300
                 hover:bg-white hover:text-black'
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className='bg-blue-900 py-8'>
        <div className='container flex flex-col md:flex-row items-center'>
          <div className='flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12'>
            <div className='py-1 flex  items-center gap-1 text-white uppercase'>
              <img src={logo} alt='' />
              Book<span className='text-md font-bold'>µ</span>ark
            </div>
            <ul className='flex flex-1 text-white uppercase gap-12 text-xs'>
              <li className='cursor-pointer'>Features</li>
              <li className='cursor-pointer'>Pricing</li>
              <li className='cursor-pointer'>Contact</li>
            </ul>
          </div>
          <ul className='flex gap-10 mt-12 md:mt-0'>
            <li>
              <i className=' text-white text-2xl fa-brands fa-twitter'></i>
            </li>
            <li>
              <i className='text-white text-2xl fa-brands fa-square-facebook'></i>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Header
