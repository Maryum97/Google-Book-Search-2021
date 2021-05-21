import React from "react";
import { Button, Form, FormGroup, Input } from 'reactstrap';

function FormBooks() {
    return (
        <Form>
            <FormGroup>
                <Input type="search" name="searchBook" id="searchBook" placeholder="Search for a book..." />
            </FormGroup>
            <Button>Search</Button>
        </Form>
    );
}

export default FormBooks;