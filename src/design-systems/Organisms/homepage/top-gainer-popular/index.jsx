/* eslint-disable react/jsx-key */
import React from 'react'
import style from './style.module.scss'
import PopulatGainercards from '../../Cards/PopularGainerCrads'
import Table from 'react-bootstrap/Table'

const TopPopularGainer = ({ topGainersData,isLoading }) => {
  const datacards = Array.from({ length: 3 }, (_, index) => index + 1)

  return (
    <>
     <div className={style.section_padding}> 
        <div className="container">
          <div className={style.top_gainer_container}>
            <h1 className={style.top_gainer_head}>
              <span className={style.top}>Top</span>
              <span className={style.gainer}> Gainers</span>
            </h1>
            <div className={style.searchPlacesHire}>Search Places Hire to our most popular destinations</div>
          </div>

          <div className={style.top_gainer_bg}>
          <div className={style.table_container}>
            <Table>
              {/* if border require then we will give table border property here */}
              <thead>
                <tr>
                  <th>Locality</th>
                  <th>Rate on Indonesia Estate</th>
                  <th>Rental Yard</th>
                  <th>Price Trends</th>
                </tr>
              </thead>
              <tbody>
                {topGainersData?.map(item => (
                  <PopulatGainercards data={item} key={item.id} />
                ))}
              </tbody>
            </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopPopularGainer
