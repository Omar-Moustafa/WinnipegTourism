import AccommodationAirbnb from 'src/Images/accomodation_airbnb1.jpg'
import AccomodationFort from 'src/Images/accomodation_fort.jpg'
import AccommodationMarriot from 'src/Images/accomodation_marriot.jpg'
import AccommodationMere from 'src/Images/accomodation_mere.jpg'
import CuisineAfv from 'src/Images/cuisine_afv.jpg'
import CuisineBaked from 'src/Images/cuisine_baked.jpg'
import CuisineClayOven from 'src/Images/cuisine_clayoven.png'
import CuisineKum from 'src/Images/cuisine_kum_koon.jpg'
import CuisineMesobEthopia from 'src/Images/cuisine_mesob_ethopian.png'
import CuisineMrCalzone from 'src/Images/cuisine_mr_calzone.png'
import CuisineShahi from 'src/Images/cuisine_shahi_flames.jpg'
import CuisineSmokes from 'src/Images/cuisine_smokes.png'
import CuisineTasteOfMed from 'src/Images/cuisine_taste_of_med.png'
import CuisineSingyun from 'src/Images/singyun.jpg'
import SummerActPark from 'src/Images/summer_asspark1.jpg'
import SummerActBeach from 'src/Images/summer_beach.jpg'
import SummerActBoat from 'src/Images/summer_boat.jpg'
import SummerActForks from 'src/Images/summer_forks.jpg'
import SummerActGokart from 'src/Images/summer_gokart.jpg'
import SummerActGolf from 'src/Images/summer_golf.webp'
import SummerActHorse from 'src/Images/summer_horseback3.jpg'
import TransportationEnterprise from 'src/Images/transpo_enterprise.jpg'
import TransportationTransit from 'src/Images/transpo_transit.png'
import TransportationUber from 'src/Images/transpo_uber.png'
import WinterActArchery from 'src/Images/winter_archery.jpg'
import WinterActAxe from 'src/Images/winter_axe1.png'
import WinterActCMHR from 'src/Images/winter_cmhr1.jpg'
import WinterActJets from 'src/Images/winter_jets1.jpg'
import WinterActMiniGolf from 'src/Images/winter_mini_golf.jpg'
import WinterActThermea from 'src/Images/winter_thermea.jpg'
import WinterActWag from 'src/Images/winter_wag1.jpg'

export const middleEasternCuisines = [
  {
    name: 'Taste of Mediterranean',
    topdish: ' Chicken Souvlaki Platter and the Mediterranean Platter',
    rating: 4.4,
    location: '244 Kennedy St, Winnipeg, MB R3C 1T1',
    website: 'http://www.tasteofmediterranean.ca/',
    image: CuisineTasteOfMed,
  },
  {
    name: 'Mr. Calzone',
    topdish: 'Chicken Calzone',
    rating: 4.2,
    location:
      '1254 Pembina Hwy, Winnipeg, MB R3T 2B1 (2 other locations on 653 Corydon Ave and 749 Ellice Ave',
    website: 'https://www.mrcalzone.ca/',
    image: CuisineMrCalzone,
  },
]

export const indianCuisines = [
  {
    name: 'Clay Oven',
    topdish: 'Butter Chicken',
    rating: 3.8,
    location:
      '1 Portage Ave E #3, Winnipeg, MB R3B 3N3 (2 other locations on 247 Edmonton St and 1600 Kenaston Blvd #240',
    website: 'https://www.clayoven.ca/',
    image: CuisineClayOven,
  },
  {
    name: 'Shahi Flames',
    topdish: 'Curries',
    rating: 4.6,
    location: '208 Marion St, Winnipeg, MB R2H 0T6',
    website: 'https://shahiflames.com/',
    image: CuisineShahi,
  },
]

export const chineseCuisines = [
  {
    name: 'Singyun Restaurant',
    topdish: 'Chow mien',
    rating: 4.6,
    location: '150 Provencher Blvd, Winnipeg, MB R2H 0H3',
    website: 'https://singyunrestaurantwinnipeg.com/',
    image: CuisineSingyun,
  },
  {
    name: 'Kum Koon Garden',
    topdish: 'Dim sum',
    rating: 4.2,
    location: '257 King St, Winnipeg, MB R3B 1J6',
    website: 'http://www.kumkoongarden.com/',
    image: CuisineKum,
  },
]

