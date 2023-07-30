import React from 'react';
import { Form, Container, Button, Row, Col, Card } from 'react-bootstrap';

const UserForm = (props) => {
  const { user, handleChange, handleSubmit, heading, newProfile , onChangeFile, fileName} = props;  

  const customRadio = {
      marginRight: "100%",
    }
    const customSpacing = {
      marginTop: '10px',
      marginBottom: '10px'
    }
    return (
      <Card>
        <Form onSubmit={handleSubmit} className="p-1 text-center border border-3">
          <h3>{heading}</h3>
          <Form.Group as={Row} style={customSpacing}>
            <Form.Label column sm={3} htmlFor="firstName">
              First Name
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                className="w-50"
                placeholder="First Name"
                name="firstName"
                value={newProfile.firstName}
                id="firstName"
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} style={customSpacing}>
            <Form.Label column sm={3} htmlFor="lastName">
              Last Name
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                className="w-50"
                placeholder="Last Name"
                name="lastName"
                value={newProfile.lastName}
                id="lastName"
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} style={customSpacing}>
            <Form.Label column sm={3} htmlFor="pronouns">
              Preferred Pronouns
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                className="w-50"
                placeholder="She/Her/Hers"
                name="pronouns"
                value={newProfile.pronouns}
                id="pronouns"
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} style={customSpacing}>
            <Form.Label column sm={3} htmlFor="vocalRange">
              Vocal Range
            </Form.Label>
            <Col sm={9}>
            <Form.Select
            className="w-50"
            name="vocalRange"
            value={newProfile.vocalRange}
            onChange={handleChange}
          >
            <option value="soprano">soprano</option>
            <option value="alto">alto</option>
            <option value="tenor">tenor</option>
            <option value="bass">bass</option>
          </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="">
            <Form.Label column sm={3} htmlFor="phoneNumber">
              Phone Number
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                className="w-50"
                placeholder="Phone Number"
                name="phoneNumber"
                value={newProfile.phoneNumber}
                id="phoneNumber"
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
          
          <Form.Group as={Row} style={customSpacing}>
            <Form.Label column sm={3} >
              Preferred Contact
            </Form.Label>
            <Col sm={9} className="mr-3">
            <Form.Check
              style={customRadio}
              type="radio"
              label="Email"
              name="preferredContact"
              id="emailPreferred"
              value="email"
              checked={newProfile.preferredContact === 'email'}
              onChange={handleChange}
              className="custom-radio"
              />
              <Form.Check
              style={customRadio}
              type="radio"
              label="Phone"
              name="preferredContact"
              id="phonePreferred"
              value="phone"
              checked={newProfile.preferredContact === 'phone'}
              onChange={handleChange}
              className="custom-radio"
              />

            </Col>
          </Form.Group>

          <Form.Group as={Row} style={customSpacing}>
            <Form.Label column sm={3} htmlFor="image">
              Profile Image
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="file"
                encType="form-data"
                name="image"
                value={fileName} 
                id="image"
                onChange={onChangeFile}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} style={customSpacing}>
          <Form.Label column sm={4}>
            Receive Blog Notifications
          </Form.Label>
          <Col sm={8} className="mr-3">
            <Form.Check
              style={customRadio}
              type="radio"
              label="Yes"
              name="settings.receiveBlogNotifications"
              id="receiveBlogNotificationsYes"
              value={true}
              checked={newProfile.settings.receiveBlogNotifications === true}
              onChange={handleChange}
            />
            <Form.Check
              style={customRadio}
              type="radio"
              label="No"
              name="settings.receiveBlogNotifications"
              id="receiveBlogNotificationsNo"
              value={false}
              checked={newProfile.settings.receiveBlogNotifications === false}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} style={customSpacing}>
          <Form.Label column sm={4}>
            Receive Service Notifications
          </Form.Label>
          <Col sm={8} className="mr-3">
            <Form.Check
              style={customRadio}
              type="radio"
              label="Yes"
              name="settings.receiveServiceNotifications"
              id="receiveServiceNotificationsYes"
              value={true}
              checked={newProfile.settings.receiveServiceNotifications === true}
              onChange={handleChange}
            />
            <Form.Check
              style={customRadio}
              type="radio"
              label="No"
              name="settings.receiveServiceNotifications"
              id="receiveServiceNotificationsNo"
              value={false}
              checked={newProfile.settings.receiveServiceNotifications === false}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </Card>
    );
  };

export default UserForm;
