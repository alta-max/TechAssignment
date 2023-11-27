import React from 'react'
import Header from './Header'
import Mycreators from './Mycreators'
import CreatorsPerformance from './CreatorsPerformance'
import CreatorPerformanceRegion from './CreatorPerformanceRegion'


const Dashboard = () => {
  return (
    <div className="col py-3" style={{ maxWidth: "83%", margin: "auto" }}>
      <Header />
      <Mycreators />
      <CreatorsPerformance />
      <br />
      <CreatorPerformanceRegion />
    </div>
  )
}

export default Dashboard