const HeroVideo = ({ link }: { link: string }) => {
  return (
    <div className="w-full h-full overflow-hidden ">
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
