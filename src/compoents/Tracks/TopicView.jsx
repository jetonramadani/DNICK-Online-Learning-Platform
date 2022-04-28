import React, { useState } from 'react'
import { Button, Image, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import schema from "../../assets/schema.svg";

const trans = {
    EN: {
        title: 'Paradigms',
        desc: 'Different programming tasks can be solved in different ways: you might need to write a function, or create a separate class with methods, and so on. All such variants are combined into different programming approaches, which are also called paradigms. Below we will analyze two main paradigms: imperative and declarative and their types.',
        info: 'Almost all modern languages are multi-paradigm. They easily combine the capabilities of the imperative and declarative approaches. Nevertheless, in the section about each paradigm, we will give a list of languages where, among other paradigms, the one discussed in the section is also implemented.'
    },
    SQ: {
        title: 'Paradigmat',
        desc: "Detyra të ndryshme programimi mund të zgjidhen në mënyra të ndryshme: mund t'ju duhet të shkruani një funksion, ose të krijoni një klasë të veçantë me metoda, e kështu me radhë. Të gjitha këto variante kombinohen në qasje të ndryshme programimi, të cilat quhen edhe paradigma. Më poshtë do të analizojmë dy paradigma kryesore: urdhërore dhe deklarative dhe llojet e tyre.",
        info: 'Pothuajse të gjitha gjuhët moderne janë multi-paradigma. Ato kombinojnë lehtësisht aftësitë e qasjeve imperative dhe deklarative. Megjithatë, në seksionin për secilën paradigmë, do të japim një listë të gjuhëve ku, ndër paradigmat e tjera, zbatohet edhe ajo e diskutuar në seksion.'
    },
    MK: {
        title: 'Парадигми',
        desc: 'Различни програмски задачи може да се решат на различни начини: можеби ќе треба да напишете функција или да креирате посебна класа со методи итн. Сите такви варијанти се комбинираат во различни програмски пристапи, кои се нарекуваат и парадигми. Подолу ќе анализираме две главни парадигми: императив и декларативна и нивните типови.',
        info: 'Речиси сите современи јазици се мулти-парадигма. Тие лесно ги комбинираат можностите на императивниот и декларативниот пристап. Сепак, во делот за секоја парадигма ќе дадеме список на јазици каде, меѓу другите парадигми, е имплементирана и онаа што се дискутира во делот.'
    },

}
const TopicView = () => {
    const [active, setActive] = useState("EN");

    return (
        <>
            <Nav variant="pills" justify>
                <Nav.Item>
                    <Nav.Link className={active === "EN" ? 'active' : ''} onClick={() => setActive(`EN`)}>EN</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={active === "MK" ? 'active' : ''} onClick={() => setActive('MK')}>MK</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={active === "SQ" ? 'active' : ''} onClick={() => setActive('SQ')}>SQ</Nav.Link>
                </Nav.Item>
            </Nav>
            <div>
                <h1>{trans[active].title}</h1>
                <p>{trans[active].desc}</p>
                <Image src={schema} className="img-thumbnail" />
                <p style={{ background: "lightblue" }}>{trans[active].info}</p>
            </div>
            <Link to="/question"><Button>Practice</Button></Link>
        </>
    )
}

export default TopicView