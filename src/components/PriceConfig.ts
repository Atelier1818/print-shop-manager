export const initialPriceConfig = {
  products: {
    business_card: {
      name: 'Cartão de Visita',
      basePrice: 50,
      priceBySize: false
    },
    flyer: {
      name: 'Flyer',
      basePrice: 100,
      priceBySize: true
    },
    poster: {
      name: 'Poster',
      basePrice: 200,
      priceBySize: true
    }
  },
  papers: {
    offset90: { name: 'Offset 90g', multiplier: 1 },
    couche150: { name: 'Couché 150g', multiplier: 1.5 },
    couche300: { name: 'Couché 300g', multiplier: 2 }
  },
  quantities: {
    100: 1,
    250: 0.8,
    500: 0.7,
    1000: 0.6,
    2000: 0.5
  },
  extras: {
    margin: 10,
    tax: 23
  }
};