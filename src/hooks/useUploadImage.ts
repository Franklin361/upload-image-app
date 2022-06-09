import {useEffect, useState} from 'react';
import { ImageListType } from "react-images-uploading";
import { fileUpload } from "../utils";

export const useUploadImage = () => {

    const [images, setImages] = useState<ImageListType>([]);
    const [loading, setLoading] = useState(false);
    const [urlImage, setUrlImage] = useState('')
  
    const handleChange = (imageList: ImageListType) => setImages(imageList);
  
    const onUpload = async () => {
      setLoading(true);
      const url = await fileUpload(images[0].file!);
      setLoading(false);

      if (url) setUrlImage(url);
      else alert('Error, please try again later. ❌')

      setImages([]);
    }
  
    useEffect(() => {
      let timeout: NodeJS.Timeout;
      if(urlImage){
        timeout = setTimeout(()=> {
          setUrlImage('')
        }, 5000)
      }
    
      return () => {
       clearTimeout(timeout);
      }
    }, [urlImage])



    return {
        loading,
        onUpload,
        handleChange,
        urlImage,
        images
    }
}