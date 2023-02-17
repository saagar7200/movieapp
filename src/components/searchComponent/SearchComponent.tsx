import React, { useRef ,useState} from 'react';
import { useQuery } from 'react-query';
import './searchComponent.css'

type Props = {}

const SearchComponent = (props: Props) => {

  const [keyword,setKeyword] = useState('')

    const searchRef= useRef<any>();

    const handleSearch = ()  =>{
      
      setKeyword("")
      
    }
    const handleChange = () =>{
       let key:string =searchRef.current?.value
      setKeyword(key)
    }

  return (
    <div className='wrapper'>
        <h1>
        Welcome to the weekend watch
        </h1>
        <p>Millions of Movies, TV Shoes and many more</p>

        <div className='btn-container'>
            <input
            ref={searchRef}
            value={keyword}
            type='text'
            name='search'
            placeholder='Search for movie, tv shoes, and person'
            onChange={handleChange}
            />
                
            <button onClick={handleSearch}>Search</button>
        </div>
    </div>
  )
}

export default SearchComponent