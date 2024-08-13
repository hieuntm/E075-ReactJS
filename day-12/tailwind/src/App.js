import "bootstrap/dist/css/bootstrap.css";

function App() {
  return ( 
  <div className="flex flex-row">
    <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
  Save Changes
</button>
  <div className="basis-1/4 text-9xl bg-lime-200	">01</div>
  <div className="basis-1/4">02</div>
  <div className="basis-1/2">03</div>
  <div className="rounded ... bg-lime-300">ABC</div>
<div className="rounded-md ... bg-lime-300">ABC</div>
<div className="rounded-lg ... bg-lime-300">ABC</div>
<div className="rounded-full ... bg-lime-300">ABC</div>
<br/>
<button type="button" class="bg-indigo-500 ..." >
  <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
    Click me
  </svg>
  Processing...
</button>
</div>)
}

export default App;
