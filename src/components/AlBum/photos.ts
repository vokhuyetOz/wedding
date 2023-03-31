const breakpoints = [
  6720, 4480, 3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48,
];

const unsplashPhotos = [
  { id: "/main/album/1.JPG", width: 6720, height: 4480 },
  { id: "/main/album/2.jpeg", width: 4480, height: 6720 },
  { id: "/main/album/3.jpg", width: 6720, height: 4480 },
  { id: "/main/album/4.JPG", width: 4480, height: 6720 },
  { id: "/main/album/5.jpg", width: 4320, height: 6480 },
  { id: "/main/album/6.JPG", width: 6720, height: 4480 },
  { id: "/main/album/7.JPG", width: 4480, height: 6720 },
  { id: "/main/album/8.jpeg", width: 4480, height: 6720 },
  { id: "/main/album/9.jpg", width: 4480, height: 6720 },
  { id: "/main/album/10.jpg", width: 4480, height: 6720 },
  { id: "/main/album/11.jpg", width: 4385, height: 6577 },
  { id: "/main/album/12.JPG", width: 4480, height: 6720 },
  { id: "/main/album/13.jpg", width: 4320, height: 6480 },
  { id: "/main/album/14.JPG", width: 4480, height: 6720 },
  { id: "/main/album/15.jpg", width: 6720, height: 4480 },
  { id: "/main/album/16.jpg", width: 4480, height: 6720 },
  { id: "/main/album/17.jpg", width: 4480, height: 6720 },
];

const photos = unsplashPhotos.map((photo) => {
  const width = breakpoints[0];
  const height = (photo.height / photo.width) * width;

  return {
    src: photo.id,
    width,
    height,
    images: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);
      return {
        src: photo.id,
        width: breakpoint,
        height,
      };
    }),
  };
});

export default photos;
