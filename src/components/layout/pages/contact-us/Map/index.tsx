'use client';

import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl';
import { useEffect, useRef } from 'react';

import { sen } from '@/styles/fonts';

import {
  DEFAULT_MAP_LAT,
  DEFAULT_MAP_LNG,
  DEFAULT_MAP_ZOOM,
  MAP_MARKERS,
  MAP_STYLE,
} from './options';
import styles from './styles.module.scss';

const Map: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  const getUserPosition = (position: GeolocationPosition): void => {
    const { longitude, latitude } = position.coords;

    if (map.current) {
      map.current.setCenter([longitude, latitude]);
    }
  };

  useEffect((): void => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getUserPosition, null, { enableHighAccuracy: true });
    }
  }, []);

  useEffect((): void => {
    const accessToken: string | undefined = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

    if (!accessToken) return;

    mapboxgl.accessToken = accessToken;

    if (map.current) return;
    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: MAP_STYLE,
        center: [DEFAULT_MAP_LNG, DEFAULT_MAP_LAT],
        zoom: DEFAULT_MAP_ZOOM,
      });

      MAP_MARKERS.forEach((marker) => {
        new mapboxgl.Marker()
          .setLngLat([marker.coordinates.lng, marker.coordinates.lat])
          .setPopup(
            new mapboxgl.Popup({ offset: 24 }).setHTML(
              `<h5 class=${sen.className}>${marker.title}</h5>`,
            ),
          )
          .addTo(map.current!);
      });
    }
  }, []);

  return <section ref={mapContainer} className={styles.map} />;
};

export default Map;
