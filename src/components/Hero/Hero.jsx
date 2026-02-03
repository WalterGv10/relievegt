export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-16">
            <div className="max-w-5xl w-full text-center space-y-8 sm:space-y-12 md:space-y-16">

                {/* Main Headline */}
                <div className="space-y-4 sm:space-y-6">
                    <p className="text-sm sm:text-base md:text-lg tracking-[0.3em] uppercase text-gray-400 font-light">
                        Impresión 3D de gran formato
                    </p>

                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight text-white">
                        No imprimimos objetos.
                        <br />
                        <span className="font-normal bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                            Imprimimos presencia.
                        </span>
                    </h1>
                </div>

                {/* Subtle tagline */}
                <p className="text-base sm:text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
                    Piezas monumentales. Precisión milimétrica. Presencia que transforma espacios.
                </p>

            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
                <span className="text-xs tracking-widest uppercase">Descubre</span>
                <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
            </div>
        </section>
    );
}
