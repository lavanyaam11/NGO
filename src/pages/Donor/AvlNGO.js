import React from 'react'
import  { Table } from "react-bootstrap";
import NavBar from "./NavBar";

export default function AvlNGO() {
    return (
        <>
            <NavBar></NavBar>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>NGO Name</th>
                        <th>Wallet Address</th>
                        <th>Cause Name</th>
                        <th>Amount Required</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Smile Foundation</td>
                        <td>wert234shjitjk</td>
                        <td>Education</td>
                        <td>140 Ether</td>
                        <td>voluntary group or institution with a social mission, which operates independently from the government</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Give India Foundation</td>
                        <td>1wcfgmjksldjun</td>
                        <td>Covid-19</td>
                        <td>180 Ether</td>
                        <td>voluntary group or institution with a social mission, which operates independently from the government</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Care India</td>
                        <td>carpoytg567vfrt</td>
                        <td>Girl Eduaction</td>
                        <td>150 Ether</td>
                        <td>voluntary group or institution with a social mission, which operates independently from the government</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}







