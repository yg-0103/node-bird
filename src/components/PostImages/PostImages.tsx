import { PlusOutlined } from '@ant-design/icons';
import { useCallback, useState } from 'react';
import { Image } from '../../types/post';
import ImagesZoom from '../ImagesZoom/ImagesZoom';

interface PostImagesProps {
  images: Image[];
}

const PostImages = ({ images }: PostImagesProps) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);

  const handleZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);

  const handleClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);
  if (images.length === 1) {
    return (
      <>
        <img
          role="presentation"
          src={images[0].src}
          alt={images[0].src}
          onClick={handleZoom}
        />
        {showImagesZoom && <ImagesZoom images={images} onClose={handleClose} />}
      </>
    );
  }

  if (images.length === 2) {
    return (
      <>
        <img
          role="presentation"
          style={{ width: '50%', display: 'inline-block' }}
          src={images[0].src}
          alt={images[0].src}
          onClick={handleZoom}
        />
        <img
          style={{ width: '50%', display: 'inline-block' }}
          role="presentation"
          src={images[1].src}
          alt={images[1].src}
          onClick={handleZoom}
        />
        {showImagesZoom && <ImagesZoom images={images} onClose={handleClose} />}
      </>
    );
  }
  return (
    <div>
      <img
        width="50%"
        role="presentation"
        src={images[1].src}
        alt={images[1].src}
        onClick={handleZoom}
      />
      <div
        role="presentation"
        style={{
          display: 'inline-block',
          width: '50%',
          textAlign: 'center',
          verticalAlign: 'middle',
          cursor: 'pointer'
        }}
        onClick={handleZoom}
      >
        <PlusOutlined />
        <br />
        {images.length - 1}개의 사진더보기
      </div>
      {showImagesZoom && <ImagesZoom images={images} onClose={handleClose} />}
    </div>
  );
};

export default PostImages;
