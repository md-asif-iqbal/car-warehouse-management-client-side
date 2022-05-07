import React from 'react';
import { Accordion } from 'react-bootstrap';
import'./Blogs.css'
const Blogs = () => {
    return (
        <div>
            <h2>This is Blogs</h2>
            <div className='main-blogs mx-5 my-4'>
                <div>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                    <Accordion.Header>Q1: Difference between javascript and node js</Accordion.Header>
                    <Accordion.Body >
                    <p className='text'>
                        JavaScript is a high-level, lightweight (easy syntax) and
                        object-oriented programming language that is used by
                        almost every web developer to create web pages, web
                        applications, mobile applications and is also used
                        in game development. Node.js is a JavaScript runtime
                        environment built on google’s v8 engine which is used
                        to run JavaScript outside the browser and to put it
                        simply it is just an extension of a JavaScript library
                        with many modules hence making JavaScript even more powerful.
                    </p>
                    </Accordion.Body>
                    </Accordion.Item>
                    
                    
                    <Accordion.Item eventKey="1">
                    <Accordion.Header>Q3: Differences between sql and nosql databases.</Accordion.Header>
                    <Accordion.Body>
                    <p className='text'>
                        SQL databases are vertically scalable, while NoSQL
                        databases are horizontally scalable. SQL databases
                        are table-based, while NoSQL databases are document,
                        key-value, graph, or wide-column stores. SQL databases
                        are better for multi-row transactions, while NoSQL is
                        better for unstructured data like documents or JSON.
                    </p>
                    </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </div>
                <div>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                    <Accordion.Header>Q2: When should you use nodejs and when should you use mongodb.</Accordion.Header>
                    <Accordion.Body>
                    <p className='text'>
                        There are many web servers built with nodejs that
                        will then use MongoDB for storing data. MongoDB offers
                        an API library that runs within a Nodejs application to
                        give you programmatic access to MongoDB so you can
                        create databases and then add, query, update or delete
                        data from the MongoDB database.
                    </p>
                    </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                    <Accordion.Header>Q4: What is the purpose of jwt and how does it work.</Accordion.Header>
                    <Accordion.Body>
                    <p className='text'>
                        JWT, or JSON Web Token, is an open standard used to share security
                        information between two parties — a client and a server.
                        Each JWT contains encoded JSON objects, including a set 
                        of claims. JWTs are signed using a cryptographic algorithm
                        to ensure that the claims cannot be altered after the token
                        is issued. 
                    </p>
                    </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Blogs;