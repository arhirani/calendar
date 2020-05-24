import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Form,
} from "reactstrap";

function AddEvent({
  modal,
  toggle,
  day,
  month,
  handleEventSubmit,
  checkbox,
  toggleCheckbox,
}) {
  return (
    <Modal isOpen={modal}>
      <ModalHeader>Add Event</ModalHeader>
      <ModalBody>
        <Form
          id={`${day}${month}`}
          method="GET"
          onSubmit={(e) => handleEventSubmit(e, "add")}
        >
          <div>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Name</InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Event Name" name="event_name" />
            </InputGroup>
          </div>
          <br />
          <div>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Time : </InputGroupText>
              </InputGroupAddon>
              <Input type="time" min="00:00" max="23:59" name="event_time" />
            </InputGroup>
          </div>
          <br />
          <div>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Description</InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Event Description" name="event_description" />
            </InputGroup>
          </div>
          <br />
          <div>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <Input
                    addon
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                    onChange={toggleCheckbox}
                    name="reminder_checkbox"
                  />
                </InputGroupText>
              </InputGroupAddon>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Remind Me</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </div>
          <br />
          {checkbox && (
            <div>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Remind Before :</InputGroupText>
                  <Input
                    type="time"
                    min="00:00"
                    max="23:59"
                    name="remind_time"
                  />
                </InputGroupAddon>
              </InputGroup>
            </div>
          )}
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button form={`${day}${month}`} color="primary" type="submit">
          Save
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default AddEvent;
