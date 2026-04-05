import portrait from './assets/images/image-jeremy.png';
import btnIcon from './assets/images/icon-ellipsis.svg';

export default function Dashboard() {
  return (
    <div className="parent-container min-h-screen p-[20px] pt-[60px] bg-gray-900 min-w-screen flex flex-col items-center justify-center">
      <main className="min-h-full grid grid-cols-1 grid-rows-7 gap-4 w-[315px] xl:grid-cols-4 xl:grid-rows-2 xl:w-[1000px]">

        <div className="box bg-indigo-900 rounded-xl p-[20px] text-white min-w-[315px] xl:min-w-[100px] xl:row-span-2 xl:min-h-[500px]">
          <div className="flex items-center gap-5 mb-[2rem] bg-indigo-500 rounded-xl p-[20px] m-[-20px] xl:min-h-[350px] xl:flex-col xl:items-start xl:p-[30px]">
            <img src={portrait} className="w-[70px] border-[5px] rounded-[50%] xl:w-[100px]" />
            <h1>
              <span className="block text-slate-400">Report for</span>
              <span className="text-2xl xl:text-4xl">Jeremy Robson</span>
            </h1>
          </div>

          <div className="flex justify-between xl:flex-col xl:items-start">
            <button className="block text-slate-400 hover:bg-violet-500 active:bg-violet-800 p-[5px] rounded-lg">Daily</button> 
            <button className="font-medium hover:bg-violet-500 active:bg-violet-800 p-[5px] rounded-lg">Weekly</button> 
            <button className="block text-slate-400 hover:bg-violet-500 active:bg-violet-800 p-[5px] rounded-lg">Monthly</button>
          </div>
        </div>

        <section className="bg-orange-400 rounded-xl flex items-end bg-[url(assets/images/icon-work.svg)] bg-no-repeat bg-position-[top_right_15px] xl:min-w-[100px]">
          <div className="flex justify-between box bg-indigo-900 rounded-xl p-[20px] text-white w-full min-h-[135px]">
            <div>
              <h2 className="font-medium">Work</h2>
              <p className="text-3xl">32hrs</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <button type="button" className="min-h-[24px] hover:bg-violet-500 active:bg-violet-800 p-[5px] rounded-lg" aria-label="drop-down menu"><img src={btnIcon} /></button>
              <p className="text-slate-300 pr-[5px]">Last Week - 36hrs</p>
            </div>

            <span aria-hidden="true" hidden="true">
              5hrs  daily
              Previous - 7hrs  daily
              32hrs  weekly
              Previous - 36hrs  weekly
              103hrs  monthly
              Previous - 128hrs  monthly
            </span>
          </div>
        </section>

        <section className="bg-blue-400 rounded-xl flex items-end bg-[url(assets/images/icon-play.svg)] bg-no-repeat bg-position-[top_right_15px] xl:min-w-[100px]">
          <div className="flex justify-between box bg-indigo-900 rounded-xl p-[20px] text-white w-full min-h-[135px] xl:min-w-[315px]">
            <div>
              <h2 className="font-medium">Play</h2>
              <p className="text-3xl">10hrs</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <button className="min-h-[24px] hover:bg-violet-500 active:bg-violet-800 p-[5px] rounded-lg" aria-label="drop-down menu"><img src={btnIcon} /></button>
              <p className="text-slate-300 pr-[5px]">Last Week - 8hrs</p>
            </div>

            <span aria-hidden="true" hidden="true">
              1hr  daily
              Previous - 2hrs  daily
              10hrs  weekly
              Previous - 8hrs  weekly
              23hrs  monthly
              Previous - 29hrs  monthly
            </span>
          </div>
        </section>

        <section className="bg-red-400 rounded-xl flex items-end bg-[url(assets/images/icon-study.svg)] bg-no-repeat bg-position-[top_right_15px]">
          <div className="flex justify-between box bg-indigo-900 rounded-xl p-[20px] text-white w-full min-h-[135px] xl:min-w-[315px]">
            <div>
              <h2 className="font-medium">Study</h2>
              <p className="text-3xl">4hrs</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <button className="min-h-[24px] min-h-[24px] hover:bg-violet-500 active:bg-violet-800 p-[5px] rounded-lg" aria-label="drop-down menu"><img src={btnIcon} /></button>
              <p className="text-slate-300 pr-[5px]">Last Week - 7hrs</p>
            </div>

            <span aria-hidden="true" hidden="true">
              0hrs  daily
              Previous - 1hr  daily
              4hrs  weekly
              Previous - 7hrs  weekly
              13hrs  monthly
              Previous - 19hrs  monthly
            </span>
          </div>
        </section>

        <section className="bg-green-400 rounded-xl flex items-end bg-[url(assets/images/icon-exercise.svg)] bg-no-repeat bg-position-[top_right_15px]">
          <div className="flex justify-between box bg-indigo-900 rounded-xl p-[20px] text-white w-full min-h-[135px] xl:min-w-[315px]">
            <div>
              <h2 className="font-medium">Exercise</h2>
              <p className="text-3xl">4hrs</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <button className="min-h-[24px] min-h-[24px] hover:bg-violet-500 active:bg-violet-800 p-[5px] rounded-lg" aria-label="drop-down menu"><img src={btnIcon} /></button>
              <p className="text-slate-300 pr-[5px]">Last Week - 5hrs</p>
            </div>

            <span aria-hidden="true" hidden="true">
              1hr  daily
              Previous - 1hr  daily
              4hrs  weekly
              Previous - 5hrs  weekly
              11hrs  monthly
              Previous - 18hrs  monthly
            </span>
          </div>
        </section>

        <section className="bg-violet-600 rounded-xl flex items-end bg-[url(assets/images/icon-social.svg)] bg-no-repeat bg-position-[top_right_15px]">
          <div className="flex justify-between box bg-indigo-900 rounded-xl p-[20px] text-white w-full min-h-[135px] xl:min-w-[315px]">
            <div>
              <h2 className="font-medium">Social</h2>
              <p className="text-3xl">5hrs</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <button className="min-h-[24px] min-h-[24px] hover:bg-violet-500 active:bg-violet-800 p-[5px] rounded-lg" aria-label="drop-down menu"><img src={btnIcon} /></button>
              <p className="text-slate-300 pr-[5px]">Last Week - 10hrs</p>
            </div>

            <span aria-hidden="true" hidden="true">
              1hr  daily
              Previous - 3hrs  daily
              5hrs  weekly
              Previous - 10hrs  weekly
              21hrs  monthly
              Previous - 23hrs  monthly
            </span>
          </div>
        </section>

        <section className="bg-yellow-300 rounded-xl flex items-end bg-[url(assets/images/icon-self-care.svg)] bg-no-repeat bg-position-[top_right_15px]">
          <div className="flex justify-between box bg-indigo-900 rounded-xl p-[20px] text-white w-full min-h-[135px] xl:min-w-[315px]">
            <div>
              <h2 className="font-medium">Self Care</h2>
              <p className="text-3xl">2hrs</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <button className="min-h-[24px] min-h-[24px] hover:bg-violet-500 active:bg-violet-800 p-[5px] rounded-lg" aria-label="drop-down menu"><img src={btnIcon} /></button>
              <p className="text-slate-300 pr-[5px]">Last Week - 2hrs</p>
            </div>

            <span aria-hidden="true" hidden="true">
              0hrs  daily
              Previous - 1hr  daily
              2hrs  weekly
              Previous - 2hrs  weekly
              7hrs  monthly
              Previous - 11hrs  monthly
            </span>
          </div>
        </section>
      </main>
      
      <footer className="attribution relative bottom-0 text-center -m-5 mt-5 text-white p-[20px] w-[355px] xl:absolute">
        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge"><span className="font-medium text-blue-200">Frontend Mentor</span></a></p>
        <p>Coded by <a href="#"><span className="font-medium text-blue-200">Joshua Martinez</span></a></p>
      </footer>
    </div>
  );
}