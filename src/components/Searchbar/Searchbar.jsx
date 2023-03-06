import { useState } from "react";
// import { Component } from "react";
import css from './Searchbar.module.css';
import { ImSearch } from "react-icons/im";
import PropTypes from 'prop-types';


export const Searchbar = ({submit}) => {
  const [searchName, setSearchName] = useState('');

  const handleSearchName = (e) => {
       e.preventDefault();
    setSearchName(e.currentTarget.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = searchName.toLowerCase().trim();
    console.log(searchQuery);
    if (searchQuery === '') {
      return alert("Enter search query!");
    }
    submit(searchName);
    setSearchName('');
  }

  return (
      <header className={css.searchbar}>
        <form className={css.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.SearchForm_button}>
            <ImSearch />
            {/* <span className={css.SearchForm_button__label}></span> */}
          </button>

          <input
            value={searchName}
            onChange={handleSearchName}
            className={css.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    )
} 

// ===== Class component =========
// export default class Searchbar extends Component{
//   state = {
//     searchName: "",
//   }
 
//   handleSearchName = (event) => {
//     event.preventDefault();
//     this.setState({
//       searchName: event.currentTarget.value
//     })
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();    
//     const searchQuery = this.state.searchName.toLowerCase().trim();
//     console.log(searchQuery);
//     if (searchQuery === '') {
//       return alert("Enter search query!");
//     }
//     this.props.submit(searchQuery);
//     this.setState({searchName: ''})
//   }

//   render() {
//     return (
//       <header className={css.searchbar}>
//         <form className={css.SearchForm} onSubmit={this.handleSubmit}>
//           <button type="submit" className={css.SearchForm_button}>
//             <ImSearch />
//             {/* <span className={css.SearchForm_button__label}></span> */}
//           </button>

//           <input
//             value={this.state.searchName}
//             onChange={this.handleSearchName}
//             className={css.SearchForm_input}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     )
//   }
// }

Searchbar.propTypes = {
  submit: PropTypes.func.isRequired
}