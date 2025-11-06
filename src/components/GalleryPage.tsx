import MusicPlayer from './MusicPlayer'
import PhotoGallery from './PhotoGallery'
import { FaHeart } from 'react-icons/fa'

export default function GalleryPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 py-8 px-4 overflow-x-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Music Player */}
        <div className="pt-4">
          <MusicPlayer autoPlay={true} />
        </div>

        {/* Photo Gallery */}
        <div className="py-8">
          <PhotoGallery />
        </div>

        {/* Love Message */}
        <div className="max-w-3xl mx-auto text-center space-y-6 pb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/30">
            <FaHeart className="text-white text-5xl mx-auto mb-6 animate-pulse" />

            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              3 Anos de Amor
            </h2>

            <div className="space-y-4 font-poppins text-base md:text-lg text-white/95 leading-relaxed">
              <p>
                Cada dia ao seu lado é uma dádiva, um presente que a vida me deu.
                São três anos de cumplicidade, sorrisos compartilhados, abraços apertados
                e um amor que só cresce a cada momento.
              </p>

              <p>
                Você transforma os dias comuns em extraordinários, e me faz acreditar
                que o amor verdadeiro existe e está ao meu lado. Obrigado por ser
                minha companheira, minha melhor amiga, meu amor.
              </p>

              <p>
                Que venham muitos outros 4 de novembros, sempre juntos,
                sempre felizes, sempre apaixonados.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/30">
              <p className="font-playfair text-2xl md:text-3xl font-semibold text-white drop-shadow-lg">
                Te amo para sempre
              </p>
              <p className="font-playfair text-xl md:text-2xl text-white/90 mt-2 italic">
                Isaac Matos
              </p>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              <FaHeart className="text-white text-2xl animate-pulse" />
              <FaHeart className="text-white text-2xl animate-pulse" style={{ animationDelay: '0.2s' }} />
              <FaHeart className="text-white text-2xl animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <FaHeart className="absolute top-10 left-[5%] text-white/10 text-6xl animate-pulse-slow" />
        <FaHeart className="absolute bottom-20 right-[10%] text-white/10 text-7xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <FaHeart className="absolute top-[40%] left-[15%] text-white/10 text-5xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <FaHeart className="absolute top-[60%] right-[20%] text-white/10 text-8xl animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
      </div>
    </div>
  )
}
