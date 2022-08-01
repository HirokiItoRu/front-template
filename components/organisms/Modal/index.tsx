import React, { ReactNode } from 'react'
import Button from '@/components/atoms/Button'

export type ModalProps = {
  children: ReactNode
  isOpen?: boolean
  close: () => void
  style?: 'Default' | 'Primary'
}

/*
 * 使用コンポーネントCard, Button
 */
const Modal = (modal: ModalProps) => {

  const defaultStyle = 'bg-gray-200 hover:bg-gray-100 text-white rounded px-4 py-2'
  const primaryStyle = 'bg-red-200 hover:bg-red-100 text-white rounded px-4 py-2'

  return (
    <>
    {
      modal.isOpen ?
        <div className="p-modal" id="modal">
          <section className="p-modal__dialog">
            <header className="p-modal__header">
              <h2 className="p-modal__title" id="modal-title">Header</h2>
              <Button onClick={modal.close}>x</Button>
            </header>
            <p id="modal-description">Learn how to operate production-ready clusters.</p>
            <div className="p-heading-icon--small">
              <div className="p-heading-icon__header">
                <p><a className="p-heading-icon__title" href="https://www.indetail.co.jp/blog/10234/">新しいデザインシステムの手法 Atomic Designとは</a></p>
              </div>
              <div className="p-heading-icon__header">
                <p><a className="p-heading-icon__title" href="https://qiita.com/RinuxJapan69/items/46c610086383a604c142">【初学者向け】WAI-ARIAを使ってモーダルウィンドウを作る</a></p>
              </div>
            </div>
            { modal.children }
            <footer className="p-modal__footer">
              <h2 className="p-modal__title" id="modal-title">Footer</h2>
              <Button onClick={modal.close}>Close</Button>
            </footer>
          </section>
        </div>
      :
      ''
    }
    </>
  )
}

export default Modal;