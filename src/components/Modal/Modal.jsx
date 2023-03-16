import PropTypes from 'prop-types';
import {useEffect} from 'react';
import css from '../Modal/Modal.module.css';

export const Modal = ({ largeImg, closeModal }) => {

  useEffect(() => {
    window.addEventListener('keydown', closeByEsc);

    return () => { window.removeEventListener('keydown', closeByEsc)}
  }, [])

  const closeByEsc = e => {
    if (e.code !== "Escape") {
      return;
    }
    closeModal();
  }

  return (
      <>
        < div className={`${css.Overlay}`} onClick={closeModal}>
          <div className={`${css.Modal}`}>
            <img src={largeImg} alt="" />
          </div>
        </div>
      </>
    );
}

Modal.propTypes = {
  largeImg: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired
}

// ==== Class component ========
// export class Modal extends React.Component {

//   componentDidMount() {
//     window.addEventListener('keydown', this.closeByEsc);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.closeByEsc);
//   }

//   closeByEsc = (e) => {
//     if (e.code !== "Escape") {
//       return;
//     }
//     this.props.closeModal();
//   }

//   render() {
//     const { largeImg, closeModal } = this.props;
//     return (
//       <>
//         < div className={`${css.Overlay}`} onClick={closeModal}>
//           <div className={`${css.Modal}`}>
//             <img src={largeImg} alt="" />
//           </div>
//         </div>
//       </>
//     );
//   }
// }