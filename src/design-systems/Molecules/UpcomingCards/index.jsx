'use client'
import React from 'react'
import style from './style.module.scss'
import { useRouter } from 'next/navigation'
import UpcomingCardImg from '@/assets/images/UpcomingCardImg.png'
import Image from '@/design-systems/Atoms/Image'

const UpcomingCards = ({ description, title, imageSrc, height, width, id, key }) => {
  const router = useRouter()

  return (
    <div className={style.upcomingCards} style={{ height: `${384}px`, width: `${624}px` }} key={key}>
      <div className={style.backgroundImage}>
        <Image src={imageSrc} alt="Background Image" width={624} height={384} />
      </div>
      <div className={style.upcomingCardContent}>
        <h4>{title}</h4>
        <p>{description}</p>
        <button className={style.know_more_btn} onClick={() => router.push(`/upcomingProject/${id}`)}>
          Know More
        </button>
      </div>
    </div>
  )
}

export default UpcomingCards
