'use client'
import { useEffect, useState } from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Layout from '../Layout'
import style from './style.module.scss'
import CustomModal from '../../Molecules/CustomModal'
import LoginModal from '../Auth/LoginForm'
import CreateAccount from '../Auth/SignupForm'
import VarifyYourNumber from '../Auth/VerifyOtp'
import Banner from '@/design-systems/Organisms/banner'
import Projects from '@/design-systems/Organisms/projects'
import ExploreInvestment from '@/design-systems/Organisms/homepage/ExploreInvestment'
import UpcomingProject from '@/design-systems/Organisms/homepage/UpComingProject'
import AboutUsComponent from '@/design-systems/Organisms/homepage/AboutUs/About'
import SubsScribeForm from '@/design-systems/Organisms/homepage/SubsScribeForm'
import TopGainers from '@/design-systems/Organisms/homepage/Top-Gainers'
import AgencyServices from '@/design-systems/Organisms/homepage/Agency-services'
import TopPopularGainer from '@/design-systems/Organisms/homepage/top-gainer-popular'
import AppartmentVilas from '@/design-systems/Organisms/AappartmentVilas'
import PopularCities from '@/design-systems/Organisms/popularCities'
import { useDispatch, useSelector } from 'react-redux'
import { setSignupModal, setVerifyModal } from '@/Redux-services/AuthSlice'
import NoFirstRender from '@/design-systems/Atoms/NoFirstRender'
import TopBlogs from '@/design-systems/Organisms/homepage/Top-Gainers'
import useAuthServices from '@/Hooks/Api/useAuthServices'
import axios from 'axios'
import useHomePage from '@/Hooks/Api/useHomePage'

const HomePageTemplate = () => {
  const {
    blogList,
    blogLoading,
    propertyHighDemandList,
    highDemandLoading,
    propertyTypesList,
    propertyTypesLoading,
    aboutList,
    aboutLoading,
    investmentList,
    investmentLoading,
    propertyCityList,
    propertyCityLoading,
    upcomingList,
    upcomingLoading,
    topGainerList,
    topGainerLoading,
    bannerList,
    bannerLoading,
  } = useHomePage()

  return (
    <>
      <Banner bannerSliderdata={bannerList?.data} isLoading={bannerLoading} />
      <PopularCities popularCity={propertyCityList?.data} isLoading={propertyCityLoading} />
      <AppartmentVilas apartmentdata={propertyTypesList?.data} isLoading={propertyTypesLoading} />
      <Projects data={propertyHighDemandList?.data} isLoading={highDemandLoading} />
      <ExploreInvestment dataItem={investmentList?.data} isLoading={investmentLoading} />
      <UpcomingProject dataItem={upcomingList?.data} isLoading={upcomingLoading} />
      <TopPopularGainer topGainersData={topGainerList?.data} isLoading={topGainerLoading} />
      <AboutUsComponent aboutUsData={aboutList?.data} isLoading={aboutLoading} />
      <AgencyServices />

      <TopBlogs blogList={blogList?.data} isLoading={blogLoading} />
    </>
  )
}

export default HomePageTemplate
