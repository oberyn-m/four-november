import { useState } from 'react'
import LandingPage from './components/LandingPage'
import GalleryPage from './components/GalleryPage'

function App() {
  const [showGallery, setShowGallery] = useState(false)

  return (
    <div className="min-h-screen">
      {!showGallery ? (
        <LandingPage onEnter={() => setShowGallery(true)} />
      ) : (
        <GalleryPage />
      )}
    </div>
  )
}

export default App
