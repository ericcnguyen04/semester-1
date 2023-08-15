import '../App.css'
import 'bulma/css/bulma.min.css';

import Navbar from "./partials/Navbar"

export default function English () {
    return (
        <div class="content">
            <Navbar/>
            <button class="button">
            <a href='https://go.view.usg.edu/d2l/home/2928804' target="_blank">US history ecore</a>
            </button>

            <div>
                <h1>Chapter 1. Indigenous America</h1>
                <h6>Intro</h6>
                    <p>
                        Never really met, europeans saw native americans and were like woah! <br></br>
                        Native Americans were chilling
                    </p>

                <h6>The First Americans</h6>
                    <ul>
                        <li>Native american beliefs at the time, art.</li>
                        <li>Archaeologists and anthropologists claims that Americas were a 'new world' for Native americans too.</li>
                        <li>DNA evidence suggests that these ancestors paused—for perhaps fifteen thousand years—in the expansive region between Asia and America.</li>
                        <li>Other ancestors crossed the seas and voyaged along the Pacific coast, traveling along riverways and settling where local ecosystems permitted.</li>
                    </ul>
                    
                    <p>Northwest</p>
                    <ul>
                        <li>Native groups exploited salmom filled rivers</li>
                        <li>Agriculture arose sometime between nine thousand and five thousand years ago, almost simultaneously in the Eastern and Western Hemispheres.</li>
                    </ul>

            </div>
        </div>
    )
}