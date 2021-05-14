import React from 'react';
import styles from './itemDragger.module.css';

// Components
import { Button } from 'antd';

// Icons
import { DeleteOutlined, FileTextOutlined } from '@ant-design/icons';

interface IItemDraggerProps {
  id: string;
  name: string;
  size: string;
  progress: boolean;
  error: boolean;
  handleRemove: (fileId: string) => void;
}

const ItemDragger: React.FC<IItemDraggerProps> = (props) => {

  const {
    id,
    name,
    size,
    progress,
    error,
    handleRemove,
  } = props;

  return (
    <div className={styles.containerItemDragger}>
    <div className={error ? styles.itemDraggerError : styles.itemDragger }>
      <div className={styles.itemDraggerIcon}>
        <FileTextOutlined />
      </div>
      <div className={styles.itemDraggerContent}>
        <p>{name}</p>
        <p>{size}</p>
        <p>{progress ? "Loading ...": null}</p>
      </div>
      <div className={styles.itemDraggerActions}>
        <Button onClick={() => handleRemove(id)}>
          <DeleteOutlined />
        </Button>
      </div>
    </div>
  </div>
  )
}

export default ItemDragger;