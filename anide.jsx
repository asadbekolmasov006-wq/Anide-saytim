<img src="/images/naruto.jpg" alt="Naruto" />

// function Card({ title, imageUrl }) {
//   return (
//     <div style={{ width: '150px', margin: '10px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 5px rgba(0,0,0,0.3)' }}>
//       <img src={imageUrl} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
//       <div style={{ padding: '10px', backgroundColor: '#222', color: 'white' }}>
//         <h3>{title}</h3>
//       </div>
//     </div>
//   );
// }



function AnimeBackground(https://pin.it/14obEWKfz) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="https://pin.it/14obEWKfz" />
        Sizning brauzeringiz video tagini qo‘llab-quvvatlamaydi.
      </video>

      <div style={{ position: 'relative', zIndex: 1, color: 'white', padding: '20px' }}>
        {/* Sayt kontenti shu yerda */}
        <h1>Anime Saytiga Xush Kelibsiz!</h1>
        <p>Bu yerda siz animelarni ko‘rishingiz mumkin.</p>
      </div>
    </div>
  );
}




<video autoPlay loop muted playsInline style={...}>
  <source src="/videos/anime-background.mp4" type="video/mp4" />
  <source src="/videos/anime-background.webm" type="video/webm" />
  Sizning brauzeringiz video tagini qo‘llab-quvvatlamaydi.
</video>




function BackgroundVideoLayout() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'fixed',  // yoki 'absolute' ham bo‘ladi
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',  // video ekran bo‘ylab to‘liq yoyiladi
          zIndex: -1,          // video saytdagi boshqa elementlar ostida qoladi
        }}
      >
        <source src="/videos/anime-background.mp4" type="video/mp4" />
        Sizning brauzeringiz video tagini qo‘llab-quvvatlamaydi.
      </video>

      {/* Sayt kontenti */}
      <div style={{ position: 'relative', zIndex: 1, color: '#fff', padding: '20px' }}>
        <h1>Anime Saytga Xush Kelibsiz!</h1>
        <p>Bu yerda animelarni tomosha qiling.</p>
      </div>
    </div>
  );
}




{/* <video
  autoPlay
  loop
  muted
  playsInline
  style={{
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    top: 0,
    left: 0,
    zIndex: -1,
  }}
>
  <source src="/videos/anime-background.mp4" type="video/mp4" />
  <source src="/videos/anime-background.webm" type="video/webm" />
  Sizning brauzeringiz video tagini qo‘llab-quvvatlamaydi.
</video> */}














