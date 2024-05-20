 'use client'
 import React from 'react';
 import Image from '@/design-systems/Atoms/Image';
 import Card from 'react-bootstrap/Card';
 import { Rating } from 'react-simple-star-rating';
 import style from './style.module.scss';
 
 const ProjectCard = ({ imageSrc, subtitle, type, name, description, price, rating, ratedBy, subtype,key }) => {
   return (
     <div className={style.projectCard} key={key}>
       <Card className={style.card}>
         <div className={style.cardImgContainer}>
           <Image
             src={imageSrc}
             alt="img"
             width={408}
             height={300}
             className={style.cardImg}
           />
         </div>
         <Card.Body className={style.cardBody}>
           <div className={style.cardTags}>
             <p className={style.subheading}>{type}</p>
             <p className={style.heading}>{subtype}</p>
           </div>
           <Card.Text>
             <p className={style.cardText}>{description}</p>
           </Card.Text>
           <div className={style.cardRating}>
             <p>{price}</p>
             <Rating initialValue={rating} readonly size={16} />
             {/* Uncomment if needed: {ratedBy && <div className={style.ratedBy}>{ratedBy}</div>} */}
           </div>
         </Card.Body>
       </Card>
     </div>
   );
 };
 
 export default ProjectCard;
 