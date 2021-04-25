import React from 'react';
import Image from 'next/image';
import styles from './image.module.scss';

const PageImage = () => (
  <>
    <h1>next/image</h1>
    <div className={styles.placeholder} />
    <Image
      src="https://images.tuyacn.com/oceanus/image/5dc227ca-4ec2-5159-9caa-9a826bf8d042.jpg"
      width={1200}
      height={330}
    />
  </>
);

export default PageImage;
