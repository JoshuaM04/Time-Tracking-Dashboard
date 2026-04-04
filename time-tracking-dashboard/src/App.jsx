export default function Dashboard() {
  return (
    <div className="parent-container min-h-screen p-5">
      <main className="min-h-full">
        <div className="box">
          Report for
          Jeremy Robson
          Daily
          Weekly
          Monthly
        </div>

        <div className="box">
          Work
          5hrs  daily
          Previous - 7hrs  daily
          32hrs  weekly
          Previous - 36hrs  weekly
          103hrs  monthly
          Previous - 128hrs  monthly
        </div>

        <div className="box">
          Play
          1hr  daily
          Previous - 2hrs  daily
          10hrs  weekly
          Previous - 8hrs  weekly
          23hrs  monthly
          Previous - 29hrs  monthly
        </div>

        <div className="box">
          Study
          0hrs  daily
          Previous - 1hr  daily
          4hrs  weekly
          Previous - 7hrs  weekly
          13hrs  monthly
          Previous - 19hrs  monthly
        </div>

        <div className="box">
          Exercise
          1hr  daily
          Previous - 1hr  daily
          4hrs  weekly
          Previous - 5hrs  weekly
          11hrs  monthly
          Previous - 18hrs  monthly
        </div>

        <div className="box">
          Social
          1hr  daily
          Previous - 3hrs  daily
          5hrs  weekly
          Previous - 10hrs  weekly
          21hrs  monthly
          Previous - 23hrs  monthly
        </div>

        <div className="box">
          Self Care
          0hrs  daily
          Previous - 1hr  daily
          2hrs  weekly
          Previous - 2hrs  weekly
          7hrs  monthly
          Previous - 11hrs  monthly
        </div>
      </main>
      
      <footer className="attribution fixed bottom-0 text-center">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </footer>
    </div>
  );
}