import React, { Component } from 'react'
import styled from 'styled-components';
import Cards from '../Components/UI/Cards'

const FlexIt = styled.div`
 display: flex; 
 flex-direction: row;
 justify-content: center; 
`
const Header = styled.h1`
text-align: center;
`

export default class Staff extends Component {
    render() {
        return (
            <>
            <Header>Senior Staff</Header>
            <FlexIt>
                <Cards
                name ="Nicholas Owen"
                title="Director of Sunflowr Speech Camp"
                description="Coached State Champions in EVERY event and qualified every event
                            for Nationals. Coached National Finalists at the NIETOC, NCFL and NFL Nationals
                            including 2 national champions and 75 events to out-roudns. Has coahced Salina Central to six state championships!"
                />
                <Cards
                name ="Jamelle Brown"
                title="Head Coach - Sumner Academy of Arts (KS)"
                description="Her success speaks for itself. Six time defending state champion in KS and has coached finalists in DP and twice in DUO at NCFL Nationals.
                Won numerous coaching awards including the National Heart of the arts award in 2014"
                />
                <Cards
                name ="Ryan Swartz"
                title="Director of Speech & Debate at Bishop McGuinness HS in OKC (2007-2017"
                description="Coached students to out rounds of the NCFL, NIETOC, and NSDA Tournaments in HI, DI, OI, DUO, Duet, and Prose. National Finalists include 2014 NSDA Finalist (5th) -Humorous Interp, 2015 NIETOC Finalist (6th)
                            - Duet Acting, the 2016 NSDA National Runner-Up in Humorous Interp, and 2017 NSDA Finalist (3rd) - Humorous Interp."
                />
                 <Cards
                name ="Kim Lenger"
                title="Head Coach - Liberty North (MO)"
                description="Coached students to out rounds of the NCFL, NIETOC, and NSDA Tournaments in HI, DI, OI, DUO, Duet, and Prose. National Finalists include 2014 NSDA Finalist (5th) -Humorous Interp, 2015 NIETOC Finalist (6th)
                            - Duet Acting, the 2016 NSDA National Runner-Up in Humorous Interp, and 2017 NSDA Finalist (3rd) - Humorous Interp."
                />
             </FlexIt>
             <Header>Junior Staff</Header >
            <FlexIt>
                <Cards
                name ="Nicholas Owen"
                title="camp counselor"
                description="Nick likes long walks on the beach"
                />
                <Cards
                name ="Nicholas Owen"
                title="camp counselor"
                description="Nick likes long walks on the beach"
                />
                <Cards
                name ="Nicholas Owen"
                title="camp counselor"
                description="Nick likes long walks on the beach"
                />
             </FlexIt>
             </>
        )
    }
}
