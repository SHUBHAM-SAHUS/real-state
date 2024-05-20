import React, { useCallback, useEffect, useMemo, useState } from 'react'
import axios from 'axios' // Ensure axios is imported
import Link from 'next/link'
import { projectsInHighDemandData } from '@/utils/dummyData'
import style from './style.module.scss'
import CardCarousel from '@/design-systems/Molecules/Carousel'
import AppartmaetCard from '@/design-systems/Molecules/Cards/AppartmentCard'

const AppartmentVilas = ({ apartmentdata, isLoading }) => {
  const ApartmentCards = useCallback(
    (isLoading, data) => {
      if (isLoading) {
        // return Array(6).fill(<HighLightedCardSkeleton />); // Uncomment and implement the skeleton loading component if needed
      }

 

      if (!data || !Array.isArray(data) || data.length === 0) {
        return <p>No data available</p>
      }

      return data.map(product => (
        <Link href={`/properties/${product.id}`} key={product.id}>
          <AppartmaetCard
            title={`${product.type} || ${product.subtype}`}
            description={`${product.count} + Properties`}
            imageSrc={product?.images || ''}
            key={product?.id}
          />
        </Link>
      ))
    },
    []
  )

  const ApartmentElement = useMemo(() => {
    return ApartmentCards(isLoading, apartmentdata)
  }, [isLoading, apartmentdata])

  return (
    <div className={style['section_wrp']}>
      <div className="container">
        <div className="Section_Head">
          <h1 className="section_Title">
            <span>Apartment, Vilas</span> 
            <span> and More </span>
          </h1>
          <p className="section_description">Find and book a great experience.</p>
        </div>

        <div>
          <CardCarousel
           cols={3}
           elements={Array.isArray(ApartmentElement) ? ApartmentElement : []} // Ensure elements is an array
           landscapeCols={2}
           mobileCols={1}
           slidesToSlide={1}
           smallMobileCols={2}
           smallTabletCols={3}
           tabletCols={2}
          />
        </div>
      </div>
    </div>
  )
}

export default AppartmentVilas
