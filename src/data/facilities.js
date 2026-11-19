// Facilities at SkyNest – NEW data file in Version 2.
// Version 1 only had one short sentence per facility. Feedback asked for more detail
// about Wi-Fi, co-working spaces and the other facilities, so each one now has:
//   - text:      a short summary (used in the icon cards)
//   - details:   extra points (used in "Facilities in detail")
//   - available: which packages include it (taken from the package list in the brief)
//   - image:     a photo, where a suitable one is available
//
// These are FICTIONAL demonstration details. Anything SkyNest has not published
// (speeds, opening times, rules) tells the visitor to confirm with SkyNest.
import { images } from './images.js';

export const facilities = [
  {
    id: 'wifi',
    icon: 'wifi',
    title: 'High-speed Wi-Fi',
    text: 'Fast internet included in every package, in your room and the shared spaces.',
    image: images.wifi,
    available: ['Essential Living', 'Comfort Living', 'Premium Living'],
    details: [
      'Included in the monthly price of every package – no separate internet contract to set up.',
      'Available in bedrooms and shared areas, so you can study, stream or work from anywhere in the home.',
      'Suitable for everyday studying, streaming and online meetings.',
      'Need a guaranteed speed for your job? Ask SkyNest to confirm the current connection speed before you book.',
    ],
  },
  {
    id: 'coworking',
    icon: 'monitor',
    title: 'Co-working spaces',
    text: 'Shared desks and quiet areas to study or work away from your room.',
    image: images.coworking,
    available: [
      'Premium Living – co-working area and a dedicated workspace',
      'Comfort Living – study or working area',
    ],
    details: [
      'Shared desks and seating where residents can focus, take calls or work on group projects.',
      'Ideal for remote workers, freelancers, digital nomads and students.',
      'Premium Living also includes a dedicated workspace, so you always have a desk of your own.',
      'Not included in Essential Living. Ask SkyNest about booking rules or opening times for the shared work areas.',
    ],
  },
  {
    id: 'rooms',
    icon: 'sofa',
    title: 'Fully furnished rooms',
    text: 'Beds, storage and furniture ready for you on arrival.',
    image: images.roomSpacious,
    available: [
      'Essential Living – furnished shared room',
      'Comfort Living – private furnished room',
      'Premium Living – larger private furnished room',
    ],
    details: [
      'Move in with just a suitcase – there is no furniture to buy or deliver.',
      'Choose a shared room to save money, or a private room for more space and privacy.',
      'Please confirm the exact furniture in your room with SkyNest, as rooms can vary.',
    ],
  },
  {
    id: 'kitchen',
    icon: 'kitchen',
    title: 'Shared kitchen',
    text: 'Equipped kitchens for cooking your own meals and eating together.',
    image: images.kitchen,
    available: ['Essential Living', 'Comfort Living'],
    details: [
      'Cook your own food instead of eating out every day, which helps keep living costs down.',
      'A natural place to meet the people you live with.',
      'Premium Living does not list a shared kitchen in its package. Please confirm kitchen access with SkyNest if you are interested in Premium Living.',
    ],
  },
  {
    id: 'laundry',
    icon: 'laundry',
    title: 'Laundry facilities',
    text: 'Washing machines available to residents on every package.',
    image: images.laundry,
    available: ['Essential Living', 'Comfort Living', 'Premium Living'],
    details: [
      'Laundry access is part of every package, so you do not need to find a laundrette.',
      'Ask SkyNest whether detergent is provided and if there are set laundry times.',
    ],
  },
  {
    id: 'gym',
    icon: 'gym',
    title: 'Gym',
    text: 'Keep active without paying for a separate membership.',
    image: images.gym,
    available: ['Comfort Living', 'Premium Living'],
    details: [
      'Exercise close to home, without a separate gym membership.',
      'Not included in Essential Living.',
      'Ask SkyNest to confirm the gym opening hours.',
    ],
  },
  {
    id: 'lounge',
    icon: 'users',
    title: 'Lounges and rooftop',
    text: 'Comfortable shared spaces to relax and meet other residents.',
    image: images.lounge,
    available: ['Essential Living – shared lounge', 'Premium Living – rooftop lounge'],
    details: [
      'Relax, watch a film or chat with other residents after a long day.',
      'Premium Living residents can also use the rooftop lounge.',
    ],
  },
  {
    id: 'security',
    icon: 'shield',
    title: 'Security',
    text: 'A safe, secure building so you can feel at ease at home.',
    available: ['Essential Living', 'Comfort Living', 'Premium Living'],
    details: [
      'Security is part of living at SkyNest, whichever package you choose.',
      'Ask SkyNest how building access works and what to do if you arrive late at night.',
    ],
  },
];
