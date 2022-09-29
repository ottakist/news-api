import React from 'react'
import { useGlobalContext } from './context'


const SearchForm = () => {
  const {query,setQuery} = useGlobalContext()
  return (<form className='search-form' onSubmit={(e)=>e.preventDefault()}>
    <h2>Search news</h2>
    <input type="text" placeholder='type here...' className='form-input' value={query} onChange={(e)=>{setQuery(e.target.value)}} />
  </form>)
}

export default SearchForm
