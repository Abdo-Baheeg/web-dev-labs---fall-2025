import { useState, useEffect } from 'react';
import { promoOffer } from '../data/dummyData';
import './TopBanner.css';

const TopBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: promoOffer.countdown.hours,
    minutes: promoOffer.countdown.minutes,
    seconds: promoOffer.countdown.seconds
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="top-banner">
      <div className="banner-content">
        <span className="banner-text">{promoOffer.text}</span>
        <span className="countdown">
          Ends in {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </span>
      </div>
    </div>
  );
};

export default TopBanner;
