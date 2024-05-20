import NextImage from 'next/image'
import Skeleton from '../Skeleton'

const Image = ({
  width,
  height,
  className = '',
  alt,
  src,
  isLoading = false,
  onClick,
  style,
  ImageclassName = '',
  imageLoading = true,
  loadingClassName,
  layout = 'responsive', // Default layout
  objectFit = 'cover', // Default objectFit
}) => {
  const classNames = [`relative flex h-full w-full justify-center`, className].join(' ')

  return (
    <div className="h-full w-full">
      {src !== 'null' ? (
        <div className="flex h-full w-full items-center justify-center">
          {isLoading ? (
            <div className="h-full w-full">
              <Skeleton isAnimatePulse />
            </div>
          ) : (
            <div className={classNames}>
              {layout === 'fill' ? (
                <NextImage
                  alt={alt}
                  className={ImageclassName}
                  layout={layout}
                  src={typeof src === 'string' && src.includes('http') ? src : typeof src === 'object' ? src : ''}
                  style={style}
                  onClick={onClick}
                  draggable="false"
                  objectFit={objectFit}
                  quality={100}
                />
              ) : (
                <NextImage
                  alt={alt}
                  className={ImageclassName}
                  height={height}
                  width={width}
                  src={typeof src === 'string' && src.includes('http') ? src : typeof src === 'object' ? src : ''}
                  style={style}
                  onClick={onClick}
                  draggable="false"
                  objectFit={objectFit}
                  quality={100}
                />
              )}
            </div>
          )}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Image
