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
function afficherMenu(){

console.log("=================================");
console.log("       RAILWAY MANAGER");
console.log("=================================");
console.log("1. Afficher les trajets");
console.log("2. Acheter un ticket");
console.log("3. Afficher les tickets");
console.log("4. Annuler un ticket");
console.log("5. Rechercher un ticket");
console.log("6. Filtrer les trajets");
console.log("7. Trier les trajets");
console.log("0. Quitter");
}
afficherMenu()

//while(true){
   // afficherMenu()
    //const prompt=require("prompt-sync")();
   // let choix=Number(prompt("Votre choix : "));
    //console.log(choix);
    //switch(afficherMenu){
      //  case 1:
        //    afi
        //case 0:      break;
        //default;
 //   }
//}
function afficherTrajet(){
  console.log("=== TRAJETS DISPONIBLES ===");
  console.log(" ");
  for(let i=0; i<trips.length; i++){
    console.log(`#${trips[i].id} ${trips[i].departure} → ${trips[i].destination}`);
    console.log(`Départ : ${trips[i].departureTime}`);
    console.log(`Arrivée : ${trips[i].arrivalTime}`);
    console.log(`price: ${trips[i].price}`);
    console.log(`Places disponibles : ${trips[i].availableSeats}`)
    console.log(" ");
  }
}
afficherTrajet();


const prompt=require("prompt-sync")();
let name=prompt("saisi ton nom: ");
let trajetId=Number(prompt("saisi l'identifiant du trajet: "));
const tickets = [];
let seatNumber=1;

function AcheterTicket(trips, tickets, name, trajetId){

  let findTrajet=null;
  for(let i=0;i<trips.length; i++){
    if(trips[i].id===trajetId){
         findTrajet=trips[i];
         break;
    }
  }
  if(findTrajet===null){
    console.log("Trajet introuvable.");
    return;
  }
  if(findTrajet.availableSeats===0){
    console.log("Train complet.");
    return;
  }
  if(findTrajet.availableSeats>=1){

    let ticket={
      id: tickets.length+1,
      passengerName: name,
      tripId: findTrajet.id,
      seatNumber: "",
      price: findTrajet.price
    };
      ticket.seatNumber+=1;
      findTrajet.availableSeats-=1;
      tickets.push(ticket);
  }
     console.log("Ticket acheté avec succès.");
//   console.log(" ");
//   console.log(`Ticket #${ticket.id}`);
//   console.log(`Passager : ${ticket.passengerName}`);
//   console.log(`Trajet : ${ticket.tripId}`);
//   console.log(`Place : ${ticket.seatNumber}`);
//   console.log(`Prix : ${ticket.price} DH`);
// 
}
AcheterTicket(trips, tickets, name, trajetId);

 function afficherTicket(){
     if(tickets.length===0){
         console.log("Aucun ticket enregistré.");
         return ;
     }
     let findTrajet=null;
  for(let i=0;i<trips.length; i++){
    if(trips[i].id===trajetId){
         findTrajet=trips[i];
         break;
    }
  }
  if(findTrajet){
     console.log("=== TICKETS ===");
     
     for(let i=0; i<tickets.length; i++){
         console.log(`Ticket #${tickets[i].id}`);
         console.log(`Passager : ${tickets[i].passengerName}`);
         console.log(`Trajet : ${findTrajet.departure} → ${findTrajet.destination}`);
         console.log(`Place : ${tickets[i].seatNumber}`);
         console.log(`Prix : ${tickets[i].price} DH`);
         console.log(" ");
         }
     }
    }
    
 afficherTicket();


//let ticketId=Number(prompt("Identifiant du ticket : "));

function annulerTicket(trips, tickets, ticketId){
  let indexTicket=-1;
  for(let i=0;i<tickets.length; i++){
    if(tickets[i].id===ticketId){
         indexTicket=i;
         break;
    }
  }
  if(indexTicket===-1){
    console.log("Ticket introuvable.");
    return;
  }
  let ticket=tickets(indexTicket);
  let trajet=null;
   for(let j=0;j<trips.length; j++){
      if(trips[j].id===ticket.tripIdId){
         trajet=trips[j];
          break;
      }
   }
   tickets.splice(indexTicket,1);
   if(trajet!==null){
    trajet.availableSeats+=1;
   }
   console.log(" ");
   console.log("Ticket annulé avec succès.");
}
annulerTicket(trips, tickets, ticketId);


