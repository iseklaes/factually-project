export default function Home() {
  return (
    <>
      <body>
        <p className="text-gray-700 text-3xl font-semibold">Hello, Jonas!</p>
        <p className="text-slate-900 text-lg mb-16">Welcome to Factually</p>
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="col-span-2 row-span-4 rounded bg-white shadow-sm">nice1</div>
          <div className="rounded h-40 shadow-sm h-60 w-60">
            <p>Missions</p>
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
            <h2 className="pb-3">Level 1</h2>
            <div className="radial-progress bg-green-600 text-primary-content border-4 border-green-600" style={{"--value":25}}>25/200</div></div>
        </div>
      </body>
      
    </>
  );
}
