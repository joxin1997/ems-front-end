import React from 'react';
import { Row, Card, Table, Dropdown } from 'react-bootstrap'
import {Link} from "react-router-dom"

function HomeTable() {
    return (
        <>
            <div className="Container mt-5">
                <Row>
                    <div className='col'>
                        <Card className='shadow'>
                            <Table responsive='sm' className='align-items-center'>
                                <thead className='thead-dark'>
                                    <tr className='table-dark'>
                                        <th>ID</th>
                                        <th>FULL NAME</th>
                                        <th>EMAIL</th>
                                        <th>GENDER</th>
                                        <th>STATUS</th>
                                        <th>PROFILE</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>max miller</td>
                                        <td>max@gmail.com</td>
                                        <td>M</td>
                                        <td>
                                            <Dropdown>
                                                <Dropdown.Toggle id="dropdown-basic">
                                                    Active
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item >Active</Dropdown.Item>
                                                    <Dropdown.Item >Inactive</Dropdown.Item>

                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                        <td>
                                            <img className="rounded" width={'50px'} height={'50px'} src="https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-11640168385tqosatnrny.png?v=2023052700"
                                             alt="profile picture" />
                                        </td>
                                        <td>
                                        <Dropdown>
                                                <Dropdown.Toggle variant='light' id="dropdown-basic1">
                                                <i class="fa-solid fa-ellipsis-vertical fs-4"></i>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item >
                                                        <Link to={'/profile/1'} className='text-decoration-none'>
                                                        <i className=" fa-solid fa-eye text success me-2"></i>
                                                        <span className=' text-dark'>View</span>
                                                        </Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item ><Link to={'/edit/1'} className='text-decoration-none'>
                                                        <i className=" fa-solid fa-pen text-primary me-2"></i>
                                                        <span className=' text-dark'>Edit</span>
                                                        </Link></Dropdown.Item>
                                                        <Dropdown.Item >
                                                        <div>
                                                        <i className=" fa-solid fa-trash text-danger me-2"></i>
                                                        <span className=' text-dark'>Delete</span>
                                                        </div>
                                                    </Dropdown.Item>
                                                           
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                </tbody>


                            </Table>

                        </Card>
                    </div>
                </Row>

            </div>
        </>
    )
}

export default HomeTable