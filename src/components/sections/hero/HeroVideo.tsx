const HeroVideo = ({ link }: { link: string }) => {
  return (
    <div className="w-full h-full overflow-hidden rounded-4xl">
      <video
        muted
        loop
        autoPlay
        playsInline
        webkit-playsinline="true"
        src={link}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroVideo;
