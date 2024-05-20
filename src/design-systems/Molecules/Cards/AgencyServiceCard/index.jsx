import React, { memo } from 'react'
import style from './style.module.scss'
import Image from '@/design-systems/Atoms/Image'
import Home from '../../../../assets/images/Home.png'

const AgencyServicesCard = () => {
  return (
    <>
      <div>
        <div className={style.agency_cards}>
          <div>
            <Image src={Home} alt="img" className={style.agency_img} />
          </div>

          <h3 className={style.agency_card_heading}>Sales of Villa and Land</h3>
          <p className={style.agency_content}>
            Offer investment strategies tailored to the needs of different types of investors, such as those looking for
            rental income, longt-term appreciation.
          </p>
        </div>
      </div>
    </>
  )
}

export default AgencyServicesCard
