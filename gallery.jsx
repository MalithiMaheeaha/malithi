import Link from 'next/link';

export default function Gallery() {
  return (
    <div>
      <h1>Gallery of Sri Lankan Tourist Attractions</h1>
      <p>Check out some of the most beautiful locations in Sri Lanka.</p>

      <div className="gallery">
        <div className="gallery-item">
          <img src="/malithi/sigiriya.jpg" alt="sigiriya" width={500} height={300} />
          <p>Sigiriya</p>
        </div>

        <div className="gallery-item">
        <img src="/malithi/yala.jpg" alt="yala national park" width={500} height={300} />
        <p>Yala national park</p>
        </div>

        <div className="gallery-item">
        <img src="/malithi/kandy.jpg" alt="kandy" width={500} height={300} />
        <p>Kandy</p>
        </div>
       </div>
      </div> 
  );
}
