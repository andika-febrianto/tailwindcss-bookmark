import './App.css'
import Card from './components/Card'
import CardSection from './components/CardSection'
import Header from './components/Header'
import Layout from './layout/Layout'
import People from './questions/People'
import Question_1 from './questions/Question_1'
import Question_2 from './questions/Question_2'

function App() {
  return (
    <div className='font-Poppins'>
      <Layout>
        {/* <div className='md:flex md:gap-5 gap-6'>
          <Card />
          <Card />
        </div> */}
        {/* <CardSection /> */}
        {/* <People /> */}
        {/* <Question_1 />
        <Question_2 /> */}

        <Header />
      </Layout>
    </div>
  )
}

export default App
