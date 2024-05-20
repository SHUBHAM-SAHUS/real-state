import Image from '@/design-systems/Atoms/Image'
import style from './style.module.scss'
import { FaArrowRightLong } from 'react-icons/fa6'

const AppartmaetCard = ({ imageSrc, title, description }) => {
  return (
    <div className={style.card_wrp}>
      <div className={style.imageContainer}>
        <Image src={imageSrc} layout="fill" objectFit="cover" alt="img" />
      </div>
      <div className={style.card_dtl}>
        <div className="w-100">
          <div className={style.title}>{title}</div>
          <div className={style.description}>{description}</div>
        </div>
        <FaArrowRightLong className={style.rightArrow} />
      </div>
    </div>
  )
}
export default AppartmaetCard
