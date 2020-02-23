import React from "react"
// import { Link } from "gatsby"

import Layout from '../components/layout/layout'
import ImageHotel from '../components/imageHotel'
import IndeXContent from '../components/indexContent'
import ListRooms from '../components/rooms'





const IndexPage = () => {



  return (
    <Layout title="Hotel Gatsby - Sus mejores vacaciones">
      <ImageHotel/> 
      <IndeXContent />
      <ListRooms/>
    </Layout>
  )
}

export default IndexPage
