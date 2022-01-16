import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap'

class Contact extends Component {
      state = {
            firstname: "",
            lastname: "",
            telnum: "",
            email: "",
            agree: false,
            contactType: "Tel.",
            message: ""
      }


      handleInputChange = event => {
            const value = event.target.value;
      }

      render() {
            return (
                  <div className="container">
                        <div className='row row-content' style={{ paddingLeft: "20px", textAlign: "left" }}>
                              <div className='col-12'>
                                    <h3>
                                          Send us your Feedback
                                    </h3>
                              </div>
                              <div className='col-12 col-md-7'>
                                    <Form row>
                                          <FormGroup>
                                                <Label htmlFor='firstname' md={2}> First Name</Label>
                                                <Col md={10}>
                                                      <Input type="text" name='firstname' placeholder='First Name' value={this.state.firstname} />
                                                </Col>
                                          </FormGroup>
                                          <FormGroup>
                                                <Label htmlFor='lastname' md={2}>Last Name</Label>
                                                <Col md={10}>
                                                      <Input type="text" name='lastname' placeholder='Lastname Name' value={this.state.lastname} />
                                                </Col>
                                          </FormGroup>
                                          <FormGroup>
                                                <Label htmlFor='telnum' md={2}>Contact Tel</Label>
                                                <Col md={10}>
                                                      <Input type="tel" name='telnume' placeholder='Tel number' value={this.state.telnum} />
                                                </Col>
                                          </FormGroup>
                                          <FormGroup>
                                                <Label htmlFor='email' md={2}>Email</Label>
                                                <Col md={10}>
                                                      <Input type="email" name='email' placeholder='Email' value={this.state.email} />
                                                </Col>
                                          </FormGroup>
                                          <FormGroup row>
                                                <Col md={{ size: 6, offset: 2 }} >

                                                      <FormGroup check>
                                                            <Label check>

                                                                  <Input type="checkbox" name='agree' checked={this.state.agree} />
                                                                  <strong>May we contact you?</strong>
                                                            </Label>

                                                      </FormGroup>
                                                </Col>

                                                <Col md={{ size: 3, offset: 1 }} >
                                                      <Input type="select" name='contactType' checked={this.state.contactType} >
                                                            <option >null</option>
                                                            <option >Tel.</option>
                                                            <option >Email</option>

                                                      </Input>

                                                </Col>

                                          </FormGroup>

                                          <FormGroup row>
                                                <Label htmlFor='message' md={2}>Message</Label>
                                                <Col md={10}>

                                                      <Input type="textarea" name='message' value={this.state.message} rows="12" />
                                                </Col>
                                          </FormGroup>

                                          <FormGroup>
                                                <Col md={{ size: 10, offset: 2 }}>
                                                      <Button type='submit' color='primary'> Send feedback</Button>
                                                </Col>
                                          </FormGroup>

                                    </Form>

                              </div>

                        </div>

                  </div >
            );
      }
}
export default Contact;