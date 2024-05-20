/* eslint-disable react/jsx-key */
'use client'
import React from 'react';
import Image from '@/design-systems/Atoms/Image'
import style from './style.module.scss'
import bannerImage from '../../../assets/images/banner-back.png'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { Form } from 'react-bootstrap'
import { useCallback, useMemo, useState } from 'react'
import downArrowIcon from '../../../assets/images/down-arrow.svg'
import SearchIcon from '../../../assets/images/Search.svg'
import Input from '@/design-systems/Atoms/Input'
import InputGroup from 'react-bootstrap/InputGroup'
import Checkbox from '@/design-systems/Atoms/checkbox'
import Button from '@/design-systems/Atoms/Button'
// import CardCarousel from '@/design-systems/Molecules/Carousel';
import { bannerSlider } from '@/utils/dummyData';
import ControlledCarousel from "../../Molecules/ControlledCarousel/ControlledCarousel"; 

const TabContent = ({ showFilter, setShowFilter }) => {
  return (
    <div className={style['searchbox_content']}>
      <Button type="button" className={style['select']} onClick={() => setShowFilter(!showFilter)}>
        All Residential <Image src={downArrowIcon} alt="down" className={showFilter && style['rotate']} />
      </Button>
      <Form className={style['form_wrp']}>
        <InputGroup>
          <Image src={SearchIcon} alt="search" width={24} height={24} />
          <Form.Control placeholder="search flats and Plots..." aria-label="Search" aria-describedby="Search" />
        </InputGroup>
        <Button variant="primary" type="submit" className={style['search_btn']}>
          Search
        </Button>
      </Form>
    </div>
  )
}

const Banner = ({ bannerSliderdata, isLoading }) => {
  const [showFilter, setShowFilter] = useState(false)

  const handleTabSelect = selectedTab => {
    setActiveTab(selectedTab)
  }

 

  return (
    <>
      <div className={` ${style['banner_wrp']} banner_wrp`}>
        {/* ----- Single Image Carousel ------ */}
        <ControlledCarousel data={bannerSliderdata} />

{/* --------------- Banner Search Box ------------------- */}
        <div className={style['search_box_wrp']}>
          <div className={`${style['search_box']} search_box`}>
            <Tabs id="uncontrolled-tab-example" className={style['tab_wrp']}>
              <Tab eventKey="Buy" title="Buy">
                <TabContent setShowFilter={setShowFilter} showFilter={showFilter} />
              </Tab>
              <Tab eventKey="Rent" title="Rent">
                <TabContent setShowFilter={setShowFilter} showFilter={showFilter} />
              </Tab>
              <Tab eventKey="NewLaunch" title="New Launch">
                <TabContent setShowFilter={setShowFilter} showFilter={showFilter} />
              </Tab>
              <Tab eventKey="commercial" title="Commercial">
                <TabContent setShowFilter={setShowFilter} showFilter={showFilter} />
              </Tab>
              <Tab eventKey="PlotsLand" title="Plots / Land">
                <TabContent setShowFilter={setShowFilter} showFilter={showFilter} />
              </Tab>
              <Tab eventKey="Projects" title="Projects">
                <TabContent setShowFilter={setShowFilter} showFilter={showFilter} />
              </Tab>
            </Tabs>
          </div>


          {showFilter && (
            <div className={style['filter_wrp']}>
              <div className="text-end">
                {' '}
                <Button>Clear</Button>
              </div>
              <div className={style['filter_list']}>
                <Checkbox label="option1" id="option1" />
                <Checkbox label="option2" id="option2" />
                <Checkbox label="option3" id="option3" />
                <Checkbox label="option4" id="option4" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
export default Banner;
