const resultsData = [
    { name: "ABC Medical", location: "Downtown", address: "123 Main St" },
    { name: "XYZ Stationery", location: "Uptown", address: "456 High St" },
    { name: "City College", location: "Downtown", address: "789 College Ave" },
    { name: "The Bistro", location: "Suburbia", address: "101 Bistro Lane" },
    { name: "Tech Startup", location: "Uptown", address: "202 Tech Blvd" },
];

function showIndoreInfo() {
    document.getElementById('indore-info').style.display = 'block';
    document.getElementById('hotels-info').style.display = 'none';
    document.getElementById('restaurants-info').style.display = 'none';
    document.getElementById('medical-info').style.display = 'none';
    document.getElementById('colleges-info').style.display = 'none';
    // Additional code to load Indore-specific content can be added here
}

function goToGallery() {
    window.location.href = '/gallery.html'; // Change this URL to your gallery page
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Array of hotel objects
const hotels = [
    {
        name: "Hotel Indore Palace",
        address: "123 Main Street, Indore",
        location: "Near Indore Railway Station",
        image: "indore_palace.jpg",
        rating: 4.5,
        mapLink: "https://maps.google.com/?q=Hotel+Indore+Palace"
    },
    {
        name: "Lemon Tree Hotel",
        address: "3 RNT Marg, Indore",
        location: "Near RNT Marg",
        image: "lemon_tree.jpg",
        rating: 4.4,
        mapLink: "https://maps.google.com/?q=Lemon+Tree+Hotel"
    },
    {
        name: "Effotel Hotel",
        address: "Vijay Nagar, Indore",
        location: "Near Brilliant Convention Centre",
        image: "effotel.jpg",
        rating: 4.6,
        mapLink: "https://maps.google.com/?q=Effotel+Hotel"
    },
    {
        name: "Fortune Landmark",
        address: "Adjoining Meghdoot Garden, Indore",
        location: "Near Meghdoot Garden",
        image: "fortune_landmark.jpg",
        rating: 4.3,
        mapLink: "https://maps.google.com/?q=Fortune+Landmark"
    },
    {
        name: "Hotel Amar Vilas",
        address: "MR 10 Road, Indore",
        location: "Near Bombay Hospital",
        image: "amar_vilas.jpg",
        rating: 4.2,
        mapLink: "https://maps.google.com/?q=Hotel+Amar+Vilas"
    },
    {
        name: "Hotel President",
        address: "RNT Marg, Indore",
        location: "Near Chhappan Dukan",
        image: "hotel_president.jpg",
        rating: 4.1,
        mapLink: "https://maps.google.com/?q=Hotel+President"
    },
    {
        name: "Hotel Shreemaya",
        address: "A.B. Road, Indore",
        location: "Near Railway Station",
        image: "shreemaya.jpg",
        rating: 4.5,
        mapLink: "https://maps.google.com/?q=Hotel+Shreemaya"
    },
    {
        name: "Hotel Infiniti",
        address: "Scheme No. 54, Indore",
        location: "Near C21 Mall",
        image: "infiniti.jpg",
        rating: 4.2,
        mapLink: "https://maps.google.com/?q=Hotel+Infiniti"
    },
    {
        name: "Ginger Hotel",
        address: "Chhoti Khajrani, Indore",
        location: "Near Vijay Nagar",
        image: "ginger_hotel.jpg",
        rating: 4.0,
        mapLink: "https://maps.google.com/?q=Ginger+Hotel"
    },
    {
        name: "Hotel Apna Avenue",
        address: "Palasia, Indore",
        location: "Near Palasia Square",
        image: "apna_avenue.jpg",
        rating: 4.3,
        mapLink: "https://maps.google.com/?q=Hotel+Apna+Avenue"
    },
    {
        name: "Hotel Surya",
        address: "MG Road, Indore",
        location: "Near Regal Square",
        image: "surya.jpg",
        rating: 4.0,
        mapLink: "https://maps.google.com/?q=Hotel+Surya"
    },
    {
        name: "Hotel Crown Palace",
        address: "South Tukoganj, Indore",
        location: "Near 56 Dukan",
        image: "crown_palace.jpg",
        rating: 4.1,
        mapLink: "https://maps.google.com/?q=Hotel+Crown+Palace"
    },
    {
        name: "Fairfield by Marriott",
        address: "Ring Road, Indore",
        location: "Near Pipliya Kumar",
        image: "fairfield_marriott.jpg",
        rating: 4.6,
        mapLink: "https://maps.google.com/?q=Fairfield+by+Marriott"
    },
    {
        name: "Radisson Blu Hotel",
        address: "Ring Road, Indore",
        location: "Near Vijay Nagar",
        image: "radisson_blu.jpg",
        rating: 4.8,
        mapLink: "https://maps.google.com/?q=Radisson+Blu+Hotel"
    },
    {
        name: "Sayaji Hotel",
        address: "H-1, Scheme No. 54, Vijaynagar",
        location: "Near Meghdoot Garden",
        image: "sayaji_hotel.jpg",
        rating: 4.7,
        mapLink: "https://maps.google.com/?q=Sayaji+Hotel"
    }
];

function showHotels() {
    document.getElementById('hotels-info').style.display = 'block';
    document.getElementById('indore-info').style.display = 'none';
    document.getElementById('restaurants-info').style.display = 'none';
    document.getElementById('medical-info').style.display = 'none';
    document.getElementById('colleges-info').style.display = 'none';

    const hotelList = document.getElementById('hotel-list');
    hotelList.innerHTML = '';

    hotels.forEach(hotel => {
        const hotelItem = document.createElement('div');
        hotelItem.classList.add('hotel-item');

        hotelItem.innerHTML = `
            <div class="hotel-image">
                <img src="${hotel.image}" alt="${hotel.name}">
            </div>
            <div class="hotel-details">
                <h3>${hotel.name}</h3>
                <p><strong>Address:</strong> ${hotel.address}</p>
                <p><strong>Location:</strong> ${hotel.location}</p>
                <p><strong>Rating:</strong> ${hotel.rating} ⭐</p>
                <a href="${hotel.mapLink}" target="_blank">View on Google Maps</a>
            </div>
        `;

        hotelList.appendChild(hotelItem);
    });
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function showMedical() {
    document.getElementById('medical-info').style.display = 'block';
    document.getElementById('indore-info').style.display = 'none';
    document.getElementById('hotels-info').style.display = 'none';
    document.getElementById('restaurants-info').style.display = 'none';
    document.getElementById('colleges-info').style.display = 'none';
    // Additional code to load medical-specific content can be added here
}



function login() {
    window.location.href = '/login.html'; // Change this URL to your login page
}

function register() {
    window.location.href = '/register.html'; // Change this URL to your registration page
}


function searchByName() {
    const searchName = document.getElementById('searchName').value.toLowerCase();
    const results = resultsData.filter(item => item.name.toLowerCase().includes(searchName));
    displayResults(results);
}

function searchByLocation() {
    const searchLocation = document.getElementById('searchLocation').value.toLowerCase();
    const results = resultsData.filter(item => item.location.toLowerCase().includes(searchLocation));
    displayResults(results, true);
}

function displayResults(results, byLocation = false) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
        return;
    }

    results.forEach((item, index) => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        
        if (byLocation) {
            resultItem.classList.add(`location-color-${(index % 3) + 1}`);
        }

        resultItem.innerHTML = `
            <h2>${item.name}</h2>
            <p>${item.address}</p>
            <p><strong>Location:</strong> ${item.location}</p>
        `;
        
        resultsContainer.appendChild(resultItem);
    });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const restaurants = [
    {
        name: "The Bistro",
        address: "101 Bistro Lane, Indore",
        location: "Downtown",
        image: "the_bistro.jpg",
        rating: 4.6,
        mapLink: "https://maps.google.com/?q=The+Bistro",
        famousFor: "Famous for its eclectic menu and cozy ambiance."
    },
    {
        name: "Foodie's Corner",
        address: "202 Foodie Street, Indore",
        location: "Uptown",
        image: "foodies_corner.jpg",
        rating: 4.4,
        mapLink: "https://maps.google.com/?q=Foodie's+Corner",
        famousFor: "Known for its delicious street food and vibrant atmosphere."
    },
    {
        name: "Spice Route",
        address: "303 Spice Road, Indore",
        location: "Suburbia",
        image: "spice_route.jpg",
        rating: 4.7,
        mapLink: "https://maps.google.com/?q=Spice+Route",
        famousFor: "Specializes in authentic Indian cuisine with a modern twist."
    },
    {
        name: "Cafe Mocha",
        address: "404 Coffee Lane, Indore",
        location: "Downtown",
        image: "cafe_mocha.jpg",
        rating: 4.5,
        mapLink: "https://maps.google.com/?q=Cafe+Mocha",
        famousFor: "Renowned for its gourmet coffee and relaxing atmosphere."
    },
    {
        name: "Tandoori Haven",
        address: "505 Tandoor Street, Indore",
        location: "Uptown",
        image: "tandoori_haven.jpg",
        rating: 4.6,
        mapLink: "https://maps.google.com/?q=Tandoori+Haven",
        famousFor: "Famous for its mouthwatering tandoori dishes."
    },
    {
        name: "The Vegan Eatery",
        address: "606 Vegan Blvd, Indore",
        location: "Downtown",
        image: "vegan_eatery.jpg",
        rating: 4.7,
        mapLink: "https://maps.google.com/?q=The+Vegan+Eatery",
        famousFor: "Popular for its innovative vegan dishes and eco-friendly practices."
    },
    {
        name: "Seafood Delight",
        address: "707 Seafood Street, Indore",
        location: "Suburbia",
        image: "seafood_delight.jpg",
        rating: 4.4,
        mapLink: "https://maps.google.com/?q=Seafood+Delight",
        famousFor: "Known for its fresh seafood and delectable sauces."
    },
    {
        name: "Pasta House",
        address: "808 Pasta Lane, Indore",
        location: "Downtown",
        image: "pasta_house.jpg",
        rating: 4.5,
        mapLink: "https://maps.google.com/?q=Pasta+House",
        famousFor: "Specializes in a variety of pasta dishes with rich flavors."
    },
    {
        name: "Burger Joint",
        address: "909 Burger Blvd, Indore",
        location: "Uptown",
        image: "burger_joint.jpg",
        rating: 4.3,
        mapLink: "https://maps.google.com/?q=Burger+Joint",
        famousFor: "Famous for its gourmet burgers and casual dining experience."
    },
    {
        name: "Sushi World",
        address: "1010 Sushi Street, Indore",
        location: "Downtown",
        image: "sushi_world.jpg",
        rating: 4.8,
        mapLink: "https://maps.google.com/?q=Sushi+World",
        famousFor: "Known for its fresh and authentic sushi dishes."
    },
    {
        name: "Chinese Garden",
        address: "1111 Chinese Lane, Indore",
        location: "Suburbia",
        image: "chinese_garden.jpg",
        rating: 4.4,
        mapLink: "https://maps.google.com/?q=Chinese+Garden",
        famousFor: "Specializes in traditional Chinese cuisine with a garden view."
    },
    {
        name: "Mexican Fiesta",
        address: "1212 Fiesta Road, Indore",
        location: "Uptown",
        image: "mexican_fiesta.jpg",
        rating: 4.6,
        mapLink: "https://maps.google.com/?q=Mexican+Fiesta",
        famousFor: "Famous for its vibrant Mexican dishes and lively atmosphere."
    },
    {
        name: "Indian Flavors",
        address: "1313 Flavors Street, Indore",
        location: "Downtown",
        image: "indian_flavors.jpg",
        rating: 4.7,
        mapLink: "https://maps.google.com/?q=Indian+Flavors",
        famousFor: "Known for its diverse Indian flavors and traditional recipes."
    },
    {
        name: "Grill Master",
        address: "1414 Grill Avenue, Indore",
        location: "Uptown",
        image: "grill_master.jpg",
        rating: 4.5,
        mapLink: "https://maps.google.com/?q=Grill+Master",
        famousFor: "Specializes in grilled meats and hearty portions."
    },
    {
        name: "Bakery Delights",
        address: "1515 Bakery Lane, Indore",
        location: "Suburbia",
        image: "bakery_delights.jpg",
        rating: 4.4,
        mapLink: "https://maps.google.com/?q=Bakery+Delights",
        famousFor: "Known for its delectable pastries and fresh bakes."
    },
    {
        name: "Italian Bistro",
        address: "1616 Italian Street, Indore",
        location: "Downtown",
        image: "italian_bistro.jpg",
        rating: 4.6,
        mapLink: "https://maps.google.com/?q=Italian+Bistro",
        famousFor: "Famous for its classic Italian dishes and romantic setting."
    },
    {
        name: "Healthy Eats",
        address: "1717 Healthy Way, Indore",
        location: "Uptown",
        image: "healthy_eats.jpg",
        rating: 4.5,
        mapLink: "https://maps.google.com/?q=Healthy+Eats",
        famousFor: "Specializes in nutritious and health-conscious meals."
    },
    {
        name: "Dine & Dance",
        address: "1818 Dance Avenue, Indore",
        location: "Suburbia",
        image: "dine_dance.jpg",
        rating: 4.3,
        mapLink: "https://maps.google.com/?q=Dine+%26+Dance",
        famousFor: "Known for its lively atmosphere and dinner entertainment."
    }
];