export const africanCuisines = [
  {
    name: 'Mesob Ethopian Eats',
    topdish: 'Doro Firfir',
    rating: 4.9,
    location: '121 Osborne St #200, Winnipeg, MB R3L 1Y4',
    website: 'https://mesob.ca/',
    image: CuisineMesobEthopia,
  },
  {
    name: 'AFV Kitchen Express',
    topdish: 'Jollof rice',
    rating: 4.7,
    location: '1555 Regent Ave W F3, Winnipeg, MB R2C 4J2',
    website: 'https://afvkitchen.ca/',
    image: CuisineAfv,
  },
]

export const localCuisines = [
  {
    name: 'Smokes Poutinerie',
    topdish: 'Buffalo Chicken poutine',
    rating: 4.0,
    location: '131 Albert St, Winnipeg, MB R3B 1G6',
    website: 'https://smokespoutinerie.com/',
    image: CuisineSmokes,
  },
  {
    name: 'Baked Expectations',
    topdish: 'red velvet cake',
    rating: 4.1,
    location: '161 Osborne St, Winnipeg, MB R3L 1Y7',
    website: 'https://bakedexpectations.ca/',
    image: CuisineBaked,
  },
]

export const accomodations = [
  {
    name: 'Mere Hotel',
    rating: '4.4',
    amenities: 'pet-friendly, gym',
    price: 169,
    location: ' 333 Waterfront Dr, Winnipeg, MB R3B 0V1',
    website: 'https://www.merehotel.com/',
    image: AccommodationMere,
  },
  {
    name: 'Delta Hotels by Marriot Winnipeg',
    rating: '4.3',
    amenities: 'pool, hot tub, pet-friendly, free-wifi, gym',
    price: 195,
    location: '350 St Mary Ave, Winnipeg, MB R3C 3J2',
    website: 'https://www.marriott.com/en-us/hotels',
    image: AccommodationMarriot,
  },

  {
    name: 'Fort Garry Hotel',
    rating: '4.4',
    amenities: 'pool, hot tub, pet-friendly, free-wifi, gym',
    price: 152,
    location: '222 Broadway, Winnipeg, MB R3C 0R3',
    website: 'https://www.fortgarryhotel.com/',
    image: AccomodationFort,
  },
]

export const transportation = [
  {
    type: 'Enterprise Rent A-car',
    location: 'various locations in the city',
    price: 'price varies depending on vehicle chosen.',
    website: 'https://www.enterprise.ca/en/home.html',
    image: TransportationEnterprise,
  },
  {
    type: 'Uber',
    location: 'Any where with in Winnipeg',
    price: 'Varies depending on destinations',
    website: 'https://www.uber.com/',
    image: TransportationUber,
  },
  {
    type: 'Winnipeg Transit',
    location: 'Any bus stop location within the city',
    price: '3.10 for transfer valid for /75minutes',
    website: 'https://winnipegtransit.com/',
    image: TransportationTransit,
  },
]

