import SectionWrapper from '../shared/SectionWrapper';

const steps = [
    { number: '01', title: 'Concepto', description: 'Tu visión, nuestra interpretación técnica' },
    { number: '02', title: 'Ingeniería', description: 'Optimización para escala y estructura' },
    { number: '03', title: 'Producción', description: 'Impresión controlada, capa por capa' },
    { number: '04', title: 'Entrega', description: 'Acabado profesional, listo para instalar' }
];

export default function Process() {
    return (
        <SectionWrapper>
            <div className="space-y-12 sm:space-y-16 md:space-y-20">
                {/* Header */}
                <div className="text-center space-y-4 sm:space-y-6">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
                        De idea a{' '}
                        <span className="font-normal">pieza monumental</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-light">
                        Un proceso diseñado para precisión, no para velocidad.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Horizontal line (desktop) */}
                    <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    {/* Steps */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="relative text-center md:text-left space-y-4"
                            >
                                {/* Number */}
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-white/10 bg-white/[0.03] text-2xl font-extralight text-gray-300">
                                    {step.number}
                                </div>

                                {/* Content */}
                                <div className="space-y-2">
                                    <h3 className="text-lg sm:text-xl font-normal text-white">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 font-light leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
