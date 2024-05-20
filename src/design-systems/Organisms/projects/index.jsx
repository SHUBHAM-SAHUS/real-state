/* eslint-disable react/jsx-key */
// 'use client'
import { projectsInHighDemandData } from '@/utils/dummyData'
import style from './style.module.scss'
import Link from 'next/link'
import ProjectCard from '../../Molecules/Cards/ProjectCard'
import RightArrow from '../../../assets/images/icons/project_right_arrow.svg'
import Image from '@/design-systems/Atoms/Image';
import { FaArrowRightLong } from "react-icons/fa6";

const Projects = ({ data, isLoading }) => {
  return (
    <div className={style.section_padding}>
      <div className={style['projects_wrp']}>
        <div className="container">
          <div className={style.project_demand_head}>
            <h1 className={style.upcomingProjects}>
              <span className={style.project_head}>Projects in </span>
              <span className={style.projects}> High Demand</span>
            </h1>
            <div className={style.searchPlacesHire}>Search Places Hire to our most popular destinations</div>
          </div>
        
          {/* <div className={style['project_list']}> */}
            <div className='row'>
            {data?.map((item, index) => (
         
            <div className='col-lg-4 col-md-4 col-sm-6' key={item.id}>
                <ProjectCard
                  key={item.id}
                  name={item.name}
                  type={item.type}
                  subtitle={item.subtype}
                  imageSrc={item.images}
                  rating={item.rating}
                  ratedBy={item.rating}
                  price={item.price}
                  subtype={item.subtype}
                />
                </div>
      
            ))}
            </div>
          {/* </div> */}
       

          <Link href="/demanded" className={style['See_more']}>
            See more <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Projects;
