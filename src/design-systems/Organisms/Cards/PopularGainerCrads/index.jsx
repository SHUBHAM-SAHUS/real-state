import React from 'react'
import Image from '@/design-systems/Atoms/Image';
import style from './style.module.scss';

const PopulatGainercards = ({ data }) => {

  return (
    <>
      <tr>
        <td>
          <div className={style.cardItem}>
            <Image
              src={data.images||''}
              alt="img"
              className={style.about_img_01}
              height={56}
              width={64}
              style={{ marginRight: '10px', objectFit: 'cover', borderRadius: '4px' }}
            />
          
            <div>
              <h6>Locality</h6>
              <p className={style.table_sub_heading}>{data.city}</p>
            </div>
          </div>
        </td>

        <td>
          <h6 className={style.table_sub_heading}>Rate on Indonesia Estate</h6>
          <p>{data.price}</p>
        </td>
        <td>
          <h6 className={style.table_sub_heading}>Rental Yard</h6>
          <p>{data.rental}</p>
        </td>
        <td>
          <div className={style.price_trend}>
            <p> {data.price_trend}YOY</p>
          </div>
        </td>
      </tr>
    </>
  )
}

export default PopulatGainercards
