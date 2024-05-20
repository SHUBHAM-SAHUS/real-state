'use client'
import Image from '@/design-systems/Atoms/Image'
import style from './about.module.scss'
import { useRouter } from 'next/navigation'
import { sliceString } from '@/utils/string.utils'

const AboutUsComponent = ({ aboutUsData, isLoading }) => {
  const router = useRouter()
  const handleClick = () => {}

  return (
    <div className="container my-5">
      <div className={style.about_us_container}>
        <h1 className={style.about_us_head}>
          <span className={style.about}>About</span>
          <span className={style.us}> Us</span>
        </h1>

        <div className={style.searchPlacesHire}>Search Places Hire to our most popular destinations</div>
      </div>
      <div className={`row ${style.row}`}>
        <div
          className="col-lg-7 col-md-7 text-center text-md-start"
          style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}
        >
          <div className={style.imageWrapper}>
            <Image
              src={aboutUsData?.images.image1}
              alt="img"
              className={style.about_img_01}
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: '16px' }}
              isLoading={isLoading}
            />
          </div>

          <div className={style.imageWrapper}>
            <Image
              src={aboutUsData?.images.image2}
              alt="img"
              className={style.about_img_02}
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: '16px' }}
              isLoading={isLoading}
            />
          </div>
        </div>

        <div className="col-lg-5 col-md-5 d-flex align-items-center">
          <div className={style.about_us_content}>
            <h2>{aboutUsData?.title}</h2>
            <p>{sliceString(aboutUsData?.description, 500)}</p>
            <button className={style.know_more_btn}>Know More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsComponent
