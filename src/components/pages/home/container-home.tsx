import React, { ReactElement, useState } from 'react';

import { message } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';
import { getFileSize } from '../../../utils/index';
import ItemDragger from '../../common/item-dragger';

import HomeComponent from './home';

const Home: React.FC = () => {
  
  const [ fileList, setFileList ] = useState<any[]>([]); 

  const onChangeFile = (info: any) => {
    const file: UploadFile = info.file;
    const { status } = file;

    const addedFile = {
      id: file.uid,
      progress: false,
      url: file.url,
      name: file.name,
      size: file.size,
      error: false,
    }

    if (status === 'uploading') {
      setFileList([ ...fileList, { ...addedFile, progress: true } ]);
    }
    if (status === 'done') {
      setFileList([ ...fileList, { ...addedFile, progress: false } ]);
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      setFileList([ ...fileList, { ...addedFile, progress: false, error: true } ]);
      message.error(`${info.file.name} file upload failed.`);
    }
  }

  const onRenderItemDragger = (originNode: ReactElement, file: any) => {

    if(file.size && file.name) {

      const size: string = getFileSize(file.size);
      const foundFile = fileList.find(({ id }) => id === file.id );

      return (
        <ItemDragger
          id={file.id}
          name={file.name}
          size={size}
          progress={foundFile.progress}
          error={foundFile.error}
          handleRemove={handleRemove}
        />
      )
    } 

    return (
      <span>
        <div>Error</div>
      </span>
    )
  } 

  const handleRemove = (fileId: string): void => {

  }

  const props = {
    fileList,
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange: onChangeFile,
    itemRender: onRenderItemDragger 
  };
  
  return <HomeComponent
    { ...props }
  />
}

export default Home;