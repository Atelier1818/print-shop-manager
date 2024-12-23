// Funções de cálculo de orçamentos
export const calculateQuote = (formData: any, priceConfig: any) => {
  if (!formData.product || !formData.paper || !formData.quantity) {
    throw new Error('Campos obrigatórios não preenchidos');
  }

  const product = priceConfig.products[formData.product];
  const paper = priceConfig.papers[formData.paper];
  
  let basePrice = product.basePrice * paper.multiplier;
  
  // Aplica desconto por quantidade
  let discount = 1;
  Object.entries(priceConfig.quantities)
    .sort(([a], [b]) => Number(a) - Number(b))
    .forEach(([qty, disc]) => {
      if (formData.quantity >= Number(qty)) {
        discount = disc;
      }
    });

  let price = basePrice * (formData.quantity / 100) * discount;
  
  // Aplica margem
  const withMargin = price * (1 + priceConfig.extras.margin / 100);
  const tax = withMargin * (priceConfig.extras.tax / 100);

  return {
    basePrice: price.toFixed(2),
    margin: (withMargin - price).toFixed(2),
    tax: tax.toFixed(2),
    total: (withMargin + tax).toFixed(2),
    perUnit: (withMargin / formData.quantity).toFixed(3),
    discount: ((1 - discount) * 100).toFixed(0)
  };
};