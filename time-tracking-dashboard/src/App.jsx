import portrait from './assets/images/image-jeremy.png';
import btnIcon from './assets/images/icon-ellipsis.svg';
import data from "../data.json";
import { useState } from 'react';

export default function Dashboard() {
  const bgColor = ["bg-orange-400", "bg-blue-400", "bg-red-400", "bg-green-400", "bg-violet-600", "bg-yellow-300"]
  const bgImage =["bg-[url(assets/images/icon-work.svg)]", "bg-[url(assets/images/icon-play.svg)]", "bg-[url(assets/images/icon-study.svg)]", "bg-[url(assets/images/icon-exercise.svg)]", "bg-[url(assets/images/icon-social.svg)]", "bg-[url(assets/images/icon-self-care.svg)]"];
  const [boxes, setBoxes] = useState(data);
  const [activePeriod, setActivePeriod] = useState('weekly');
  let count = -1;

  function PeriodSelector() {
    return (
      <div className="flex justify-between xl:flex-col xl:items-start">
        <SelectorButton
          active={activePeriod === 'daily'}
          onClick={() => setActivePeriod('daily')}
        >
          Daily
        </SelectorButton>
        <SelectorButton
          active={activePeriod === 'weekly'}
          onClick={() => setActivePeriod('weekly')}
        >
          Weekly
        </SelectorButton>
        <SelectorButton
          active={activePeriod === 'monthly'}
          onClick={() => setActivePeriod('monthly')}
        >
          Monthly
        </SelectorButton>
      </div>
    )
  }

  function SelectorButton({active, onClick, children}) {
    return (
      <button
        onClick={onClick}
        className={`p-5px hover:bg-violet-500 ${active ? 'text-white font-medium' : 'text-slate-400'}`}
      >
        {children}
      </button>
    )
  }

  return (
    <div className="parent-container min-h-screen p-[20px] pt-[60px] bg-gray-900 min-w-screen flex flex-col items-center justify-center">
      <main className="min-h-full grid grid-cols-1 grid-rows-7 gap-4 w-[315px] items-center xl:grid-cols-4 xl:grid-rows-2 xl:w-[1000px] xl:gap-8">
        <div className="flex flex-col justify-between box bg-indigo-900 rounded-xl p-[20px] text-white min-w-[315px] min-h-[160px] xl:min-w-[100px] xl:row-span-2 xl:min-h-[422px]">
          <div className="flex items-center gap-5 bg-indigo-500 rounded-xl p-[20px] m-[-20px] max-h-[90px] xl:min-h-[280px] xl:flex-col xl:items-start xl:p-[30px]">
            <img src={portrait} className="w-[60px] xl:w-[70px] border-[5px] rounded-[50%]" />
            <h1>
              <span className="block text-slate-400">Report for</span>
              <span className="text-2xl xl:text-3xl">Jeremy Robson</span>
            </h1>
          </div>
          
          <PeriodSelector />
        </div>

        {
          boxes.map((item, index) => {
            count++;
            return (
              <section key={index} className={`${bgColor[count]} rounded-xl flex items-end ${bgImage[count]} bg-no-repeat bg-position-[top_right_15px] min-h-[160px] xl:min-w-[100px] xl:min-h-[195px]`}>
                <div className="flex-col justify-between box bg-indigo-900 rounded-xl p-[20px] text-white w-full min-h-[110px] xl:flex-col xl:min-h-[140px]">
                  <div className="flex justify-between">
                    <h2 className="font-medium">{item.title}</h2>
                    <button type="button" className="min-h-[24px] hover:bg-violet-500 active:bg-violet-800 p-[5px] rounded-lg" aria-label="drop-down menu"><img src={btnIcon} /></button>
                  </div>

                  <div className="flex flex-row justify-between items-center xl:flex-col xl:items-start gap-1">
                    <p className="text-3xl xl:text-5xl">{activePeriod === 'weekly' ? item.timeframes.weekly.current : (activePeriod === 'daily' ? item.timeframes.daily.current : item.timeframes.monthly.current)}hrs</p>
                    <p className="text-slate-300 pr-[5px]">Last Week - {activePeriod === 'weekly' ? item.timeframes.weekly.previous : (activePeriod === 'daily' ? item.timeframes.daily.previous : item.timeframes.monthly.previous)}hrs</p>
                  </div>
                </div>
              </section>
            )
          })
        }
      </main>

      <footer className="attribution relative bottom-0 text-center -m-5 mt-5 text-white p-[20px] w-[355px] xl:absolute">
        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"><span className="font-medium text-blue-200">Frontend Mentor</span></a></p>
        <p>Coded by <a href="https://www.frontendmentor.io/profile/JoshuaM04" target="_blank"><span className="font-medium text-blue-200">Joshua Martinez</span></a></p>
      </footer>
    </div>
  )
}