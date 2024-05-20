import { projectsInHighDemandData } from '@/utils/dummyData'
import style from './style.module.scss'
import Link from 'next/link'
import ProjectCard from '../Cards/ProjectCard'
import RightArrow from '../../../assets/images/icons/project_right_arrow.svg'
import Image from '@/design-systems/Atoms/Image'
const Projects = () => {
  return (
    <div className={style['projects_wrp']}>
      <div className="container">
        <div className="Section_Head">
          <h1 className="section_Title">
            Projects In <span>High Demand...</span>
          </h1>
          <p className="section_description">Search Places Hire to our most popular destinations</p>
        </div>
        <div className={style['project_list']}>
          {projectsInHighDemandData.map((item, index) => (
            <Link href="#" key={index}>
              <ProjectCard
                title={item.title}
                subtitle={item.subtitle}
                imageSrc={item.imageSrc}
                rating={item.rating}
                ratedBy={item.ratedBy}
                price={item.price}
              />
            </Link>
          ))}
        </div>
        <Link href="#" className={style['See_more']}>
          See more <Image src={RightArrow} alt="img" />
        </Link>
      </div>
    </div>
  )
}
export default Projects
