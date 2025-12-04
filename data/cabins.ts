export interface Cabin {
    id: string;
    name: string;
    tagline: string;
    price: {
        amount: number;
        currency: string;
        period: string;
        taxInfo: string;
        discount?: {
            originalAmount: number;
            label: string;
        };
    };
    rating: {
        stars: number;
        count: number;
    };
    availability: {
        status: "Available Today" | "High Demand" | "Booked";
        label: string;
    };
    images: {
        main: string;
        bathroom: string;
        balcony: string;
        night: string;
        exterior: string;
        others: string[];
    };
    description: {
        vibe: string;
        size: string;
        view: string;
    };
    amenities: {
        bedroom: string[];
        bathroom: string[];
        tech: string[];
        comfort: string[];
        food: string[];
    };
    dining: {
        inRoom: boolean;
        breakfast: string;
        bbq: boolean;
    };
    policies: {
        checkIn: string;
        checkOut: string;
        cancellation: string;
        pet: string;
        smoking: string;
        child: string;
    };
    location: {
        highlights: string[];
    };
}

export const cabins: Cabin[] = [
    {
        id: "river-edge-chalet",
        name: "River Edge Luxury Chalet",
        tagline: "Perfect for Couples",
        price: {
            amount: 150,
            currency: "USD",
            period: "Per Night",
            taxInfo: "Taxes & Fees Included",
            discount: {
                originalAmount: 200,
                label: "25% OFF"
            }
        },
        rating: {
            stars: 4.9,
            count: 128
        },
        availability: {
            status: "High Demand",
            label: "Only 1 left!"
        },
        images: {
            main: "/cabin/c1.jpg",
            bathroom: "/cabin/c2.jpeg",
            balcony: "/cabin/c3.jpg",
            night: "/cabin/c4.jpg",
            exterior: "/cabin/c5.jpg",
            others: ["/cabin/c6.jpg", "/cabin/c7.jpg"]
        },
        description: {
            vibe: "Wake up to the soothing sound of the river and enjoy a 180-degree view of the lush bamboo groves right from your bed. Designed for intimacy and peace, this chalet offers a seamless blend of luxury and nature.",
            size: "650 Sq. ft",
            view: "River & Mountain View"
        },
        amenities: {
            bedroom: ["King Size Bed", "Premium Linen", "Wardrobe", "Blackout Curtains"],
            bathroom: ["Hot Water (Rain Shower)", "Hair Dryer", "Luxury Toiletries", "Bathrobes"],
            tech: ["Free High-Speed Wi-Fi", "Smart TV with Netflix", "Bluetooth Speaker"],
            comfort: ["Air Conditioning", "Ceiling Fan", "Mosquito Net", "Seating Area"],
            food: ["Mini Bar", "Tea/Coffee Maker", "Complimentary Water", "Fruit Basket"]
        },
        dining: {
            inRoom: true,
            breakfast: "Included (B&B)",
            bbq: true
        },
        policies: {
            checkIn: "2:00 PM",
            checkOut: "11:00 AM",
            cancellation: "Free cancellation up to 48 hours before check-in",
            pet: "Pets allowed on request (Charges may apply)",
            smoking: "No smoking inside. Designated smoking areas available.",
            child: "Children under 5 stay free."
        },
        location: {
            highlights: [
                "5 mins walk to Nine Arch Bridge",
                "10 mins drive to Little Adam's Peak",
                "15 mins to Ella Town"
            ]
        }
    },
    {
        id: "mountain-view-suite",
        name: "Mountain View Family Suite",
        tagline: "Ideal for Families",
        price: {
            amount: 220,
            currency: "USD",
            period: "Per Night",
            taxInfo: "Taxes & Fees Included"
        },
        rating: {
            stars: 4.8,
            count: 95
        },
        availability: {
            status: "Available Today",
            label: "Book Now"
        },
        images: {
            main: "/cabin/c5.jpg",
            bathroom: "/cabin/c6.jpg",
            balcony: "/cabin/c7.jpg",
            night: "/cabin/c1.jpg",
            exterior: "/cabin/c2.jpeg",
            others: ["/cabin/c3.jpg", "/cabin/c4.jpg"]
        },
        description: {
            vibe: "Experience the grandeur of Ella's mountains from this spacious family suite. With ample room for everyone and a private terrace for stargazing, it's the perfect base for your family adventures.",
            size: "900 Sq. ft",
            view: "Panoramic Mountain View"
        },
        amenities: {
            bedroom: ["2 Queen Beds", "Extra Mattress Available", "Large Wardrobe", "Reading Lights"],
            bathroom: ["Hot Water", "Bathtub", "Hair Dryer", "Family Toiletries"],
            tech: ["Free Wi-Fi", "55\" Smart TV", "International Plugs"],
            comfort: ["Air Conditioning", "Heater", "Lounge Area", "Mosquito Repellents"],
            food: ["Mini Fridge", "Tea/Coffee Station", "Dining Table", "Snack Bar"]
        },
        dining: {
            inRoom: true,
            breakfast: "Included (B&B)",
            bbq: false
        },
        policies: {
            checkIn: "2:00 PM",
            checkOut: "11:00 AM",
            cancellation: "Flexible cancellation",
            pet: "No pets allowed",
            smoking: "No smoking inside.",
            child: "Family friendly amenities available."
        },
        location: {
            highlights: [
                "Walking distance to Ella Rock trail head",
                "Close to Ravana Falls",
                "Quiet neighborhood"
            ]
        }
    },
    {
        id: "bamboo-grove-cabin",
        name: "Bamboo Grove Eco Cabin",
        tagline: "Nature Lovers' Retreat",
        price: {
            amount: 120,
            currency: "USD",
            period: "Per Night",
            taxInfo: "Plus Taxes"
        },
        rating: {
            stars: 4.7,
            count: 210
        },
        availability: {
            status: "Booked",
            label: "Next available: Tomorrow"
        },
        images: {
            main: "/cabin/c3.jpg",
            bathroom: "/cabin/c4.jpg",
            balcony: "/cabin/c2.jpeg",
            night: "/cabin/c5.jpg",
            exterior: "/cabin/c6.jpg",
            others: ["/cabin/c7.jpg", "/cabin/c1.jpg"]
        },
        description: {
            vibe: "Immerse yourself in nature in this eco-friendly cabin surrounded by towering bamboo. The open-air design allows you to feel the cool breeze and hear the sounds of the forest.",
            size: "500 Sq. ft",
            view: "Forest & Garden View"
        },
        amenities: {
            bedroom: ["Queen Bed", "Mosquito Net", "Eco-friendly Linen"],
            bathroom: ["Open-air Shower (Hot Water)", "Organic Toiletries", "Hair Dryer"],
            tech: ["Wi-Fi", "Portable Speaker"],
            comfort: ["Ceiling Fan", "Hammock", "Yoga Mat"],
            food: ["Filtered Water", "Herbal Tea Station"]
        },
        dining: {
            inRoom: true,
            breakfast: "Organic Breakfast Included",
            bbq: true
        },
        policies: {
            checkIn: "1:00 PM",
            checkOut: "10:00 AM",
            cancellation: "Non-refundable",
            pet: "Pet friendly",
            smoking: "Outdoor smoking only.",
            child: "Adults only recommended."
        },
        location: {
            highlights: [
                "Secluded location",
                "Direct access to nature trails",
                "10 mins tuk-tuk to town"
            ]
        }
    },
    {
        id: "sunset-horizon-villa",
        name: "Sunset Horizon Villa",
        tagline: "Luxury & Views",
        price: {
            amount: 280,
            currency: "USD",
            period: "Per Night",
            taxInfo: "All Inclusive"
        },
        rating: {
            stars: 5.0,
            count: 45
        },
        availability: {
            status: "Available Today",
            label: "Premium Choice"
        },
        images: {
            main: "/cabin/c4.jpg",
            bathroom: "/cabin/c2.jpeg",
            balcony: "/cabin/c3.jpg",
            night: "/cabin/c5.jpg",
            exterior: "/cabin/c6.jpg",
            others: ["/cabin/c7.jpg", "/cabin/c1.jpg"]
        },
        description: {
            vibe: "Watch the sun dip below the mountains from your private infinity pool. This villa defines luxury in Ella, offering unmatched privacy, service, and breathtaking vistas.",
            size: "1200 Sq. ft",
            view: "Sunset & Valley View"
        },
        amenities: {
            bedroom: ["Super King Bed", "Walk-in Closet", "Luxury Bedding"],
            bathroom: ["Jacuzzi", "Rain Shower", "Premium Toiletries", "Double Vanity"],
            tech: ["High-Speed Wi-Fi", "Home Theater System", "Smart Home Controls"],
            comfort: ["Central A/C", "Private Pool", "Sun Loungers"],
            food: ["Full Kitchen", "Espresso Machine", "Wine Fridge"]
        },
        dining: {
            inRoom: true,
            breakfast: "Floating Breakfast Available",
            bbq: true
        },
        policies: {
            checkIn: "3:00 PM",
            checkOut: "12:00 PM",
            cancellation: "Free cancellation up to 7 days",
            pet: "Not allowed",
            smoking: "Designated areas only.",
            child: "All ages welcome."
        },
        location: {
            highlights: [
                "Best sunset view point",
                "Private access road",
                "Near tea plantations"
            ]
        }
    },
    {
        id: "ella-rock-hideaway",
        name: "Ella Rock Hideaway",
        tagline: "Adventure Basecamp",
        price: {
            amount: 90,
            currency: "USD",
            period: "Per Night",
            taxInfo: "Taxes Included"
        },
        rating: {
            stars: 4.6,
            count: 320
        },
        availability: {
            status: "Available Today",
            label: "Best Value"
        },
        images: {
            main: "/cabin/c5.jpg",
            bathroom: "/cabin/c6.jpg",
            balcony: "/cabin/c7.jpg",
            night: "/cabin/c1.jpg",
            exterior: "/cabin/c2.jpeg",
            others: ["/cabin/c3.jpg", "/cabin/c4.jpg"]
        },
        description: {
            vibe: "Located at the base of Ella Rock, this cozy hideaway is perfect for hikers and adventurers. Simple, comfortable, and right on the trail, it's your gateway to exploration.",
            size: "400 Sq. ft",
            view: "Rock & Jungle View"
        },
        amenities: {
            bedroom: ["Double Bed", "Bunk Beds", "Lockers"],
            bathroom: ["Hot Water Shower", "Basic Toiletries"],
            tech: ["Free Wi-Fi in Common Area"],
            comfort: ["Fan", "Outdoor Fire Pit", "Hammocks"],
            food: ["Shared Kitchen Access", "Water Refill Station"]
        },
        dining: {
            inRoom: false,
            breakfast: "Available for purchase",
            bbq: true
        },
        policies: {
            checkIn: "12:00 PM",
            checkOut: "10:00 AM",
            cancellation: "24-hour cancellation",
            pet: "Dog friendly",
            smoking: "Allowed in open areas.",
            child: "Suitable for older children."
        },
        location: {
            highlights: [
                "On the Ella Rock trail",
                "Surrounded by nature",
                "15 mins walk to waterfall"
            ]
        }
    }
];
