// Everything on the site comes from this file: your business details, services,
// projects, process, service areas and licensing. Edit it and rebuild.

export const site = {
  name: "Halverson Build Co.",
  shortName: "Halverson",
  tagline: "Remodels, additions and new homes in the Cedar Valley",
  description:
    "Halverson Build Co. is a licensed general contractor building kitchens, baths, additions and custom homes across the Cedar Valley since 2009.",
  phone: "(555) 016-4410",
  email: "estimates@halversonbuild.example",
  address: { street: "2210 Mill Race Road", city: "Cedar Falls", region: "IA", postal: "50613" },
  hours: "Monday to Friday, 7am to 4:30pm",
  social: [
    { label: "Instagram", url: "https://instagram.com/" },
    { label: "Facebook", url: "https://facebook.com/" },
  ],
};

// Placeholder numbers: replace with your own license and policy details.
export const licensing = {
  items: [
    { label: "General contractor license", value: "GC-000000 (placeholder)" },
    { label: "General liability", value: "$2,000,000 per occurrence" },
    { label: "Workers' compensation", value: "Covers every crew member" },
    { label: "Workmanship warranty", value: "2 years on labor, in writing" },
  ],
  note: "License and policy numbers shown are placeholders for this template. Certificates of insurance are sent with every signed contract.",
};

export const home = {
  heroTitle: "Remodels and additions, built by our own crew",
  heroText:
    "Kitchens, baths, additions and custom homes across the Cedar Valley. We plan, permit and build with our own carpenters, a fixed schedule and one person who answers your calls.",
  stats: [
    { value: "17", label: "Years building in the valley" },
    { value: "310+", label: "Projects finished" },
    { value: "14", label: "People on our own crew" },
  ],
  ctaTitle: "Tell us about the project",
  ctaText: "Send a few details and a photo or two. We'll call within two business days to set up a site visit, which is free.",
};

export type Service = { slug: string; name: string; summary: string; scope: string[]; typical: string };

export const services: Service[] = [
  {
    slug: "kitchens",
    name: "Kitchen remodels",
    summary: "Layouts that work, cabinets set level, and counters templated after the boxes are in, not before.",
    scope: ["Layout and cabinet design", "Wall removal and structural beams", "Electrical, plumbing and venting", "Tile, counters and trim"],
    typical: "8 to 12 weeks, $45,000 to $120,000",
  },
  {
    slug: "baths",
    name: "Bathrooms",
    summary: "Curbless showers, heated floors and properly waterproofed walls, tested before tile goes on.",
    scope: ["Full tear-out to studs", "Waterproofing with a flood test", "Tile, glass and fixtures", "Ventilation sized to the room"],
    typical: "4 to 6 weeks, $22,000 to $60,000",
  },
  {
    slug: "additions",
    name: "Additions",
    summary: "Second stories, sunrooms and primary suites that look like they were always part of the house.",
    scope: ["Drawings and engineering", "Footings and foundations", "Framing, roofing and siding to match", "Heating and cooling tie-in"],
    typical: "4 to 7 months, from $150,000",
  },
  {
    slug: "new-homes",
    name: "Custom homes",
    summary: "One to three homes a year, built on your lot to your plans or ours.",
    scope: ["Site and budget review", "Permits and inspections", "Our own framing and finish crews", "One project lead from start to keys"],
    typical: "9 to 14 months",
  },
  {
    slug: "basements",
    name: "Basement finishing",
    summary: "Dry, warm lower levels with egress windows, so a basement bedroom is a legal one.",
    scope: ["Moisture checks first", "Egress windows and wells", "Insulated walls and soffits", "Bathrooms and wet bars"],
    typical: "6 to 10 weeks, $40,000 to $90,000",
  },
  {
    slug: "decks-porches",
    name: "Decks and porches",
    summary: "Covered porches and composite decks on footings that go below the frost line.",
    scope: ["Footings to 42 inches", "Composite or cedar decking", "Covered roofs and screen rooms", "Railings to code"],
    typical: "2 to 5 weeks, $18,000 to $70,000",
  },
];

export type Project = {
  slug: string;
  title: string;
  kind: "kitchen" | "bath" | "addition" | "porch";
  town: string;
  year: number;
  duration: string;
  budget: string;
  summary: string;
  before: string;
  after: string;
  work: string[];
  quote?: { text: string; name: string };
};

