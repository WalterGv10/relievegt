import SEO from '../../components/SEO';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';

export default function Home() {
    return (
        <div className="relative z-10 text-white">
            <SEO
                title="RelieveGt - Servicios de Impresión 3D"
                description="Soluciones de impresión 3D a medida en Guatemala. Desde llaveros personalizados hasta prototipado industrial de gran escala."
                name="RelieveGt"
                type="website"
            />

            <Hero />
            <Services />
        </div>
    );
}
