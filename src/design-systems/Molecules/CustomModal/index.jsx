'use client'
import Modal from 'react-bootstrap/Modal'
import CrossIcon from '../../../assets/images/cross.svg'
import Image from 'next/image'
import style from './style.module.scss'
import { useEffect } from 'react'

const CustomModal = ({ show, handleClose, children }) => {

  useEffect(() => {
    show
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [show]);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      keyboard={false}
      centered
      className={style['modal_wrp']}
      dialogClassName={style['modal_dialoag']}
      contentClassName={style['modal_content']}
    >
      <Modal.Header className={style['cross_btn_wrp']} >
        <Image src={CrossIcon} width={14.4} height={14.4} onClick={handleClose} alt='Close' />
      </Modal.Header>
      <Modal.Body className={style['modal_body']} >{children}</Modal.Body>
    </Modal>
  )
}
export default CustomModal