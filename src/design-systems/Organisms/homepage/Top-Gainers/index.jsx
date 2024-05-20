'use client'
/* eslint-disable react/jsx-key */
import React, { memo } from 'react'
import TopBlogCard from '../../../Molecules/Cards/Top-gainers-card'
import style from './style.module.scss'
import Link from 'next/link'
import TopBlogSkeletonCards from '@/design-systems/Atoms/Skeletons/top-blog'

const TopBlogs = ({ blogList, isLoading }) => {
  const data = Array.from({ length: 3 }, (_, index) => index + 1)
  return (
    <>
     
      <div className={style.section_padding}>
        <div className="container">
          <div className={style.top_gainer_container}>
            <h1 className={style.top_gainer_head}>
              <span className={style.top}>Top</span>
              <span className={style.gainer}> Blogs</span>
            </h1>
            <div className={style.searchPlacesHire}>Search Places Hire to our most popular destinations</div>
          </div>


          <div className="row">
            {blogList?.map(item => (
 <div className="col-lg-4 col-md-4 col-sm-6">
                <Link href={`/blogs/${item.id}`} key={item.id}>
                  <TopBlogCard Item={item} />
                </Link>
              </div>
            ))}
          </div>


        </div>
      </div>
    </>
  )
}

export default TopBlogs
