export default function Home() {
  return (
    <>
      <p className="text-gray-700 text-4xl font-semibold">Hello, Jonas!</p>
      <p className="text-slate-900 text-lg mb-15">Welcome to Factually</p>
      <div className="container w-auto">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="col-span-2 row-span-4 rounded h-50 p-8 shadow-sm">
            <p className="text-slate-900 text-3xl mb-5 font-bold">Activity 1</p>
            <div className="grid grid-rows-1">
              <div className="card w-60 bg-base-100 shadow-xl">
              <figure><img src="https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2020/07/02030224/mediaimgblog.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Activity 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                <div className="card-actions justify-end">
                  <button className="btn bg-red-500 text-white">Start</button>
                </div>
              </div>
            </div>
            </div>
            
          </div>
          <div className="rounded h-40 shadow-sm h-60 w-60">
            <p className="text-slate-900 text-lg mb-15">Missions</p>
            <div class="mission-box">
              <div class="flex items-center">
                
              <div class="ml-2">
                <div class="text-sm font-semibold text-gray-600">Mission 1</div>
                <div class="text-sm font-light text-gray-500">Aliquam tincidunt mauris eu risus.</div>
              </div>
              </div>
              <div>
                <button class="button-red">
                  <svg class="text-white toggle__lock w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="mission-box">
              <div class="flex items-center">
                
              <div class="ml-2">
                <div class="text-sm font-semibold text-gray-600">Mission 2</div>
                <div class="text-sm font-light text-gray-500">Aliquam tincidunt mauris eu risus.</div>
              </div>
              </div>
              <div>
                <button class="button-red">
                  <svg class="text-white toggle__lock w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="mission-box">
              <div class="flex items-center">
                
              <div class="ml-2">
                <div class="text-sm font-semibold text-gray-600">Mission 3</div>
                <div class="text-sm font-light text-gray-500">Aliquam tincidunt mauris eu risus.</div>
              </div>
              </div>
              <div>
                <button class="bg-red-500 hover:bg-red-400 p-2 rounded-full shadow-md flex justify-center items-center">
                  <svg class="text-white toggle__lock w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="rounded text-center bg-white h-60 w-60 shadow-sm p-6 mt-10">
            <p className="text-slate-900 text-lg mb-15 pb-3 font-bold">Level 1</p>
            <div className="radial-progress bg-green-600 text-primary-content border-4 border-green-600 font-bold" style={{"--value":25, "--size":"9rem"}}>25/200</div></div>
        </div>
      </div>
    </>
  );
}
