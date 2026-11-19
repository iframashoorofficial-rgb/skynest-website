// The three accommodation packages.
// These are FICTIONAL demonstration prices and packages.
import { images } from './images.js';

export const packages = [
  {
    id: 'essential',
    name: 'Essential Living',
    price: 400,
    bestFor: 'Students and anyone on a tight budget',
    description:
      'A comfortable shared room with all the everyday basics covered, so you can settle into a new city without overspending.',
    image: images.essential,
    features: [
      'Furnished shared room',
      'High-speed Wi-Fi',
      'Shared kitchen',
      'Laundry access',
      'Shared lounge',
      'Basic utilities included',
    ],
  },
  {
    id: 'comfort',
    name: 'Comfort Living',
    price: 450,
    popular: true,
    bestFor: 'Young professionals and remote workers',
    description:
      'Your own private room plus a place to study or work and gym access – the balance of privacy, comfort and value.',
    image: images.comfort,
    features: [
      'Private furnished room',
      'High-speed Wi-Fi',
      'Shared kitchen',
      'Study or working area',
      'Laundry access',
      'Gym access',
      'Utilities included',
    ],
  },
  {
    id: 'premium',
    name: 'Premium Living',
    price: 500,
    bestFor: 'Digital nomads and corporate stays',
    description:
      'A larger private room with a dedicated workspace, co-working access and our rooftop lounge for the most comfortable stay.',
    image: images.premium,
    features: [
      'Larger private furnished room',
      'Dedicated workspace',
      'High-speed Wi-Fi',
      'Gym access',
      'Co-working area',
      'Rooftop lounge',
      'Laundry access',
      'Utilities included',
    ],
  },
];

// Rows for the comparison table.
// true = included, false = not included, text = shows that text.
// The order of values matches the packages above: [Essential, Comfort, Premium].
export const comparisonRows = [
  { label: 'Monthly price', values: ['S$400', 'S$450', 'S$500'] },
  { label: 'Room type', values: ['Shared room', 'Private room', 'Larger private room'] },
  { label: 'Fully furnished', values: [true, true, true] },
  { label: 'High-speed Wi-Fi', values: [true, true, true] },
  { label: 'Laundry access', values: [true, true, true] },
  { label: 'Utilities', values: ['Basic utilities', 'Included', 'Included'] },
  { label: 'Shared kitchen', values: [true, true, false] },
  { label: 'Shared lounge', values: [true, false, false] },
  { label: 'Study / work space', values: [false, 'Study or working area', 'Dedicated workspace'] },
  { label: 'Gym access', values: [false, true, true] },
  { label: 'Co-working area', values: [false, false, true] },
  { label: 'Rooftop lounge', values: [false, false, true] },
];

// Formats 450 as "S$450"
export const formatPrice = (price) => `S$${price.toLocaleString('en-US')}`;
