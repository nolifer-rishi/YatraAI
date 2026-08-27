import { useEffect, useRef, useState, useCallback } from 'react';
import { API_BASE_URL } from '../services/api';

const WS_BASE_URL = (import.meta.env.VITE_WS_URL || API_BASE_URL.replace(/^http/, 'ws')).replace(/\/$/, '');

export function useTripWebSocket(tripId, onEventReceived) {
  const [connected, setConnected] = useState(false);
  const sendMessage = useCallback((message) => {
    console.warn('WebSockets are disabled for Vercel deployment');
    return false;
  }, []);
  
  return { connected, sendMessage };
}

export default useTripWebSocket;
