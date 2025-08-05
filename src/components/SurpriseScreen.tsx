import { useRef, useEffect } from 'react';
import musicFile from '../assets/music.mp3';
import gallery1 from '../assets/gallery1.png';
import gallery2 from '../assets/gallery2.png';
import gallery3 from '../assets/gallery3.png';
import gallery4 from '../assets/gallery4.png';
import gallery5 from '../assets/gallery5.png';
import useTypingEffect from '../hooks/useTypingEffect';

const SurpriseScreen = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((error) => console.log('Audio autoplay prevented:', error));
    }
  };

  useEffect(() => {
    playAudio();
  }, []);

  const letterText = `
Happy Birthday, Logos Jewel Temilola (a.k.a BossLady) 💖,

But before I start the wishing, I remembered vividly when we started talking at URP just like yesterday (smiles😅). 

Well, I actually thought you were gentle until I knew you better you’re troublesome (there's nothing you can do for me😜).

How I became your elder brother I still don’t know all I knew was you started calling me big bro.

She's one of the souls that disturb me in UNIOSUN. Any small thing, she’ll enter my DM, drop stickers, and check up on me maybe not regularly sha.

Something about this girl is that she does not eat or sleep all she wants to do is read. And since I knew her, she has never completed a programming language 😂. Not me always disturbing her to finish up one before starting another 😅.

Today, the world celebrates someone truly remarkable. Not just because it’s your birthday, but because someone as rare, radiant, and deeply cherished as you walks this earth.

You’re not just special… you’re a masterpiece hardworking, intelligent, beautiful, and filled with unwavering courage. Thank you for being a good friend, like a sister (a troublesome one though 😄).

As you celebrate another year of greatness, I pray your days are drenched in peace, joy, and victories that leave your heart full. May all the love you pour into others return to you a thousandfold.

I’m so honored to know you, so blessed to walk beside you, and so proud of everything you are and all that you’re becoming.

Here’s to this new year of your life being the most magical yet full of answered prayers, wild laughter, sweet surprises, and the kind of love that makes your soul dance.

I cherish you beyond what words could ever express.

Try and finish up your Python and JavaScript. 😂

With all my love,  
Sammy 🌹
`;

  const typedMessage = useTypingEffect(letterText, 40);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-100 to-white p-6">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6 whitespace-pre-line">
        <h2 className="text-2xl font-semibold text-center mb-4">Dear Jewel,</h2>
        <p className="text-gray-700 font-medium leading-relaxed text-lg">
          {typedMessage}
        </p>
      </div>

      <h3 className="text-2xl font-bold mt-8 mb-4 text-center text-pink-600">
        Memories Gallery
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Use the manually imported image here */}
        <img
          src={gallery1}
          alt="Memory 1"
          className="rounded-lg shadow-md object-cover w-full h-64"
        />
        <img
          src={gallery2}
          alt="Memory 2"
          className="rounded-lg shadow-md object-cover w-full h-64"
        />
        <img
          src={gallery3}
          alt="Memory 3"
          className="rounded-lg shadow-md object-cover w-full h-64"
        />
        <img
          src={gallery4}
          alt="Memory 4"
          className="rounded-lg shadow-md object-cover w-full h-64"
        />
        <img
          src={gallery5}
          alt="Memory 5"
          className="rounded-lg shadow-md object-cover w-full aspect-square md:col-span-2"
        />
      </div>
      
      <audio ref={audioRef} src={musicFile} loop />
    </div>
  );
};

export default SurpriseScreen;