// Sample projects written for this template. Replace with your own.
export const projects: Project[] = [
  {
    slug: "maple-street-kitchen",
    title: "An open kitchen on Maple Street",
    kind: "kitchen",
    town: "Cedar Falls",
    year: 2026,
    duration: "10 weeks",
    budget: "$85,000 to $95,000",
    summary: "A closed-off 1962 galley kitchen opened to the dining room with a flush beam, an island with seating for four and a pantry wall.",
    before: "A narrow galley with dark cabinets, a soffit over every wall and one window over the sink.",
    after: "The wall to the dining room gone, a flush LVL beam in the ceiling, white oak cabinets and a nine-foot island.",
    work: [
      "Removed a load-bearing wall and set a flush beam on new posts down to the footing",
      "Rerouted the furnace supply that ran through the old soffit",
      "New 200-amp panel to carry an induction range",
      "Templated quartz after the cabinets were set, so every seam lines up",
    ],
    quote: { text: "They told us the beam would take two days and it took two days. Every date held after that, too.", name: "Sample review, Maple Street homeowner" },
  },
  {
    slug: "ridgeway-primary-bath",
    title: "A curbless primary bath on Ridgeway Drive",
    kind: "bath",
    town: "Waterloo",
    year: 2026,
    duration: "5 weeks",
    budget: "$38,000 to $44,000",
    summary: "A cramped bath with a fiberglass tub became a curbless shower, a double vanity and a heated floor.",
    before: "A tub and shower insert, a single sink and a fan that vented into the attic.",
    after: "A walk-in shower with no curb, a linear drain, a 72-inch vanity and a fan ducted outside.",
    work: [
      "Recessed the subfloor between joists for a curbless entry",
      "Sheet waterproofing on every wet wall with a 24-hour flood test",
      "Electric floor heat on its own thermostat",
      "Ducted the new fan through the roof and sealed the old attic vent",
    ],
  },
  {
    slug: "orchard-lane-addition",
    title: "A two-story addition on Orchard Lane",
    kind: "addition",
    town: "Hudson",
    year: 2025,
    duration: "6 months",
    budget: "$240,000 to $265,000",
    summary: "A family room below and a primary suite above, matched to a 1940s farmhouse down to the lap siding reveal.",
    before: "A small two-story farmhouse with a sagging back porch and one upstairs bathroom.",
    after: "A 680 square foot addition with a family room, primary suite and a second full bath.",
    work: [
      "Engineered footings below the frost line beside the old fieldstone foundation",
      "Matched the roof pitch and the five-inch siding reveal",
      "New heat pump zone for the addition",
      "Kept the original back door as the pass-through between old and new",
    ],
    quote: { text: "People who visit can't tell where the old house ends. That was the whole point.", name: "Sample review, Orchard Lane homeowner" },
  },
  {
    slug: "prairie-view-porch",
    title: "A screened porch on Prairie View Court",
    kind: "porch",
    town: "Cedar Falls",
    year: 2025,
    duration: "4 weeks",
    budget: "$52,000 to $58,000",
    summary: "A rotting deck replaced by a covered, screened porch with a cedar ceiling and room for a table of eight.",
    before: "A pressure-treated deck with soft boards, shallow footings and no shade in the afternoon.",
    after: "A 16 by 20 foot screened porch with a gable roof, cedar ceiling, ceiling fans and composite floor.",
    work: [
      "New footings to 42 inches and a ledger flashed into the house",
      "Gable roof tied into the existing eave",
      "Cedar tongue and groove ceiling with two fans",
      "Removable screen panels for winter",
    ],
  },
];

export const process = [
  { title: "Call and site visit", text: "A short call, then we walk the house with you, measure and take photos. No charge." },
  { title: "Design and fixed estimate", text: "Drawings, selections and a line-item estimate. The price is fixed once you've chosen finishes." },
  { title: "Permits and schedule", text: "We pull the permits and give you a week-by-week schedule before anything is torn out." },
  { title: "Build", text: "Our own crew on site every working day, with a Friday update from your project lead." },
  { title: "Walkthrough and warranty", text: "We fix the punch list together, hand over the paperwork and stand behind the work for two years." },
];

export const areas = {
  intro: "We build within about 30 miles of our shop in Cedar Falls. Farther out for additions and new homes, so ask.",
  towns: [
    { name: "Cedar Falls", note: "Home base" },
    { name: "Waterloo" },
    { name: "Hudson" },
    { name: "Evansdale" },
    { name: "Janesville" },
    { name: "Denver" },
    { name: "Dike" },
    { name: "Waverly" },
    { name: "La Porte City" },
    { name: "Reinbeck", note: "Additions and new homes" },
  ],
};

export const about = {
  title: "A builder with its own crew",
  paragraphs: [
    "Erik Halverson started the company in 2009 with a truck, a trailer and a framing crew of three. Today there are fourteen of us, and we still frame, trim and tile our own jobs instead of handing them off.",
    "We take on about twenty projects a year so that each one has a project lead who is on site, not juggling a dozen houses. Electrical, plumbing and heating go to the same three licensed trade partners we've worked with for over ten years.",
  ],
  people: [
    { name: "Erik Halverson", role: "Owner and builder" },
    { name: "Dana Whitlock", role: "Project lead, remodels" },
    { name: "Mateo Ruiz", role: "Project lead, additions and homes" },
    { name: "Lena Brandt", role: "Estimating and selections" },
  ],
};

export const quoteForm = {
  projectTypes: ["Kitchen remodel", "Bathroom", "Addition", "Custom home", "Basement", "Deck or porch", "Something else"],
  budgets: ["Under $25,000", "$25,000 to $75,000", "$75,000 to $150,000", "$150,000 to $300,000", "Over $300,000", "Not sure yet"],
  timelines: ["As soon as possible", "In the next 3 months", "3 to 6 months", "6 months or more", "Just planning"],
};
