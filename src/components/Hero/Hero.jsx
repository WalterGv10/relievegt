export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-12 sm:py-16">
            <div className="max-w-5xl w-full space-y-6 sm:space-y-8 md:space-y-10">
                {/* Badge */}
                <div className="flex justify-center">
                    <span className="inline-block py-2 px-4 sm:px-6 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-shadow duration-500">
                        Manufactura Futurista
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter drop-shadow-2xl text-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-blue-200 filter drop-shadow-lg">
                        RelieveGt
                    </span>
                </h1>

                {/* Copy */}
                <div className="space-y-3 sm:space-y-4 md:space-y-6 text-center">
                    <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-100 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-lg px-4">
                        Materializa tus ideas con{' '}
                        <span className="font-medium text-cyan-200 decoration-cyan-400/30 underline decoration-1 underline-offset-4">
                            precisión atómica
                        </span>
                        .
                    </p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-md px-4">
                        Desde el prototipo hasta la producción masiva, redefinimos los límites de lo posible.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center pt-6 sm:pt-8 md:pt-10 px-4">
                    <button className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-50 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] text-sm sm:text-base">
                        Cotizar Proyecto
                    </button>
                    <button className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-white/5 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all transform hover:scale-105 shadow-lg backdrop-blur-sm hover:border-white/40 text-sm sm:text-base">
                        Nuestros Servicios
                    </button>
                </div>
            </div>
        </section>
    );
}
