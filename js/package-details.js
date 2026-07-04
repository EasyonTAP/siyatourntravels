"use strict";

document.addEventListener('DOMContentLoaded', function() {
    // 1. Travel Packages Database
    const packagesData = {
        'grand-canyon': {
            title: 'Grand Canyon Adventure',
            location: 'Arizona, USA',
            duration: '6 Days - 5 Nights',
            price: '$499',
            stars: '4.9',
            reviews: '148 reviews',
            mapCenter: [36.0544, -112.1401],
            mapZoom: 11,
            heroDesc: 'Marvel at one of the Seven Natural Wonders of the World on a guided canyon trek and helicopter tour.',
            introDesc: 'Experience the breathtaking depth and scale of the Grand Canyon. Hike the Bright Angel Trail, watch sunset from Mather Point, raft down the Colorado River, and soar above the rim in a helicopter.',
            overview: '<p class="mb-3 text-secondary tn-fs-md lh-lg">Welcome to the Grand Canyon, one of the Seven Natural Wonders of the World. Carved over six million years by the Colorado River, this immense gorge stretches 277 miles and draws nearly six million visitors annually to witness its raw geological beauty. The canyon is a living canvas of light and shadow, constantly transforming throughout the day. Sunrise bathes the ancient sandstone in golden light, while the legendary sunset at Mather Point paints the sky in vivid crimson and violet, casting dramatic shadows across the vast ravines in a silent, breathtaking spectacle.</p><p class="mb-3 text-secondary tn-fs-md lh-lg">For those eager to explore, our 6-day tour offers the ultimate Southwest adventure in premium comfort. Walk the historic trails like Bright Angel to step back in geological time, soar above the rim on a luxury helicopter flight for a panoramic view, or float between the towering canyon walls on a Colorado River rafting trip. With expert geologist guides, luxury park-side lodging, and private transportation included, this tour delivers a comfortable and unforgettable journey into the heart of the canyon.</p>',
            facts: [
                { label: 'Departure', value: 'Phoenix Sky Harbor (PHX)' },
                { label: 'Group Size', value: '6 - 12 People' },
                { label: 'Tour Guide', value: 'English' },
                { label: 'Difficulty', value: 'Easy to Moderate' },
                { label: 'Min Age', value: '8+ Years' }
            ],
            highlights: [
                'Scenic Helicopter Flight Over the Rim',
                'Bright Angel Trail Guided Hike',
                'Mather Point Sunset Experience',
                'Colorado River Rafting Adventure'
            ],
            included: [
                '5 nights in premium park-side lodges',
                'Daily breakfast, 2 lunches, & 2 dinners',
                'Private transport throughout the tour',
                'National Park admission & fees',
                'Professional geologist tour guides'
            ],
            excluded: [
                'Flights to Phoenix',
                'Personal hiking equipment',
                'Gratuities for driver and guides',
                'Optional skywalk tickets'
            ],
            images: [
                'images/grand_canyon.jpg',
                'images/thumb1.jpg',
                'images/thumb2.jpg',
                'images/thumb3.jpg',
                'images/thumb4.jpg',
                'images/thumb5.jpg'
            ],
            itinerary: [
                { day: 1, title: 'Arrival in Phoenix & Scenic Drive', desc: 'Arrive at Phoenix Airport, transfer in a private SUV to Sedona. Walk the red rocks and gather for a welcome dinner.' },
                { day: 2, title: 'Sedona to Grand Canyon Rim', desc: 'Drive through Oak Creek Canyon to the Grand Canyon South Rim. Watch the sunset from Mather Point and check into your rim-side lodge.' },
                { day: 3, title: 'Bright Angel Trail Hike', desc: 'Go on a guided hike down the famous Bright Angel Trail with a professional geologist, learning about millions of years of earth history.' },
                { day: 4, title: 'Helicopter Flight & Desert View', desc: 'Soar above the canyon in a luxury helicopter for panoramic views, then drive along Desert View Drive to see the Watchtower.' },
                { day: 5, title: 'Colorado River Float Trip', desc: 'Enjoy a smooth-water rafting trip down the Colorado River, floating between towering canyon walls and stopping to see ancient petroglyphs.' },
                { day: 6, title: 'Departure', desc: 'Enjoy one last sunrise over the rim before your private transfer back to Phoenix Airport for your flight home.' }
            ]
        },
        'santorini': {
            title: 'Santorini Sunset Retreat',
            location: 'Santorini, Greece',
            duration: '7 Days - 6 Nights',
            price: '$350',
            stars: '4.6',
            reviews: '85 reviews',
            mapCenter: [36.3932, 25.4615],
            mapZoom: 12,
            heroDesc: 'Indulge in volcanic views, charming whitewashed villages, and the world\'s most beautiful sunsets.',
            introDesc: 'Experience the magic of Santorini on this 7-day guided getaway. Discover black sand beaches, explore ancient ruins, taste famous local wines, and cruise along the caldera in a private catamaran.',
            overview: 'Our Santorini Sunset Retreat offers the perfect blend of relaxation and discovery. You\'ll stay in premium caldera-view hotels overlooking the Aegean Sea, enjoy guided sightseeing of the prehistoric town of Akrotiri, explore local vineyards, and experience the iconic Oia sunset from the water. Everything is designed to make your Greek island dream a reality.',
            facts: [
                { label: 'Departure', value: 'Santorini Airport (JTR)' },
                { label: 'Group Size', value: '8 - 12 People' },
                { label: 'Tour Guide', value: 'English, Greek' },
                { label: 'Difficulty', value: 'Easy' },
                { label: 'Min Age', value: '12+ Years' }
            ],
            highlights: [
                'Caldera Sunset Catamaran Cruise',
                'Wine Tasting at Volcanic Vineyards',
                'Guided Walk of Prehistoric Akrotiri',
                'Red and Black Sand Beaches'
            ],
            included: [
                '6 nights in premium caldera-view hotels',
                'Daily Greek buffet breakfast & 2 dinners',
                'All transfers in private air-conditioned coach',
                'Caldera catamaran cruise with BBQ lunch',
                'Wine tasting fee and local guide'
            ],
            excluded: [
                'International flights to/from Greece',
                'Personal travel insurance',
                'Lunches and alcoholic drinks (except cruise)',
                'Optional excursions and entry tips'
            ],
            images: [
                'images/santorini.jpg',
                'images/thumb1.jpg',
                'images/thumb2.jpg',
                'images/thumb3.jpg',
                'images/thumb4.jpg',
                'images/thumb5.jpg'
            ],
            itinerary: [
                { day: 1, title: 'Arrival & Welcome Dinner', desc: 'Arrive at Santorini Airport. Private transfer to your hotel. In the evening, meet your tour guide and fellow travelers for a traditional welcome dinner.' },
                { day: 2, title: 'Fira to Oia Caldera Hike', desc: 'Embark on a spectacular guided hike along the rim of the caldera from Fira to Oia, witnessing dramatic volcanic cliffs and traditional villages.' },
                { day: 3, title: 'Catamaran Sunset Cruise', desc: 'Board a luxury catamaran. Swim in the hot springs, snorkel off the Red Beach, and enjoy a delicious BBQ lunch on board while watching the sunset.' },
                { day: 4, title: 'Akrotiri & Wine Tasting', desc: 'Explore the fascinating Minoan Bronze Age ruins of Akrotiri with an expert historian, followed by a private tasting at a top volcanic winery.' },
                { day: 5, title: 'Black Sand Beach & Leisure', desc: 'Spend the day relaxing on the volcanic black sands of Kamari Beach, or explore the local shops and cafes at your own pace.' },
                { day: 6, title: 'Traditional Villages Tour', desc: 'Visit Pyrgos, the highest village on the island, and Megalochori, known for its historic mansions, bell towers, and vineyard paths.' },
                { day: 7, title: 'Departure', desc: 'Enjoy a final breakfast overlooking the caldera before your private transfer to the airport for your departure flight.' }
            ]
        },

        'paris': {
            title: 'European City Explorer',
            location: 'Paris, France',
            duration: '9 Days - 8 Nights',
            price: '$899',
            stars: '5.0',
            reviews: '210 reviews',
            mapCenter: [48.8566, 2.3522],
            mapZoom: 13,
            heroDesc: 'Immerse yourself in art, fashion, gastronomy, and the unmatched romance of the City of Light.',
            introDesc: 'Discover the iconic sights of Paris. From the heights of the Eiffel Tower to the masterpieces of the Louvre, stroll along the Seine and experience the historic charm of Montmartre.',
            overview: 'This comprehensive 9-day tour brings Paris to life. Walk past historic landmarks with our expert art historians, cruise the Seine River under illuminated bridges, visit the majestic Palace of Versailles, and savor authentic French pastries. We handle the museum queues and logistics so you can live like a Parisian.',
            facts: [
                { label: 'Departure', value: 'Charles de Gaulle (CDG)' },
                { label: 'Group Size', value: '6 - 10 People' },
                { label: 'Tour Guide', value: 'English, French' },
                { label: 'Difficulty', value: 'Easy' },
                { label: 'Min Age', value: '6+ Years' }
            ],
            highlights: [
                'Louvre & Musee d\'Orsay Fast-Pass',
                'Eiffel Tower Summit Access',
                'Seine River Dinner Cruise',
                'Day Trip to Palace of Versailles'
            ],
            included: [
                '8 nights in central 4-star hotels',
                'Daily gourmet breakfast & 2 dinners',
                'Unlimited Paris Metro & RER travel pass',
                'Skip-the-line museum tickets',
                'Expert local art historian guide'
            ],
            excluded: [
                'International flights to Paris',
                'Lunch meals & beverage supplements',
                'Tips for guides and hotel staff',
                'Optional cabaret and theater shows'
            ],
            images: [
                'images/dubai.png',
                'images/thumb1.jpg',
                'images/thumb2.jpg',
                'images/thumb3.jpg',
                'images/thumb4.jpg',
                'images/thumb5.jpg'
            ],
            itinerary: [
                { day: 1, title: 'Bienvenue a Paris', desc: 'Arrive in Paris, transfer to your hotel. Relax before meeting your guide for an evening champagne toast near the Eiffel Tower.' },
                { day: 2, title: 'Montmartre & Sacre-Coeur Walk', desc: 'Explore the cobbled lanes of the artistic Montmartre neighborhood, visit the Sacre-Coeur Basilica, and see where Picasso lived.' },
                { day: 3, title: 'Louvre Museum Treasures', desc: 'Skip the queues for a guided tour of the Louvre, including the Mona Lisa, Venus de Milo, and French masterpieces.' },
                { day: 4, title: 'Eiffel Tower & Seine Cruise', desc: 'Ascend to the top summit of the Eiffel Tower for panoramic city views. In the evening, enjoy a 3-course dinner cruise on the Seine.' },
                { day: 5, title: 'Latin Quarter & Notre Dame', desc: 'Stroll through the historic Latin Quarter, see the restoration of Notre Dame, and explore the iconic Shakespeare and Company bookstore.' },
                { day: 6, title: 'Versailles Palace Excursion', desc: 'Take the train to the golden Palace of Versailles. Guided tour of the State Apartments, Hall of Mirrors, and vast gardens.' },
                { day: 7, title: 'Musee d\'Orsay & Marais Walk', desc: 'Admire impressionist masterpieces at the Musee d\'Orsay, followed by a trendy food tour of the historic Marais district.' },
                { day: 8, title: 'Leisurely Shopping & Farewell Dinner', desc: 'Enjoy a free day for shopping at Galeries Lafayette or visiting cafes. Gather for a gourmet farewell dinner in a Belle Epoque bistro.' },
                { day: 9, title: 'Au Revoir', desc: 'Transfer to Charles de Gaulle Airport for your flight home.' }
            ]
        },
        'bali': {
            title: 'Tropical Island Getaway',
            location: 'Ubud & Seminyak, Bali',
            duration: '7 Days - 6 Nights',
            price: '$450',
            stars: '4.6',
            reviews: '98 reviews',
            mapCenter: [-8.4095, 115.1889],
            mapZoom: 10,
            heroDesc: 'Escape to lush green rice terraces, majestic temples, white sand beaches, and peaceful yoga retreats.',
            introDesc: 'Indulge in the spiritual and natural beauty of Bali. Wander Ubud\'s sacred monkey forest, witness sunset at Tanah Lot, relax on beautiful beaches, and explore volcanic lakes.',
            overview: 'Our Tropical Island Getaway is designed to rejuvenate your body and mind. Spend three nights in the cultural heart of Ubud, surrounded by rice fields and temples, and three nights in the beachfront paradise of Seminyak. With massage treatments, local cooking classes, and private transport included, this is the ultimate Bali escape.',
            facts: [
                { label: 'Departure', value: 'Ngurah Rai (DPS)' },
                { label: 'Group Size', value: '4 - 8 People' },
                { label: 'Tour Guide', value: 'English, Indonesian' },
                { label: 'Difficulty', value: 'Easy' },
                { label: 'Min Age', value: '10+ Years' }
            ],
            highlights: [
                'Ubud Sacred Monkey Forest & Market',
                'Tanah Lot Sunset Temple Tour',
                'Balinese Cooking Class & Lunch',
                'Traditional Spa & Massage Treatment'
            ],
            included: [
                '6 nights in private villa resorts with pools',
                'Daily breakfast, 2 lunches, & 1 dinner',
                'Private AC vehicle for all transfers',
                '60-minute traditional Balinese spa massage',
                'Local cooking class and temple fees'
            ],
            excluded: [
                'International flights to Bali',
                'Drinks and dinner meals not specified',
                'Tips for driver and local tour guides',
                'Visa on arrival fee'
            ],
            images: [
                'images/Maldives.png',
                'images/thumb1.jpg',
                'images/thumb2.jpg',
                'images/thumb3.jpg',
                'images/thumb4.jpg',
                'images/thumb5.jpg'
            ],
            itinerary: [
                { day: 1, title: 'Arrival & Ubud Oasis', desc: 'Arrive in Bali. Meet your private driver and transfer to your luxury jungle resort in Ubud. Relax by the pool.' },
                { day: 2, title: 'Monkey Forest & Rice Terraces', desc: 'Visit Ubud Monkey Forest, walk through Tegallalang Rice Terraces, and swing over the jungle canopy.' },
                { day: 3, title: 'Temple Purification & Cooking Class', desc: 'Experience a traditional water blessing at Tirta Empul Temple, followed by a hands-on Balinese cooking class.' },
                { day: 4, title: 'Transfer to Seminyak & Tanah Lot', desc: 'Drive to the coastal town of Seminyak. En route, visit the spectacular Tanah Lot sea temple for sunset.' },
                { day: 5, title: 'Beach Day & Sunset Cocktails', desc: 'Relax on Seminyak beach. Enjoy a complimentary 60-minute Balinese massage, and watch sunset at a beach club.' },
                { day: 6, title: 'Uluwatu Cliffs & Kecak Dance', desc: 'Visit the dramatic Uluwatu Temple perched on a 70m cliff, and watch the mesmerizing Kecak Fire Dance at sunset.' },
                { day: 7, title: 'Departure', desc: 'Leisurely breakfast. Private transfer to Denpasar Airport for your departure flight.' }
            ]
        },
        'kyoto': {
            title: 'Kyoto Cultural Immersion',
            location: 'Kyoto & Tokyo, Japan',
            duration: '10 Days - 9 Nights',
            price: '$550',
            stars: '4.9',
            reviews: '167 reviews',
            mapCenter: [35.0116, 135.7681],
            mapZoom: 11,
            heroDesc: 'Journey through centuries of history, exploring gold-leaf temples, bamboo forests, and tea houses.',
            introDesc: 'Experience the contrasts of Japan. Ride the high-speed Shinkansen bullet train, walk through Fushimi Inari\'s thousands of red torii gates, and discover Tokyo\'s modern neon streets.',
            overview: 'This immersive 10-day tour uncovers the cultural soul of Japan. Walk with a licensed local guide through historic geisha districts, stay in a traditional Japanese ryokan, sample fresh sushi, and experience a matcha tea ceremony. Perfect for history lovers and urban explorers alike.',
            facts: [
                { label: 'Departure', value: 'Haneda Airport (HND)' },
                { label: 'Group Size', value: '8 - 14 People' },
                { label: 'Tour Guide', value: 'English, Japanese' },
                { label: 'Difficulty', value: 'Moderate' },
                { label: 'Min Age', value: '8+ Years' }
            ],
            highlights: [
                'Fushimi Inari Torii Gate Path',
                'Bullet Train from Tokyo to Kyoto',
                'Kinkaku-ji Golden Pavilion',
                'Authentic Matcha Tea Ceremony'
            ],
            included: [
                '9 nights in premium hotels and 1 night ryokan',
                'Daily breakfast & 3 specialty dinners',
                '7-Day JR Rail Pass for bullet trains',
                'Local English-speaking Japanese guides',
                'All temple entrance fees'
            ],
            excluded: [
                'International flights to Japan',
                'Lunch meals & daily pocket WiFi rental',
                'Luggage forwarding services between cities',
                'Tips (tipping is not customary in Japan)'
            ],
            images: [
                'images/japan.png',
                'images/thumb1.jpg',
                'images/thumb2.jpg',
                'images/thumb3.jpg',
                'images/thumb4.jpg',
                'images/thumb5.jpg'
            ],
            itinerary: [
                { day: 1, title: 'Welcome to Tokyo', desc: 'Arrive in Tokyo. Check in to your central hotel. Gather for a welcome dinner in an Izakaya tavern.' },
                { day: 2, title: 'Modern Tokyo Highlights', desc: 'Explore Shibuya Crossing, the Meiji Shrine, and the ultra-modern shops of Harajuku and Ginza.' },
                { day: 3, title: 'Historic Asakusa & Skytree', desc: 'Visit Tokyo\'s oldest temple, Senso-ji, in Asakusa. Enjoy panoramic views from Tokyo Skytree.' },
                { day: 4, title: 'Bullet Train to Kyoto', desc: 'Board the Shinkansen Bullet Train. Fly past Mt. Fuji at 320 km/h. Arrive in Kyoto and check in to your ryokan.' },
                { day: 5, title: 'Golden Pavilion & Bamboo Forest', desc: 'Visit Kinkaku-ji Temple, completely covered in gold leaf. Stroll through the towering Arashiyama Bamboo Grove.' },
                { day: 6, title: 'Fushimi Inari Shrine', desc: 'Walk under the 10,000 vermilion torii gates winding up the sacred mountain. In the evening, explore Gion geisha district.' },
                { day: 7, title: 'Nara Deer Park Day Trip', desc: 'Travel to Nara. See the Great Buddha at Todai-ji Temple and feed the friendly bowing deer in the park.' },
                { day: 8, title: 'Matcha Tea Ceremony & Castle Tour', desc: 'Participate in a private traditional tea ceremony, then explore Nijo Castle, famous for its nightingale squeaking floors.' },
                { day: 9, title: 'Tokyo Return & Farewell Sushi Feast', desc: 'Bullet train back to Tokyo. Free afternoon for last-minute shopping. Farewell sushi feast at a top Tsukiji restaurant.' },
                { day: 10, title: 'Sayonara', desc: 'Private airport shuttle transfer to Haneda Airport for your departure flight.' }
            ]
        },
        'rome': {
            title: 'Colosseum & Roman History',
            location: 'Rome & Florence, Italy',
            duration: '6 Days - 5 Nights',
            price: '$299',
            stars: '4.8',
            reviews: '112 reviews',
            mapCenter: [41.8902, 12.4922],
            mapZoom: 13,
            heroDesc: 'Walk in the footsteps of emperors, exploring the Vatican Museums, the Roman Forum, and historic Tuscany.',
            introDesc: 'Immerse yourself in Italy\'s eternal city. Discover the Colosseum and Roman Forum, visit St. Peter\'s Basilica, toss a coin in Trevi Fountain, and enjoy a day trip to Florence.',
            overview: 'Our Colosseum & Roman History tour brings the ancient empire back to life. With skip-the-line VIP tickets to all main ruins, expert archaeologists as guides, and central hotels, you\'ll experience Rome in maximum comfort. Top it off with fresh handmade pasta, gelato tastings, and a scenic train trip through the Tuscan hills.',
            facts: [
                { label: 'Departure', value: 'Fiumicino Airport (FCO)' },
                { label: 'Group Size', value: '8 - 12 People' },
                { label: 'Tour Guide', value: 'English, Italian' },
                { label: 'Difficulty', value: 'Easy' },
                { label: 'Min Age', value: '6+ Years' }
            ],
            highlights: [
                'Colosseum Underground VIP Tour',
                'Vatican Museums & Sistine Chapel',
                'Florence & Michelangelo\'s David',
                'Handmade Pasta & Wine Masterclass'
            ],
            included: [
                '5 nights in central 4-star boutique hotels',
                'Daily breakfast, 1 lunch, & 2 dinners',
                'Skip-the-line entrance tickets to all ruins',
                'High-speed train ticket to Florence',
                'Certified archaeologist tour guides'
            ],
            excluded: [
                'International flights to Rome',
                'City tourist tax (approx. €6 per night)',
                'Optional tours and gratuities',
                'Travel insurance'
            ],
            images: [
                'images/Colosseum.png',
                'images/thumb1.jpg',
                'images/thumb2.jpg',
                'images/thumb3.jpg',
                'images/thumb4.jpg',
                'images/thumb5.jpg'
            ],
            itinerary: [
                { day: 1, title: 'Benvenuti a Roma', desc: 'Arrive in Rome, private transfer to hotel. Meet your archaeologist guide for a piazza and gelato evening walk.' },
                { day: 2, title: 'Colosseum & Roman Forum VIP', desc: 'Step onto the arena floor of the Colosseum with skip-the-line access, then walk the ruins of the Roman Forum.' },
                { day: 3, title: 'Vatican Museums & Sistine Chapel', desc: 'Beat the crowds with early morning VIP entry to the Vatican Museums, St. Peter\'s Basilica, and Michelangelo\'s Sistine Chapel.' },
                { day: 4, title: 'Florence & Renaissance Day Trip', desc: 'Board the high-speed train to Florence. Visit the Accademia Gallery to see Michelangelo\'s David, and walk the Ponte Vecchio.' },
                { day: 5, title: 'Pasta Making & Roman Squares', desc: 'Learn to roll pasta from a local chef in a culinary masterclass, then tour Trevi Fountain, Pantheon, and Piazza Navona.' },
                { day: 6, title: 'Arrivederci Roma', desc: 'Enjoy a final espresso before your private transfer to Rome Fiumicino Airport for your flight home.' }
            ]
        },
        'venice': {
            title: 'Venetian Waterways Romance',
            location: 'Venice, Italy',
            duration: '7 Days - 6 Nights',
            price: '$350',
            stars: '4.6',
            reviews: '74 reviews',
            mapCenter: [45.4408, 12.3155],
            mapZoom: 13,
            heroDesc: 'Glide through winding canals in a gondola, marvel at Byzantine basilicas, and explore colorful glass workshops.',
            introDesc: 'Fall in love with the floating city. Cruise past Grand Canal palaces, visit St. Mark\'s Basilica, discover the colorful houses of Burano, and learn glassmaking secrets in Murano.',
            overview: 'Uncover the hidden corners of Venice on this romantic 7-day tour. Perfect for couples and history enthusiasts, this package includes central hotel stays, private water taxi transfers, a classical music concert, and gourmet dinners featuring Venetian lagoon seafood and wine.',
            facts: [
                { label: 'Departure', value: 'Marco Polo Airport (VCE)' },
                { label: 'Group Size', value: '6 - 10 People' },
                { label: 'Tour Guide', value: 'English, Italian' },
                { label: 'Difficulty', value: 'Easy' },
                { label: 'Min Age', value: '12+ Years' }
            ],
            highlights: [
                'Private Gondola Ride with Serenade',
                'Doge\'s Palace Secret Itineraries Tour',
                'Murano Glass & Burano Lace Island Tour',
                'Vivaldi Concert in Historic Church'
            ],
            included: [
                '6 nights in central Venetian lagoon hotels',
                'Daily breakfast & 2 dinners',
                'Vaporetto (water bus) pass for all days',
                'Private water taxi airport transfers',
                'Local historian tour guide'
            ],
            excluded: [
                'International flights to Venice',
                'Lunches and daily snacks',
                'Gratuities for gondolier and guides',
                'City tourist tax'
            ],
            images: [
                'images/venice.png',
                'images/thumb1.jpg',
                'images/thumb2.jpg',
                'images/thumb3.jpg',
                'images/thumb4.jpg',
                'images/thumb5.jpg'
            ],
            itinerary: [
                { day: 1, title: 'Arrival by Private Water Taxi', desc: 'Land in Venice, board a private water taxi directly to your canal-side hotel. Evening welcome prosecco.' },
                { day: 2, title: 'St. Mark\'s & Doge\'s Palace', desc: 'Tour the spectacular golden St. Mark\'s Basilica and the Doge\'s Palace, crossing the Bridge of Sighs.' },
                { day: 3, title: 'Murano & Burano Islands Cruise', desc: 'Take a private boat to Murano to watch glass blowing, then Burano to see colorful fishermen houses and lace workshops.' },
                { day: 4, title: 'Gondola Ride & Vivaldi Concert', desc: 'Glide down peaceful side canals in a gondola, followed by a chamber orchestra concert playing Vivaldi\'s Four Seasons.' },
                { day: 5, title: 'Rialto Food Tour & Market Walk', desc: 'Sample cicchetti (Venetian tapas) and local wines on a guided walk of the centuries-old Rialto fish market.' },
                { day: 6, title: 'Venetian Lagoon Sailing', desc: 'Spend a relaxing day sailing the northern lagoon, stopping at Torcello island to see Byzantine mosaics.' },
                { day: 7, title: 'Departure', desc: 'Say goodbye to Venice as you ride a private water taxi back to Marco Polo Airport for your departure flight.' }
            ]
        },
        'spain': {
            title: 'Spanish Heritage Tour',
            location: 'Madrid & Seville, Spain',
            duration: '9 Days - 8 Nights',
            price: '$699',
            stars: '4.7',
            reviews: '89 reviews',
            mapCenter: [40.4168, -3.7038],
            mapZoom: 12,
            heroDesc: 'Savor tapas in Madrid, witness authentic flamenco in Seville, and tour majestic palaces in Andalusia.',
            introDesc: 'Experience the passion of Spain. Explore the Royal Palace of Madrid, ride the high-speed AVE train to Seville, visit the ancient Alcazar, and enjoy delicious culinary food tours.',
            overview: 'Immerse yourself in Spain\'s rich heritage. This 9-day guided journey connects the royal history of Madrid with the Moorish charm of Andalusia. With skip-the-line palace tickets, a flamenco performance in a historic Seville courtyard, and daily tapas tastings, you\'ll feel the heartbeat of Spain.',
            facts: [
                { label: 'Departure', value: 'Madrid Barajas (MAD)' },
                { label: 'Group Size', value: '8 - 14 People' },
                { label: 'Tour Guide', value: 'English, Spanish' },
                { label: 'Difficulty', value: 'Easy' },
                { label: 'Min Age', value: '8+ Years' }
            ],
            highlights: [
                'Madrid Royal Palace Skip-the-Line',
                'High-speed AVE Train to Seville',
                'Seville Cathedral & Alcazar Tour',
                'Live Flamenco Show & Tapas Crawl'
            ],
            included: [
                '8 nights in central 4-star hotels',
                'Daily breakfast & 3 dinners (including Tapas)',
                'AVE high-speed train tickets in Spain',
                'Entrance fees to Alcazar and Royal Palace',
                'Certified bilingual guides'
            ],
            excluded: [
                'International airfares to Madrid',
                'Lunches and beverages not specified',
                'Tips for driver and local guides',
                'Travel insurance'
            ],
            images: [
                'images/madrid.png',
                'images/thumb1.jpg',
                'images/thumb2.jpg',
                'images/thumb3.jpg',
                'images/thumb4.jpg',
                'images/thumb5.jpg'
            ],
            itinerary: [
                { day: 1, title: 'Arrival in Madrid', desc: 'Arrive in Madrid, transfer to hotel. In the evening, join your guide for a walking tour of Plaza Mayor and welcome tapas.' },
                { day: 2, title: 'Royal Palace & Prado Museum', desc: 'Skip the queues for a guided tour of the stunning Royal Palace of Madrid and the famous Prado Museum.' },
                { day: 3, title: 'Historic Toledo Day Trip', desc: 'Travel to Toledo, the city of three cultures. See medieval synagogues, cathedrals, and Moorish bridges.' },
                { day: 4, title: 'High-speed Train to Seville', desc: 'Board the AVE train to Seville. In the evening, experience a live Flamenco show in the historic Santa Cruz quarter.' },
                { day: 5, title: 'Seville Alcazar & Giralda', desc: 'Tour the royal palace of Alcazar, a masterpiece of Mudejar architecture, and climb the Giralda tower of Seville Cathedral.' },
                { day: 6, title: 'Cordoba Mezquita Excursion', desc: 'Day trip to Cordoba. Walk the striped arches of the ancient Mosque-Cathedral and tour the floral courtyards.' },
                { day: 7, title: 'Seville River Walk & Leisure', desc: 'Stroll along the Guadalquivir river, visit the Plaza de España, and enjoy a free afternoon for shopping.' },
                { day: 8, title: 'Madrid Return & Farewell Dinner', desc: 'Train back to Madrid. Free afternoon. Gather for a spectacular farewell paella dinner.' },
                { day: 9, title: 'Departure', desc: 'Private transfer to Madrid Airport for your flight back home.' }
            ]
        },
        'london': {
            title: 'London Royal Highlights',
            location: 'London, United Kingdom',
            duration: '8 Days - 7 Nights',
            price: '$799',
            stars: '4.8',
            reviews: '103 reviews',
            mapCenter: [51.5074, -0.1278],
            mapZoom: 12,
            heroDesc: 'Discover royal palaces, historical towers, world-class theaters, and the vibrant life of London.',
            introDesc: 'Experience the magic of London. Walk past Big Ben, tour the Tower of London, watch a West End show, take a flight on the London Eye, and cruise down the River Thames.',
            overview: 'Our London Royal Highlights tour offers the perfect introduction to the UK\'s capital. With central accommodation, Oyster cards for public transport, skip-the-line entry to top historical sights, and traditional afternoon tea included, it\'s the ultimate British getaway.',
            facts: [
                { label: 'Departure', value: 'London Heathrow (LHR)' },
                { label: 'Group Size', value: '10 - 15 People' },
                { label: 'Tour Guide', value: 'English' },
                { label: 'Difficulty', value: 'Easy' },
                { label: 'Min Age', value: '6+ Years' }
            ],
            highlights: [
                'Tower of London & Crown Jewels Tour',
                'London Eye Ride & Thames Cruise',
                'Traditional Afternoon Tea at Ritz',
                'West End Theater Show Tickets'
            ],
            included: [
                '7 nights in central London hotels',
                'Daily British breakfast & 2 dinners',
                'Pre-loaded Oyster Card for Tube travel',
                'Entrance tickets to Tower of London and London Eye',
                'Professional city tour guides'
            ],
            excluded: [
                'International flights to London',
                'Lunches and dinners not listed',
                'Theater drink supplements',
                'Personal travel insurance'
            ],
            images: [
                'images/london.png',
                'images/thumb1.jpg',
                'images/thumb2.jpg',
                'images/thumb3.jpg',
                'images/thumb4.jpg',
                'images/thumb5.jpg'
            ],
            itinerary: [
                { day: 1, title: 'Welcome to Great Britain', desc: 'Arrive at Heathrow Airport, private transfer to hotel. Evening orientation tour and welcome pub dinner.' },
                { day: 2, title: 'Westminster Walk & London Eye', desc: 'See Westminster Abbey, Big Ben, and Buckingham Palace. Enjoy a flight on the iconic London Eye.' },
                { day: 3, title: 'Tower of London & Crown Jewels', desc: 'Explore the historic Tower of London, see the Crown Jewels, and take a cruise down the River Thames.' },
                { day: 4, title: 'British Museum & Afternoon Tea', desc: 'Guided tour of the highlights of the British Museum, followed by a traditional Afternoon Tea with scones and clotted cream.' },
                { day: 5, title: 'Windsor Castle Day Trip', desc: 'Take the train to Windsor and tour Windsor Castle, the oldest and largest occupied castle in the world.' },
                { day: 6, title: 'London West End Theater Night', desc: 'Enjoy a free morning in Covent Garden, and attend an award-winning musical show in London\'s West End in the evening.' },
                { day: 7, title: 'Kensington Palaces & Gardens', desc: 'Stroll through Kensington Gardens, visit Kensington Palace, and shop at the world-famous Harrods store.' },
                { day: 8, title: 'Cheerio London', desc: 'Private transfer from your hotel to Heathrow Airport for your departure flight.' }
            ]
        },
        'swiss-alps': {
            title: 'Swiss Alps Discovery',
            location: 'Interlaken & Zermatt, Switzerland',
            duration: '8 Days - 7 Nights',
            price: '$120',
            stars: '4.5',
            reviews: '124 reviews',
            mapCenter: [46.6863, 7.8632],
            mapZoom: 11,
            heroDesc: 'Embark on a high-altitude adventure through snowy peaks, green valleys, and pristine glacial lakes.',
            introDesc: 'Explore the spectacular Swiss Alps. Ride the famous Glacier Express, visit the Top of Europe at Jungfraujoch, stay in charming Alpine chalets, and admire the majestic Matterhorn.',
            overview: 'Prepare for the ultimate mountain experience. This 8-day itinerary takes you from the beautiful lakeside city of Lucerne to the heart of the Bernese Oberland in Interlaken, and finally to the car-free mountain village of Zermatt. With guided hikes, railway passes, and cozy local accommodations included, it\'s the easiest way to experience Switzerland\'s grandest wonders.',
            facts: [
                { label: 'Departure', value: 'Zurich Airport (ZRH)' },
                { label: 'Group Size', value: '10 - 15 People' },
                { label: 'Tour Guide', value: 'English, German' },
                { label: 'Difficulty', value: 'Moderate' },
                { label: 'Min Age', value: '8+ Years' }
            ],
            highlights: [
                'Glacier Express Panoramic Ride',
                'Jungfraujoch - Top of Europe',
                'Lucerne Chapel Bridge & Lake Cruise',
                'Zermatt & Matterhorn Views'
            ],
            included: [
                '7 nights in cozy Alpine chalets/hotels',
                'Daily buffet breakfast & 3 dinners',
                'Swiss Travel Pass for train transportation',
                'Cogwheel train tickets to Jungfraujoch',
                'Certified mountain and city guides'
            ],
            excluded: [
                'International flights to Zurich',
                'Lunch meals & alcoholic beverages',
                'Optional adventure activities (e.g. paragliding)',
                'Personal outdoor gear and insurance'
            ],
            images: [
                'images/Swiss_Alps.png',
                'images/thumb1.jpg',
                'images/thumb2.jpg',
                'images/thumb3.jpg',
                'images/thumb4.jpg',
                'images/thumb5.jpg'
            ],
            itinerary: [
                { day: 1, title: 'Arrival in Zurich & Transfer to Lucerne', desc: 'Land in Zurich and board the scenic train directly to Lucerne. Walk the historic Chapel Bridge and enjoy a lakeside dinner.' },
                { day: 2, title: 'Mount Pilatus Golden Roundtrip', desc: 'Take a boat ride across Lake Lucerne, ascend Mt. Pilatus on the steepest cogwheel railway, and descend via cable car.' },
                { day: 3, title: 'Lauterbrunnen Valley & Interlaken', desc: 'Travel to Interlaken and explore the gorgeous Lauterbrunnen Valley, known as the valley of 72 waterfalls. Overnight in Interlaken.' },
                { day: 4, title: 'Jungfraujoch - Top of Europe', desc: 'Ride the modern Eiger Express and historical cogwheel train to the highest train station in Europe. Experience the Ice Palace.' },
                { day: 5, title: 'Glacier Express Scenic Journey', desc: 'Board the world-famous Glacier Express. Enjoy a 3-course lunch in your panoramic seat as you travel through gorges and passes to Zermatt.' },
                { day: 6, title: 'Matterhorn Views & Gornergrat Railway', desc: 'Ascend the Gornergrat cogwheel train for spectacular panoramas of the Matterhorn and the surrounding 29 peaks above 4,000 meters.' },
                { day: 7, title: 'Alpine Village Leisure', desc: 'Spend a relaxing day exploring the boutiques of car-free Zermatt, visiting the Matterhorn Museum, or going on an optional hike.' },
                { day: 8, title: 'Departure via Zurich', desc: 'Board the morning train back to Zurich Airport for your departure flight.' }
            ]
        }
    };

    // 2. Parse URL Query Parameters to find Package ID
    const urlParams = new URLSearchParams(window.location.search);
    const packageId = urlParams.get('id') || 'grand-canyon';
    const pkg = packagesData[packageId] || packagesData['grand-canyon'];

    // 3. Populate Page Metadata & Text Elements
    document.title = pkg.title + ' - TravelNest';
    
    const breadcrumbActive = document.getElementById('breadcrumbActive');
    if (breadcrumbActive) breadcrumbActive.textContent = pkg.title;

    const heroDesc = document.getElementById('heroDesc');
    if (heroDesc) heroDesc.textContent = pkg.heroDesc;

    const introDesc = document.getElementById('introDesc');
    if (introDesc) introDesc.textContent = pkg.introDesc;

    const packageTitle = document.getElementById('packageTitle');
    if (packageTitle) packageTitle.textContent = pkg.title;

    const packageLocation = document.getElementById('packageLocation');
    if (packageLocation) packageLocation.textContent = pkg.location;

    // Sync Price
    const priceElements = document.querySelectorAll('.tn-package-price');
    priceElements.forEach(el => {
        el.textContent = pkg.price;
    });

    // Sync Duration
    const durationElements = document.querySelectorAll('.tn-package-duration');
    durationElements.forEach(el => {
        el.textContent = pkg.duration;
    });

    // Sync Stars
    const starsContainer = document.getElementById('starsContainer');
    if (starsContainer) {
        const rating = parseFloat(pkg.stars);
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        let starsHtml = '';
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                starsHtml += '<i class="fas fa-star"></i>';
            } else if (i === fullStars && halfStar) {
                starsHtml += '<i class="fas fa-star-half-alt"></i>';
            } else {
                starsHtml += '<i class="far fa-star"></i>';
            }
        }
        starsContainer.innerHTML = starsHtml;
    }

    const reviewCount = document.getElementById('reviewCount');
    if (reviewCount) reviewCount.textContent = pkg.reviews;

    const overviewParagraph = document.getElementById('overviewParagraph');
    if (overviewParagraph) overviewParagraph.innerHTML = pkg.overview;

    // 4. Render Gallery Images
    const mainImage = document.getElementById('tnMainGalleryImage');
    if (mainImage && pkg.images && pkg.images.length > 0) {
        mainImage.setAttribute('src', pkg.images[0]);
    }

    const thumbnailsRow = document.querySelector('.tn-gallery-thumbnails-row');
    if (thumbnailsRow && pkg.images) {
        thumbnailsRow.innerHTML = '';
        pkg.images.forEach((imgSrc, idx) => {
            const col = document.createElement('div');
            col.className = 'tn-gallery-thumbnail rounded-3 overflow-hidden' + (idx === 0 ? ' active' : '');
            col.setAttribute('data-img-src', imgSrc);
            col.innerHTML = `<img src="${imgSrc}" alt="Gallery image ${idx + 1}" class="tn-hover-zoom">`;
            thumbnailsRow.appendChild(col);
        });

        // Set up event listeners for the new thumbnails
        const thumbnails = document.querySelectorAll('.tn-gallery-thumbnail');
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                const newSrc = this.getAttribute('data-img-src');
                if (!newSrc || mainImage.getAttribute('src') === newSrc) return;

                mainImage.style.opacity = '0';
                setTimeout(() => {
                    mainImage.setAttribute('src', newSrc);
                    mainImage.style.opacity = '1';
                }, 200);

                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // 5. Render Quick Facts
    const factsContainer = document.getElementById('factsContainer');
    if (factsContainer && pkg.facts) {
        factsContainer.innerHTML = '';
        pkg.facts.forEach(fact => {
            const div = document.createElement('div');
            div.className = 'd-flex align-items-center justify-content-between';
            div.innerHTML = `
                <span class="text-secondary tn-fs-sm">${fact.label}</span>
                <span class="fw-medium text-dark tn-fs-sm">${fact.value}</span>
            `;
            factsContainer.appendChild(div);
        });
    }

    // 6. Render Highlights
    const highlightsContainer = document.getElementById('highlightsContainer');
    if (highlightsContainer && pkg.highlights) {
        highlightsContainer.innerHTML = '';
        pkg.highlights.forEach((highlight, idx) => {
            const isLast = idx === pkg.highlights.length - 1;
            const div = document.createElement('div');
            div.className = 'd-flex gap-3 ' + (isLast ? 'mb-4' : 'mb-3');
            
            // Icon selection based on index to look rich and varied
            let iconClass = 'fa-compass';
            if (idx === 0) iconClass = 'fa-compass';
            else if (idx === 1) iconClass = 'fa-utensils';
            else if (idx === 2) iconClass = 'fa-landmark';
            else iconClass = 'fa-camera-retro';

            div.innerHTML = `
                <i class="fas ${iconClass} tn-color-green fs-5 mt-1"></i>
                <div>
                    <h6 class="fw-bold mb-1 tn-fs-sm">${highlight}</h6>
                    <span class="text-secondary tn-fs-xs">Included in standard tour package</span>
                </div>
            `;
            highlightsContainer.appendChild(div);
        });
    }

    // 7. Render What's Included / Excluded
    const includedList = document.getElementById('includedList');
    if (includedList && pkg.included) {
        includedList.innerHTML = '';
        pkg.included.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-check text-success me-2"></i> ${item}`;
            includedList.appendChild(li);
        });
    }

    const excludedList = document.getElementById('excludedList');
    if (excludedList && pkg.excluded) {
        excludedList.innerHTML = '';
        pkg.excluded.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-times text-danger me-2"></i> ${item}`;
            excludedList.appendChild(li);
        });
    }

    // 8. Render Day-by-Day Itinerary Accordion
    const itineraryAccordion = document.getElementById('itineraryAccordion');
    if (itineraryAccordion && pkg.itinerary) {
        itineraryAccordion.innerHTML = '';
        pkg.itinerary.forEach((day, idx) => {
            const isFirst = idx === 0;
            const itemDiv = document.createElement('div');
            itemDiv.className = 'accordion-item border border-light-subtle rounded-4 overflow-hidden mb-3';
            itemDiv.innerHTML = `
                <h2 class="accordion-header" id="headingDay${day.day}">
                    <button class="accordion-button ${isFirst ? '' : 'collapsed'} fw-bold text-dark py-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDay${day.day}" aria-expanded="${isFirst ? 'true' : 'false'}" aria-controls="collapseDay${day.day}">
                        <span class="badge text-white tn-bg-green rounded-pill px-3 py-1 me-3">Day ${day.day}</span>
                        ${day.title}
                    </button>
                </h2>
                <div id="collapseDay${day.day}" class="accordion-collapse collapse ${isFirst ? 'show' : ''}" aria-labelledby="headingDay${day.day}" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body text-secondary tn-fs-md lh-lg">
                        ${day.desc}
                    </div>
                </div>
            `;
            itineraryAccordion.appendChild(itemDiv);
        });
    }

    // 9. Initialize Leaflet Map centered on package coordinates
    if (pkg.mapCenter) {
        const map = L.map('packageMap', {
            center: pkg.mapCenter,
            zoom: pkg.mapZoom,
            scrollWheelZoom: false
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        L.marker(pkg.mapCenter).addTo(map)
            .bindPopup(`<strong class="tn-text-brand-dark">${pkg.title}</strong><br>${pkg.location}`)
            .openPopup();
    }

    // 10. Save / Favorite Button Interaction
    const saveBtn = document.getElementById('tnSaveBtn');
    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            const textSpan = this.querySelector('.save-text');
            
            icon.style.transform = 'scale(1.3)';
            setTimeout(() => {
                icon.style.transform = 'scale(1)';
            }, 200);

            if (icon.classList.contains('far')) {
                icon.className = 'fas fa-heart text-danger';
                textSpan.textContent = 'Saved';
                this.classList.add('border-danger-subtle');
            } else {
                icon.className = 'far fa-heart';
                textSpan.textContent = 'Save';
                this.classList.remove('border-danger-subtle');
            }
        });
    }
});
