export default function SectionWrapper({ children, className = '' }) {
    return (
        <section className={`w-full px-4 sm:px-6 md:px-10 py-20 sm:py-24 md:py-32 ${className}`}>
            <div className="max-w-6xl mx-auto">
                {children}
            </div>
        </section>
    );
}
