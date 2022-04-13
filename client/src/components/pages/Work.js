import React from 'react';
import pantryShot from "../../images/pantry_chef_shot.png";
import discShot from "../../images/DiscCoverShot.png";
import weatherShot from "../../images/WeatherDashboardShot.png";
import teamShot from "../../images/ScreenShotTeamProfileGenerator.png";
import workShot from "../../images/WorkDaySch-Landing.png";
import noteShot from "../../images/NoteTakerShot.png";

export default function Work() {
  return (
    <div className="card-container">
    <div className="card">
        <img  id= "most-recent" src={pantryShot} alt="Pantry Chef" />
        <h3>Pantry Chef</h3>
        <a href="https://awesome-pantry-chef.herokuapp.com">Deployed Live</a>
        <a href="https://github.com/tracyewilhelm/Pantry_Chef.git">GitHub Repository</a>
    </div>
    <div className="card">
        <img src={discShot} alt="Discover Music" />
        <h3>Disc-Cover Music</h3>
        <a href="https://samanthajrexroat.github.io/DiscCover">Deployed Live</a>
        <a href="https://github.com/samanthajrexroat/DiscCover.git">GitHub Repository</a>
    </div>
    <div className="card">
        <img src={weatherShot} alt="Weather Dashboard Application" />
        <h3>Weather Dashboard</h3>
        <a href="https://samanthajrexroat.github.io/WeatherDashboard/">Deployed Live</a>
        <a href="https://github.com/samanthajrexroat/WeatherDashboard.git">GitHub Repository</a>
    </div>
    <div className="card">
        <img src={teamShot} alt="Team Profile Generator" />
        <h3>Team Profile Generator</h3>
        <a href="https://github.com/samanthajrexroat/TeamProfileGenerator.git">GitHub Repository</a>
    </div>
    <div className="card">
        <img src={workShot} alt="Work Day Scheduler" />
        <h3>Work Day Scheduler</h3>
        <a href="https://samanthajrexroat.github.io/WorkDayScheduler/">Deployed Live</a>
        <a href="https://github.com/samanthajrexroat/WorkDayScheduler.git">GitHub Repository</a>
    </div>
    <div className="card">
        <img src={noteShot} alt="Note Taker" />
        <h3>Note Taker</h3>
        <a href="https://note-taker-sjr.herokuapp.com/">Deployed Live</a>
        <a href="https://github.com/samanthajrexroat/NoteTaker.git">GitHub Repository</a>
    </div>
</div>
  );
}