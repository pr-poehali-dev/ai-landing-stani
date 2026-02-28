import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';

type Metric = {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
};

type YMWindow = Window & {
  ym?: (id: number, action: string, params: object) => void;
};

function sendToYandexMetrika(metric: Metric) {
  if (typeof window === 'undefined') return;
  const ym = (window as YMWindow).ym;
  if (typeof ym !== 'function') return;

  ym(101026698, 'params', {
    web_vitals: {
      [metric.name]: {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        rating: metric.rating,
      },
    },
  });
}

export function reportWebVitals() {
  onCLS(sendToYandexMetrika);
  onFCP(sendToYandexMetrika);
  onLCP(sendToYandexMetrika);
  onTTFB(sendToYandexMetrika);
  onINP(sendToYandexMetrika);
}