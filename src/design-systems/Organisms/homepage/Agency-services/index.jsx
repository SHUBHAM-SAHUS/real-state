 'use client'
/* eslint-disable react/jsx-key */
import React, { memo } from 'react'
import style from './style.module.scss'
import AgencyServicesCard from '../../../Molecules/Cards/AgencyServiceCard'
import VideoComponent from '@/design-systems/Atoms/video'
import VideoPlayer from '@/design-systems/Atoms/video'

const AgencyServices = () => {
  const datacards = Array.from({ length: 3 }, (_, index) => index + 1)

  return (
    <>
    <div className={style.section_padding}> 
      <div className="container">
        <div className={style.our_agency_container}>
          <h1 className={style.our_agency_head}>
            <span className={style.agency}>Our Agency</span>
            <span className={style.services}> Services</span>
          </h1>
          <div className={style.searchPlacesHire}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u.
          </div>
        </div>


        <div className="row">
          {datacards.map(item => (
            <div className="col-lg-4 col-md-4 col-sm-6">
              <AgencyServicesCard />
            </div>
          ))}
        </div>

        
        <div className="section-padding">
          <VideoPlayer
            videoSrc="https://cdn.pixabay.com/video/2020/06/13/41957-431407067_large.mp4"
            poster="https://cdn.pixabay.com/photo/2021/10/27/13/15/digital-graphicscat-6747298_1280.jpg"
          />
        </div>
      </div>
      </div>
    </>
  )
}

export default memo(AgencyServices)
