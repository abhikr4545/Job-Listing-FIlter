import { useEffect, useReducer, useState } from 'react'
import data from '../data.json'

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload]
    case "remove":
      return state.filter(job => job !== action.payload)
    case "empty":
      return []
  }
}

const Job = () => {

  const [jobList, setJobList] = useState(data);
  const [currentTag, setCurrentTag] = useState()
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const handleClick = (e) => {
      let result = []
      jobList.forEach((job) => {
        Object.keys(job).forEach(function(key) {
        if(!Array.isArray(job[key])) {
          if (job[key] === e.target.innerText) {
          result.push(job);
          }
        } else {
          if(job[key].includes(e.target.innerText)) {
            result.push(job);
          }
        }
      });
    })
    setJobList(result);
    dispatch({ type: "add", payload: e.target.innerText })
  }

  const handleClear = () => {
    setJobList(data)
    dispatch({ type: "empty" })
  }
  
  const handleRemoveTag = (e) => {

    let list = []
      data.forEach((job) => {
        Object.keys(job).forEach(function(key) {
        if(!Array.isArray(job[key])) {
          if (job[key] === e.target.previousElementSibling.innerText) {
          list.push(job);
          }
        } else {
          if(job[key].includes(e.target.previousElementSibling.innerText)) {
            list.push(job);
          }
        }
      });
    })
    setJobList(list);
    dispatch({ type: "remove", payload: e.target.previousElementSibling.innerText })
  }

  useEffect(() => {
    console.log(state)
  },[state])

  return (
    <section className="relative">
      {/* Filter Tags Start */}
        {/* Filter Tab Start */}
      {
        state.length !== 0 &&
        <div className="absolute bg-white -top-40 left-0 mx-auto right-0 p-4 w-11/12">
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1 grid grid-cols-2 md:grid-cols-none md:flex md:flex-wrap gap-2 ">
              {
                  state.map((item) => (
                  <div key={item} className="flex items-center justify-center bg-cyanTablets rounded-l-lg  w-fit space-x-1">
                    <div className="bg-cyanTablets py-1 px-2 rounded-l-md font-semibold text-unsaturatedCyan">{ item }</div>
                    <div onClick={handleRemoveTag} className="bg-unsaturatedCyan py-1 px-2 rounded-r-md font-semibold text-white cursor-pointer">X</div>
                  </div>
                ))    
              }
            </div>
            <div onClick={handleClear} className="font-bold text-right my-auto text-darkGrayishCyan cursor-pointer">Clear</div>
        </div>
      </div>
      }
        {/* Filter Tab End */}
       {/* Jobs List Start */}
        <div className="mt-32 px-4 space-y-4 pb-8">
          {/* Job Card Start */}
        {
          jobList.map((item) => (
            <div className="relative px-4 bg-white pt-10 rounded-md 
          border-l-unsaturatedCyan border-l-4 md:flex md:justify-between md:items-baseline md:py-8 md:w-11/12 md:mx-auto" key={item.id}>
            <div className="md:flex justify-between items-center">
              {/* Company Logo Start */}
              <div className="absolute w-12 h-12 md:w-24 md:h-24 -top-6 md:static">
                <img src={`${item.logo}`} alt="Company Logo" className="" />            
              </div>
              {/* Company Logo End */}
              {/* Company Info Start */}
              <div className="space-y-3 md:">
                <div className="flex justify-start space-x-3 items-baseline">
                    <h2 className="font-semibold text-unsaturatedCyan text-sm">{ item.company }</h2>
                  { item.new && <div className="bg-unsaturatedCyan font-semibold text-white w-fit px-3 py-1 rounded-3xl text-sm">New!</div> }
                  { item.featured && <div className="bg-black font-semibold text-white w-fit px-3 py-1 rounded-3xl text-sm">Featured</div> }
                </div>
            {/* Job Title */}
                  <h3 className='font-semibold hover:text-unsaturatedCyan cursor-pointer'>{ item.position  }</h3>
              {/* Job Posting Details Start */}
              <div className="flex flex-wrap space-x-5 text-darkGrayishCyan text-base">
                <h3 className='text-sm text-darkGrayishCyan'>{ item.postedAt }</h3>
                <h3 className='text-sm text-darkGrayishCyan'>{ item.contract }</h3>
                <h3 className='text-sm text-darkGrayishCyan'>{ item.location }</h3>
              </div>
              {/* Job Posting Details End */}
            </div>
            {/* Company Info End */}
            </div>
            {/* Divider */}
            <div className="w-full h-0.5 bg-darkGrayishCyan md:hidden"></div>
            {/* Job Tags Start */}
            <div className="flex flex-wrap gap-2 py-4 md:justify-center md:items-center md:my-auto md:py-0">
                <div onClick={handleClick} className="bg-cyanBackground text-unsaturatedCyan font-semibold text-sm px-2 py-2 rounded-md cursor-pointer hover:text-white hover:bg-unsaturatedCyan">{ item.role }</div>
                <div onClick={handleClick} className="bg-cyanTablets text-unsaturatedCyan font-semibold text-sm px-2 py-2 rounded-md cursor-pointer hover:text-white hover:bg-unsaturatedCyan">{item.level}</div>
                {
                  item.languages.map((lang) => (
                    <div key={Math.random()} onClick={handleClick} className="bg-cyanBackground text-unsaturatedCyan font-semibold text-sm px-2 py-2 rounded-md cursor-pointer hover:text-white hover:bg-unsaturatedCyan">{ lang }</div>
                  ))
                }
                {
                  item.tools.map((tool) => (
                    <div key={Math.random()} onClick={handleClick} className="bg-cyanBackground text-unsaturatedCyan font-semibold text-sm px-2 py-2 rounded-md cursor-pointer hover:text-white hover:bg-unsaturatedCyan">{ tool }</div>
                  ))
                }
            </div>
            {/* Job Tags End */}
        </div>
          ))
          }
          {/* Job Card End */}
        </div>
    </section>
  )
}

export default Job