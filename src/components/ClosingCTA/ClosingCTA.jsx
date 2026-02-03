import SectionWrapper from '../shared/SectionWrapper';

export default function ClosingCTA() {
    return (
        <SectionWrapper className="min-h-[60vh] flex items-center">
            <div className="w-full text-center space-y-8 sm:space-y-10 md:space-y-12">
                {/* Authority Statement */}
                <div className="space-y-4 sm:space-y-6">
                    <p className="text-sm sm:text-base text-gray-500 tracking-widest uppercase">
                        ¿Listo para pensar en grande?
                    </p>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight max-w-4xl mx-auto">
                        Tu próximo proyecto{' '}
                        <span className="font-normal bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            merece escala.
                        </span>
                    </h2>
                </div>

                {/* CTA */}
                <div className="pt-4 sm:pt-6">
                    <button className="px-10 sm:px-12 md:px-16 py-4 sm:py-5 border border-white/20 text-white font-light tracking-wide rounded-full hover:bg-white hover:text-black transition-all duration-500 text-sm sm:text-base">
                        Conversemos
                    </button>
                </div>

                {/* Subtle tagline */}
                <p className="text-xs sm:text-sm text-gray-500 font-light">
                    Sin compromiso. Solo una conversación sobre posibilidades.
                </p>
            </div>
        </SectionWrapper>
    );
}
