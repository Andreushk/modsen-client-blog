interface MarkerOptions {
  title: string;
  coordinates: {
    lng: number;
    lat: number;
  };
}

export const MAP_MARKERS: MarkerOptions[] = [
  {
    title: 'Palermo (Italy)',
    coordinates: {
      lng: 13.3745,
      lat: 38.1514,
    },
  },
  {
    title: 'Wroclaw (Poland)',
    coordinates: {
      lng: 17.0363,
      lat: 51.1049,
    },
  },
  {
    title: 'Minsk (Belarus)',
    coordinates: {
      lng: 27.5554,
      lat: 53.9027,
    },
  },
];

export const MAP_STYLE = 'mapbox://styles/mapbox/light-v11';
export const DEFAULT_MAP_LNG = 27.3828;
export const DEFAULT_MAP_LAT = 52.4167;
export const DEFAULT_MAP_ZOOM = 4;
