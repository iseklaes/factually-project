export default function Home() {
  return (
    <>
      <p className="text-gray-700 text-3xl mb-16 font-semibold">Hello, Jonas!</p>

      <div className="grid justify-items-center lg:grid-cols-3 gap-5 mb-16">
        <div className="rounded bg-white shadow-sm">nice1</div>
        <div className="rounded bg-white h-40 shadow-sm">nice2</div>
        <div className="rounded bg-white h-40 shadow-sm p-10">
          <p>Level 1</p>
          <div className="radial-progress" style={{"--value":50}}>50%</div></div>
      </div>
    </>
  );
}
