import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import API from '../../utils/API';

function Results() {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Book title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Date</CardSubtitle>
                    <CardText>Synopsis</CardText>
                    <Button>Save</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default Results;