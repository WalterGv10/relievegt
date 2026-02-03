import SectionWrapper from '../shared/SectionWrapper';

const applications = [
    {
        title: 'Arte y Escultura',
        description: 'Obras monumentales para galerías, museos y espacios públicos.',
        icon: '◆'
    },
    {
        title: 'Arquitectura e Interiorismo',
        description: 'Elementos decorativos, maquetas a escala real y piezas de diseño.',
        icon: '◇'
    },
    {
        title: 'Branding Físico',
        description: 'Logotipos volumétricos, exhibidores y elementos de marca en 3D.',
        icon: '○'
    },
    {
        title: 'Prototipos Industriales',
        description: 'Validación de diseño a escala real. Del concepto a la pieza funcional.',
        icon: '□'
    }
];

export default function Applications() {
    return (
        <SectionWrapper>
            <div className="space-y-12 sm:space-y-16 md:space-y-20">
                {/* Header */}
                <div className="text-center space-y-4 sm:space-y-6">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
                        Aplicaciones
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-light">
                        Donde la escala marca la diferencia.
                    </p>
                </div>

                {/* Applications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    {applications.map((app, index) => (
                        <div
                            key={index}
                            className="group p-6 sm:p-8 md:p-10 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 text-left"
                        >
                            <div className="flex items-start gap-4 sm:gap-6">
                                {/* Icon */}
                                <span className="text-2xl sm:text-3xl text-gray-500 group-hover:text-gray-300 transition-colors duration-500">
                                    {app.icon}
                                </span>

                                {/* Content */}
                                <div className="space-y-2 sm:space-y-3">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-white group-hover:text-gray-100 transition-colors duration-300">
                                        {app.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                                        {app.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
