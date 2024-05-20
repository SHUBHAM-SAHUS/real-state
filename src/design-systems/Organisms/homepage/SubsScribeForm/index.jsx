import React, { memo } from 'react';
import style from "./style.module.scss";

const SubsCribeForm = () => {
  return (
    <div>
      <section className={style.section_padding}>
      <div className={style.subscribeArea}>
    <h2 className={style.subscribe_head}>Subscribe to Learn</h2>
    <p className={style.subscribe_subhead} >For more information on our products and services, feel free to contact us</p>

    <div className={style.email_card}>
<p className={style.email_head}>Email</p>
<input className={style.email_input} type='email' placeholder='Enter your email'></input>
<div className={style.subscribe_btn_container}>
<button className={style.subscribe_btn}>Subscribe</button>
</div>
    </div>
      </div>
      </section>
      </div>
  )
}

export default memo(SubsCribeForm)
