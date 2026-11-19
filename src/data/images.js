// All photos used on the website, in one place so they are easy to swap.
// Photos come from Unsplash (free to use).
//
// VERSION 2 – performance: instead of one fixed-size file, each photo is offered in
// several widths (see Photo.jsx). The browser downloads only the size it needs, so a
// phone gets a small file and a big desktop screen gets a sharper one.
// "auto=format" lets Unsplash send WebP/AVIF when the browser supports it.
//
// VERSION 2 – accessibility: alt text now describes what is actually in each photo
// and why it is there (for example which package or facility it shows).

// Builds one Unsplash address at a given width
export const unsplash = (id, width) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=70`;

export const images = {
  // ---------- Banners (top of each page) ----------
  homeHero: {
    id: '1560448204-e02f11c3d0e2',
    alt: 'Bright, modern open-plan living room with sofas and large windows in a SkyNest-style home',
  },
  aboutBanner: {
    id: '1512453979798-5ea266f8880c',
    alt: 'Dubai city skyline at sunset, where SkyNest is based',
  },
  packagesBanner: {
    id: '1554995207-c18c203602cb',
    alt: 'Shared lounge with a leather sofa, cushions and plants',
  },
  faqBanner: {
    id: '1600210492486-724fe5c67fb0',
    alt: 'Light, airy lounge with armchairs and a coffee table',
  },
  contactBanner: {
    id: '1502672260266-1c1ef2d93688',
    alt: 'Cosy furnished apartment with plants, a sofa and a reading chair',
  },

  // ---------- Home and About ----------
  homeIntro: {
    id: '1522708323590-d24dbb6b0267',
    alt: 'Furnished apartment with a dining table, open kitchen and armchair, ready to move into',
  },
  community: {
    id: '1556909114-f6e7ad7d3136',
    alt: 'Two residents cooking a meal together in a shared kitchen',
  },
  aboutIntro: {
    id: '1543269865-cbf427effbad',
    alt: 'Young residents chatting and working together around a table',
  },
  aboutCommunity: {
    id: '1529156069898-49953e39b3ac',
    alt: 'A group of friends sitting side by side with their arms around each other',
  },

  // ---------- Package rooms (shown larger in Version 2) ----------
  essential: {
    id: '1522771739844-6a9f6d5f14af',
    alt: 'Essential Living example room: a simple furnished bedroom with a bed, bedside table and lamp',
  },
  comfort: {
    id: '1595526114035-0d45ed16cfbf',
    alt: 'Comfort Living example room: a bright private bedroom with a double bed, artwork and a chair',
  },
  premium: {
    id: '1616594039964-ae9021a400a0',
    alt: 'Premium Living example room: a large private bedroom with an upholstered bed and a city view',
  },

  // ---------- NEW in Version 2: more rooms ----------
  roomCityView: {
    id: '1631049307264-da0ec9d70304',
    alt: 'Private bedroom with a double bed, bedside table and lamp next to a large window overlooking the city',
  },
  roomSpacious: {
    id: '1560185893-a55cbc8c57e8',
    alt: 'Spacious bedroom with a large bed, an armchair, a patterned rug and wooden floors',
  },
  roomDesk: {
    id: '1600494603989-9650cf6ddd3d',
    alt: 'Quiet work corner in a room, with a desk, office chair, lamp and a plant by the window',
  },

  // ---------- NEW in Version 2: shared facilities ----------
  kitchen: {
    id: '1484154218962-a197022b5858',
    alt: 'Shared kitchen with white cupboards, an oven, a large fridge and a breakfast bar with stools',
  },
  lounge: {
    id: '1618221195710-dd6b41faaea6',
    alt: 'Shared lounge with a large grey sofa, cushions, a wooden coffee table and floor lamp',
  },
  coworking: {
    id: '1527192491265-7e15c55b1ed2',
    alt: 'Co-working space with long shared desks where people work on laptops under hanging lights',
  },
  wifi: {
    id: '1521737604893-d14cc237f11d',
    alt: 'Residents working on laptops together at a table, connected to the Wi-Fi',
  },
  gym: {
    id: '1534438327276-14e5300c3a48',
    alt: 'Gym with a long rack of dumbbells, exercise machines and a person training',
  },
  laundry: {
    id: '1626806787461-102c1bfaaea1',
    alt: 'Laundry corner with a washing machine, storage baskets and shelves',
  },
};
