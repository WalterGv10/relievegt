import SectionWrapper from '../shared/SectionWrapper';

const pillars = [
    {
        title: 'Volumen',
        description: 'Piezas de hasta 2 metros de altura. Sin límites de escala.',
        metric: '2m+',
        metricLabel: 'altura máxima'
    },
    {
        title: 'Precisión',
        description: 'Detalle milimétrico en cada capa. Control absoluto del acabado.',
        metric: '0.1mm',
        metricLabel: 'resolución'
    },
    {
        title: 'Presencia',
        description: 'Objetos que transforman espacios. Impacto visual garantizado.',
        metric: '∞',
        metricLabel: 'posibilidades'
    }
];

export default function Differentiator() {
    return (
        <SectionWrapper>
            <div className="space-y-12 sm:space-y-16 md:space-y-20">
                {/* Header */}
                <div className="text-center space-y-4 sm:space-y-6">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
                        Cuando el tamaño{' '}
                        <span className="font-normal">deja de ser límite</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-light">
                        La escala no es solo dimensión. Es presencia, autoridad y transformación del espacio.
                    </p>
                </div>

                {/* Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            className="text-center space-y-4 sm:space-y-6 p-6 sm:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500"
                        >
                            {/* Metric */}
                            <div className="space-y-1">
                                <span className="text-4xl sm:text-5xl md:text-6xl font-extralight text-white tracking-tighter">
                                    {pillar.metric}
                                </span>
                                <p className="text-xs sm:text-sm text-gray-500 tracking-widest uppercase">
                                    {pillar.metricLabel}
                                </p>
                            </div>

                            {/* Content */}
                            <div className="space-y-2 sm:space-y-3">
                                <h3 className="text-lg sm:text-xl font-normal text-white">
                                    {pillar.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
