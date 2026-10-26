export interface Product {
  sku: string
  name: string
  brand: string
  category: 'Smartphones' | 'Smart TVs' | 'Home Appliances' | 'Laptops' | 'Gold & Jewellery'
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
  },
  {
    sku: 'SAMSUNG-S24',
    name: 'Samsung Galaxy S24 5G (256GB)',
    brand: 'Samsung',
    category: 'Smartphones',
    price: 69999,
    formattedPrice: '₹69,999',
    monthlyEmi12: 5833,
    warranty: '1 Year Manufacturer Warranty',
    availability: 'In Stock',
    rating: 4.8,
    reviewsCount: 980,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80',
    description: 'Welcome to the era of mobile AI. Galaxy AI brings Circle to Search, Live Call Translation, Note Assist, and nightography camera precision.',
    features: [
      'Galaxy AI integrated search & translation',
      '50MP Pro-grade camera with 30x Space Zoom',
      'Dynamic AMOLED 2X 120Hz display with 2600 nits',
      'Armor Aluminum frame with IP68 water resistance',
      '4000 mAh battery with intelligent battery management'
    ],
    specs: {
      'Display': '6.2-inch Dynamic AMOLED 2X FHD+ (1-120Hz)',
      'RAM & Storage': '8GB RAM + 256GB Storage',
      'Processor': 'Exynos 2400 Deca-Core 4nm',
      'Camera': '50MP + 12MP Ultra-Wide + 10MP Telephoto (3x)',
      'Security': 'Knox Vault & Ultrasonic Fingerprint'
    },
    partner: 'Croma (A Tata Enterprise)'
  },
  {
    sku: 'ONEPLUS-12R',
    name: 'OnePlus 12R 5G (16GB RAM, 256GB)',
    brand: 'OnePlus',
    category: 'Smartphones',
    price: 39999,
    formattedPrice: '₹39,999',
    monthlyEmi12: 3333,
    warranty: '1 Year OnePlus India Warranty',
    availability: 'In Stock',
    rating: 4.7,
    reviewsCount: 1650,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
    description: 'Flagship killer performance powered by Snapdragon 8 Gen 2, 4th Gen LTPO 120Hz ProXDR display, and 100W SUPERVOOC charging.',
    features: [
      'Snapdragon 8 Gen 2 Mobile Platform',
      '5500 mAh battery with 100W SUPERVOOC charging',
      '1.5K 120Hz ProXDR Display with Dolby Vision',
      'Sony IMX890 50MP flagship sensor with OIS',
      'Cryo-velocity VC cooling system'
    ],
    specs: {
      'Display': '6.78-inch AMOLED 1.5K LTPO 4.0 120Hz',
      'RAM & Storage': '16GB LPDDR5X + 256GB UFS 3.1',
      'Charging': '100W Wired Fast Charger included in box',
      'Battery': '5500 mAh Dual-cell battery',
      'OS': 'OxygenOS 14 based on Android 14'
    },
    partner: 'Vijay Sales Retail Network'
  },
  {
    sku: 'SONY-BRAVIA-55',
    name: 'Sony Bravia 55" 4K Ultra HD Smart Google TV (KD-55X74L)',
    brand: 'Sony',
    category: 'Smart TVs',
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
    sku: 'SAMSUNG-TV-55',
    name: 'Samsung Crystal 4K 55" UHD Smart TV (55DUE70)',
    brand: 'Samsung',
    category: 'Smart TVs',
    price: 43990,
    formattedPrice: '₹43,990',
    monthlyEmi12: 3665,
    warranty: '1 Year Standard + 1 Year on Panel',
    availability: 'In Stock',
    rating: 4.8,
    reviewsCount: 3100,
    image: 'https://images.unsplash.com/photo-1552975084-6e027cd345c2?auto=format&fit=crop&w=800&q=80',
    description: 'Crystal Processor 4K brings 1 billion true colors with PurColor, HDR10+, OTS Lite sound, and Samsung Tizen Smart TV hub.',
    features: [
      'Crystal Processor 4K upscaling engine',
      'PurColor and HDR10+ for vibrant picture contrast',
      'Object Tracking Sound Lite (OTS Lite) with Q-Symphony',
      'Samsung Knox Security built-in',
      'SolarCell Remote Control (recharges with indoor light)'
    ],
    specs: {
      'Screen Size': '55 Inches (138 cm)',
      'Resolution': '4K UHD (3840 x 2160 pixels)',
      'Smart TV OS': 'Samsung Tizen OS',
      'Audio Output': '20W with Adaptive Sound',
      'Ports': '3 HDMI, 1 USB, LAN, Optical Digital Out'
    },
    partner: 'Croma Retail & Vijay Sales'
  },
  {
    sku: 'LG-TV-43',
    name: 'LG 43" 4K Ultra HD Smart WebOS TV (43UR7500PSC)',
    brand: 'LG',
    category: 'Smart TVs',
    price: 29990,
    formattedPrice: '₹29,990',
    monthlyEmi12: 2499,
    warranty: '1 Year LG Official Warranty',
    availability: 'In Stock',
    rating: 4.7,
    reviewsCount: 1850,
    image: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80',
    description: 'Real 4K clarity driven by α5 AI Processor Gen6, HDR10 Pro, WebOS 23 with personalized user profiles, and AI Sound with 5.1 channel upmix.',
    features: [
      'α5 AI Processor Gen6 4K with AI Brightness',
      '4K Upscaling & HDR10 Pro',
      'WebOS 23 with New Home & Quick Cards',
      'Game Optimizer with ALLM & HGiG',
      'Works with Apple AirPlay, HomeKit, and Alexa'
    ],
    specs: {
      'Screen Size': '43 Inches (108 cm)',
      'Resolution': '4K Ultra HD (3840 x 2160 pixels)',
      'Sound': '20W 2.0 Ch with AI Sound (Virtual 5.1 Up-mix)',
      'Processor': 'α5 Gen6 AI Processor 4K',
      'Connectivity': '3 HDMI, 2 USB, Bluetooth 5.0, Wi-Fi'
    },
    partner: 'Tata CLiQ & Reliance Digital'
  },
  {
    sku: 'LG-WASH-8KG',
    name: 'LG 8kg 5-Star AI Direct Drive Front Load Washing Machine',
    brand: 'LG',
    category: 'Home Appliances',
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
    sku: 'SAMSUNG-FRIDGE-324L',
    name: 'Samsung 324L 3-Star Double Door Convertible Refrigerator',
    brand: 'Samsung',
    category: 'Home Appliances',
    price: 34990,
    formattedPrice: '₹34,990',
    monthlyEmi12: 2915,
    warranty: '1 Year Comprehensive + 20 Years on Digital Inverter Compressor',
    availability: 'In Stock',
    rating: 4.8,
    reviewsCount: 2200,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80',
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
    sku: 'DAIKIN-AC-15T',
    name: 'Daikin 1.5 Ton 5-Star Inverter Split AC (FTKM50U)',
    brand: 'Daikin',
    category: 'Home Appliances',
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
      'Cools efficiently even at extreme temperatures up to 54°C'
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
    sku: 'DYSON-V11',
    name: 'Dyson V11 Absolute Pro Cord-Free Vacuum Cleaner',
    brand: 'Dyson',
    category: 'Home Appliances',
    price: 49900,
    formattedPrice: '₹49,900',
    monthlyEmi12: 4158,
    warranty: '2 Years Dyson India Warranty',
    availability: 'In Stock',
    rating: 4.9,
    reviewsCount: 890,
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80',
    description: 'Intelligently senses and deep cleans everywhere. LCD screen reports performance in real time with up to 60 minutes of fade-free power.',
    features: [
      'Dyson Hyperdymium Motor spins at 125,000 RPM',
      'High Torque cleaner head with Dynamic Load Sensor (DLS)',
      'Whole-machine filtration captures 99.99% of dust down to 0.3 microns',
      'LCD screen displays run time count-down and maintenance alerts',
      'Point-and-shoot hygienic bin emptying mechanism'
    ],
    specs: {
      'Weight': '3.0 Kg ergonomic cordless body',
      'Run Time': 'Up to 60 minutes in Eco mode',
      'Suction Power': '185 AW (Air Watts) maximum power',
      'Bin Volume': '0.76 Litres',
      'Included Tools': 'Torque drive, Soft roller, Quick-release mini motorized tool'
    },
    partner: 'Dyson India & Croma Flagship'
  },
  {
    sku: 'MACBOOK-AIR-M2',
    name: 'Apple MacBook Air M2 (13.6-inch, 8GB RAM, 256GB SSD)',
    brand: 'Apple',
    category: 'Laptops',
    price: 89900,
    formattedPrice: '₹89,900',
    monthlyEmi12: 7491,
    warranty: '1 Year Apple International Warranty',
    availability: 'In Stock · Starlight / Midnight / Silver',
    rating: 4.9,
    reviewsCount: 2450,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    description: 'Strikingly thin design with all-day battery up to 18 hours, brilliant Liquid Retina display, 1080p FaceTime HD camera, and MagSafe 3 charging.',
    features: [
      'Apple M2 chip with 8-core CPU and 8-core GPU',
      '13.6-inch Liquid Retina display with 500 nits brightness & True Tone',
      'Up to 18 hours of battery life with fanless, silent architecture',
      '1080p FaceTime HD camera with 3-mic array and 4-speaker spatial audio',
      'MagSafe 3 charging port with two Thunderbolt / USB 4 ports'
    ],
    specs: {
      'Chip': 'Apple M2 (16-core Neural Engine, 100GB/s memory bandwidth)',
      'Memory': '8GB unified memory',
      'Storage': '256GB ultra-fast SSD',
      'Weight': 'Ultra-light 1.24 Kg (2.7 pounds)',
      'Keyboard': 'Backlit Magic Keyboard with Touch ID'
    },
    partner: 'Apple Authorized Resellers & Reliance Digital'
  },
  {
    sku: 'TANISHQ-GOLD-10G',
    name: 'Tanishq 24K (999.9) 10-Gram Hallmarked Pure Gold Coin',
    brand: 'Tanishq',
    category: 'Gold & Jewellery',
    price: 79500,
    formattedPrice: '₹79,500',
    monthlyEmi12: 6625,
    warranty: 'BIS Hallmarked with Assayer Certification',
    availability: 'In Stock · Tamper-proof CertiCard Packaging',
    rating: 5.0,
    reviewsCount: 4200,
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80',
    description: 'Embossed with the auspicious symbol of Goddess Lakshmi, crafted from 24 Karat 99.99% pure gold by Tanishq (A Tata Enterprise), in tamper-proof security packaging with guaranteed buyback value.',
    features: [
      '24 Karat 999.9 purest bullion gold',
      'Auspicious Goddess Lakshmi embossed motif',
      'BIS Hallmarked with unique individual assay serial number',
      'Tamper-evident blister CertiCard packaging',
      'Lifetime 100% buyback guarantee at prevailing market rates'
    ],
    specs: {
      'Purity': '24 Karat (999.9 Fine Gold)',
      'Weight': '10.000 Grams (Tolerance 0.000g)',
      'Certification': 'BIS Hallmarked & Certified by Government Approved Assayer',
      'Packaging': 'Security CertiCard with hologram seal',
      'Manufacturer': 'Titan Company Limited (A Tata Enterprise)'
    },
    partner: 'Tanishq Exclusive Boutiques & Mia by Tanishq'
  }
]

