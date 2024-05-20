import style from './style.module.scss'

const Skeleton = ({ children, className, isAnimatePulse, width, height }) => {
  return (
    <div
      role="status"
      className={` ${style['Skeleton_wrp']} ${isAnimatePulse ? style['animate-pulse'] : ''} ${className}  `}
      style={{ width: width ? width : '100%', height: height ? height : '100%' }}
    >
      {children}
    </div>
  )
}

export default Skeleton
