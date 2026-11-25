export interface PlayerStats {
  pac: number;
  sho: number;
  pas: number;
  dri: number;
  def: number;
  phy: number;
}

export interface PlayerData {
  name: string;
  team: string;
  nationality: string;
  countryCode: string; // code ISO pour le drapeau (fr, br, no, gb-eng...)
  jerseyNumber: number;
  age: number;
  image: string;
  rating: number;
  position: string;
  stats: PlayerStats;
}

// Placeholder aux couleurs de la carte : remplace par de vraies photos (PNG détouré idéalement)
const img = (text: string) =>
  `${text}`;

export const players: PlayerData[] = [
  {
    name: "Mbappé",
    team: "Real Madrid",
    nationality: "Français",
    countryCode: "fr",
    jerseyNumber: 9,
    age: 25,
    image: img("/players/mbappe.png"),
    rating: 91,
    position: "ST",
    stats: { pac: 97, sho: 90, pas: 80, dri: 92, def: 36, phy: 78 },
  },
  {
    name: "Vinicius Jr",
    team: "Real Madrid",
    nationality: "Brésilien",
    countryCode: "br",
    jerseyNumber: 7,
    age: 24,
    image: img("/players/vinicius.png"),
    rating: 90,
    position: "LW",
    stats: { pac: 95, sho: 83, pas: 81, dri: 93, def: 29, phy: 69 },
  },
  {
    name: "Haaland",
    team: "Manchester City",
    nationality: "Norvégien",
    countryCode: "no",
    jerseyNumber: 9,
    age: 24,
    image: img("/players/haaland.png"),
    rating: 91,
    position: "ST",
    stats: { pac: 89, sho: 93, pas: 66, dri: 80, def: 45, phy: 88 },
  },
  {
    name: "Lamine Yamal",
    team: "FC Barcelone",
    nationality: "Espagnol",
    countryCode: "es",
    jerseyNumber: 19,
    age: 21,
    image: img("/players/yamal.png"),
    rating: 90,
    position: "CAM",
    stats: { pac: 80, sho: 84, pas: 83, dri: 87, def: 78, phy: 82 },
  },
];
