import Header from "./components/Header";
import Job from "./components/Job";
import JobList from "./components/JobList";

const App = () => {
  return (
    <div className="bg-cyanBackground min-h-screen w-fit h-fit font-spartan">
      <Header />
      {/* <JobList /> */}
      <Job />
    </div>
  )
}

export default App