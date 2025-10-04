import { ArrowRight, Package, Truck, Shield, Sparkles } from "lucide-react"

export function ItemListContainer({ greeting }) {
  const categories = [
    {
      name: "Electrónica",
      description: "Lo último en tecnología",
      image: "/modern-electronics.png",
    },
    {
      name: "Moda",
      description: "Estilo para cada ocasión",
      image: "/fashion-clothing-style.jpg",
    },
    {
      name: "Hogar",
      description: "Decora tu espacio",
      image: "/cozy-living-room.png",
    },
    {
      name: "Deportes",
      description: "Activa tu vida",
      image: "/sports-fitness-equipment.png",
    },
  ]

  const features = [
    {
      icon: Truck,
      title: "Envío Gratis",
      description: "En compras mayores a $50",
    },
    {
      icon: Shield,
      title: "Compra Segura",
      description: "Protección garantizada",
    },
    {
      icon: Package,
      title: "Devoluciones",
      description: "30 días para devolver",
    },
    {
      icon: Sparkles,
      title: "Calidad Premium",
      description: "Productos seleccionados",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">{greeting}</h1>
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
            Descubre productos únicos seleccionados especialmente para ti. Calidad, estilo y las mejores ofertas en un
            solo lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group">
              Explorar Productos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors">
              Ver Ofertas
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 lg:px-8 py-16 bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Explora por Categoría</h2>
          <p className="text-muted-foreground text-lg">Encuentra exactamente lo que buscas</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group cursor-pointer bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Suscríbete y obtén 15% de descuento</h2>
          <p className="text-lg mb-8 opacity-90">Recibe ofertas exclusivas y novedades directamente en tu correo</p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background border-0 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors whitespace-nowrap">
              Suscribirse
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
