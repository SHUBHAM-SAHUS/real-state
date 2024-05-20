// components/SkeletonCard.js
import Skeleton from 'react-loading-skeleton'

const TopBlogSkeleton = () => {
  return (
    <div
      style={{
        padding: '1rem',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        maxWidth: '400px',
        margin: '1rem auto',
      }}
    >
      <Skeleton height={200} style={{ borderRadius: '8px' }} />
      <div style={{ padding: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <Skeleton width={50} />
          <Skeleton width={50} />
          <Skeleton width={50} />
        </div>
        <Skeleton height={20} style={{ marginBottom: '0.5rem' }} />
        <Skeleton count={3} />
      </div>
    </div>
  )
}

export default TopBlogSkeleton
