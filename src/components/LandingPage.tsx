import { FaHeart } from 'react-icons/fa'
import { Button } from './ui/button'

interface LandingPageProps {
  onEnter: () => void
}

export default function LandingPage({ onEnter }: LandingPageProps) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-500 flex items-center justify-center relative overflow-hidden">
      {/* Decorative floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FaHeart className="absolute top-20 left-10 text-blue-200 opacity-20 text-4xl animate-pulse-slow" />
        <FaHeart className="absolute bottom-32 right-20 text-indigo-200 opacity-20 text-5xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <FaHeart className="absolute top-1/3 right-1/4 text-purple-200 opacity-20 text-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <FaHeart className="absolute bottom-1/4 left-1/3 text-blue-200 opacity-20 text-6xl animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Main content */}
      <div className="z-10 text-center px-4 animate-fade-in">
        <div className="mb-8 animate-slide-up">
          <FaHeart className="text-white text-7xl mx-auto mb-6 drop-shadow-lg animate-pulse" />
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-xl">
            4 de Novembro
          </h1>
          <p className="font-poppins text-xl md:text-2xl text-white/90 mb-2 drop-shadow-lg">
            Um dia especial para celebrar
          </p>
          <p className="font-poppins text-lg md:text-xl text-white/80 drop-shadow-lg">
            3 anos de amor e felicidade
          </p>
        </div>

        <Button
          size="lg"
          onClick={onEnter}
          className="font-poppins text-lg md:text-xl px-12 py-6 h-auto animate-slide-up backdrop-blur-sm"
          style={{ animationDelay: '0.3s' }}
        >
          Feliz 4 de Novembro
          <FaHeart className="ml-3 text-xl" />
        </Button>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
    </div>
  )
}
