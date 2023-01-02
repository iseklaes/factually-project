export default function Home() {
  return (
    <>
      <body>
      <p className="text-gray-700 text-3xl mb-16 font-semibold">Hello, Jonas!</p>
      <div className="grid text-center lg:grid-cols-3 gap-8 mb-16">
        <div className="rounded bg-white shadow-sm">nice1</div>
        <div className="rounded bg-white h-40 shadow-sm">nice2</div>
        <div className="rounded bg-white h-40 w-40 shadow-sm p-6">
          <p className="pb-3">Level 1</p>
          <div className="radial-progress bg-green-600 text-primary-content border-4 border-green-600" style={{"--value":25}}>25/200</div></div>
      </div>
      </body>
      
    </>
  );
}
