import React from "react";
import Container from "react-bootstrap/Container";

function Trailer(props) {
    const movie = props.movies.find(
        (movie) => movie.id === Number(props.match.params.id)
    );
    return (
        <Container>
            <h1>{movie.title}</h1>
            <iframe
                width="560"
                height="315"
                src={movie.trailerfilm}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            <h5>{movie.description}</h5>
        </Container>
    );
}
export default Trailer;
