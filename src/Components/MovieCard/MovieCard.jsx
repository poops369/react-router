import React from "react";
import { Card, Button } from "react-bootstrap";
import "./MovieCard.css";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
    return (
        <>
            <Link to={"/trailer/" + movie.id}>
                <Card className="movieCard">
                    <Card.Img
                        variant="top"
                        src={movie.posterUrl}
                        className="MovieImg"
                    />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>{movie.description}</Card.Text>
                        <h2>{"🌟".repeat(movie.rate)}</h2>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary">Download</Button>
                    </Card.Footer>
                </Card>
            </Link>
        </>
    );
}

export default MovieCard;
