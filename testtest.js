var prompt = require('prompt-sync')();


// 1. LES DONNÉES (TRIPS & TICKETS)

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

// Tableau dial l-tickets o compteur dial l-IDs
const tickets = [];
let ticketIdCounter = 1;


// 2. LES FONCTIONS


// --- Menu ---
function afficherMenu() {
    console.log("\n=================================");
    console.log("        RAILWAY MANAGER");
    console.log("=================================");
    console.log("1. Afficher les trajets");
    console.log("2. Acheter un ticket");
    console.log("3. Afficher les tickets");
    console.log("4. Annuler un ticket");
    console.log("5. Rechercher un ticket");
    console.log("6. Filtrer les trajets");
    console.log("7. Trier les trajets");
    console.log("0. Quitter");
    console.log("=================================");
}

// --- Option 1 : Afficher les trajets ---
// tfyugiu

// function afficherTrajets() {
//     console.log("\n=== TRAJETS DISPONIBLES ===");
//     for (let i = 0; i < trips.length; i++) {
//         const t = trips[i];
//         console.log("#" + t.id + " " + t.departure + " → " + t.destination);
//         console.log("  Départ : " + t.departureTime);
//         console.log("  Arrivée : " + t.arrivalTime);
//         console.log("  Prix : " + t.price + " DH");
//         console.log("  Places disponibles : " + t.availableSeats + "\n");
//     }
// }
function afficherTrajets() {
    console.log("                       === TRAJETS DISPONIBLES ===");
    console.table(trips, ['id', 'departure', 'destination', 'departureTime', 'arrivalTime', 'price', 'availableSeats']);
}

// --- Option 2 : Acheter un ticket ---
function acheterTicket() {
    console.log("\n=== ACHETER UN TICKET ===");
    
    const passengerName = prompt("Nom du passager : ");
    if (!passengerName || passengerName.trim() === "") {
        console.log("Nom invalide.");
        return;
    }

    const tripId = parseInt(prompt("Identifiant du trajet : "));
    if (isNaN(tripId)) {
        console.log("Identifiant invalide.");
        return;
    }

    const trip = trips.find(t => t.id === tripId);

    if (!trip) {
        console.log("Trajet introuvable.");
        return;
    }

    if (trip.availableSeats <= 0) {
        console.log("Train complet.");
        return;
    }

    // --- SOLUTION POUR NE PAS AVOIR DE PLACES EN DOUBLE ---
    // 1. N-jbdou ga3 l-blayess li dja makhoudin f had l-trajet
    const placesOccupees = tickets
        .filter(t => t.tripId === tripId)
        .map(t => t.seatNumber);

    // 2. N-qllbo 3la aoual raqm khawi (mn 1 l 50)
    let seatNumber = 1;
    while (placesOccupees.includes(seatNumber)) {
        seatNumber++;
    }
    // --------------------------------------------------------

    const ticket = {
        id: ticketIdCounter++,
        passengerName: passengerName.trim(),
        tripId: tripId,
        seatNumber: seatNumber,
        price: trip.price
    };

    tickets.push(ticket);
    trip.availableSeats--;

    console.log("\nTicket acheté avec succès.");
    console.log(`Ticket #${ticket.id}`);
    console.log(`Passager : ${ticket.passengerName}`);
    console.log(`Trajet : ${trip.departure} → ${trip.destination}`);
    console.log(`Place : ${ticket.seatNumber}`);
    console.log(`Prix : ${ticket.price} DH`);
}

// --- Option 3 : Afficher les tickets ---
function afficherTickets() {
    if (tickets.length === 0) {
        console.log("\nAucun ticket enregistré.");
        return;
    }

    console.log("\n=== TICKETS ===\n");
    for (let i = 0; i < tickets.length; i++) {
        const ticket = tickets[i];
        const trip = trips.find(t => t.id === ticket.tripId);

        console.log(`Ticket #${ticket.id}`);
        console.log(`Passager : ${ticket.passengerName}`);
        console.log(`Trajet : ${trip.departure} → ${trip.destination}`);
        console.log(`Place : ${ticket.seatNumber}`);
        console.log(`Prix : ${ticket.price} DH\n`);
    }
}

