import React from 'react';
interface Props{
    onImageUpload: () => void;
    dragProps: any;
    isDragging: boolean
  }
  
  export const BoxDragAndDrop = ({ isDragging, onImageUpload, dragProps }:Props) => {
    return (
      <div
        onClick={onImageUpload}
        {...dragProps}
        className={`container-dnd center-flex ${isDragging ? 'isDragging' : ''}`}
      >
        <span className='label-dnd'>Chosee an Image or Drag and Drop an Image 📤</span>
      </div>
    )
  }
  