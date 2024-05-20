import React, { useState } from 'react'
import { Modal } from './Modal'
export const useModal = (children, heading, jsxElement) => {
  const [opened, setOpened] = useState(false)

  const open = () => {
    setOpened(true)
  }

  const close = () => {
    setOpened(false)
  }

  const Custom = () => (
    <Modal heading={heading} jsxElement={jsxElement} open={opened} onClose={close}>
      {children}
    </Modal>
  )

  return { Modal: Custom, open, close }
}
