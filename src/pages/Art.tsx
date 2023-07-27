import { useEffect, useState } from "react";
import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

type Imgs = {
  path: string;
  name: string;
  description: string;
};

export function Art() {
  const imgsURL = "https://sunnylui823.github.io/imgs.json";

  const [imgs, setImgs] = useState<Imgs[]>([]);
  const [error, setError] = useState({});

  useEffect(() => {
    fetch(imgsURL)
      .then((response) => response.json())
      .then((responseData) => setImgs(responseData))
      .catch((err) => setError(err));
  }, []);

  return (
    <Row md={2} xs={1} lg={4} className="g-3">
      {error != null &&
        imgs.map((img, id) => (
          <Col key={id}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                style={{ objectFit: "cover" }}
                width="100px"
                height="200px"
                src={img.path}
              />
              <Card.Body>
                <Card.Title>{img.name}</Card.Title>
                <Card.Text>{img.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>
  );
}
