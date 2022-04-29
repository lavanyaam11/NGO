import React from 'react'
import { Table, Container, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import NavBar from "./NavBar";

export default function History() {
    const navigate = useNavigate()
    return (
        <>
            <NavBar></NavBar>
            <div className='d-flex justify-content-lg-between p-2'>
                <h1 className="mb-3 fs-3 fw-normal text-center ">
                    History 
                </h1>
                <Button variant="danger" type="danger" onClick={() => { navigate('/ngo') }} size="lg">
                    Back
                </Button>
            </div>
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>NGO Name</th>
                            <th>Wallet Address</th>
                            <th>Cause Name</th>
                            <th>Amount Donated</th>
                            <th>Amount Collected</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Smile Foundation</td>
                            <td>wert234shjitjk</td>
                            <td>Education</td>
                            <td>120 Ether</td>
                            <td>120 Ether</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Give India Foundation</td>
                            <td>1wcfgmjksldjun</td>
                            <td>Covid-19</td>
                            <td>130 Ether</td>
                            <td>130 Ether</td>
                            <td>Inavtive</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Care India</td>
                            <td>carpoytg567vfrt</td>
                            <td>Girl Eduaction</td>
                            <td>100 Ether</td>
                            <td>100 Ether</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Care India</td>
                            <td>carpoytg567vfrt</td>
                            <td>Girl Eduaction</td>
                            <td>100 Ether</td>
                            <td>100 Ether</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Care India</td>
                            <td>carpoytg567vfrt</td>
                            <td>Girl Eduaction</td>
                            <td>100 Ether</td>
                            <td>100 Ether</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Care India</td>
                            <td>carpoytg567vfrt</td>
                            <td>Girl Eduaction</td>
                            <td>100 Ether</td>
                            <td>100 Ether</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Care India</td>
                            <td>carpoytg567vfrt</td>
                            <td>Girl Eduaction</td>
                            <td>100 Ether</td>
                            <td>100 Ether</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Care India</td>
                            <td>carpoytg567vfrt</td>
                            <td>Girl Eduaction</td>
                            <td>100 Ether</td>
                            <td>100 Ether</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Care India</td>
                            <td>carpoytg567vfrt</td>
                            <td>Girl Eduaction</td>
                            <td>100 Ether</td>
                            <td>100 Ether</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Care India</td>
                            <td>carpoytg567vfrt</td>
                            <td>Girl Eduaction</td>
                            <td>100 Ether</td>
                            <td>100 Ether</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Care India</td>
                            <td>carpoytg567vfrt</td>
                            <td>Girl Eduaction</td>
                            <td>100 Ether</td>
                            <td>100 Ether</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Care India</td>
                            <td>carpoytg567vfrt</td>
                            <td>Girl Eduaction</td>
                            <td>100 Ether</td>
                            <td>100 Ether</td>
                            <td>Active</td>
                        </tr>


                    </tbody>
                </Table>
            </Container>
        </>
    )
}
