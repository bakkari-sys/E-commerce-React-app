import React from 'react'
import './homepage.style.scss'
import { HomePageContainer } from "./homepage.style"
import Directory from '../../components/directory/directory.component'

const Home = () => {
    return(
    <HomePageContainer>
       <Directory  />
    </HomePageContainer>
    )
}
export default Home