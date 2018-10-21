import React, {Component} from 'react';
import './Main.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Main extends Component {
    render() {
        return (
            <article className={'article'}>
                <section className={'titleSection'}>
                    <h1 className="title">Marilyn Monroe</h1>
                    <p className={'location'}><FontAwesomeIcon icon="map-marker-alt"
                                                               className={'map-marker-alt'}/> Poznań,
                        PL</p>
                </section>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequuntur cumque cupiditate
                    eaque eius eligendi eos excepturi expedita, inventore nisi non nostrum sapiente tenetur vel
                    voluptatem. Amet, delectus, iure! Et.
                </p>
                <blockquote className={'quote'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet, impedit inventore iure
                    obcaecati perspiciatis quos repellat temporibus.
                </blockquote>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequuntur cumque cupiditate
                    eaque eius eligendi eos excepturi expedita, inventore nisi non nostrum sapiente tenetur vel
                    voluptatem. Amet, delectus, iure! Et.
                </p>
            </article>
        );
    }
}

export default Main;