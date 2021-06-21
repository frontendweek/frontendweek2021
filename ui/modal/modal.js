import t from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'

export const Modal = ({ children, isOpen, handleClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Wrapper
          initial={{ opacity: 0, y: '100%' }}
          transition={{ type: 'spring', duration: 0.6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
        >
          <CloseButton onClick={handleClose}>×</CloseButton>
          <ContentContainer>
            {children}
          </ContentContainer>
        </Wrapper>
      )}
    </AnimatePresence>
  )
}

Modal.propTypes = {
  children: t.oneOfType([
    t.arrayOf(t.node),
    t.node,
  ]).isRequired,
  isOpen: t.bool,
  handleClose: t.func,
}

const Wrapper = styled(motion.div)`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  -webkit-overflow-scrolling: touch;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`

const ContentContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-height: 100vh;
  overflow: auto;
  height: 100%;
  padding-left: calc(50% - 350px);
  padding-right: calc(50% - 350px);
  padding-top: 4em;
  padding-bottom: 4em;
  -webkit-overflow-scrolling: touch;
`

const CloseButton = styled.button`
  appearance: none;
  border: none;
  background-color: transparent;
  position: absolute;
  right: 30px;
  top: 10px;
  font-size: 6rem;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  z-index: 10;
`
