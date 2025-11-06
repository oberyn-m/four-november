import { useState, useRef, useEffect } from 'react'
import ReactPlayer from 'react-player/youtube'
import { FaPlay, FaPause, FaMusic } from 'react-icons/fa'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'

interface MusicPlayerProps {
  autoPlay?: boolean
}

export default function MusicPlayer({ autoPlay = false }: MusicPlayerProps) {
  const [playing, setPlaying] = useState(false)
  const [ready, setReady] = useState(false)
  const playerRef = useRef<ReactPlayer>(null)

  // Auto-play quando estiver pronto
  useEffect(() => {
    if (ready && autoPlay) {
      setPlaying(true)
    }
  }, [ready, autoPlay])

  const togglePlay = () => {
    setPlaying(!playing)
  }

  return (
    <Card className="w-full max-w-3xl mx-auto bg-white/90 backdrop-blur-md shadow-2xl border-blue-200 animate-slide-up">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Music icon */}
          <div className="flex-shrink-0">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-4 shadow-lg">
              <FaMusic className="text-white text-3xl" />
            </div>
          </div>

          {/* Player info and controls */}
          <div className="flex-grow text-center md:text-left">
            <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-1">
              Nossa Música
            </h3>
            <p className="font-poppins text-gray-600 text-sm mb-3">
              A trilha sonora do nosso amor
            </p>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <Button
                onClick={togglePlay}
                disabled={!ready}
                variant="default"
                size="default"
                className="flex items-center gap-2"
              >
                {playing ? (
                  <>
                    <FaPause /> Pausar
                  </>
                ) : (
                  <>
                    <FaPlay /> Play
                  </>
                )}
              </Button>

              {!ready && (
                <span className="font-poppins text-sm text-gray-500 animate-pulse">
                  Carregando...
                </span>
              )}
            </div>
          </div>

          {/* Hidden player */}
          <div className="hidden">
            <ReactPlayer
              ref={playerRef}
              url="https://www.youtube.com/watch?v=xMYeWDSy37U"
              playing={playing}
              onReady={() => setReady(true)}
              width="0"
              height="0"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
