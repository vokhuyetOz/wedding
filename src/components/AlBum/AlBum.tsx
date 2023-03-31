import Image from "next/image";

import React, { useState } from "react";

import PhotoAlbum, { RenderPhotoProps } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import styles from "./AlBum.module.scss";

import photos from "./photos";

const slides = photos.map(({ src, width, height, images }) => ({
  src,
  width,
  height,
  srcSet: images.map((image) => ({
    src: image.src,
    width: image.width,
    height: image.height,
  })),
}));

function NextJsImage({
  imageProps: { src, alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <div style={wrapperStyle}>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Image
          layout="fill"
          src={src}
          alt={alt}
          title={title}
          sizes={sizes}
          className={className}
          onClick={onClick}
        />
      </div>
    </div>
  );
}
export const AlBum = () => {
  const [index, setIndex] = useState(-1);
  return (
    <div id="#gallery" style={{ width: "80%" }}>
      <span className={styles.header}>ALBUM</span>
      <PhotoAlbum
        photos={photos}
        layout="rows"
        targetRowHeight={200}
        onClick={({ index }) => setIndex(index)}
        // renderPhoto={NextJsImage}
      />
      {/* <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        // plugins={[Thumbnails, Zoom]}
      /> */}
    </div>
  );
};
