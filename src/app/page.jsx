'use client'
import Spinner from '@/design-systems/Atoms/Spinner'
// import HomePageTemplate from '@/design-systems/Templates/HomePageTemplate'
import dynamic from 'next/dynamic'
const HomePageTemplate = dynamic(() => import('@/design-systems/Templates/HomePageTemplate'), {
  // loading: () => <Spinner/>,
  ssr: false, // Disable server-side rendering for this component if not needed
})

export default function Home() {
  return (
    <>
      <HomePageTemplate />
    </>
  )
}
