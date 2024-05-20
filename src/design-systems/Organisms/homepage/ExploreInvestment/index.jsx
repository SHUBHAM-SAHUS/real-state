import ControlledCarousel from '@/design-systems/Molecules/ControlledCarousel/ControlledCarousel'
import styles from './exploreinvest.module.scss'
import bgImage from '../../../../assets/images/frame-48096361@3x.png'
import Image from '@/design-systems/Atoms/Image'

const ExploreInvestment = ({ dataItem = [], isLoading }) => {
  const item = dataItem[0] || {} // Default to an empty object if dataItem is empty

  return (
    <div className={styles.section_padding}>
      <div className={styles.exploreInvestmentArea}>
        <Image
          src={item.image || bgImage}
          alt="Investment Area Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          isLoading={isLoading}
        />
        <div className={styles.overlay}>
          <section className="container my-5">
            <div className="row">
              <div className="col-lg-8 col-md-10 col-sm-10 mb-3">
                <div className={styles.investmentHeadings}>
                  <h4>{item.title || 'Default Title'}</h4>
                  <h6>{item.content || 'Default content to display when no content is provided.'}</h6>
                </div>
              </div>
              <div className={styles.see_project}>
                <button className="btn btn-primary px-4">See Projects</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ExploreInvestment
