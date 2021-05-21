import React from "react";
import { Button, Form, FormGroup, Input } from 'reactstrap';

function FormBooks(props) {
    return (
        <Form>
            <FormGroup>
                <Input
                    onChange={props.handleInputChange}
                    value={props.search}
                    type="text"
                    name="search"
                    className="form-control"
                    id="search"
                    placeholder="Search for a book..."
                />
            </FormGroup>

            <Button
                onClick={props.handleFormSubmit}
                >
                Search
            </Button>
        </Form>
    );
}

export default FormBooks;