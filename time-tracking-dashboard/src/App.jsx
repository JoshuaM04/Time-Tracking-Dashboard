export default function Dashboard() {
  return (
    <div className="parent-container min-h-screen p-[20px] pt-[60px] bg-gray-900 min-w-screen">
      <main className="min-h-full grid grid-cols-1 grid-rows-7 gap-4 w-[315px]">
        <div className="box bg-indigo-900 rounded-md p-5">
          Report for
          Jeremy Robson
          Daily
          Weekly
          Monthly
        </div>

        <div className="box bg-indigo-900 rounded-md p-5">
          Work
          5hrs  daily
          Previous - 7hrs  daily
          32hrs  weekly
          Previous - 36hrs  weekly
          103hrs  monthly
          Previous - 128hrs  monthly
        </div>

        <div className="box bg-indigo-900 rounded-md p-5">
          Play
          1hr  daily
          Previous - 2hrs  daily
          10hrs  weekly
          Previous - 8hrs  weekly
          23hrs  monthly
          Previous - 29hrs  monthly
        </div>

        <div className="box bg-indigo-900 rounded-md p-5">
          Study
          0hrs  daily
          Previous - 1hr  daily
          4hrs  weekly
          Previous - 7hrs  weekly
          13hrs  monthly
          Previous - 19hrs  monthly
        </div>

        <div className="box bg-indigo-900 rounded-md p-5">
          Exercise
          1hr  daily
          Previous - 1hr  daily
          4hrs  weekly
          Previous - 5hrs  weekly
          11hrs  monthly
          Previous - 18hrs  monthly
        </div>

        <div className="box bg-indigo-900 rounded-md p-5">
          Social
          1hr  daily
          Previous - 3hrs  daily
          5hrs  weekly
          Previous - 10hrs  weekly
          21hrs  monthly
          Previous - 23hrs  monthly
        </div>

        <div className="box bg-indigo-900 rounded-md p-5">
          Self Care
          0hrs  daily
          Previous - 1hr  daily
          2hrs  weekly
          Previous - 2hrs  weekly
          7hrs  monthly
          Previous - 11hrs  monthly
        </div>
      </main>
      
      <footer className="attribution relative bottom-0 text-center -m-5 mt-5 p-5 text-white">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge"><span className="font-medium text-blue-200">Frontend Mentor</span></a>.
        Coded by <a href="#"><span className="font-medium text-blue-200">Joshua Martinez</span></a>.
      </footer>
    </div>
  );
}