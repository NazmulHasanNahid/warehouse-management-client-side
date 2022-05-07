import React from "react";
import { Col, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="container shadow my-5 p-5">
      <Row xs={1} md={2} className="g-4 ">
        <Col>
          <h5>1.Difference between javascript and nodejs?</h5>
          <p>
            Ans: Node js is a platform. The platform we use to run JavaScript,
            and the main difference between javascript and node js is that
            javascript is a programming language and node js is a javascript run
            time .
          </p>
          <h5>2.When should you use nodejs and when should you use mongodb?</h5>
          <p>
            Any project requires a programming environment as well as a runtime
            library that provides basic programming tools and assistance as well
            as the ability to build code. as well as deciphering and/or
            interpreting your code. Nodejs is a programming language that is
            used to create web applications. The programming language Javascript
            was created by Sun Microsystems. Other similar tools are available
            for Python, Java, PHP, C#, C++, Go, and other languages are
            examples. So, if you want to create a standalone application or a
            server in If you want to utilize nodejs instead of Javascript, you
            can do so.on the other hand If your application requires the
            capacity to store data in a durable manner so that it can be
            efficiently queried or updated later, you'll almost certainly need
            to employ a data base. There are a plethora of well-known databases
            to choose from. One of these databases is MongoDB. Other database
            options include MariaDB, MySql, CouchDB, DynamoDB (on AWS), and
            Postgres. Distinct databases have different strengths (things they
            excel at) and separate methods of being used, therefore selecting
            the right/best database for your needs is a very different topic.
          </p>
          <br />
        </Col>
        <Col>
          <h5>3.Differences between sql and nosql databases.?</h5>
          <p>
            The main difference between sql and nosql that is SQL Database are
            vertically Scalable and NOSQL database is horizontally scalable also
            sql database follow (RDBMS) that is Relational database management
            system and NOSQL database follow Non relational database system.
          </p>{" "}
          <br />
          <h5>4.What is the purpose of jwt and how does it work</h5>
          <p>
            Ans : Jwt Means Json Web Token , basically jwt used for varyfying
            user or genaret a token suppose you have a website and you are the
            admin of this website now you can add data delete data you can do
            each and everything , now if some one try to become a admin of this
            site he can't do this if your site has jwt emplementaion cause jwt
            send you a token without this token no one can access your site this
            is the use case of jwt .
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Blog;
