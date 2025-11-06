import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Button } from './ui/button'

// Array de fotos - adicione os caminhos das suas fotos aqui
const photos = [
  '/img/foto1.jpg',
  '/img/foto2.jpg',
  '/img/foto3.jpg',
  '/img/foto4.jpg',
  '/img/foto5.jpg',
  '/img/foto6.jpg',
]

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto-play das fotos
  useEffect(() => {
    const interval = setInterval(() => {
      nextPhoto()
    }, 5000) // Muda a foto a cada 5 segundos

    return () => clearInterval(interval)
  }, [currentIndex])

  const nextPhoto = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length)
      setIsTransitioning(false)
    }, 300)
  }

  const prevPhoto = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <div className="w-full max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
      <div className="relative aspect-[4/3] bg-white/20 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
        {/* Photo display */}
        <div className={`w-full h-full transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <img
            src={photos[currentIndex]}
            alt={`Memória ${currentIndex + 1}`}
            className="w-full h-full object-contain"
            onError={(e) => {
              // Fallback para quando a imagem não existir
              (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="20" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EAdicione suas fotos em public/img/%3C/text%3E%3C/svg%3E'
            }}
          />
        </div>

        {/* Navigation buttons */}
        <Button
          onClick={prevPhoto}
          variant="ghost"
          size="default"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 h-auto shadow-lg"
        >
          <FaChevronLeft className="text-blue-600" />
        </Button>

        <Button
          onClick={nextPhoto}
          variant="ghost"
          size="default"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 h-auto shadow-lg"
        >
          <FaChevronRight className="text-blue-600" />
        </Button>

        {/* Photo indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true)
                setTimeout(() => {
                  setCurrentIndex(index)
                  setIsTransitioning(false)
                }, 300)
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Photo counter */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-poppins backdrop-blur-sm">
          {currentIndex + 1} / {photos.length}
        </div>
      </div>

      {/* Gallery description */}
      <p className="text-center text-white/80 font-poppins text-sm mt-4">
        Nossas memórias mais especiais juntos
      </p>
    </div>
  )
}
