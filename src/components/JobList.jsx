import data from '../data.json';

const JobList = () => {



  return (
    <section className="relative">
      {/* Filter Tags Start */}
      <div className="absolute bg-white -top-40 left-0 mx-auto right-0 p-4 w-11/12">
        {/* Filter Tab Start */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1 grid grid-cols-2 md:grid-cols-none md:flex md:flex-wrap gap-2 ">
              <div className="flex items-center justify-center bg-cyanTablets rounded-l-lg  w-fit space-x-1">
                <div className="bg-cyanTablets py-1 px-2 rounded-l-md font-semibold text-unsaturatedCyan">Frontend</div>
                <div className="bg-unsaturatedCyan py-1 px-2 rounded-r-md font-semibold text-white cursor-pointer">X</div>
              </div>
            </div>
            <div className="font-bold text-right my-auto text-darkGrayishCyan cursor-pointer">Clear</div>
        </div>
        {/* Filter Tab End */}
      </div>
        {/* Filter Tags End */}
        {/* Jobs List Start */}
        <div className="mt-32 px-4">
          {/* Job Card Start */}
        <div className="relative px-4 bg-white pt-10 rounded-md 
          border-l-unsaturatedCyan border-l-4 md:flex md:justify-between md:items-baseline md:py-8 md:w-11/12 md:mx-auto">
            <div className="md:flex justify-between items-center">
              {/* Company Logo Start */}
              <div className="absolute w-12 h-12 md:w-24 md:h-24 -top-6 md:static">
                <img src={`./images/insure.svg`} alt="Company Logo" className="" />            
              </div>
              {/* Company Logo End */}
              {/* Company Info Start */}
              <div className="space-y-3 md:">
                <div className="flex justify-start space-x-3 items-baseline">
                  <h2 className="font-semibold text-unsaturatedCyan text-sm">Photosnap</h2>
                  <div className="bg-unsaturatedCyan font-semibold text-white w-fit px-3 py-1 rounded-3xl text-sm">New!</div>
                  <div className="bg-black font-semibold text-white w-fit px-3 py-1 rounded-3xl text-sm">Featured</div>
                </div>
            {/* Job Title */}
              <h3>Senior Frontend Engineer</h3>
              {/* Job Posting Details Start */}
              <div className="flex flex-wrap space-x-5 text-darkGrayishCyan text-base">
                <h3>1d ago</h3>
                <h3>Full time</h3>
                <h3>USA Only</h3>
              </div>
              {/* Job Posting Details End */}
            </div>
            {/* Company Info End */}
            </div>
            {/* Divider */}
            <div className="w-full h-0.5 bg-darkGrayishCyan md:hidden"></div>
            {/* Job Tags Start */}
            <div className="flex flex-wrap gap-2 py-4 md:justify-center md:items-center md:my-auto md:py-0">
              <div className="bg-cyanTablets text-unsaturatedCyan font-semibold text-sm px-2 py-2 rounded-md cursor-pointer">Frontend</div>
              <div className="bg-cyanBackground text-unsaturatedCyan font-semibold text-sm px-2 py-2 rounded-md">Frontend</div>
            </div>
            {/* Job Tags End */}
        </div>
          {/* Job Card End */}
        </div>
      {/* Jobs List End */}
    </section>
  )
}

export default JobList