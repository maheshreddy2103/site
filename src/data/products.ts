export interface Product {
  sku: string
  name: string
  brand: string
  category:
    | 'Refrigerators'
    | 'Air Conditioners'
    | 'Washing Machines'
    | 'Televisions'
    | 'Kitchen Appliances'
    | 'Water Purifiers'
    | 'Smartphones'
    | 'Smart TVs'
    | 'Home Appliances'
    | 'Laptops'
    | 'Gold & Jewellery'
  price: number
  formattedPrice: string
  monthlyEmi12: number
  warranty: string
  availability: string
  rating: number
  reviewsCount: number
  image: string
  description: string
  features: string[]
  specs: { [key: string]: string }
  partner: string
}

export const productsData: Product[] = [
  {
    sku: 'DOUBLE-DOOR-FRIDGE-265L',
    name: 'Whirlpool 265L 3-Star Frost-Free Double-Door Refrigerator',
    brand: 'Whirlpool',
    category: 'Refrigerators',
    price: 17000,
    formattedPrice: '₹17,000',
    monthlyEmi12: 1000,
    warranty: '1 Year Comprehensive + 10 Years on Compressor',
    availability: 'In Stock · Free Doorstep Delivery',
    rating: 4.8,
    reviewsCount: 1840,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80',
    description: 'The everyday essential refrigerator for modern Indian households. Features 6th Sense DeepFreeze technology, freshflow air tower, and microblock cooling that keeps food fresh for up to 15 days.',
    features: [
      '6th Sense DeepFreeze prevents cold air loss when door opens',
      'Microblock technology prevents up to 99% bacterial growth',
      'Freshflow Air Tower with active deodorizer',
      'Chilling gel stores cold air during power outages up to 12 hours',
      'Stabilizer-free operation (130V - 300V)'
    ],
    specs: {
      'Capacity': '265 Litres (Fresh Food 190L + Freezer 75L)',
      'Energy Rating': '3 Star BEE Efficiency',
      'Defrost Type': 'Auto Frost Free',
      'Shelves': 'Toughened Glass (Spill-proof)',
      'Dimensions': '65 x 57 x 159 cm'
    },
    partner: 'Croma Megastores & Reliance Digital'
  },
  {
    sku: 'DAIKIN-AC-15T',
    name: 'Daikin 1.5 Ton 5-Star Inverter Split AC (FTKM50U)',
    brand: 'Daikin',
    category: 'Air Conditioners',
    price: 44990,
    formattedPrice: '₹44,990',
    monthlyEmi12: 3749,
    warranty: '1 Year Comprehensive + 5 Years on PCB + 10 Years on Compressor',
    availability: 'In Stock · Free Standard Delivery',
    rating: 4.9,
    reviewsCount: 1780,
    image: 'https://images.unsplash.com/photo-1614633833026-06201a4db92e?auto=format&fit=crop&w=800&q=80',
    description: 'Japan’s leading AC manufacturer brings 3D Airflow, PM2.5 filter, Triple Display, and Neo Swing Inverter compressor for maximum cooling with ultra-low electricity consumption.',
    features: [
      'Neo Swing Inverter Compressor with low vibration & friction',
      '3D Airflow circulation covers large rooms up to 150 sq.ft.',
      'Dew Clean Technology auto-cleans indoor coil with condensate water',
      'PM2.5 particulate matter purification filter built-in',
      'Cools efficiently even at extreme ambient temperatures up to 54°C'
    ],
    specs: {
      'Tonnage': '1.5 Ton (Cooling capacity 5280 Watts)',
      'Energy Rating': '5 Star ISEER 5.2 (Top tier efficiency)',
      'Condenser Coil': '100% Copper with Anti-corrosion treatment',
      'Refrigerant': 'R32 Eco-friendly green gas',
      'Noise Level': 'Whisper quiet 32 dB(A)'
    },
    partner: 'Daikin Authorized Dealer Network & Vijay Sales'
  },
  {
    sku: 'LG-WASH-8KG',
    name: 'LG 8kg 5-Star AI Direct Drive Front Load Washing Machine',
    brand: 'LG',
    category: 'Washing Machines',
    price: 37990,
    formattedPrice: '₹37,990',
    monthlyEmi12: 3165,
    warranty: '2 Years Comprehensive + 10 Years on Inverter Motor',
    availability: 'In Stock · Free Home Installation',
    rating: 4.8,
    reviewsCount: 1250,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
    description: 'AI Direct Drive technology detects not only the weight but also senses softness of fabric to choose optimal washing motion, with steam hygiene allergy care.',
    features: [
      'AI Direct Drive with 18% more fabric care',
      'Steam Cycle removes 99.9% of allergens and bacteria',
      'TurboWash cleans clothes thoroughly in 59 minutes',
      '6 Motion DD technology provides optimal wash programs',
      'ThinQ Wi-Fi connectivity for smart remote control'
    ],
    specs: {
      'Capacity': '8 Kg (ideal for families with 4-5 members)',
      'Energy Rating': '5 Star BEE Certified',
      'Spin Speed': '1400 RPM (faster drying)',
      'Drum Material': 'Full Stainless Steel Lifters & Drum',
      'Noise Level': 'Super silent Inverter Direct Drive'
    },
    partner: 'Vijay Sales & Croma Stores'
  },
  {
    sku: 'SONY-BRAVIA-55',
    name: 'Sony Bravia 55" 4K Ultra HD Smart Google TV (KD-55X74L)',
    brand: 'Sony',
    category: 'Televisions',
    price: 57990,
    formattedPrice: '₹57,990',
    monthlyEmi12: 4832,
    warranty: '1 Year Comprehensive + 1 Year Additional Panel Warranty',
    availability: 'In Stock · Free Installation',
    rating: 4.9,
    reviewsCount: 2100,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80',
    description: 'Experience lifelike colors and contrast with 4K Processor X1, Live Colour technology, Dolby Audio, and Google TV voice control with Apple AirPlay.',
    features: [
      '4K Processor X1 with 4K X-Reality PRO clarity',
      'Live Colour Technology & Motionflow XR 100',
      '20W Open Baffle Bass Reflex Speaker with Dolby Audio',
      'Google TV with Voice Search & Chromecast built-in',
      'Apple AirPlay & HomeKit compatible'
    ],
    specs: {
      'Screen Size': '55 Inches (139 cm)',
      'Resolution': '4K Ultra HD (3840 x 2160 pixels)',
      'Refresh Rate': '60 Hertz',
      'Connectivity': '3 HDMI ports, 2 USB ports, Dual-band Wi-Fi',
      'Mounting': 'Wall mount & Tabletop stand included'
    },
    partner: 'Reliance Digital & Sony Center'
  },
  {
    sku: 'KENT-GRAND-RO',
    name: 'Kent Grand Plus RO + UV + UF + TDS Water Purifier (9L)',
    brand: 'Kent',
    category: 'Water Purifiers',
    price: 16500,
    formattedPrice: '₹16,500',
    monthlyEmi12: 1375,
    warranty: '1 Year Warranty + 3 Years Free Service',
    availability: 'In Stock · Free Installation Included',
    rating: 4.8,
    reviewsCount: 3200,
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80',
    description: 'Multiple purification process of RO+UV+UF+TDS control removes dissolved impurities, bacteria & viruses while retaining essential minerals in drinking water.',
    features: [
      'Mineral ROTM Technology retains essential natural minerals',
      'Zero Water Wastage technology recirculates rejected water to overhead tank',
      'High purification capacity of 20 Litres/hour',
      'In-tank UV disinfection keeps stored water purified 24x7',
      '9 Litre high-capacity food-grade storage tank'
    ],
    specs: {
      'Purification Technology': 'RO + UV + UF + Alkaline + TDS Control',
      'Storage Capacity': '9 Litres',
      'Purification Production Rate': '20 L/hr',
      'Input Water Pressure': '0.3 kg/cm2 to 3.0 kg/cm2',
      'Installation': 'Wall-mount or Counter-top'
    },
    partner: 'Kent Authorized Network & Croma'
  },
  {
    sku: 'IFB-MICROWAVE-30L',
    name: 'IFB 30L Convection Microwave Oven (30BRC2)',
    brand: 'IFB',
    category: 'Kitchen Appliances',
    price: 14490,
    formattedPrice: '₹14,490',
    monthlyEmi12: 1207,
    warranty: '1 Year on Machine + 3 Years on Magnetron & Cavity',
    availability: 'In Stock · Free Starter Kit Included',
    rating: 4.7,
    reviewsCount: 940,
    image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=800&q=80',
    description: 'All-in-one culinary companion for Indian cooking with 101 auto-cook menus, fermentation, oil-free baking, and motorized rotisserie for authentic roasts.',
    features: [
      '101 Standard Cook Menus tailored for Indian regional recipes',
      'Motorized Rotisserie for crisp tandoori & grilled dishes',
      'Steam Clean removes grease in minutes using water vapor',
      'Disinfect feature sterilizes baby bottles and utensils',
      'Stainless Steel cavity with heat reflector'
    ],
    specs: {
      'Capacity': '30 Litres (suitable for large families)',
      'Cooking Modes': 'Convection, Grill, Microwave & Combination',
      'Power Consumption': 'Microwave 1400W, Grill 1250W, Convection 2200W',
      'Controls': 'Touch keypad membrane with child lock',
      'Turntable Diameter': '31.5 cm'
    },
    partner: 'Vijay Sales & Reliance Digital'
  },
  {
    sku: 'SAMSUNG-FRIDGE-324L',
    name: 'Samsung 324L 3-Star Double Door Convertible Refrigerator',
    brand: 'Samsung',
    category: 'Refrigerators',
    price: 34990,
    formattedPrice: '₹34,990',
    monthlyEmi12: 2915,
    warranty: '1 Year Comprehensive + 20 Years on Digital Inverter Compressor',
    availability: 'In Stock',
    rating: 4.8,
    reviewsCount: 2200,
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80',
    description: 'Convertible 5-in-1 modes allow you to convert your freezer into a fridge when you need extra storage, powered by Twin Cooling Plus and digital inverter efficiency.',
    features: [
      'Convertible 5-in-1 customized cooling modes',
      'Twin Cooling Plus with separate airflow for fridge & freezer',
      'Digital Inverter with up to 50% energy savings & 20-year warranty',
      'Power Freeze and Power Cool rapid chilling at touch of a button',
      'Deodorizer with activated carbon filter'
    ],
    specs: {
      'Total Capacity': '324 Litres (Fresh Food 236L + Freezer 88L)',
      'Energy Efficiency': '3 Star BEE Rating',
      'Defrost Type': 'Auto Frost Free',
      'Shelves': 'Toughened Glass Shelves (holds up to 175kg)',
      'Stabilizer': 'Stabilizer Free Operation (100V - 300V)'
    },
    partner: 'Reliance Digital & Croma'
  },
  {
    sku: 'IPHONE-16',
    name: 'Apple iPhone 16 (128GB)',
    brand: 'Apple',
    category: 'Smartphones',
    price: 79900,
    formattedPrice: '₹79,900',
    monthlyEmi12: 6658,
    warranty: '1 Year Apple Official Warranty',
    availability: 'In Stock · Ready for Delivery',
    rating: 4.9,
    reviewsCount: 1420,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
    description: 'Experience Apple Intelligence, the latest A18 chip, Camera Control, 48MP Fusion Camera, and all-day battery life with premium ceramic shield.',
    features: [
      'A18 Bionic Chip with 5-core GPU',
      '48MP Fusion Camera with 2x Telephoto',
      'Camera Control button with tactile haptics',
      'All-day battery life up to 22 hrs video playback',
      'Ceramic Shield glass (2x tougher than any smartphone glass)'
    ],
    specs: {
      'Display': '6.1-inch Super Retina XDR OLED display',
      'Storage': '128 GB NVMe',
      'OS': 'iOS 18 (Apple Intelligence ready)',
      'Security': 'Face ID with TrueDepth camera',
      'Network': '5G Ultra-Wideband (Dual eSIM / SIM)',
      'In The Box': 'iPhone 16, USB-C Charge Cable'
    },
    partner: 'Reliance Digital & Apple Authorized Stores'
  }
]
