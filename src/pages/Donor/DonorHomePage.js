import React from "react";
// import image from "../../assets/oneee.jpg";
import NavBar from "./NavBar";
import { Card } from "react-bootstrap";

function DonorHomePage() {
  return (
    <div>
      {/* style={{backgroundImage: `url(${image}` }} */}
      <NavBar></NavBar>
      <br></br>
      <div className="d-flex justify-content-around">
        <Card style={{ width: "20rem", height: "16rem" }}>
          <Card.Body>
            <Card.Img variant="top" src="oneee.jpg" />
            <Card.Title>Donate Funds</Card.Title>
            {/* <Card.Text>Donate funds to your preferred NGO.</Card.Text> */}
          </Card.Body>
          <Card.Footer>
            <Card.Link href="/donateFunds">DONATE</Card.Link>
          </Card.Footer>
        </Card>
        <Card style={{ width: "20rem", height: "16rem" }}>
          <Card.Body>
            <Card.Img variant="top" src="oneee.jpg" />
            <Card.Title>Approve/Reject</Card.Title>
            {/* <Card.Text>You can approve or reject the NGO request.</Card.Text> */}
          </Card.Body>
          <Card.Footer>
            <Card.Link href="/approveReject">Click here</Card.Link>
          </Card.Footer>
        </Card>
      </div>
      <br></br>
      <div className="d-flex justify-content-around">
        <Card style={{ width: "20rem", height: "16rem" }}>
          <Card.Body>
            <Card.Img variant="top" src="oneee.jpg" />
            <Card.Title>NGOs</Card.Title>
            {/* <Card.Text>List of available NGOS.</Card.Text> */}
          </Card.Body>
          <Card.Footer>
            <Card.Link href="/avlngo">NGOs</Card.Link>
          </Card.Footer>
        </Card>
        <Card style={{ width: "20rem", height: "16rem" }}>
          <Card.Body>
            <Card.Img variant="top" src="oneee.jpg" />
            <Card.Title>Donation History</Card.Title>
            {/* <Card.Text>History for your donations.</Card.Text> */}
          </Card.Body>
          <Card.Footer>
            <Card.Link href="/historyofdonation">HISTORY</Card.Link>
          </Card.Footer>
        </Card>
      </div>
      <br></br>
    </div>
  );
}
export default DonorHomePage;
