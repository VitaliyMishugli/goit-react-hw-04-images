import { useState, useEffect } from "react";
import {Searchbar} from "./Searchbar/Searchbar";
import {ImageGallery} from './ImageGallery/ImageGallery';
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";
import API from '../services/api';


export const App = () => {
  const [page, setPage] = useState(1);
  const [result, setResult] = useState(null);
  const [searchName, setSearchName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [total, setTotal] = useState(0);

  const handleSubmitForm = (searchQuery) => {
    setSearchName(searchQuery);
    setPage(1);
    setResult(null);
    setIsLoadingMore(false);
  }

  const pageIncrement = () => {
    setPage(state => state + 1);
  }
  
  useEffect(() => {
    if (searchName === '') {
      return;
    }
      try {
        setIsLoading(true);

    async function getImages(searchQuery, pageNum) {
      const result = await API.apiRequest(searchQuery, pageNum); 
      return result.json();
    }
    getImages(searchName, page)
      .then(res => {
      const { hits, totalHits } = res;

         if (totalHits === 0) {
          alert("There's no answer by your request.");
          setIsLoading(false);
          return;
        }

        setResult(state => {
          return page === 1 ? hits : [...state, ...hits]
        })

        setTotal(page === 1
          ? totalHits - hits.length
          : totalHits - [...result, ...hits].length)

        setIsLoading(false);
        }

    );
        setIsLoading(false);
      }
      catch (error) { return };
          
  },[page, searchName]);

  
  return (
    <>
      <Searchbar submit={handleSubmitForm} />
      <ImageGallery queryResult={result} />
      {isLoading && <Loader />}
      {!!total && <Button pageIncrement={pageIncrement} />}        
    </>
  )
}

// ====== Class component ======
// export default class App extends Component {
//   state = {
//     page: 1,
//     result: null,
//     searchName: '',
//     isLoading: false,
//     isLoadingMore: false,
//     total: 0
//   }

//   handleSubmitForm = (searchName) => {
//     // console.log(searchName);
//     this.setState({
//       searchName,
//       page: 1,
//       result: null,
//       isLoadingMore: false,
//     })
//   }

//   pageIncrement = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   }

//   async componentDidUpdate(_, prevState) {
//     const { searchName, page} = this.state;
//     if (prevState.page !== this.state.page ||
//       prevState.searchName !== this.state.searchName) {
//       console.log('Fetch data');
//       try {
//         this.setState({ isLoading: true });

//         const { hits, totalHits } = await API.apiRequest(searchName, page);

//         if (totalHits === 0) {
//           alert("There's no answer by your request.");
//           this.setState({ isLoading: false });
//           return;
//         }

//         this.setState(prevState => ({
//           result: page === 1 ? hits : [...prevState.result, ...hits],
//           total: page === 1
//             ? totalHits - hits.length
//             : totalHits - [...prevState.result, ...hits].length,
//         }));

//         this.setState({ isLoading: false });
//       }
//       catch (error) { this.setState({ error }) };
//     }
//   }

//   render() {
//     const { result, isLoading,total } = this.state;
//     return (
//       <>
//         <Searchbar submit={this.handleSubmitForm} />
//         <ImageGallery queryResult={result} />
//         {isLoading && <Loader />}
//         {!!total && <Button pageIncrement={this.pageIncrement} />}
       
//       </>
//     )
//   }
// };