// --- Option 4 : Annuler un ticket ---
function annulerTicket() {
    console.log("\n=== ANNULER UN TICKET ===");
    
    const ticketIdInput = prompt("Identifiant du ticket : ");
    const ticketId = parseInt(ticketIdInput);

    if (isNaN(ticketId)) {
        console.log("Identifiant invalide.");
        return;
    }

    const index = tickets.findIndex(t => t.id === ticketId);

    if (index === -1) {
        console.log("Ticket introuvable.");
        return;
    }

    const ticket = tickets[index];
    const trip = trips.find(t => t.id === ticket.tripId);

    if (trip) {
        trip.availableSeats++;
    }

    tickets.splice(index, 1);

    console.log("\nTicket annulé avec succès.");
}

// --- Option 5 : Rechercher un ticket ---
function rechercherTicket() {
    console.log("\n=== RECHERCHER UN TICKET ===");
    
    const name = prompt("Nom du passager : ");

    if (!name || name.trim() === "") {
        console.log("Nom invalide.");
        return;
    }

    const resultats = tickets.filter(t => 
        t.passengerName.toLowerCase().includes(name.trim().toLowerCase())
    );

    if (resultats.length === 0) {
        console.log("Aucun ticket trouvé pour ce passager.");
        return;
    }

    console.log(`\n${resultats.length} ticket(s) trouvé(s) :\n`);
    for (let i = 0; i < resultats.length; i++) {
        const ticket = resultats[i];
        const trip = trips.find(t => t.id === ticket.tripId);

        console.log(`Ticket #${ticket.id}`);
        console.log(`Passager : ${ticket.passengerName}`);
        console.log(`Trajet : ${trip.departure} → ${trip.destination}`);
        console.log(`Place : ${ticket.seatNumber}`);
        console.log(`Prix : ${ticket.price} DH\n`);
    }
}

// --- Option 6 : Filtrer les trajets ---
function filtrerTrajets() {
    console.log("\n=== FILTRER LES TRAJETS ===");
    
    const ville = prompt("Ville de départ : ");

    if (!ville || ville.trim() === "") {
        console.log("Ville invalide.");
        return;
    }

    const resultats = trips.filter(t => 
        t.departure.toLowerCase() === ville.trim().toLowerCase()
    );

    if (resultats.length === 0) {
        console.log("Aucun trajet trouvé pour cette ville.");
        return;
    }

    console.log("\nRésultat :\n");
    for (let i = 0; i < resultats.length; i++) {
        const t = resultats[i];
        console.log(`${t.departure} → ${t.destination} : ${t.price} DH`);
    }
}

// --- Option 7 : Trier les trajets ---
function trierTrajets() {
    console.log("\n=== TRAJETS TRIÉS PAR PRIX CROISSANT ===\n");
    
    const tries = [...trips].sort((a, b) => a.price - b.price);

    for (let i = 0; i < tries.length; i++) {
        const t = tries[i];
        console.log(`${t.departure} → ${t.destination} : ${t.price} DH`);
    }
}


// 3. BOUCLE PRINCIPALE (MAIN LOOP)

let running = true;

while (running) {
    afficherMenu(); 
    let choix = prompt("Votre choix : "); 

    if (choix === "1") {
        afficherTrajets(); 
    } 
    else if (choix === "2") {
        acheterTicket(); 
    }
    else if (choix === "3") {
        afficherTickets(); 
    }
    else if (choix === "4") {
        annulerTicket(); 
    }
    else if (choix === "5") {
        rechercherTicket(); 
    }
    else if (choix === "6") {
        filtrerTrajets(); 
    }
    else if (choix === "7") {
        trierTrajets(); 
    }
    else if (choix === "0") {
        console.log("\nAu revoir ! Bon voyage ! 🚂\n");
        running = false; 
    } 
    else {
        console.log("\nChoix invalide. Veuillez réessayer.");
    }
}

