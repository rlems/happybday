import { useEffect } from "react";
import confetti from "canvas-confetti";
import { Howl } from "howler";
import hornSound from './party_horn.mp3';
import bdaySound from './happybday.mp3';

export default function HappyBirthday() {
  useEffect(() => {
    const sound = new Howl({
      src: [hornSound],
      volume: 0.3,
      onend: () => {
        setTimeout(() => {
          sound.play();
        }, 1000);
      }
    });
    const bdaySong = new Howl({
      src: [bdaySound],
      volume: 0.7,
      loop: true,
      sprite: {
        song: [10000, 128000, true]
      }
    });

    bdaySong.play("song");
    setTimeout(() => {
      sound.play();
    }, 1000);

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.6 }
      });
    }, 750);

    return () => {
      clearInterval(interval);
      bdaySong.stop();
      sound.stop();
    };
  }, []);

  return (
    <div className="content">
      <h1>Tillykke med fødselsdagen</h1>
      <p>
        Van harte gefeliciteerd, we wensen je een topdag toe!
      </p>
      <p>
        Liefs,
        <br />
        Quin & René
      </p>
    </div>
  );
}
