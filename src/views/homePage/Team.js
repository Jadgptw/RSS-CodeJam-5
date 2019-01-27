import React from 'react';
import '../homePage/styles/Team.css';
import Person from './Person';
import avatar1 from './homeImages/ava1.jpg';
import avatar2 from './homeImages/ava2.jpg';
import avatar3 from './homeImages/ava3.jpg';
import avatar4 from './homeImages/ava4.jpg';
import avatar5 from './homeImages/ava5.jpg';
import gitIcoYellow from './homeImages/gutHubIco.png';



function Team(props){
    return (
        <div className="team-block">
            <h2 className="about-team">Our Team</h2>
            <div className="team-wrapper">
                <Person img={avatar1} git={gitIcoYellow} duty="web-design" name="Nikita Pavlovich" gitName="magi-a"/>
                <Person img={avatar2} git={gitIcoYellow} duty="Team-lead" name="Aliaksandr Hordzin" gitName="jadgptw"/>
                <Person img={avatar3} git={gitIcoYellow} duty="Front-End" name="Andrey Vintskevich" gitName="andvikvin"/>
                <Person img={avatar4} git={gitIcoYellow} duty="Front-End" name="Katsiaryna Paulovich" gitName="katepavlovich"/>
                <Person img={avatar5} git={gitIcoYellow} duty="Front-End" name="Aliaksandra Rybak" gitName="aliaksandrarybak"/>
            </div>
        </div>
    )
}

export default Team;