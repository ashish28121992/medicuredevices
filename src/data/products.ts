export interface Product {
  id: string
  name: string
  category: string
  description: string
  price: number
  image: string
  inStock: boolean
  specs?: string[]
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Digital Blood Pressure Monitor',
    category: 'Monitoring',
    description: 'Fully automatic upper arm BP monitor with large LCD, irregular heartbeat detection, and 90-reading memory.',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400',
    inStock: true,
    specs: ['Upper arm', 'LCD display', '90 memory', 'Irregular heartbeat detection'],
  },
  {
    id: '2',
    name: 'Pulse Oximeter Fingertip',
    category: 'Monitoring',
    description: 'Accurate SpO2 and pulse rate reading in seconds. Lightweight, portable, battery operated.',
    price: 899,
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400',
    inStock: true,
    specs: ['SpO2 & PR', 'Fingertip', 'Portable', 'Battery operated'],
  },
  {
    id: '3',
    name: 'Nebulizer Machine',
    category: 'Respiratory',
    description: 'Mesh nebulizer for fast, quiet aerosol delivery. Suitable for asthma and respiratory therapy.',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1584305574647-0cc949a2bb2e?w=400',
    inStock: true,
    specs: ['Mesh technology', 'Quiet', 'Portable', 'Kids & adults'],
  },
  {
    id: '4',
    name: 'Digital Thermometer',
    category: 'Monitoring',
    description: 'Fast reading digital thermometer with fever alarm and waterproof tip. Suitable for oral, underarm, rectal.',
    price: 299,
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400',
    inStock: true,
    specs: ['10 sec reading', 'Fever alarm', 'Waterproof', 'LCD'],
  },
  {
    id: '5',
    name: 'Glucometer Kit',
    category: 'Diabetes Care',
    description: 'Blood glucose meter with strips and lancets. No coding, 500 memory, result in 5 seconds.',
    price: 599,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400',
    inStock: true,
    specs: ['No coding', '500 memory', '5 sec result', 'Strip kit included'],
  },
  {
    id: '6',
    name: 'Wheelchair Foldable',
    category: 'Mobility',
    description: 'Lightweight foldable wheelchair with removable footrests and rear brakes. Ideal for indoor and outdoor use.',
    price: 12999,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400',
    inStock: true,
    specs: ['Foldable', 'Removable footrests', 'Rear brakes', 'Lightweight'],
  },
  {
    id: '7',
    name: 'CPAP Machine',
    category: 'Respiratory',
    description: 'Auto CPAP with humidifier for sleep apnea. Quiet motor, ramp feature, and travel bag included.',
    price: 44999,
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400',
    inStock: true,
    specs: ['Auto CPAP', 'Humidifier', 'Ramp', 'Travel bag'],
  },
  {
    id: '8',
    name: 'Infrared Forehead Thermometer',
    category: 'Monitoring',
    description: 'Non-contact infrared thermometer. One-second reading, mute mode, backlit display.',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1584305574647-0cc949a2bb2e?w=400',
    inStock: true,
    specs: ['Non-contact', '1 sec', 'Mute mode', 'Backlit'],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}
