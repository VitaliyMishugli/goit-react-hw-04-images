import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({image, largeImg}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onToggleModal = () => {
    setIsModalOpen(state => !state);
  }  

   return (
      <>
        <li className={css.ImageGalleryItem}>
          <img onClick={onToggleModal} className={css.ImageGalleryItem_image} src={image} alt="" />
        </li>
        {isModalOpen && <Modal largeImg={largeImg} closeModal={onToggleModal} />}
      </>
  )
}

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired
  
}


// ==== Class component =========
// export class ImageGalleryItem extends React.Component{
//   state = {
//     isModalOpen: false
//   }

//   onToggleModal = () => {
//     this.setState(prevState => ({isModalOpen: !prevState.isModalOpen}))
//   }


//   render() {
//     const { image, largeImg } = this.props;
//     const { isModalOpen } = this.state;
//     return (
//       <>
//         <li className={css.ImageGalleryItem}>
//           <img onClick={this.onToggleModal} className={css.ImageGalleryItem_image} src={image} alt="" />
//         </li>
//         {isModalOpen && <Modal largeImg={largeImg} closeModal={this.onToggleModal} />}
//       </>
    
      

//   )
//   }
// }