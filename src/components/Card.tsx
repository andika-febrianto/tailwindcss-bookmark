const Card = () => {
  return (
    <div className='max-w-md mx-auto mb-5 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
      <div className='md:flex'>
        <div className='md:shrink-0'>
          <img
            src='https://images.freeimages.com/365/images/previews/a7b/jumper-mockup-psd-56444.jpg'
            alt=''
            className='h-full w-full object-cover md:h-full md:w-48'
          />
        </div>
        <div className='p-8'>
          <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
            Company retreats
          </div>
          <a
            href='#'
            className=' mt-1 leading-tight text-lg font-medium text-black hover:underline'
          >
            Incredible accommodation for your team
          </a>
          <p className='mt-2 text-slate-500'>
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just that.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
