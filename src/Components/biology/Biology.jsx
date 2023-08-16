import '../../App.css'
import 'bulma/css/bulma.min.css';

import Navbar from "../partials/Navbar"

import Cancer from './Cancer'


export default function Biology () {
    return (
        <div className='content'>
            <Navbar />
            <h1>
                Biology
            </h1>
            <div>
                first day of school
                <div>
                20%of grade 'homework'
                slugsbooks
                ISBN : 9781265126742
                </div>
            </div>

            <Cancer />
        </div>
    )
}