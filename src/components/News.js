import React from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { Row, Col, Card, Icon, CardTitle, Container } from "react-materialize";
function New() {
  return (
    <Container className="row">
      <Row className="col s6">
        <Col>
          <Card
            closeIcon={<Icon>close</Icon>}
            header={
              <CardTitle
                image="/images/SquidGame.jpg"
                reveal
                waves="light"
              />
            }
            reveal={
              <p>
                Coming
              </p>
            }
            revealIcon={<Icon></Icon>}
            title="Squid Game"
          >
            <p>
              <a href="https://youtu.be/oqxAJKy0ii4">Trailer</a>
            </p>
          </Card>
        </Col>
      </Row>
      <Row className="col s6">
        <Col>
          <Card
            closeIcon={<Icon>close</Icon>}
            header={
              <CardTitle
                image="/images/AvatarTheWayofWater.jpg"
                reveal
                waves="light"
              />
            }
            reveal={
              <p>
                Coming
              </p>
            }
            revealIcon={<Icon></Icon>}
            title="Avatar The Way Of Water"
          >
            <p>
              <a href="https://youtu.be/d9MyW72ELq0">Trailer</a>
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default New;
