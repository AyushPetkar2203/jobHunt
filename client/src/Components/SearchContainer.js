import { FormRow, FormRowSelect } from '.'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/SearchContainer'
import { useState,useMemo } from 'react'
const SearchContainer = () => {
  const [localSearch,setLocalSearch] = useState('')
  const {
    isLoading,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    handleChange,
    clearFilters,
    jobTypeOptions,
    statusOptions,
  } = useAppContext()

  const handleSearch = (e) => {
    
      handleChange({ name: e.target.name, value: e.target.value })
    
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setLocalSearch('')
    clearFilters()
  }

  const debounce = () =>{
    let timeoutID;
    return (e)=>{
      setLocalSearch(e.target.value)
      clearTimeout(timeoutID)
      timeoutID = setTimeout(()=>{
        handleChange({ name: e.target.name, value: e.target.value })
      },1000)
    }
  }

  const optimizeDebounce = useMemo(()=>debounce(),[])
  
  return (
    <Wrapper>
      <form className='form'>
        <h4>search form</h4>
        <div className="form-center">
          {/* search position  */}
          <FormRow
            name='search'
            type='text'
            value={localSearch}
            handleChange={optimizeDebounce}
          />
          {/* search by status */}
          <FormRowSelect
            labelText='status'
            name='searchStatus'
            value={searchStatus}
            handleChange={handleSearch}
            list={['all',...statusOptions]}
            />
            {/* search by Type */}
          <FormRowSelect
            labelText='Job Type'
            name='searchType'
            value={searchType}
            handleChange={handleSearch}
            list={['all',...jobTypeOptions]}
            />
            {/* sort  */}
          <FormRowSelect
            
            name='sort'
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
            />
          <button className='btn btn-block btn-danger' disabled={isLoading} onClick={handleSubmit}>clear filter</button>
        </div>
      </form>
    </Wrapper>
  )
}
export default SearchContainer