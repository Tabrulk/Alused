//Laualambi sisselülitamine

//Reegel: Lamp põleb, kui elektrivool on olemas ja lüliti on sisse lülitatud.

const PowerOn = true;
const SwitchOn = true;

const result = PowerOn && SwitchOn;
console.log("Kas lamp p6leb? " + result);


//2. Veebitunni avamine
//Reegel: Tunni avamiseks on vaja internetiühendust ja linki

//Internetiühendus olemas

const InternetOn = true;
//Link olemas
const HasLink = false;
const result2 = InternetOn && HasLink;
console.log("Kas veebitundi saab avada? " + result2);


//3. Ostu eest tasumine
//Reegel: sularaha või pangakaardiga

const CashAvailable = false;
const HasCard = true;

const result3 = CashAvailable || HasCard;
console.log("Kas saab tasuda? " + result3);

//4. Teate saamine
//Reegel: Teade on saadud, kui saabus e-kiri või SMS

const EmailReceived = true;
const SmsReceived = false;

const result4 = EmailReceived || SmsReceived;
console.log("Kas teade on saadud? " + result4);

//5. Akna avamine
//Reegel: Võib avada, kui vihma ei saja

const IsRaining = false; //vihma ei saja
const result5 = !IsRaining; //Kontrollime, kas akent võib avada?
console.log("Kas akent võib avada? " + result5);

//6. Severi käivitamine
//Reegel: Vaja on sisselülitatud arvutit, paigaldatud operatsioonisüsteemi
// ja käivitamisõigus

const ComputerOn = true;
const OSInstalled = true;
const HasPremissions = false;
const result6 = ComputerOn && OSInstalled && HasPremissions;
console.log("Kas server käivutub? " + result6);

//7. Kooli jõudmine
//Reegel: Kooli saab minna bussi, jalgaratta või vanemate autoga

const ByBus = false;
const ByBike = true;
const ByCar = false;
const result7 = ByBus || ByBike || ByCar;
console.log("Kas kooli saab minna? " + result7);

//8. Filmi vaatamine
//Reegel: Vaja on internetiühendust ning tellimust või ostetud veebiseansi piletit

const InternetHomeOn = false;
const HasSubscription = true;
const HasTicket = true;
const result8 = InternetHomeOn && (HasSubscription || HasTicket);
console.log("Kas me saame filmi vaadata? " + result8);

//9. Piknik
//Reegel: Vaja on toitu ning kuiva ilma või katusega lehtlat

const Food = true;
const DryWeather = false;
const HasRoof = true;
const result9 = Food && (DryWeather || HasRoof);
console.log("Kas saame piknikule minna? " + result9);

//10. Uuenduse allalaadimine
//Reegel: Vaja on internetiühhendust ning kettaruumi
//Madal akutase koos ühendamata laadijaga keelab allalaadimise

const InternetConnectin = true;
const DiskSpace = true;
const LowBattary = true;
const ChargerConnected = false;
const result10 = InternetConnectin && DiskSpace && (!LowBattary || ChargerConnected);
console.log("Kas uuendust saab alla laadiad? " + result10);

//11. Valmis tellimuse kättesaamine
//Reegel: Tellimus peab olema valmis, kuller või väljastuspunkt saadavl ning väljastamine blokeerimata

const OrderReady = true;
const CourierAvailable = false;
const PickupAvailable = true;
const Blocked = false;
const result11 = OrderReady && (CourierAvailable || PickupAvailable) && !Blocked;
console.log("Kas tellimuse saab kätte? " + result11);