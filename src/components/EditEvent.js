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

function EditEvent({
  editModal,
  toggleEditModal,
  checkbox,
  toggleCheckbox,
  day,
  month,
  dayEvents,
  handleEventSubmit,
  deleteEvent,
  index,
}) {
  return (
    <Modal isOpen={editModal}>
      {console.log(editModal)}
      <ModalHeader>Edit Event</ModalHeader>
      <ModalBody>
        <Form
          id={`${day}${month}`}
          method="GET"
          onSubmit={(e) => handleEventSubmit(e, "edit")}
        >
          <div>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Name</InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Event Name"
                name="event_name"
                defaultValue={
                  dayEvents[index] ? dayEvents[index].eventName : ""
                }
              />
            </InputGroup>
          </div>
          <br />
          <div>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Time : </InputGroupText>
              </InputGroupAddon>
              <Input
                type="time"
                min="00:00"
                max="23:59"
                name="event_time"
                defaultValue={
                  dayEvents[index] ? dayEvents[index].eventTime : ""
                }
              />
            </InputGroup>
          </div>
          <br />
          <div>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Description</InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Event Description"
                name="event_description"
                defaultValue={
                  dayEvents[index] ? dayEvents[index].description : ""
                }
              />
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
        <Button onClick={deleteEvent} color="danger" style={{ align: "left" }}>
          Delete Event
        </Button>
        <Button form={`${day}${month}`} color="success" type="submit">
          Save Changes
        </Button>
        <Button color="secondary" onClick={toggleEditModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default EditEvent;
