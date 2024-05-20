'use client'
/* eslint-disable jsx-a11y/alt-text */
import Image from '@/design-systems/Atoms/Image'
import style from './style.module.scss'
import { useRouter } from 'next/navigation'
import { redirect } from 'next/navigation';
import { FaArrowRightLong } from "react-icons/fa6";

const CityCard = ({ imageSrc, title, noOfHotels, TypeOfHotel }) => {
  const router = useRouter()

  return (
    <div className={style['city_card_wrp']}>
  <Image src={imageSrc} height={80} width={90}
   style={{borderRadius:"8px"}} className={style.popularCityImg}
    alt="image" />
      <div className={style['detail']}>
        <h4>{title}</h4>
        <div className={style['details_inner']}>
          {noOfHotels && <div>{noOfHotels}</div>}
          {TypeOfHotel && (
            <>
              <span className={style['dot']}></span>
              <div>All Kind of Hotels <FaArrowRightLong /></div>
            </>
          )}

          
        </div>
      </div>
    </div>
  )
}
export default CityCard
