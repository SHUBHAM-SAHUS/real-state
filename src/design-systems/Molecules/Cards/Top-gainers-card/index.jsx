 'use client'
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import style from './style.module.scss'
import cardImg01 from '../../../../assets/images/cardImg01.png'
import { Card } from 'react-bootstrap'
import { sliceString } from '@/utils/string.utils';
import { LuTag } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Image = React.lazy(() => import('@/design-systems/Atoms/Image'))

const TopBlogCard = ({Item}) => {
  return (
    <div>
      <Card className={style.card}>

      <div className={style.cardImgContainer}>  
        <Image 
          src={Item?.image}
          alt="img"
          height={324}
          width={407}
          className={style.cardImgContainer}
          // style={{ width: '100%', height: '200px', objectFit: 'cover' }}
        />
   </div>

 <Card.Body className={style['card-body']}>
          <div className={style.card_tags}>
            <p><LuTag /> Flats</p>
            <p><FaRegUser /> By Admin</p>
            <p><FaRegCommentAlt /> Comments</p>
          </div>

          <Card.Text>
          
            <p className={style.card_text}>{sliceString(Item?.content,100)}</p>
          </Card.Text>
          <p className={style.read_more}>Read More <FaArrowRight /></p>
        </Card.Body>
      </Card>
    </div>
  )
}

export default TopBlogCard