export const summerActivites = [
  {
    name: 'Horseback Riding @ Birds Hill Ranch',
    description:
      'Birds Hill Park Ranch offers scenic and relaxing riding trails and the nicest horses around! Families, children or group parties, come and enjoy the best in horseback riding.',
    duration: '1h',
    location: '30 Nimowin Rd, Oakbank, MB R5M 0C9',
    price: '35$ per hour trail ride or 45$ per hour private ride',
    website: 'http://www.bhpr.ca/',
    image: SummerActHorse,
  },
  {
    name: 'Boat Ride @ West Hawk Lake Marina',
    description:
      'Enjoy time out on the water so as to bond among family members or with friends as you work together and enjoy a boat ride.',
    duration: '1h',
    location: 'westhawk lake',
    price: 'see website for prices as they differ',
    website: 'https://www.westhawkmarine.com/rentals-boats-dealership--rentals',
    image: SummerActBoat,
  },
  {
    name: 'Go karting @ Grand Prix Amusements',
    description:
      'Rev up the excitement with go-kart racing on three challenging tracks with more than 75 go-karts for ages four to adult.',
    duration: '~5minutes per session',
    location: '57102 Symington Rd, Springfield, MB R5T 0E4',
    price: 'see website for prices as they differ',
    website: 'https://grandprixamusements.ca/go-karts/',
    image: SummerActGokart,
  },
  {
    name: 'Golfing',
    description: 'B',
    duration: 'Varies see website for details',
    location: '2021 Main St, Winnipeg, MB R2V 2B9',
    price: 'see website for prices as they differ',
    website: 'https://legacy.winnipeg.ca/golf/kildonan.stm',
    image: SummerActGolf,
  },
  {
    name: 'Beach day @ birds hill provincial park',
    description:
      'Enjoy a day at the beach and work on your tan. Can go swimming, play volleyball, walks, bike rides or any other activity of choice',
    duration: 'As long as you would like',
    location: 'Birds Hill Provincial Park, Oakbank, MB R0E 0K0',
    price: 'free',
    website:
      'https://www.gov.mb.ca/sd/parks/park-maps-and-locations/central/birds.html',
    image: SummerActBeach,
  },
]

export const winterActivities = [
  {
    name: 'Archery',
    description:
      ' indoor archery range is open to the public, no membership or equipment required. Reservations are welcome but not required. Please book your time ahead if you have a group for 4 or more! Thank you.',

    duration: '1h',
    location: '2281 Portage Ave, Winnipeg, MB R3J 0M1',
    price: '20$/person (bow rental included in this price)',
    website:
      'https://www.heightsoutdoors.com/shooting-range-birthdays-lessons/',
    image: WinterActArchery,
  },
  {
    name: 'Axe throwing',
    description:
      ' AXE Throwing Winnipeg offers a unique experience where you can challenge friends and colleagues to an axe-throwing competition. Earn the most points by throwing bullseyes and aces to win a match. Become the tournament champion earning serious bragging rights and the admiration of your peers, forever.',
    duration: '1h',
    location: '30 Durand Rd Unit #4, Winnipeg, MB R2J 3T2',
    price: '30$/person',
    website: 'https://www.axethrowingwinnipeg.ca/#book-now',
    image: WinterActAxe,
  },
  {
    name: 'Black Light Mini golf',
    description:
      ' This brand new artistically inspired 18 hole glow in the dark mini golf course will take you deep into the sea with dolphins, sharks, and plenty of fish while the back 9 will take you millions of years into the past with the tyrannosaurus rex, the pterodactyl, and the long neck brontosaurus!',

    duration: '20-45minutes',
    location: '423 McPhillips St, Winnipeg, MB R2X 2Z8',
    price: '7.95',
    website: 'https://u-puttz.ca/black-light-mini-golf/',
    image: WinterActMiniGolf,
  },
  {
    name: 'Thermea by Nordik Spa - Nature Day',
    description:
      ' improve health and well-being by enjoying a day at thermea which provides a stimulating and rejuvenating experience with the benefits of thermotherapy and massage therapy, in perfect symbiosis with nature.',

    duration: '~4h (but can stay as long as you would like',
    location: '775 Crescent Dr, Winnipeg, MB R3T 1X3',
    price: 'varies see website for details',
    website: 'https://www.thermea.ca/rates-packages/a-la-carte-rates/',
    image: WinterActThermea,
  },
  {
    name: 'Canadian Muesum for Human Rights',
    description:
      ' As the worlds first museum dedicated to human rights, visit and develop an understanding of human rights so as to experience a positive force for change in the world.',

    duration: '~4hr (but can stay as long as you would like)',
    location: '85 Israel Asper Way, Winnipeg, MB R3C 0L5',
    price: '18$ for adults (18+) and 8$ for under 18',
    website: 'https://humanrights.ca/',
    image: WinterActCMHR,
  },
]
