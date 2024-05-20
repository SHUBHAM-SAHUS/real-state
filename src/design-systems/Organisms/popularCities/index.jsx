import { CitiesData } from '@/utils/dummyData'
// import CityCard from '../../../Molecules/Cards/CityCard'
import style from './style.module.scss'
import Link from 'next/link'
import CityCard from '@/design-systems/Molecules/Cards/CityCard'
import { memo } from 'react'
const PopularCities = ({ popularCity, isLoading }) => {
  
  return (
    <div className={style['Popular_cities_wrp']}>
      <div className="container">
        <div className={style.project_title_container}>
          <h1 className={style.pageTitle}>
            <span className={style.explore_property}>Explore Properties</span>
            <span className={style.city}> in Popular Cities</span> 
          </h1>
          <p className={style.searchPlacesHire}>Find and book a great Property</p>
        </div>
        
        <div className={style['cities_list']}>
          {popularCity?.map((item, index) => (
            <Link href={`/city/${item.title}`} key={item.city}>
              <CityCard title={item.city} imageSrc={item.images||''} noOfHotels={item.count} TypeOfHotel="cdasdadas" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
export default memo(PopularCities)
