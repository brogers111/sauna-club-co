// Kept separate from locations.ts so the (client-side) footer can import the
// hours without pulling every location's page copy into the browser bundle.

export type OpeningHours = {
  // Shown on the site, e.g. in the footer and Directions & Hours sections.
  label: string;
  // Used for OpeningHoursSpecification schema.
  days: string[];
  // 24-hour "HH:MM".
  opens: string;
  closes: string;
};

export const WHEAT_RIDGE_HOURS: OpeningHours[] = [
  {
    label: "7:00 am – 10:00 pm Monday–Friday",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "22:00",
  },
  {
    label: "8:00 am – 9:00 pm Saturday & Sunday",
    days: ["Saturday", "Sunday"],
    opens: "08:00",
    closes: "21:00",
  },
];
