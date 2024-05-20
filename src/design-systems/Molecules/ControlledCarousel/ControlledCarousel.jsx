import React, { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image from '@/design-systems/Atoms/Image'
import bannerMainImage from '@/assets/images/bannerMainImage.png'
import styles from './style.module.scss'

function ControlledCarousel({ data }) {
  const [index, setIndex] = useState(0)
  const intervalSpeed = 5000 // Adjust this value to control the interval speed

  const handleSelect = selectedIndex => {
    setIndex(selectedIndex)
  }

  useEffect(() => {
    if (data && data.length > 1) {
      const interval = setInterval(() => {
        setIndex(prevIndex => (prevIndex === data.length - 1 ? 0 : prevIndex + 1))
      }, intervalSpeed) // Use the intervalSpeed variable here

      return () => clearInterval(interval)
    }
  }, [data, intervalSpeed])

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className={styles.carousel} interval={null}>
      {data && data.length > 0 ? (
        data.map((item, idx) => (
          <Carousel.Item key={idx} className={styles.carouselItem}>
            <div className={styles.imageContainer}>
              <Image
                src={item.image || bannerMainImage}
                alt={`Slide ${idx}`}
                layout="responsive"
                width={1440}
                height={430}
                className={styles.carouselImage}
              />
            </div>
          </Carousel.Item>
        ))
      ) : (
        <Carousel.Item className={styles.carouselItem}>
          <div className={styles.imageContainer}>
            <Image
              src={bannerMainImage}
              alt="Fallback image"
              layout="responsive"
              width={1440}
              height={430}
              className={styles.carouselImage}
            />
          </div>
        </Carousel.Item>
      )}
    </Carousel>
  )
}

export default ControlledCarousel
