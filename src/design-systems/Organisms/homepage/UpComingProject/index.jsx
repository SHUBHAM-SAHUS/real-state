/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import { projectData, projectsInHighDemandData } from '@/utils/dummyData'
import styles from './upcoming.module.scss'
import UpcomingCards from '../../../Molecules/UpcomingCards'
import { memo, useCallback, useMemo } from 'react'
import CardCarousel from '@/design-systems/Molecules/Carousel'

const UpcomingProject = ({ dataItem, isLoading }) => {
  const UpcomingCard = useCallback((isLoading, data) => {
    if (isLoading) {
      // return Array(6).fill(<HighLightedCardSkeleton />)
      return <p>Loading...</p>
    }

    if (!data || !Array.isArray(data) || data.length === 0) {
      return <p>No data available</p>
    }

    return data.map((product, idx) => (
      <UpcomingCards
        key={product?.id}
        title={product?.name}
        description={product.description}
        imageSrc={product?.image || ''}
      />
    ))
  }, [])

  const UpcomingElement = useMemo(() => {
    return UpcomingCard(isLoading, dataItem)
  }, [dataItem, isLoading])

  return (
    <div className={styles.section_padding}>
      <section className={styles.logicGateInner}>
        <div className={styles.frameParent}>
          <div className={styles.upcomingProjectsParent}>
            <h1 className={styles.upcomingProjects}>
              <span className={styles.upcoming}>Upcoming</span>
              <span className={styles.projects}> Projects</span>
            </h1>
            <div className={styles.searchPlacesHire}>Search Places Hire to our most popular destinations</div>
          </div>
          <div className={styles.frameGroup}>
            <div className="container">
              <div className="row">
                <CardCarousel
                  cols={2}
                  elements={Array.isArray(UpcomingElement) ? UpcomingElement : []}
                  landscapeCols={2}
                  mobileCols={1}
                  slidesToSlide={1}
                  smallMobileCols={1}
                  smallTabletCols={1}
                  tabletCols={1}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default memo(UpcomingProject)
