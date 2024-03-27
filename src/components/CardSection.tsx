const CardSection = () => {
  return (
    <section className='grid p-8 gap-8 sm:max-xl:bg-blue-50 sm:max-xl:p-2  md:grid-cols-2 md:items-center md:text-left'>
      <div className='aspect-auto:16/9 '>
        <img
          src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
          alt=''
          className='w-full rounded-lg'
        />
      </div>
      <div>
        <h1 className='mb-2 text-4xl font-medium'>Headline</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          repellendus maxime id obcaecati assumenda numquam voluptatem odio
          officia consequuntur quasi quo quidem ipsum, non eveniet! Qui non
          harum quae est!
        </p>
      </div>
    </section>
  )
}

export default CardSection
