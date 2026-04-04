import portrait from './assets/images/image-jeremy.png';

export default function Dashboard() {
  return (
    <div className="parent-container min-h-full p-[20px] pt-[60px] bg-gray-900 min-w-screen flex flex-col items-center justify-center">
      <main className="min-h-full grid grid-cols-1 grid-rows-7 gap-4 w-[315px]">
        <div className="box bg-indigo-900 rounded-xl p-[20px] text-white">
          <div className="flex items-center gap-5 mb-[2rem] bg-indigo-500 rounded-xl p-[20px] m-[-20px]">
            <img src={portrait} className="w-[70px] border-[5px] rounded-[50%]" />
            <h1>
              <span className="block text-slate-400">Report for</span>
              Jeremy Robson
            </h1>
          </div>
          <div className="flex justify-between">
            <span className="block text-slate-400">Daily</span> 
            <span className="font-medium">Weekly</span> 
            <span className="block text-slate-400">Monthly</span>
          </div>
        </div>

        <div className="box bg-indigo-900 rounded-xl p-[20px] text-white">
          <h2>Work</h2>
          5hrs  daily
          Previous - 7hrs  daily
          32hrs  weekly
          Previous - 36hrs  weekly
          103hrs  monthly
          Previous - 128hrs  monthly
        </div>

        <div className="box bg-indigo-900 rounded-xl p-[20px] text-white">
          <h2>Play</h2>
          1hr  daily
          Previous - 2hrs  daily
          10hrs  weekly
          Previous - 8hrs  weekly
          23hrs  monthly
          Previous - 29hrs  monthly
        </div>

        <div className="box bg-indigo-900 rounded-xl p-[20px] text-white">
          <h2>Study</h2>
          0hrs  daily
          Previous - 1hr  daily
          4hrs  weekly
          Previous - 7hrs  weekly
          13hrs  monthly
          Previous - 19hrs  monthly
        </div>

        <div className="box bg-indigo-900 rounded-xl p-[20px] text-white">
          <h2>Exercise</h2>
          1hr  daily
          Previous - 1hr  daily
          4hrs  weekly
          Previous - 5hrs  weekly
          11hrs  monthly
          Previous - 18hrs  monthly
        </div>

        <div className="box bg-indigo-900 rounded-xl p-[20px] text-white">
          <h2>Social</h2>
          1hr  daily
          Previous - 3hrs  daily
          5hrs  weekly
          Previous - 10hrs  weekly
          21hrs  monthly
          Previous - 23hrs  monthly
        </div>

        <div className="box bg-indigo-900 rounded-xl p-[20px] text-white">
          <h2>Self Care</h2>
          0hrs  daily
          Previous - 1hr  daily
          2hrs  weekly
          Previous - 2hrs  weekly
          7hrs  monthly
          Previous - 11hrs  monthly
        </div>
      </main>
      
      <footer className="attribution relative bottom-0 text-center -m-5 mt-5 text-white p-[20px] w-[355px]">
        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge"><span className="font-medium text-blue-200">Frontend Mentor</span></a></p>
        <p>Coded by <a href="#"><span className="font-medium text-blue-200">Joshua Martinez</span></a></p>
      </footer>
    </div>
  );
}