function showRestaurants() {
    document.getElementById('restaurants-info').style.display = 'block';
    document.getElementById('indore-info').style.display = 'none';
    document.getElementById('hotels-info').style.display = 'none';
    document.getElementById('medical-info').style.display = 'none';
    document.getElementById('colleges-info').style.display = 'none';

    const restaurantList = document.getElementById('restaurant-list');
    restaurantList.innerHTML = '';

    restaurants.forEach(restaurant => {
        const restaurantItem = document.createElement('div');
        restaurantItem.classList.add('restaurant-item');

        restaurantItem.innerHTML = `
            <div class="restaurant-image">
                <img src="${restaurant.image}" alt="${restaurant.name}">
            </div>
            <div class="restaurant-details">
                <h3>${restaurant.name}</h3>
                <p><strong>Address:</strong> ${restaurant.address}</p>
                <p><strong>Location:</strong> ${restaurant.location}</p>
                <p><strong>Rating:</strong> ${restaurant.rating} ⭐</p>
                <p><strong>Famous For:</strong> ${restaurant.famousFor}</p>
                <a href="${restaurant.mapLink}" target="_blank">View on Google Maps</a>
            </div>
        `;

        restaurantList.appendChild(restaurantItem);
    });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const medicalFacilities = [
    {
        name: "MediCare Hospital",
        address: "123 Health St, Indore",
        location: "Near Indore Junction",
        image: "https://example.com/images/medicare.jpg",
        lat: 22.7196, // Example latitude
        lng: 75.8577, // Example longitude
        rating: 4.5,
        degree: "MBBS, MD",
        years: 15,
        owner: "Dr. Ramesh Kumar",
        famousFor: "Advanced Cardiac Care"
    },
    {
        name: "City Clinic",
        address: "456 Wellness Ave, Indore",
        location: "Near Rajwada",
        image: "https://example.com/images/cityclinic.jpg",
        lat: 22.7237,
        lng: 75.8559,
        rating: 4.2,
        degree: "MBBS, DNB",
        years: 10,
        owner: "Dr. Priya Sharma",
        famousFor: "General Health Checkups"
    },
    {
        name: "Indore Med Center",
        address: "789 Cure Rd, Indore",
        location: "Near Lal Baag",
        image: "https://example.com/images/indoremed.jpg",
        lat: 22.7247,
        lng: 75.8590,
        rating: 4.7,
        degree: "MBBS, MS",
        years: 20,
        owner: "Dr. Sanjay Patel",
        famousFor: "Orthopedic Services"
    },
    {
        name: "HealthPlus Clinic",
        address: "321 Relief St, Indore",
        location: "Near Anupam Cinema",
        image: "https://example.com/images/healthplus.jpg",
        lat: 22.7202,
        lng: 75.8510,
        rating: 4.3,
        degree: "MBBS",
        years: 12,
        owner: "Dr. Neha Joshi",
        famousFor: "Pediatric Care"
    },
    {
        name: "Wellness Hub",
        address: "654 Recovery Blvd, Indore",
        location: "Near MG Road",
        image: "https://example.com/images/wellnesshub.jpg",
        lat: 22.7180,
        lng: 75.8600,
        rating: 4.6,
        degree: "MBBS, MD",
        years: 8,
        owner: "Dr. Rajiv Agrawal",
        famousFor: "Diabetes Management"
    },
    {
        name: "Healing Hands",
        address: "987 Healthway, Indore",
        location: "Near Bhamori",
        image: "https://example.com/images/healinghands.jpg",
        lat: 22.7176,
        lng: 75.8608,
        rating: 4.4,
        degree: "MBBS, DNB",
        years: 18,
        owner: "Dr. Sushmita Singh",
        famousFor: "Gynecology"
    },
    {
        name: "CarePlus Hospital",
        address: "543 Wellness Rd, Indore",
        location: "Near Banganga",
        image: "https://example.com/images/careplus.jpg",
        lat: 22.7205,
        lng: 75.8565,
        rating: 4.5,
        degree: "MBBS, MD",
        years: 14,
        owner: "Dr. Arvind Sharma",
        famousFor: "Emergency Services"
    },
    {
        name: "Bright Health Center",
        address: "876 Remedy Lane, Indore",
        location: "Near Chappal Market",
        image: "https://example.com/images/brighthealth.jpg",
        lat: 22.7218,
        lng: 75.8540,
        rating: 4.1,
        degree: "MBBS, MS",
        years: 11,
        owner: "Dr. Neeraj Patel",
        famousFor: "Internal Medicine"
    },
    {
        name: "Advanced Care Clinic",
        address: "234 Cure Avenue, Indore",
        location: "Near IMT",
        image: "https://example.com/images/advancedcare.jpg",
        lat: 22.7194,
        lng: 75.8579,
        rating: 4.8,
        degree: "MBBS, MD",
        years: 13,
        owner: "Dr. Rekha Verma",
        famousFor: "Heart Surgery"
    },
    {
        name: "HealthCare Indore",
        address: "345 Wellness Park, Indore",
        location: "Near Malharganj",
        image: "https://example.com/images/healthcareindore.jpg",
        lat: 22.7250,
        lng: 75.8550,
        rating: 4.6,
        degree: "MBBS",
        years: 9,
        owner: "Dr. Anil Choudhury",
        famousFor: "Kidney Treatment"
    },
    {
        name: "City Health Clinic",
        address: "456 Remedy St, Indore",
        location: "Near Patnipura",
        image: "https://example.com/images/cityhealth.jpg",
        lat: 22.7210,
        lng: 75.8560,
        rating: 4.3,
        degree: "MBBS, DNB",
        years: 16,
        owner: "Dr. Shweta Agrawal",
        famousFor: "Cancer Care"
    },
    {
        name: "Elite Medical Center",
        address: "567 Relief Avenue, Indore",
        location: "Near Rajiv Gandhi Square",
        image: "https://example.com/images/elitemedical.jpg",
        lat: 22.7240,
        lng: 75.8592,
        rating: 4.7,
        degree: "MBBS, MD",
        years: 22,
        owner: "Dr. Manoj Kumar",
        famousFor: "Liver Transplant"
    },
    {
        name: "Prime Care Clinic",
        address: "678 Recovery Road, Indore",
        location: "Near Anand Bazaar",
        image: "https://example.com/images/primecare.jpg",
        lat: 22.7208,
        lng: 75.8535,
        rating: 4.4,
        degree: "MBBS, MS",
        years: 12,
        owner: "Dr. Anita Soni",
        famousFor: "Neurology"
    },
    {
        name: "Healing Touch Hospital",
        address: "789 Health St, Indore",
        location: "Near GPO",
        image: "https://example.com/images/healingtouch.jpg",
        lat: 22.7220,
        lng: 75.8555,
        rating: 4.2,
        degree: "MBBS, DNB",
        years: 10,
        owner: "Dr. Pankaj Sharma",
        famousFor: "Orthopedics"
    },
    {
        name: "Optima Medical Center",
        address: "890 Wellness Lane, Indore",
        location: "Near Pologround",
        image: "https://example.com/images/optimamedical.jpg",
        lat: 22.7190,
        lng: 75.8590,
        rating: 4.5,
        degree: "MBBS",
        years: 14,
        owner: "Dr. Ruchi Patel",
        famousFor: "Diabetes Treatment"
    },
    {
        name: "NextGen Health Clinic",
        address: "901 Cure Street, Indore",
        location: "Near Bhawarkuan",
        image: "https://example.com/images/nextgenhealth.jpg",
        lat: 22.7230,
        lng: 75.8605,
        rating: 4.6,
        degree: "MBBS, MD",
        years: 8,
        owner: "Dr. Alok Yadav",
        famousFor: "Heart Care"
    },
    {
        name: "Apex Care Center",
        address: "234 Relief Street, Indore",
        location: "Near C21 Mall",
        image: "https://example.com/images/apexcare.jpg",
        lat: 22.7255,
        lng: 75.8578,
        rating: 4.8,
        degree: "MBBS, DNB",
        years: 20,
        owner: "Dr. Sheetal Bhatia",
        famousFor: "Cancer Care"
    },
    {
        name: "Wellbeing Clinic",
        address: "345 Wellness Drive, Indore",
        location: "Near Kanchan Bagh",
        image: "https://example.com/images/wellbeing.jpg",
        lat: 22.7225,
        lng: 75.8538,
        rating: 4.4,
        degree: "MBBS",
        years: 15,
        owner: "Dr. Rajeev Mishra",
        famousFor: "Internal Medicine"
    },
    {
        name: "MedPlus Hospital",
        address: "456 Recovery Avenue, Indore",
        location: "Near Alok City",
        image: "https://example.com/images/medplus.jpg",
        lat: 22.7215,
        lng: 75.8568,
        rating: 4.5,
        degree: "MBBS, MS",
        years: 13,
        owner: "Dr. Poonam Saxena",
        famousFor: "Diabetes Care"
    },
    {
        name: "CityMed Center",
        address: "567 Cure Lane, Indore",
        location: "Near Palasia",
        image: "https://example.com/images/citymed.jpg",
        lat: 22.7200,
        lng: 75.8542,
        rating: 4.3,
        degree: "MBBS, DNB",
        years: 12,
        owner: "Dr. Anil Sharma",
        famousFor: "Pediatric Care"
    },
    {
        name: "Optima Care Clinic",
        address: "678 Wellness Road, Indore",
        location: "Near RNT Marg",
        image: "https://example.com/images/optimacare.jpg",
        lat: 22.7245,
        lng: 75.8600,
        rating: 4.2,
        degree: "MBBS, MD",
        years: 9,
        owner: "Dr. Kavita Patel",
        famousFor: "Heart Surgery"
    },
    {
        name: "Advance Health Center",
        address: "789 Relief Street, Indore",
        location: "Near Malharganj",
        image: "https://example.com/images/advancehealth.jpg",
        lat: 22.7260,
        lng: 75.8550,
        rating: 4.7,
        degree: "MBBS, MS",
        years: 17,
        owner: "Dr. Vinay Yadav",
        famousFor: "Liver Care"
    },
    {
        name: "TopCare Hospital",
        address: "890 Wellness Avenue, Indore",
        location: "Near Vijay Nagar",
        image: "https://example.com/images/topcare.jpg",
        lat: 22.7235,
        lng: 75.8585,
        rating: 4.6,
        degree: "MBBS, MD",
        years: 14,
        owner: "Dr. Shikha Jain",
        famousFor: "Cancer Treatment"
    },
    {
        name: "Medix Clinic",
        address: "901 Health Way, Indore",
        location: "Near GPO",
        image: "https://example.com/images/medix.jpg",
        lat: 22.7250,
        lng: 75.8570,
        rating: 4.3,
        degree: "MBBS, DNB",
        years: 11,
        owner: "Dr. Nitin Singh",
        famousFor: "General Health Checkup"
    },
    {
        name: "Health Care Hospital",
        address: "789 Health Ave, Indore",
        location: "Near Central Park",
        image: "images/health-care-hospital.jpg",
        mapLink: "https://www.google.com/maps/place/Health+Care+Hospital",
        rating: "4.7/5",
        doctorDegree: "MBBS, MD",
        yearsInService: 15,
        ownerName: "Dr. Rajesh Kumar"
    },
    {
        name: "Wellness Clinic",
        address: "123 Wellness Road, Indore",
        location: "Near Main Market",
        image: "images/wellness-clinic.jpg",
        mapLink: "https://www.google.com/maps/place/Wellness+Clinic",
        rating: "4.5/5",
        doctorDegree: "MBBS, DNB",
        yearsInService: 10,
        ownerName: "Dr. Priya Sharma"
    },
    // Add more medical facility objects
];

function showMedical() {
    document.getElementById('medical-info').style.display = 'block';
    document.getElementById('indore-info').style.display = 'none';
    document.getElementById('hotels-info').style.display = 'none';
    document.getElementById('restaurants-info').style.display = 'none';
    document.getElementById('colleges-info').style.display = 'none';

    const medicalList = document.getElementById('medical-list');
    medicalList.innerHTML = '';

    medicalFacilities.forEach(facility => {
        const listItem = document.createElement('li');
        listItem.classList.add('medical-item');
        listItem.innerHTML = `
            <div class="medical-details">
                <img src="${facility.image}" alt="${facility.name}" class="medical-image">
                <h3>${facility.name}</h3>
                <p><strong>Address:</strong> ${facility.address}</p>
                <p><strong>Location:</strong> ${facility.location}</p>
                <p><strong>Rating:</strong> ${facility.rating}</p>
                <p><strong>Doctor's Degree:</strong> ${facility.doctorDegree}</p>
                <p><strong>Years in Service:</strong> ${facility.yearsInService}</p>
                <p><strong>Owner's Name:</strong> ${facility.ownerName}</p>
                <a href="${facility.mapLink}" target="_blank">View on Google Maps</a>
            </div>
        `;
        medicalList.appendChild(listItem);
    });
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const colleges = [
    // 1-10
    {
        name: "Indore Institute of Science & Technology",
        address: "1001 Education Lane, Indore",
        location: "Near University Campus",
        image: "https://example.com/images/iist.jpg",
        lat: 22.7196,
        lng: 75.8577,
        ranking: 4.5,
        type: "Engineering College",
        degrees: "B.Tech, M.Tech",
        affiliatedUniversity: "Rajiv Gandhi Proudyogiki Vishwavidyalaya"
    },
    {
        name: "Sage University",
        address: "2022 Learning Blvd, Indore",
        location: "Near Bhawarkuan",
        image: "https://example.com/images/sageuniversity.jpg",
        lat: 22.7237,
        lng: 75.8559,
        ranking: 4.2,
        type: "Medical College",
        degrees: "MBBS, MD",
        affiliatedUniversity: "Sage University, Indore"
    },
    {
        name: "Indore Medical College",
        address: "3033 Health Road, Indore",
        location: "Near Gandhi Nagar",
        image: "https://example.com/images/imc.jpg",
        lat: 22.7247,
        lng: 75.8590,
        ranking: 4.7,
        type: "Medical College",
        degrees: "MBBS, BDS",
        affiliatedUniversity: "Madhya Pradesh Medical University"
    },
    {
        name: "Government Engineering College",
        address: "4044 Tech Street, Indore",
        location: "Near MR 10",
        image: "https://example.com/images/gec.jpg",
        lat: 22.7202,
        lng: 75.8510,
        ranking: 4.3,
        type: "Engineering College",
        degrees: "B.Tech, M.Tech",
        affiliatedUniversity: "Rajiv Gandhi Proudyogiki Vishwavidyalaya"
    },
    {
        name: "Shri Vaishnav Institute of Technology & Science",
        address: "5055 Knowledge Avenue, Indore",
        location: "Near Shankaracharya College",
        image: "https://example.com/images/svits.jpg",
        lat: 22.7180,
        lng: 75.8600,
        ranking: 4.6,
        type: "Engineering College",
        degrees: "B.Tech, M.Tech",
        affiliatedUniversity: "Rajiv Gandhi Proudyogiki Vishwavidyalaya"
    },
    {
        name: "Institute of Management Studies",
        address: "6066 Business Park, Indore",
        location: "Near Indore Airport",
        image: "https://example.com/images/ims.jpg",
        lat: 22.7176,
        lng: 75.8608,
        ranking: 4.4,
        type: "Management College",
        degrees: "MBA, PGDM",
        affiliatedUniversity: "Indore University"
    },
    {
        name: "Indore Law College",
        address: "7077 Legal Lane, Indore",
        location: "Near High Court",
        image: "https://example.com/images/ilc.jpg",
        lat: 22.7205,
        lng: 75.8565,
        ranking: 4.5,
        type: "Law College",
        degrees: "LLB, LLM",
        affiliatedUniversity: "Indore University"
    },
    {
        name: "Seth T. B. Jain College",
        address: "8088 Academic Rd, Indore",
        location: "Near Sarvate Bus Stand",
        image: "https://example.com/images/stbjjc.jpg",
        lat: 22.7218,
        lng: 75.8540,
        ranking: 4.1,
        type: "Arts College",
        degrees: "BA, MA",
        affiliatedUniversity: "Indore University"
    },
    {
        name: "Sri Aurobindo Institute of Medical Sciences",
        address: "9099 Health Center, Indore",
        location: "Near Aurobindo Hospital",
        image: "https://example.com/images/aiims.jpg",
        lat: 22.7208,
        lng: 75.8535,
        ranking: 4.6,
        type: "Medical College",
        degrees: "MBBS, MD",
        affiliatedUniversity: "Madhya Pradesh Medical University"
    },
    {
        name: "Indore Engineering Institute",
        address: "1010 Tech Park, Indore",
        location: "Near Indore City Center",
        image: "https://example.com/images/iei.jpg",
        lat: 22.7194,
        lng: 75.8579,
        ranking: 4.8,
        type: "Engineering College",
        degrees: "B.Tech, M.Tech",
        affiliatedUniversity: "Rajiv Gandhi Proudyogiki Vishwavidyalaya"
    },
    // 11-20
    {
        name: "Prestige Institute of Management & Research",
        address: "1111 Knowledge Street, Indore",
        location: "Near Vijay Nagar",
        image: "https://example.com/images/pimr.jpg",
        lat: 22.7220,
        lng: 75.8551,
        ranking: 4.4,
        type: "Management College",
        degrees: "MBA, PGDM",
        affiliatedUniversity: "Indore University"
    },
    {
        name: "IET-DAVV",
        address: "1212 Innovation Lane, Indore",
        location: "Near DAVV Campus",
        image: "https://example.com/images/iet-davv.jpg",
        lat: 22.7210,
        lng: 75.8555,
        ranking: 4.6,
        type: "Engineering College",
        degrees: "B.Tech, M.Tech",
        affiliatedUniversity: "Devi Ahilya Vishwavidyalaya"
    },
    {
        name: "Advanced Institute of Science & Technology",
        address: "1313 Science Road, Indore",
        location: "Near Air Force",
        image: "https://example.com/images/ais.jpg",
        lat: 22.7199,
        lng: 75.8593,
        ranking: 4.2,
        type: "Engineering College",
        degrees: "B.Tech, M.Tech",
        affiliatedUniversity: "Rajiv Gandhi Proudyogiki Vishwavidyalaya"
    },
    {
        name: "Rishi Bankim Chandra College",
        address: "1414 Campus Avenue, Indore",
        location: "Near GPO",
        image: "https://example.com/images/rbcc.jpg",
        lat: 22.7225,
        lng: 75.8560,
        ranking: 4.0,
        type: "Arts College",
        degrees: "BA, MA",
        affiliatedUniversity: "Indore University"
    },
    {
        name: "Mahatma Gandhi Memorial College",
        address: "1515 Education Street, Indore",
        location: "Near MG Road",
        image: "https://example.com/images/mgmc.jpg",
        lat: 22.7200,
        lng: 75.8550,
        ranking: 4.3,
        type: "Engineering College",
        degrees: "B.Tech, M.Tech",
        affiliatedUniversity: "Rajiv Gandhi Proudyogiki Vishwavidyalaya"
    },
    {
        name: "Sushila Devi College",
        address: "1616 Knowledge Park, Indore",
        location: "Near Sarvate Bus Stand",
        image: "https://example.com/images/sdc.jpg",
        lat: 22.7190,
        lng: 75.8545,
        ranking: 4.1,
        type: "Arts College",
        degrees: "BA, MA",
        affiliatedUniversity: "Indore University"
    },
    {
        name: "Jai Narain College",
        address: "1717 Academic Avenue, Indore",
        location: "Near Regal Cinema",
        image: "https://example.com/images/jnc.jpg",
        lat: 22.7222,
        lng: 75.8575,
        ranking: 4.4,
        type: "Commerce College",
        degrees: "B.Com, M.Com",
        affiliatedUniversity: "Indore University"
    },
    {
        name: "L.N. College",
        address: "1818 Study Road, Indore",
        location: "Near Abhinav School",
        image: "https://example.com/images/lnc.jpg",
        lat: 22.7235,
        lng: 75.8556,
        ranking: 4.2,
        type: "Management College",
        degrees: "MBA, PGDM",
        affiliatedUniversity: "Indore University"
    },
    {
        name: "Rajiv Gandhi College",
        address: "1919 Campus Lane, Indore",
        location: "Near Patnipura",
        image: "https://example.com/images/rgc.jpg",
        lat: 22.7219,
        lng: 75.8563,
        ranking: 4.5,
        type: "Engineering College",
        degrees: "B.Tech, M.Tech",
        affiliatedUniversity: "Rajiv Gandhi Proudyogiki Vishwavidyalaya"
    },
    {
        name: "Bhopal University",
        address: "2020 Education Lane, Indore",
        location: "Near Railway Station",
        image: "https://example.com/images/bu.jpg",
        lat: 22.7240,
        lng: 75.8530,
        ranking: 4.7,
        type: "Engineering and Management College",
        degrees: "B.Tech, MBA",
        affiliatedUniversity: "Bhopal University"
    },
    // 21-30
    {
        name: "College of Engineering & Technology",
        address: "2121 Tech Park, Indore",
        location: "Near MR-9",
        image: "https://example.com/images/cet.jpg",
        lat: 22.7230,
        lng: 75.8540,
        ranking: 4.6,
        type: "Engineering College",
        degrees: "B.Tech, M.Tech",
        affiliatedUniversity: "Rajiv Gandhi Proudyogiki Vishwavidyalaya"
    },
    {
        name: "Shri Guru Gobind Singh College",
        address: "2222 Knowledge Park, Indore",
        location: "Near INOX",
        image: "https://example.com/images/sggsc.jpg",
        lat: 22.7209,
        lng: 75.8525,
        ranking: 4.3,
        type: "Arts College",
        degrees: "BA, MA",
        affiliatedUniversity: "Indore University"
    },
    {
        name: "J.K. College",
        address: "2323 Campus Rd, Indore",
        location: "Near Narmada Road",
        image: "https://example.com/images/jkc.jpg",
        lat: 22.7195,
        lng: 75.8569,
        ranking: 4.4,
        type: "Commerce College",
        degrees: "B.Com, M.Com",
        affiliatedUniversity: "Indore University"
    },
    {
        name: "Aditya College",
        address: "2424 Study Lane, Indore",
        location: "Near Lakshmi Bai School",
        image: "https://example.com/images/ac.jpg",
        lat: 22.7227,
        lng: 75.8541,
        ranking: 4.2,
        type: "Engineering College",
        degrees: "B.Tech, M.Tech",
        affiliatedUniversity: "Rajiv Gandhi Proudyogiki Vishwavidyalaya"
    },
    {
        name: "Sanskriti College",
        address: "2525 Knowledge Avenue, Indore",
        location: "Near Patel Nagar",
        image: "https://example.com/images/sc.jpg",
        lat: 22.7213,
        lng: 75.8556,
        ranking: 4.1,
        type: "Arts College",
        degrees: "BA, MA",
        affiliatedUniversity: "Indore University"
    },
    {
        name: "Madhya Pradesh College",
        address: "2626 Academic Park, Indore",
        location: "Near Suraj Hotel",
        image: "https://example.com/images/mpc.jpg",
        lat: 22.7231,
        lng: 75.8568,
        ranking: 4.5,
        type: "Engineering College",
        degrees: "B.Tech, M.Tech",
        affiliatedUniversity: "Rajiv Gandhi Proudyogiki Vishwavidyalaya"
    },
    {
        name: "Global Institute of Technology",
        address: "2727 Tech Road, Indore",
        location: "Near C21 Mall",
        image: "https://example.com/images/git.jpg",
        lat: 22.7207,
        lng: 75.8582,
        ranking: 4.4,
        type: "Engineering College",
        degrees: "B.Tech, M.Tech",
        affiliatedUniversity: "Rajiv Gandhi Proudyogiki Vishwavidyalaya"
    },
    {
        name: "Modern College",
        address: "2828 Knowledge Lane, Indore",
        location: "Near Meera Girls School",
        image: "https://example.com/images/mc.jpg",
        lat: 22.7215,
        lng: 75.8562,
        ranking: 4.2,
        type: "Arts College",
        degrees: "BA, MA",
        affiliatedUniversity: "Indore University"
    },
    {
        name: "Imperial College",
        address: "2929 Campus Blvd, Indore",
        location: "Near Sadar Bazar",
        image: "https://example.com/images/ic.jpg",
        lat: 22.7224,
        lng: 75.8550,
        ranking: 4.6,
        type: "Engineering College",
        degrees: "B.Tech, M.Tech",
        affiliatedUniversity: "Rajiv Gandhi Proudyogiki Vishwavidyalaya"
    },
    {
        name: "R.D. College",
        address: "3030 Academic Lane, Indore",
        location: "Near Ranjit Hanuman Temple",
        image: "https://example.com/images/rdc.jpg",
        lat: 22.7203,
        lng: 75.8548,
        ranking: 4.1,
        type: "Commerce College",
        degrees: "B.Com, M.Com",
        affiliatedUniversity: "Indore University"
    }
];

function showColleges() {
    document.getElementById('colleges-info').style.display = 'block';
    document.getElementById('indore-info').style.display = 'none';
    document.getElementById('hotels-info').style.display = 'none';
    document.getElementById('restaurants-info').style.display = 'none';
    document.getElementById('medical-info').style.display = 'none';

    // Clear existing college list items
    const collegeList = document.getElementById('college-list');
    collegeList.innerHTML = '';

    // Add college data here
    colleges.forEach(college => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h3>${college.name}</h3>
            <p><strong>Address:</strong> ${college.address}</p>
            <p><strong>Location:</strong> ${college.location}</p>
            <p><strong>Type:</strong> ${college.type}</p>
            <p><strong>Degrees Offered:</strong> ${college.degrees}</p>
            <p><strong>Affiliated University:</strong> ${college.affiliatedUniversity}</p>
            <p><strong>Ranking:</strong> ${college.ranking}</p>
            <img src="${college.image}" alt="${college.name}" style="width: 200px; height: auto;">
            <div id="map-${college.name.replace(/\s+/g, '-')}" style="height: 300px; width: 100%;"></div>
            <script>
                function initMap() {
                    var location = { lat: ${college.lat}, lng: ${college.lng} };
                    var map = new google.maps.Map(document.getElementById('map-${college.name.replace(/\s+/g, '-')}', {
                        zoom: 15,
                        center: location
                    });
                    var marker = new google.maps.Marker({
                        position: location,
                        map: map
                    });
                }
                initMap();
            </script>
        `;
        collegeList.appendChild(listItem);
    });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function showIndoreInfo() {
    // Hide all other sections
    document.getElementById('hotels-info').style.display = 'none';
    document.getElementById('restaurants-info').style.display = 'none';
    document.getElementById('medical-info').style.display = 'none';
    document.getElementById('colleges-info').style.display = 'none';

    // Show the Indore details section
    document.getElementById('indore-details').style.display = 'block';
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Sample data for businesses

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// script.js
const businesses = [
    { name: "Rajesh Stationery", location: "Palasia", details: "All kinds of stationery items.", type: "stationery", famousFor: "School supplies", phoneNumber: "9876543210", delivery: "Home delivery available" },
    { name: "Agarwal Stationers", location: "Vijay Nagar", details: "Wide range of office supplies.", type: "stationery", famousFor: "Office supplies", phoneNumber: "9123456789", delivery: "Home delivery available" },
    { name: "Pustak Sadan", location: "MG Road", details: "Books and stationery items.", type: "stationery", famousFor: "Books and notebooks", phoneNumber: "9988776655", delivery: "Home delivery available" },
    { name: "Shreeji Stationers", location: "Sapna Sangeeta", details: "Art and craft supplies.", type: "stationery", famousFor: "Art supplies", phoneNumber: "9871234560", delivery: "Home delivery not available" },
    { name: "Vinayak Stationery", location: "Rajwada", details: "Discount on bulk purchases.", type: "stationery", famousFor: "Bulk supplies", phoneNumber: "9845123456", delivery: "Home delivery not available" },
    { name: "Kanha Stationers", location: "Rau", details: "All types of stationery.", type: "stationery", famousFor: "Pens and notebooks", phoneNumber: "9765432100", delivery: "Home delivery available" },
    { name: "Gupta Stationery", location: "Annapurna Road", details: "School and office stationery.", type: "stationery", famousFor: "School bags", phoneNumber: "9898989898", delivery: "Home delivery available" },
    { name: "Manoj Stationery", location: "Sudama Nagar", details: "Affordable stationery items.", type: "stationery", famousFor: "Low prices", phoneNumber: "9876543211", delivery: "Home delivery not available" },
    { name: "Bharat Pustak Bhandar", location: "Raj Mohalla", details: "Books and stationery.", type: "stationery", famousFor: "Textbooks", phoneNumber: "9876543212", delivery: "Home delivery available" },
    { name: "Arihant Stationery", location: "Sapna Sangeeta", details: "Exclusive art supplies.", type: "stationery", famousFor: "Painting materials", phoneNumber: "9876543213", delivery: "Home delivery not available" },
    { name: "Jain Book Depot", location: "MG Road", details: "Books and stationery.", type: "stationery", famousFor: "Competitive exam books", phoneNumber: "9876543214", delivery: "Home delivery available" },
    { name: "Classic Stationers", location: "Palasia", details: "Premium stationery items.", type: "stationery", famousFor: "Designer notebooks", phoneNumber: "9876543215", delivery: "Home delivery not available" },
    { name: "Royal Stationery", location: "South Tukoganj", details: "Complete office supplies.", type: "stationery", famousFor: "Office furniture", phoneNumber: "9876543216", delivery: "Home delivery available" },
    { name: "Saraswati Stationers", location: "Geeta Bhawan", details: "Books and stationery.", type: "stationery", famousFor: "Spiritual books", phoneNumber: "9876543217", delivery: "Home delivery available" },
    { name: "Mahaveer Stationery", location: "Yeshwant Niwas Road", details: "Variety of stationery items.", type: "stationery", famousFor: "Pen collections", phoneNumber: "9876543218", delivery: "Home delivery not available" },
    { name: "Kriti Stationers", location: "Khajrana", details: "Affordable school supplies.", type: "stationery", famousFor: "School accessories", phoneNumber: "9876543219", delivery: "Home delivery available" },
    { name: "Sharma Pustak Bhandar", location: "Chhawani", details: "Books and stationery.", type: "stationery", famousFor: "Children's books", phoneNumber: "9876543220", delivery: "Home delivery available" },
    { name: "City Stationery", location: "Vijay Nagar", details: "Exclusive office supplies.", type: "stationery", famousFor: "Office essentials", phoneNumber: "9876543221", delivery: "Home delivery available" },
    { name: "Madhur Stationers", location: "Rajwada", details: "Budget-friendly stationery.", type: "stationery", famousFor: "Cheap notebooks", phoneNumber: "9876543222", delivery: "Home delivery not available" },
    { name: "Kanchan Pustak Bhandar", location: "Bhawarkua", details: "Books and stationery.", type: "stationery", famousFor: "Fiction books", phoneNumber: "9876543223", delivery: "Home delivery available" },
    { name: "Goyal Stationers", location: "GPO", details: "Stationery and art supplies.", type: "stationery", famousFor: "Craft materials", phoneNumber: "9876543224", delivery: "Home delivery available" },
    { name: "National Book Depot", location: "Navlakha", details: "Books and stationery.", type: "stationery", famousFor: "Reference books", phoneNumber: "9876543225", delivery: "Home delivery not available" },
    { name: "Sunil Stationery", location: "Musakhedi", details: "School and college supplies.", type: "stationery", famousFor: "College notebooks", phoneNumber: "9876543226", delivery: "Home delivery available" },
    { name: "Dharma Stationers", location: "Rau", details: "Art and craft supplies.", type: "stationery", famousFor: "Painting supplies", phoneNumber: "9876543227", delivery: "Home delivery not available" },
    { name: "Satya Stationery", location: "Nanda Nagar", details: "All types of stationery.", type: "stationery", famousFor: "Pens and notebooks", phoneNumber: "9876543228", delivery: "Home delivery available" },
    { name: "Unique Stationery", location: "Tilak Nagar", details: "Books and stationery.", type: "stationery", famousFor: "Unique items", phoneNumber: "9876543229", delivery: "Home delivery available" },
    { name: "Modern Stationers", location: "Annapurna Road", details: "Office and school supplies.", type: "stationery", famousFor: "Modern stationery", phoneNumber: "9876543230", delivery: "Home delivery not available" },
    { name: "Liberty Stationery", location: "Pardesipura", details: "Exclusive stationery items.", type: "stationery", famousFor: "Premium notebooks", phoneNumber: "9876543231", delivery: "Home delivery available" },
    { name: "Pioneer Stationers", location: "MR 10", details: "Complete stationery solution.", type: "stationery", famousFor: "Bulk orders", phoneNumber: "9876543232", delivery: "Home delivery available" },
    { name: "Ambika Stationers", location: "Palasia", details: "Art and craft materials.", type: "stationery", famousFor: "Craft supplies", phoneNumber: "9876543233", delivery: "Home delivery not available" },
    { name: "Triveni Stationers", location: "Gulmohar Colony", details: "Variety of stationery items.", type: "stationery", famousFor: "Designer pens", phoneNumber: "9876543234", delivery: "Home delivery available" },
    { name: "Saraswati Pustak Bhandar", location: "Manik Bagh", details: "Books and stationery.", type: "stationery", famousFor: "Academic books", phoneNumber: "9876543235", delivery: "Home delivery available" },
    { name: "Gayatri Stationers", location: "Khatiwala Tank", details: "All kinds of stationery.", type: "stationery", famousFor: "Quality paper", phoneNumber: "9876543236", delivery: "Home delivery not available" },
    { name: "Vishal Stationers", location: "South Tukoganj", details: "Books and stationery.", type: "stationery", famousFor: "Competitive exam books", phoneNumber: "9876543237", delivery: "Home delivery available" },
    { name: "Indore Stationery", location: "Rajwada", details: "Books and office supplies.", type: "stationery", famousFor: "Office supplies", phoneNumber: "9876543238", delivery: "Home delivery available" },
    { name: "Classic Pustak Bhandar", location: "MG Road", details: "Variety of stationery items.", type: "stationery", famousFor: "Academic supplies", phoneNumber: "9876543239", delivery: "Home delivery not available" },
    { name: "Bhagwati Stationers", location: "Sapna Sangeeta", details: "Art and craft supplies.", type: "stationery", famousFor: "Art supplies", phoneNumber: "9876543240", delivery: "Home delivery available" },
    { name: "Krishna Stationery", location: "Palasia", details: "All types of stationery.", type: "stationery", famousFor: "Pens and pencils", phoneNumber: "9876543241", delivery: "Home delivery not available" },
    { name: "Shakti Pustak Bhandar", location: "Khajrana", details: "Books and stationery.", type: "stationery", famousFor: "School books", phoneNumber: "9876543242", delivery: "Home delivery available" },
    { name: "Rani Sati Stationers", location: "Annapurna Road", details: "Affordable stationery.", type: "stationery", famousFor: "Budget-friendly items", phoneNumber: "9876543243", delivery: "Home delivery not available" },
    { name: "Anil Stationery", location: "Chhawani", details: "Stationery and gifts.", type: "stationery", famousFor: "Gift items", phoneNumber: "9876543244", delivery: "Home delivery available" },
    { name: "Patel Stationers", location: "Vijay Nagar", details: "Complete stationery solution.", type: "stationery", famousFor: "Bulk orders", phoneNumber: "9876543245", delivery: "Home delivery available" },
    { name: "Ashok Stationery", location: "Rajwada", details: "Exclusive stationery items.", type: "stationery", famousFor: "Designer notebooks", phoneNumber: "9876543246", delivery: "Home delivery not available" },
    { name: "Geeta Stationery", location: "Navlakha", details: "Books and office supplies.", type: "stationery", famousFor: "Office essentials", phoneNumber: "9876543247", delivery: "Home delivery available" },
    { name: "Ujjwal Stationers", location: "Sapna Sangeeta", details: "Variety of stationery items.", type: "stationery", famousFor: "Designer pens", phoneNumber: "9876543248", delivery: "Home delivery available" },
    { name: "Shivam Stationery", location: "Rau", details: "Affordable school supplies.", type: "stationery", famousFor: "School accessories", phoneNumber: "9876543249", delivery: "Home delivery not available" },
    { name: "Vikas Stationers", location: "Palasia", details: "All types of stationery.", type: "stationery", famousFor: "Pens and notebooks", phoneNumber: "9876543250", delivery: "Home delivery available" },
    // Add more businesses here
    { name: "Apna Bazar", location: "MG Road", details: "Groceries and daily needs.", type: "general store", famousFor: "Fresh vegetables", phoneNumber: "9876543210", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/abc123" },
    { name: "Indore Mart", location: "Palasia", details: "All household items.", type: "general store", famousFor: "Wide range of groceries", phoneNumber: "9123456789", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/abc456" },
    { name: "Family Store", location: "Rajwada", details: "Daily essentials and snacks.", type: "general store", famousFor: "Snacks and beverages", phoneNumber: "9988776655", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/abc789" },
    { name: "Grocery Point", location: "Sapna Sangeeta", details: "Fresh fruits and vegetables.", type: "general store", famousFor: "Fresh fruits", phoneNumber: "9871234560", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/abc101" },
    { name: "Daily Needs", location: "Vijay Nagar", details: "All kinds of groceries.", type: "general store", famousFor: "Organic products", phoneNumber: "9123456780", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/abc102" },
    { name: "Super Mart", location: "AB Road", details: "Supermarket with all essentials.", type: "general store", famousFor: "Discounted items", phoneNumber: "9988776644", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/abc103" },
    { name: "Kirti Store", location: "Malwa Mill", details: "Groceries and snacks.", type: "general store", famousFor: "Spices and condiments", phoneNumber: "9876543221", delivery: "Home delivery not available", mapUrl: "https://goo.gl/maps/abc104" },
    { name: "Sarafa Mart", location: "Sarafa Bazaar", details: "Daily essentials.", type: "general store", famousFor: "Local snacks", phoneNumber: "9123456791", delivery: "Home delivery not available", mapUrl: "https://goo.gl/maps/abc105" },
    { name: "Sunrise General Store", location: "Geeta Bhawan", details: "Wide variety of groceries.", type: "general store", famousFor: "Imported goods", phoneNumber: "9988776622", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/abc106" },
    { name: "City Store", location: "Sapna Sangeeta", details: "Fresh and packed groceries.", type: "general store", famousFor: "Fresh bakery items", phoneNumber: "9871234570", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/abc107" },
    // Add 40 more general stores here
    { name: "Shree General Store", location: "Annapurna Road", details: "Groceries and everyday items.", type: "general store", famousFor: "Dry fruits", phoneNumber: "9876543230", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/abc108" },
    { name: "Harish Store", location: "Bhawarkua", details: "Daily needs and groceries.", type: "general store", famousFor: "Pulses and grains", phoneNumber: "9123456712", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/abc109" },
    { name: "Vinayak General Store", location: "Kanadia Road", details: "Household items and groceries.", type: "general store", famousFor: "Cleaning supplies", phoneNumber: "9988776633", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/abc110" },
    { name: "Anmol Bazar", location: "Jail Road", details: "All kinds of daily needs.", type: "general store", famousFor: "Dairy products", phoneNumber: "9876543240", delivery: "Home delivery not available", mapUrl: "https://goo.gl/maps/abc111" },
    { name: "Indore General Store", location: "Nehru Nagar", details: "Groceries and household items.", type: "general store", famousFor: "Organic products", phoneNumber: "9123456722", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/abc112" },
    { name: "Rajat Mart", location: "South Tukoganj", details: "Daily essentials.", type: "general store", famousFor: "Fruits and vegetables", phoneNumber: "9988776644", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/abc113" },
    { name: "Aman Store", location: "Sukhliya", details: "Groceries and snacks.", type: "general store", famousFor: "Instant noodles", phoneNumber: "9876543250", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/abc114" },
    { name: "Royal Mart", location: "Pardesipura", details: "Household essentials.", type: "general store", famousFor: "Beverages", phoneNumber: "9123456732", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/abc115" },
    { name: "Dilip Store", location: "Rani Bagh", details: "Groceries and household items.", type: "general store", famousFor: "Spices and herbs", phoneNumber: "9988776655", delivery: "Home delivery not available", mapUrl: "https://goo.gl/maps/abc116" },
    { name: "Akash General Store", location: "Khajrana", details: "Daily essentials and snacks.", type: "general store", famousFor: "Beverages and snacks", phoneNumber: "9876543260", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/abc117" },
    // Add more general stores as needed up to 50
    { name: "Suraj General Store", location: "Khandwa Road", details: "Groceries and everyday items.", type: "general store", famousFor: "Household essentials", phoneNumber: "9876543270", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/abc118" },
    { name: "Lucky Mart", location: "Manik Bagh Road", details: "Groceries and household items.", type: "general store", famousFor: "Dry fruits", phoneNumber: "9123456742", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/abc119" },
    { name: "Ravi General Store", location: "LIG Colony", details: "Groceries and snacks.", type: "general store", famousFor: "Packed snacks", phoneNumber: "9988776666", delivery: "Home delivery not available", mapUrl: "https://goo.gl/maps/abc120" },
    { name: "Anjali Store", location: "Nanda Nagar", details: "Groceries and daily needs.", type: "general store", famousFor: "Fresh vegetables", phoneNumber: "9876543280", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/abc121" },
    { name: "Sai General Store", location: "Bicholi Mardana", details: "Household items and groceries.", type: "general store", famousFor: "Spices", phoneNumber: "9123456752", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/abc122" },
    { name: "Subhash Store", location: "Aerodrome Road", details: "Daily essentials and groceries.", type: "general store", famousFor: "Organic foods", phoneNumber: "9988776677", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/abc123" },
    { name: "Balaji Mart", location: "Bhicholi Hapsi", details: "All kinds of groceries.", type: "general store", famousFor: "Dairy products", phoneNumber: "9876543290", delivery: "Home delivery not available", mapUrl: "https://goo.gl/maps/abc124" },
    { name: "Om General Store", location: "Khatiwala Tank", details: "Groceries and daily needs.", type: "general store", famousFor: "Household items", phoneNumber: "9123456762", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/abc125" },
    { name: "Mahesh General Store", location: "Annapurna", details: "Daily essentials.", type: "general store", famousFor: "Beverages and snacks", phoneNumber: "9988776688", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/abc126" },
    { name: "Prem Store", location: "Vijay Nagar", details: "Groceries and household items.", type: "general store", famousFor: "Cleaning supplies", phoneNumber: "9876543300", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/abc127" },
    // Complete the list with more entries up to 50
    { name: "Tech World", location: "MG Road", details: "Latest electronics and gadgets.", type: "electronic shop", famousFor: "Smartphones and accessories", phoneNumber: "9876543210", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/xyz123" },
        { name: "Gadget Gallery", location: "Palasia", details: "Wide range of electronic items.", type: "electronic shop", famousFor: "Laptops and accessories", phoneNumber: "9123456789", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/xyz456" },
        { name: "Electro Hub", location: "Rajwada", details: "All kinds of electronic goods.", type: "electronic shop", famousFor: "Home appliances", phoneNumber: "9988776655", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/xyz789" },
        { name: "Digital Zone", location: "Sapna Sangeeta", details: "Latest gadgets and home electronics.", type: "electronic shop", famousFor: "Smart TVs", phoneNumber: "9871234560", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/xyz101" },
        { name: "City Electronics", location: "Vijay Nagar", details: "All electronic items and gadgets.", type: "electronic shop", famousFor: "Gaming consoles", phoneNumber: "9123456780", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/xyz102" },
        { name: "Gadget World", location: "AB Road", details: "Complete electronics store.", type: "electronic shop", famousFor: "Smartphones and tablets", phoneNumber: "9988776644", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/xyz103" },
        { name: "Electronics Bazaar", location: "Malwa Mill", details: "Wide variety of electronics.", type: "electronic shop", famousFor: "Laptops and accessories", phoneNumber: "9876543221", delivery: "Home delivery not available", mapUrl: "https://goo.gl/maps/xyz104" },
        { name: "Indore Electronics", location: "Sarafa Bazaar", details: "Home appliances and gadgets.", type: "electronic shop", famousFor: "Refrigerators and washing machines", phoneNumber: "9123456791", delivery: "Home delivery not available", mapUrl: "https://goo.gl/maps/xyz105" },
        { name: "Tech Mart", location: "Geeta Bhawan", details: "Latest electronics and accessories.", type: "electronic shop", famousFor: "Cameras and photography equipment", phoneNumber: "9988776622", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/xyz106" },
        { name: "Electro Mart", location: "Sapna Sangeeta", details: "Complete range of electronics.", type: "electronic shop", famousFor: "Home theater systems", phoneNumber: "9871234570", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/xyz107" },
        // Add 30 more electronic shops here
        { name: "Smart Shop", location: "Annapurna Road", details: "Latest smartphones and gadgets.", type: "electronic shop", famousFor: "Smartphones", phoneNumber: "9876543230", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/xyz108" },
        { name: "Techno Store", location: "Bhawarkua", details: "Wide range of electronics.", type: "electronic shop", famousFor: "Gaming laptops", phoneNumber: "9123456712", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/xyz109" },
        { name: "Electro Point", location: "Kanadia Road", details: "All kinds of electronic gadgets.", type: "electronic shop", famousFor: "LED TVs", phoneNumber: "9988776633", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/xyz110" },
        { name: "Gadget Guru", location: "Jail Road", details: "Latest electronic products.", type: "electronic shop", famousFor: "Smartwatches", phoneNumber: "9876543240", delivery: "Home delivery not available", mapUrl: "https://goo.gl/maps/xyz111" },
        { name: "Tech Store", location: "Nehru Nagar", details: "Electronics and accessories.", type: "electronic shop", famousFor: "Mobile accessories", phoneNumber: "9123456722", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/xyz112" },
        { name: "Gadget Planet", location: "South Tukoganj", details: "Wide range of electronic gadgets.", type: "electronic shop", famousFor: "Smart home devices", phoneNumber: "9988776644", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/xyz113" },
        { name: "Digital Store", location: "Sukhliya", details: "Latest electronics and gadgets.", type: "electronic shop", famousFor: "Tablets and e-readers", phoneNumber: "9876543250", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/xyz114" },
        { name: "Gadget Shop", location: "Pardesipura", details: "Complete electronics store.", type: "electronic shop", famousFor: "Smartphones and laptops", phoneNumber: "9123456732", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/xyz115" },
        { name: "Electro House", location: "Rani Bagh", details: "Electronics and accessories.", type: "electronic shop", famousFor: "Home appliances", phoneNumber: "9988776655", delivery: "Home delivery not available", mapUrl: "https://goo.gl/maps/xyz116" },
        { name: "Tech Junction", location: "Khajrana", details: "All electronic gadgets.", type: "electronic shop", famousFor: "Mobile phones", phoneNumber: "9876543260", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/xyz117" },
        // Add more electronic shops as needed up to 40
        { name: "Digital Hub", location: "Khandwa Road", details: "Electronics and home gadgets.", type: "electronic shop", famousFor: "Smart home devices", phoneNumber: "9876543270", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/xyz118" },
        { name: "Tech World", location: "Manik Bagh Road", details: "Latest electronic items.", type: "electronic shop", famousFor: "Smart TVs and home theaters", phoneNumber: "9123456742", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/xyz119" },
        { name: "Electronics Center", location: "LIG Colony", details: "Complete electronics store.", type: "electronic shop", famousFor: "Laptops and accessories", phoneNumber: "9988776666", delivery: "Home delivery not available", mapUrl: "https://goo.gl/maps/xyz120" },
        { name: "Gadget House", location: "Nanda Nagar", details: "Electronics and home appliances.", type: "electronic shop", famousFor: "Smart home devices", phoneNumber: "9876543280", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/xyz121" },
        { name: "Digital Mart", location: "Bicholi Mardana", details: "All kinds of electronics.", type: "electronic shop", famousFor: "Smartphones and gadgets", phoneNumber: "9123456752", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/xyz122" },
        { name: "Tech Point", location: "Aerodrome Road", details: "Electronics and gadgets.", type: "electronic shop", famousFor: "Laptops and tablets", phoneNumber: "9988776677", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/xyz123" },
        { name: "Gadget Zone", location: "Bhicholi Hapsi", details: "Complete electronics store.", type: "electronic shop", famousFor: "Gaming consoles", phoneNumber: "9876543290", delivery: "Home delivery not available", mapUrl: "https://goo.gl/maps/xyz124" },
        { name: "Tech Hub", location: "Khatiwala Tank", details: "Latest gadgets and electronics.", type: "electronic shop", famousFor: "Smartphones and accessories", phoneNumber: "9123456762", delivery: "Home delivery available", mapUrl: "https://goo.gl/maps/xyz125" },
        { name: "Apollo Pharmacy", location: "MG Road", famousFor: "Wide range of medicines", phone: "0731-1234567", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Apollo+Pharmacy,+MG+Road,+Indore", image: "apollo_pharmacy.jpg" },
            { name: "MedPlus Pharmacy", location: "Rau", famousFor: "Affordable medicines", phone: "0731-2345678", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=MedPlus+Pharmacy,+Rau,+Indore", image: "medplus_pharmacy.jpg" },
            { name: "Vijay Medical Stores", location: "Naveen Market", famousFor: "Prescription and OTC drugs", phone: "0731-3456789", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Vijay+Medical+Stores,+Naveen+Market,+Indore", image: "vijay_medical_stores.jpg" },
            { name: "Sharma Medical Store", location: "MG Road", famousFor: "General medicines", phone: "0731-4567890", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Sharma+Medical+Store,+MG+Road,+Indore", image: "sharma_medical_store.jpg" },
            { name: "Rohit Medical Hall", location: "Vijay Nagar", famousFor: "Specialized medical supplies", phone: "0731-5678901", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Rohit+Medical+Hall,+Vijay+Nagar,+Indore", image: "rohit_medical_hall.jpg" },
            { name: "Jain Medical Stores", location: "Sudarshan", famousFor: "Affordable prices", phone: "0731-6789012", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Jain+Medical+Stores,+Sudarshan,+Indore", image: "jain_medical_stores.jpg" },
            { name: "Siddhi Medical Store", location: "Palasia", famousFor: "Quick service", phone: "0731-7890123", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Siddhi+Medical+Store,+Palasia,+Indore", image: "siddhi_medical_store.jpg" },
            { name: "Shreeji Medical Store", location: "Rau", famousFor: "Wide range of health products", phone: "0731-8901234", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Shreeji+Medical+Store,+Rau,+Indore", image: "shreeji_medical_store.jpg" },
            { name: "Carewell Pharmacy", location: "Sadar Bazar", famousFor: "Medicines and healthcare products", phone: "0731-9012345", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Carewell+Pharmacy,+Sadar+Bazar,+Indore", image: "carewell_pharmacy.jpg" },
            { name: "Ankur Medical Store", location: "Bhawarkuan", famousFor: "Medical equipment", phone: "0731-0123456", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Ankur+Medical+Store,+Bhawarkuan,+Indore", image: "ankur_medical_store.jpg" },
            { name: "Sahara Medical Stores", location: "Vijay Nagar", famousFor: "All types of medicines", phone: "0731-1234568", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Sahara+Medical+Stores,+Vijay+Nagar,+Indore", image: "sahara_medical_stores.jpg" },
            { name: "Shivam Medical Stores", location: "Sadar Bazar", famousFor: "Prescription drugs", phone: "0731-2345679", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Shivam+Medical+Stores,+Sadar+Bazar,+Indore", image: "shivam_medical_stores.jpg" },
            { name: "Jeevan Medical Store", location: "MG Road", famousFor: "Emergency medicines", phone: "0731-3456780", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Jeevan+Medical+Store,+MG+Road,+Indore", image: "jeevan_medical_store.jpg" },
            { name: "Life Care Pharmacy", location: "Rajwada", famousFor: "Healthcare and wellness products", phone: "0731-4567891", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Life+Care+Pharmacy,+Rajwada,+Indore", image: "life_care_pharmacy.jpg" },
            { name: "Health Plus Pharmacy", location: "Palasia", famousFor: "Branded medicines", phone: "0731-5678902", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Health+Plus+Pharmacy,+Palasia,+Indore", image: "health_plus_pharmacy.jpg" },
            { name: "Medicare Pharmacy", location: "Indore", famousFor: "Medicine and medical supplies", phone: "0731-6789013", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Medicare+Pharmacy,+Indore", image: "medicare_pharmacy.jpg" },
            { name: "Universal Pharmacy", location: "Rau", famousFor: "Quick service and availability", phone: "0731-7890124", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Universal+Pharmacy,+Rau,+Indore", image: "universal_pharmacy.jpg" },
            { name: "Sree Medical Stores", location: "Vijay Nagar", famousFor: "Quality medicines", phone: "0731-8901235", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Sree+Medical+Stores,+Vijay+Nagar,+Indore", image: "sree_medical_stores.jpg" },
            { name: "Cure Pharmacy", location: "MG Road", famousFor: "Affordable rates", phone: "0731-9012346", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Cure+Pharmacy,+MG+Road,+Indore", image: "cure_pharmacy.jpg" },
            { name: "Wellness Pharmacy", location: "Sadar Bazar", famousFor: "General healthcare products", phone: "0731-0123457", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Wellness+Pharmacy,+Sadar+Bazar,+Indore", image: "wellness_pharmacy.jpg" },
            { name: "Prime Medical Store", location: "Rau", famousFor: "Medicines and health supplements", phone: "0731-1234569", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Prime+Medical+Store,+Rau,+Indore", image: "prime_medical_store.jpg" },
            { name: "Health Mart Pharmacy", location: "Vijay Nagar", famousFor: "Wide range of medical products", phone: "0731-2345670", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Health+Mart+Pharmacy,+Vijay+Nagar,+Indore", image: "health_mart_pharmacy.jpg" },
            { name: "Medicines Plus", location: "Palasia", famousFor: "Branded and generic medicines", phone: "0731-3456781", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Medicines+Plus,+Palasia,+Indore", image: "medicines_plus.jpg" },
            { name: "Ayush Medical Store", location: "Sadar Bazar", famousFor: "Ayurvedic medicines", phone: "0731-4567892", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Ayush+Medical+Store,+Sadar+Bazar,+Indore", image: "ayush_medical_store.jpg" },
            { name: "WellCare Pharmacy", location: "MG Road", famousFor: "Healthcare and wellness", phone: "0731-5678903", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=WellCare+Pharmacy,+MG+Road,+Indore", image: "wellcare_pharmacy.jpg" },
            { name: "Global Pharmacy", location: "Indore", famousFor: "24/7 service", phone: "0731-6789014", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Global+Pharmacy,+Indore", image: "global_pharmacy.jpg" },
            { name: "Zenith Pharmacy", location: "Rajwada", famousFor: "Fast service", phone: "0731-7890125", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Zenith+Pharmacy,+Rajwada,+Indore", image: "zenith_pharmacy.jpg" },
            { name: "Star Medical Stores", location: "Vijay Nagar", famousFor: "Medicines for all ailments", phone: "0731-8901236", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Star+Medical+Stores,+Vijay+Nagar,+Indore", image: "star_medical_stores.jpg" },
            { name: "Medic Care Pharmacy", location: "Palasia", famousFor: "Prescription and over-the-counter drugs", phone: "0731-9012347", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Medic+Care+Pharmacy,+Palasia,+Indore", image: "medic_care_pharmacy.jpg" },
            { name: "Life Line Pharmacy", location: "Sadar Bazar", famousFor: "Affordable prices", phone: "0731-0123458", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Life+Line+Pharmacy,+Sadar+Bazar,+Indore", image: "life_line_pharmacy.jpg" },
            { name: "Trust Medical Store", location: "Rau", famousFor: "Reliable medical supplies", phone: "0731-1234570", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Trust+Medical+Store,+Rau,+Indore", image: "trust_medical_store.jpg" },
            { name: "Care Pharmacy", location: "Vijay Nagar", famousFor: "Personalized service", phone: "0731-2345671", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Care+Pharmacy,+Vijay+Nagar,+Indore", image: "care_pharmacy.jpg" },
            { name: "Medivine Pharmacy", location: "Palasia", famousFor: "Medicines and health products", phone: "0731-3456782", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Medivine+Pharmacy,+Palasia,+Indore", image: "medivine_pharmacy.jpg" },
            { name: "Supreme Medical Store", location: "Sadar Bazar", famousFor: "Specialized medicines", phone: "0731-4567893", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Supreme+Medical+Store,+Sadar+Bazar,+Indore", image: "supreme_medical_store.jpg" },
            { name: "Royal Care Pharmacy", location: "MG Road", famousFor: "Quality medical supplies", phone: "0731-5678904", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Royal+Care+Pharmacy,+MG+Road,+Indore", image: "royal_care_pharmacy.jpg" },
            { name: "Unity Medical Store", location: "Indore", famousFor: "Comprehensive range of medicines", phone: "0731-6789015", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Unity+Medical+Store,+Indore", image: "unity_medical_store.jpg" },
            { name: "Bright Pharmacy", location: "Rajwada", famousFor: "Fast and reliable service", phone: "0731-7890126", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Bright+Pharmacy,+Rajwada,+Indore", image: "bright_pharmacy.jpg" },
            { name: "Happy Medical Stores", location: "Vijay Nagar", famousFor: "Personalized care", phone: "0731-8901237", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Happy+Medical+Stores,+Vijay+Nagar,+Indore", image: "happy_medical_stores.jpg" },
            { name: "Expert Pharmacy", location: "Palasia", famousFor: "Expert advice and medicines", phone: "0731-9012348", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Expert+Pharmacy,+Palasia,+Indore", image: "expert_pharmacy.jpg" },
            { name: "Health World Pharmacy", location: "Sadar Bazar", famousFor: "All types of medicines", phone: "0731-0123459", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Health+World+Pharmacy,+Sadar+Bazar,+Indore", image: "health_world_pharmacy.jpg" },
            { name: "Advance Medical Store", location: "Rau", famousFor: "Modern medical supplies", phone: "0731-1234571", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Advance+Medical+Store,+Rau,+Indore", image: "advance_medical_store.jpg" },
            { name: "Next Gen Pharmacy", location: "Vijay Nagar", famousFor: "Latest medical products", phone: "0731-2345672", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Next+Gen+Pharmacy,+Vijay+Nagar,+Indore", image: "next_gen_pharmacy.jpg" },
            { name: "Top Health Pharmacy", location: "Palasia", famousFor: "High-quality medicines", phone: "0731-3456783", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Top+Health+Pharmacy,+Palasia,+Indore", image: "top_health_pharmacy.jpg" },
            { name: "Bright Care Pharmacy", location: "Sadar Bazar", famousFor: "Comprehensive range", phone: "0731-4567894", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Bright+Care+Pharmacy,+Sadar+Bazar,+Indore", image: "bright_care_pharmacy.jpg" },
            { name: "Metro Pharmacy", location: "MG Road", famousFor: "Affordable medicines", phone: "0731-5678905", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Metro+Pharmacy,+MG+Road,+Indore", image: "metro_pharmacy.jpg" },
            { name: "Apex Medical Store", location: "Indore", famousFor: "Expert medical care", phone: "0731-6789016", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Apex+Medical+Store,+Indore", image: "apex_medical_store.jpg" },
            { name: "Elite Pharmacy", location: "Rajwada", famousFor: "High-end medical products", phone: "0731-7890127", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Elite+Pharmacy,+Rajwada,+Indore", image: "elite_pharmacy.jpg" },
            { name: "Prime Health Store", location: "Vijay Nagar", famousFor: "Quality healthcare products", phone: "0731-8901238", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Prime+Health+Store,+Vijay+Nagar,+Indore", image: "prime_health_store.jpg" },
            { name: "Safe Pharmacy", location: "Palasia", famousFor: "Reliable medicines", phone: "0731-9012349", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Safe+Pharmacy,+Palasia,+Indore", image: "safe_pharmacy.jpg" },
            { name: "Smart Medical Stores", location: "Sadar Bazar", famousFor: "Wide selection", phone: "0731-0123460", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Smart+Medical+Stores,+Sadar+Bazar,+Indore", image: "smart_medical_stores.jpg" },
            { name: "Health Plus Store", location: "Rau", famousFor: "Quality service", phone: "0731-1234572", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Health+Plus+Store,+Rau,+Indore", image: "health_plus_store.jpg" },
            { name: "MedCare Pharmacy", location: "Vijay Nagar", famousFor: "Best prices", phone: "0731-2345673", delivery: "No Home Delivery", map: "https://maps.google.com/?q=MedCare+Pharmacy,+Vijay+Nagar,+Indore", image: "medcare_pharmacy.jpg" },
            { name: "Healthy Life Pharmacy", location: "Palasia", famousFor: "Health supplements", phone: "0731-3456784", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Healthy+Life+Pharmacy,+Palasia,+Indore", image: "healthy_life_pharmacy.jpg" },
            { name: "Excel Medical Store", location: "Sadar Bazar", famousFor: "All types of health products", phone: "0731-4567895", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Excel+Medical+Store,+Sadar+Bazar,+Indore", image: "excel_medical_store.jpg" },
            { name: "Wellbeing Pharmacy", location: "MG Road", famousFor: "Premium medicines", phone: "0731-5678906", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Wellbeing+Pharmacy,+MG+Road,+Indore", image: "wellbeing_pharmacy.jpg" },
            { name: "Optimum Pharmacy", location: "Indore", famousFor: "Top-quality medical supplies", phone: "0731-6789017", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Optimum+Pharmacy,+Indore", image: "optimum_pharmacy.jpg" },
            { name: "Elite Care Pharmacy", location: "Rajwada", famousFor: "Exceptional service", phone: "0731-7890128", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Elite+Care+Pharmacy,+Rajwada,+Indore", image: "elite_care_pharmacy.jpg" },
            { name: "Trust Health Store", location: "Vijay Nagar", famousFor: "Affordable healthcare products", phone: "0731-8901239", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Trust+Health+Store,+Vijay+Nagar,+Indore", image: "trust_health_store.jpg" },
            { name: "Zen Medical Store", location: "Palasia", famousFor: "Comprehensive medicine range", phone: "0731-9012350", delivery: "Home Delivery Available", map: "https://maps.google.com/?q=Zen+Medical+Store,+Palasia,+Indore", image: "zen_medical_store.jpg" },
            { name: "Hotel Sayaji", location: "Vijay Nagar", famousFor: "Luxury and comfort", phone: "0731-4241111", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Sayaji,+Vijay+Nagar,+Indore", image: "hotel_sayaji.jpg" },
            { name: "Radisson Blu Hotel", location: "Ujjain Road", famousFor: "Elegant rooms and fine dining", phone: "0731-6650000", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Radisson+Blu+Hotel,+Ujjain+Road,+Indore", image: "radisson_blu.jpg" },
            { name: "Hotel Golden Gate", location: "MG Road", famousFor: "Central location", phone: "0731-2525444", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Golden+Gate,+MG+Road,+Indore", image: "hotel_golden_gate.jpg" },
            { name: "The Crown", location: "RNT Marg", famousFor: "Business class facilities", phone: "0731-2533333", delivery: "No Home Delivery", map: "https://maps.google.com/?q=The+Crown,+RNT+Marg,+Indore", image: "the_crown.jpg" },
            { name: "Hotel Surya", location: "GPO", famousFor: "Comfortable stay", phone: "0731-2543333", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Surya,+GPO,+Indore", image: "hotel_surya.jpg" },
            { name: "Hotel Infiniti", location: "Vijay Nagar", famousFor: "Modern amenities", phone: "0731-4265555", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Infiniti,+Vijay+Nagar,+Indore", image: "hotel_infiniti.jpg" },
            { name: "Lemon Tree Hotel", location: "AB Road", famousFor: "Friendly service", phone: "0731-4899999", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Lemon+Tree+Hotel,+AB+Road,+Indore", image: "lemon_tree_hotel.jpg" },
            { name: "The Residency", location: "MG Road", famousFor: "Elegant interiors", phone: "0731-2610000", delivery: "No Home Delivery", map: "https://maps.google.com/?q=The+Residency,+MG+Road,+Indore", image: "the_residency.jpg" },
            { name: "Hotel Satkar", location: "Saket", famousFor: "Affordable rates", phone: "0731-2537777", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Satkar,+Saket,+Indore", image: "hotel_satkar.jpg" },
            { name: "Hotel Amar Vilas", location: "Rau", famousFor: "Peaceful environment", phone: "0731-2325555", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Amar+Vilas,+Rau,+Indore", image: "hotel_amar_vilas.jpg" },
            { name: "Hotel President", location: "Narmada Road", famousFor: "Business center", phone: "0731-2444444", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+President,+Narmada+Road,+Indore", image: "hotel_president.jpg" },
            { name: "Hotel Sukh Sagar", location: "Chappan Dukan", famousFor: "Good food", phone: "0731-2511111", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Sukh+Sagar,+Chappan+Dukan,+Indore", image: "hotel_sukh_sagar.jpg" },
            { name: "Hotel Shreemaya", location: "Ujjain Road", famousFor: "Spacious rooms", phone: "0731-6655555", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Shreemaya,+Ujjain+Road,+Indore", image: "hotel_shreemaya.jpg" },
            { name: "Hotel Ruchi", location: "Rau", famousFor: "Friendly staff", phone: "0731-2344444", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Ruchi,+Rau,+Indore", image: "hotel_ruchi.jpg" },
            { name: "Hotel Palace", location: "Vijay Nagar", famousFor: "Grand architecture", phone: "0731-2522222", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Palace,+Vijay+Nagar,+Indore", image: "hotel_palace.jpg" },
            { name: "Hotel Lord's Inn", location: "MG Road", famousFor: "Comfortable rooms", phone: "0731-2598888", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Lord's+Inn,+MG+Road,+Indore", image: "hotel_lords_inn.jpg" },
            { name: "Hotel Prakash", location: "AB Road", famousFor: "Excellent hospitality", phone: "0731-2488888", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Prakash,+AB+Road,+Indore", image: "hotel_prakash.jpg" },
            { name: "Hotel Vasant", location: "Palasia", famousFor: "Central location", phone: "0731-2333333", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Vasant,+Palasia,+Indore", image: "hotel_vasant.jpg" },
            { name: "Hotel Shivani", location: "Narmada Road", famousFor: "Cozy atmosphere", phone: "0731-2566666", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Shivani,+Narmada+Road,+Indore", image: "hotel_shivani.jpg" },
            { name: "Hotel JH Patel", location: "Saket", famousFor: "Quality service", phone: "0731-2433333", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+JH+Patel,+Saket,+Indore", image: "hotel_jh_patel.jpg" },
            { name: "Hotel Royal", location: "Vijay Nagar", famousFor: "Luxury stay", phone: "0731-2544444", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Royal,+Vijay+Nagar,+Indore", image: "hotel_royal.jpg" },
            { name: "Hotel New Leaf", location: "MG Road", famousFor: "Modern amenities", phone: "0731-2599999", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+New+Leaf,+MG+Road,+Indore", image: "hotel_new_leaf.jpg" },
            { name: "Hotel Ashoka", location: "AB Road", famousFor: "Traditional style", phone: "0731-2455555", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Ashoka,+AB+Road,+Indore", image: "hotel_ashoka.jpg" },
            { name: "Hotel Executive", location: "Palasia", famousFor: "Business facilities", phone: "0731-2399999", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Executive,+Palasia,+Indore", image: "hotel_executive.jpg" },
            { name: "Hotel Elite", location: "Narmada Road", famousFor: "Exclusive rooms", phone: "0731-2588888", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Elite,+Narmada+Road,+Indore", image: "hotel_elite.jpg" },
            { name: "Hotel Regency", location: "Saket", famousFor: "Modern decor", phone: "0731-2422222", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Regency,+Saket,+Indore", image: "hotel_regency.jpg" },
            { name: "Hotel Sapphire", location: "Vijay Nagar", famousFor: "Comfortable stay", phone: "0731-2567777", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Sapphire,+Vijay+Nagar,+Indore", image: "hotel_sapphire.jpg" },
            { name: "Hotel Imperial", location: "MG Road", famousFor: "Luxurious rooms", phone: "0731-2526666", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Imperial,+MG+Road,+Indore", image: "hotel_imperial.jpg" },
            { name: "Hotel Harmony", location: "AB Road", famousFor: "Relaxed ambiance", phone: "0731-2555555", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Harmony,+AB+Road,+Indore", image: "hotel_harmony.jpg" },
            { name: "Hotel Monarch", location: "Palasia", famousFor: "Grand interiors", phone: "0731-2597777", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Monarch,+Palasia,+Indore", image: "hotel_monarch.jpg" },
            { name: "Hotel Pearl", location: "Narmada Road", famousFor: "Elegant design", phone: "0731-2468888", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Pearl,+Narmada+Road,+Indore", image: "hotel_pearl.jpg" },
            { name: "Hotel Galaxy", location: "Saket", famousFor: "Modern amenities", phone: "0731-2499999", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Galaxy,+Saket,+Indore", image: "hotel_galaxy.jpg" },
            { name: "Hotel Vista", location: "Vijay Nagar", famousFor: "Excellent service", phone: "0731-2577777", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Vista,+Vijay+Nagar,+Indore", image: "hotel_vista.jpg" },
            { name: "Hotel Capital", location: "MG Road", famousFor: "Prime location", phone: "0731-2549999", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Capital,+MG+Road,+Indore", image: "hotel_capital.jpg" },
            { name: "Hotel Royal Castle", location: "AB Road", famousFor: "Regal ambiance", phone: "0731-2454444", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Royal+Castle,+AB+Road,+Indore", image: "hotel_royal_castle.jpg" },
            { name: "Hotel Grand", location: "Palasia", famousFor: "Luxury experience", phone: "0731-2488888", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Grand,+Palasia,+Indore", image: "hotel_grand.jpg" },
            { name: "Hotel Comfort", location: "Narmada Road", famousFor: "Cozy environment", phone: "0731-2565555", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Comfort,+Narmada+Road,+Indore", image: "hotel_comfort.jpg" },
            { name: "Hotel Horizon", location: "Saket", famousFor: "Great value", phone: "0731-2455555", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Horizon,+Saket,+Indore", image: "hotel_horizon.jpg" },
            { name: "Hotel Delight", location: "Vijay Nagar", famousFor: "Warm hospitality", phone: "0731-2594444", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Delight,+Vijay+Nagar,+Indore", image: "hotel_delight.jpg" },
            { name: "Hotel Mirage", location: "MG Road", famousFor: "Charming ambiance", phone: "0731-2596666", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Mirage,+MG+Road,+Indore", image: "hotel_mirage.jpg" },
            { name: "Hotel Aurora", location: "AB Road", famousFor: "Scenic views", phone: "0731-2477777", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Aurora,+AB+Road,+Indore", image: "hotel_aurora.jpg" },
            { name: "Hotel Prime", location: "Palasia", famousFor: "Excellent service", phone: "0731-2523333", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Prime,+Palasia,+Indore", image: "hotel_prime.jpg" },
            { name: "Hotel Elite Residency", location: "Narmada Road", famousFor: "High-end facilities", phone: "0731-2585555", delivery: "No Home Delivery", map: "https://maps.google.com/?q=Hotel+Elite+Residency,+Narmada+Road,+Indore", image: "hotel_elite_residency.jpg" },
            { name: "The Flea Market", location: "Vijay Nagar", famousFor: "Casual dining with a variety of cuisines", phone: "0731-4299999", delivery: "Yes", map: "https://maps.google.com/?q=The+Flea+Market,+Vijay+Nagar,+Indore", image: "flea_market.jpg" },
            { name: "Chappan Bhog", location: "Chappan Dukan", famousFor: "Traditional Indian food", phone: "0731-2545555", delivery: "No", map: "https://maps.google.com/?q=Chappan+Bhog,+Chappan+Dukan,+Indore", image: "chappan_bhog.jpg" },
            { name: "Golden Gate Restaurant", location: "MG Road", famousFor: "Multi-cuisine offerings", phone: "0731-2525555", delivery: "Yes", map: "https://maps.google.com/?q=Golden+Gate+Restaurant,+MG+Road,+Indore", image: "golden_gate.jpg" },
            { name: "The Big Byte", location: "Vijay Nagar", famousFor: "Modern dining experience", phone: "0731-4225555", delivery: "Yes", map: "https://maps.google.com/?q=The+Big+Byte,+Vijay+Nagar,+Indore", image: "the_big_byte.jpg" },
            { name: "Tandoor Park", location: "Ujjain Road", famousFor: "Delicious Tandoori dishes", phone: "0731-4890000", delivery: "No", map: "https://maps.google.com/?q=Tandoor+Park,+Ujjain+Road,+Indore", image: "tandoor_park.jpg" },
            { name: "Sanchi Restaurant", location: "AB Road", famousFor: "Vegetarian cuisine", phone: "0731-2477777", delivery: "Yes", map: "https://maps.google.com/?q=Sanchi+Restaurant,+AB+Road,+Indore", image: "sanchi_restaurant.jpg" },
            { name: "Shreemaya Celebration", location: "MG Road", famousFor: "Festive dining and buffets", phone: "0731-2544444", delivery: "No", map: "https://maps.google.com/?q=Shreemaya+Celebration,+MG+Road,+Indore", image: "shreemaya_celebration.jpg" },
            { name: "Indore Kitchen", location: "Palasia", famousFor: "Local specialties", phone: "0731-2334444", delivery: "Yes", map: "https://maps.google.com/?q=Indore+Kitchen,+Palasia,+Indore", image: "indore_kitchen.jpg" },
            { name: "Kebabsville", location: "RNT Marg", famousFor: "Authentic kebabs", phone: "0731-2547777", delivery: "No", map: "https://maps.google.com/?q=Kebabsville,+RNT+Marg,+Indore", image: "kebabsville.jpg" },
            { name: "Biryani Blues", location: "Vijay Nagar", famousFor: "Spicy biryanis", phone: "0731-4265555", delivery: "Yes", map: "https://maps.google.com/?q=Biryani+Blues,+Vijay+Nagar,+Indore", image: "biryani_blues.jpg" },
            { name: "Saffron Restaurant", location: "Ujjain Road", famousFor: "Royal dining experience", phone: "0731-2345555", delivery: "No", map: "https://maps.google.com/?q=Saffron+Restaurant,+Ujjain+Road,+Indore", image: "saffron_restaurant.jpg" },
            { name: "Spice Garden", location: "Palasia", famousFor: "South Indian delicacies", phone: "0731-2510000", delivery: "Yes", map: "https://maps.google.com/?q=Spice+Garden,+Palasia,+Indore", image: "spice_garden.jpg" },
            { name: "The Royal Plate", location: "MG Road", famousFor: "Continental and Indian fusion", phone: "0731-2599999", delivery: "No", map: "https://maps.google.com/?q=The+Royal+Plate,+MG+Road,+Indore", image: "the_royal_plate.jpg" },
            { name: "Flavors of India", location: "AB Road", famousFor: "Indian gourmet dishes", phone: "0731-2534444", delivery: "Yes", map: "https://maps.google.com/?q=Flavors+of+India,+AB+Road,+Indore", image: "flavors_of_india.jpg" },
            { name: "Tandoori Nights", location: "Saket", famousFor: "Tandoori and Mughlai cuisine", phone: "0731-2437777", delivery: "No", map: "https://maps.google.com/?q=Tandoori+Nights,+Saket,+Indore", image: "tandoori_nights.jpg" },
            { name: "Cafe Delight", location: "Vijay Nagar", famousFor: "Coffee and pastries", phone: "0731-4260000", delivery: "Yes", map: "https://maps.google.com/?q=Cafe+Delight,+Vijay+Nagar,+Indore", image: "cafe_delight.jpg" },
            { name: "Sizzling Grill", location: "MG Road", famousFor: "Grilled delicacies", phone: "0731-2522222", delivery: "No", map: "https://maps.google.com/?q=Sizzling+Grill,+MG+Road,+Indore", image: "sizzling_grill.jpg" },
            { name: "Royal Taste", location: "AB Road", famousFor: "Royal dining and service", phone: "0731-2455555", delivery: "Yes", map: "https://maps.google.com/?q=Royal+Taste,+AB+Road,+Indore", image: "royal_taste.jpg" },
            { name: "Green House", location: "Palasia", famousFor: "Healthy and fresh food", phone: "0731-2590000", delivery: "Yes", map: "https://maps.google.com/?q=Green+House,+Palasia,+Indore", image: "green_house.jpg" },
            { name: "Taste of Indore", location: "Saket", famousFor: "Local delicacies", phone: "0731-2422222", delivery: "No", map: "https://maps.google.com/?q=Taste+of+Indore,+Saket,+Indore", image: "taste_of_indore.jpg" },
            { name: "Bistro 24", location: "Vijay Nagar", famousFor: "International cuisine", phone: "0731-4224444", delivery: "Yes", map: "https://maps.google.com/?q=Bistro+24,+Vijay+Nagar,+Indore", image: "bistro_24.jpg" },
            { name: "Cuisine Palace", location: "MG Road", famousFor: "Fusion dishes", phone: "0731-2611111", delivery: "No", map: "https://maps.google.com/?q=Cuisine+Palace,+MG+Road,+Indore", image: "cuisine_palace.jpg" }
    // Add more businesses as needed
];

function searchByName() {
    const searchTerm = document.getElementById('searchName').value.toLowerCase();
    const results = businesses.filter(business => business.name.toLowerCase().includes(searchTerm));
    displayResults(results);
}

function searchByLocation() {
    const searchLocation = document.getElementById('searchLocation').value.toLowerCase();
    const results = businesses.filter(business => business.location.toLowerCase().includes(searchLocation));
    displayResults(results);
}

function displayResults(results) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (results.length > 0) {
        results.forEach(business => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML = `
                <h3>${business.name}</h3>
                <p>Location: ${business.location}</p>
                <p>Details: ${business.details}</p>
            `;
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////
// Function to display the feedback form and automatically fill the User ID
function showFeedbackForm() {
    document.getElementById("feedbackForm").style.display = "block";
    // Assuming you have a way to get the user ID, set it here
    var userId = "USER12345"; // Example user ID
    document.getElementById("userId").value = userId;
}
/////////////////////////////////////////////////////////////////////////////////////////////
// Function to toggle a hotel as a favorite
function toggleFavorite(item) {
    let favoritesList = document.getElementById('favorites-list');
    
    // Check if item is already in favorites
    let existingItem = document.querySelector(`#favorites-list li[data-item="${item}"]`);
    
    if (existingItem) {
        // Remove item from favorites if it exists
        favoritesList.removeChild(existingItem);
    } else {
        // Add item to favorites if it doesn't exist
        let listItem = document.createElement('li');
        listItem.textContent = item;
        listItem.setAttribute('data-item', item);
        favoritesList.appendChild(listItem);
    }
}
///////////////////////////////////////////////////////////////////////////////////////////
// Redirect to the login page
function login() {
    window.location.href = 'login.html'; // Replace 'login.html' with your actual login page URL
}

// Redirect to the registration page
function register() {
    window.location.href = 'register.html'; // Replace 'register.html' with your actual registration page URL
}
///////////////////////////////////////////////////////////////////////