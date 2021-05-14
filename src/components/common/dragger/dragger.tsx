import React from 'react';
import styles from './dragger.module.css';

import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

interface ICommonDraggerProps {
  
}

const Dragger: React.FC<ICommonDraggerProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperDragger}>
        <Upload.Dragger
          className={styles.dragger} 
          {...props}
        >
          <p className="ant-upload-drag-icon">
            <UploadOutlined />
          </p>
          <p className={styles.draggerUploadText}>Drag and drop file here</p>
          <p className={styles.draggerUploadText}>or</p>
          <label>
            <input type="file" hidden />
            <Button className={styles.buttonUploadFile}>Browse for file</Button>
          </label>
        </Upload.Dragger>
      </div>
    </div>
  )
}

export default Dragger;