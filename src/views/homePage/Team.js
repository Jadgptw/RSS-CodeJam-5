import React from 'react';
import '../homePage/styles/Team.css';
import Person from './Person';



function Team(props){
    return (
        <div className="team-block">
            <h2 className="about-team">Our Team</h2>
            <div className="team-wrapper">
                <Person img={props.imgAva[0]} git={props.git} duty="web-design" name="Nikita Pavlovich" gitName="magi-a"/>
                <Person img={props.imgAva[1]} git={props.git} duty="Team-lead" name="Aliaksandr Hordzin" gitName="jadgptw"/>
                <Person img={props.imgAva[2]} git={props.git} duty="Front-End" name="Andrey Vintskevich" gitName="andvikvin"/>
                <Person img={props.imgAva[3]} git={props.git} duty="Front-End" name="Katsiaryna Paulovich" gitName="katepavlovich"/>
                <Person img={props.imgAva[4]} git={props.git} duty="Front-End" name="Aliaksandra Rybak" gitName="aliaksandrarybak"/>
            </div>
        </div>
    )
}

export default Team;