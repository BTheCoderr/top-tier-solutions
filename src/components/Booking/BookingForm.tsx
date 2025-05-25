import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { services, BookingFormData } from '../../types/booking';
import { addDays } from 'date-fns';

const BookingContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const StepContainer = styled.div`
  margin-bottom: 2rem;
`;

const StepTitle = styled.h3`
  color: #212121;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ServiceCard = styled.div<{ selected: boolean }>`
  padding: 1.5rem;
  border: 2px solid ${props => props.selected ? '#FF5722' : '#e0e0e0'};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${props => props.selected ? '#fff3f0' : 'white'};

  &:hover {
    border-color: #FF5722;
  }
`;

const ServiceName = styled.h4`
  color: #212121;
  margin-bottom: 0.5rem;
`;

const ServiceDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const ServicePrice = styled.div`
  color: #FF5722;
  font-weight: 600;
  font-size: 1.2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  .form-control {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: #FF5722;
    }
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #212121;
`;

const Input = styled(Field)`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #FF5722;
  }
`;

const ErrorMessage = styled.div`
  color: #d32f2f;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

const SubmitButton = styled.button`
  background-color: #FF5722;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #F4511E;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const validationSchema = Yup.object().shape({
  service: Yup.string().required('Please select a service'),
  date: Yup.date().required('Please select a date').min(new Date(), 'Date cannot be in the past'),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zipCode: Yup.string().required('ZIP code is required'),
});

const BookingForm = () => {
  const [selectedService, setSelectedService] = useState<string>('');

  const initialValues: BookingFormData = {
    service: '',
    date: new Date(),
    timeSlot: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    notes: ''
  };

  const handleSubmit = (values: BookingFormData) => {
    console.log('Form submitted:', values);
    // TODO: Implement form submission
  };

  return (
    <BookingContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form>
            <StepContainer>
              <StepTitle>1. Select a Service</StepTitle>
              <ServiceGrid>
                {services.map(service => (
                  <ServiceCard
                    key={service.id}
                    selected={selectedService === service.id}
                    onClick={() => {
                      setSelectedService(service.id);
                      setFieldValue('service', service.id);
                    }}
                  >
                    <ServiceName>{service.name}</ServiceName>
                    <ServiceDescription>{service.description}</ServiceDescription>
                    <ServicePrice>${service.price}</ServicePrice>
                  </ServiceCard>
                ))}
              </ServiceGrid>
              {errors.service && touched.service && (
                <ErrorMessage>{errors.service}</ErrorMessage>
              )}
            </StepContainer>

            <StepContainer>
              <StepTitle>2. Choose Date & Time</StepTitle>
              <FormGroup>
                <Label>Select Date</Label>
                <DatePicker
                  selected={initialValues.date}
                  onChange={(date: Date | null) => {
                    if (date) {
                      setFieldValue('date', date);
                    }
                  }}
                  minDate={new Date()}
                  maxDate={addDays(new Date(), 30)}
                  dateFormat="MMMM d, yyyy"
                  className="form-control"
                  wrapperClassName="datepicker-wrapper"
                />
              </FormGroup>
            </StepContainer>

            <StepContainer>
              <StepTitle>3. Your Information</StepTitle>
              <FormGroup>
                <Label>First Name</Label>
                <Input name="firstName" type="text" />
                {errors.firstName && touched.firstName && (
                  <ErrorMessage>{errors.firstName}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <Label>Last Name</Label>
                <Input name="lastName" type="text" />
                {errors.lastName && touched.lastName && (
                  <ErrorMessage>{errors.lastName}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <Label>Email</Label>
                <Input name="email" type="email" />
                {errors.email && touched.email && (
                  <ErrorMessage>{errors.email}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <Label>Phone</Label>
                <Input name="phone" type="tel" />
                {errors.phone && touched.phone && (
                  <ErrorMessage>{errors.phone}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <Label>Address</Label>
                <Input name="address" type="text" />
                {errors.address && touched.address && (
                  <ErrorMessage>{errors.address}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <Label>City</Label>
                <Input name="city" type="text" />
                {errors.city && touched.city && (
                  <ErrorMessage>{errors.city}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <Label>State</Label>
                <Input name="state" type="text" />
                {errors.state && touched.state && (
                  <ErrorMessage>{errors.state}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <Label>ZIP Code</Label>
                <Input name="zipCode" type="text" />
                {errors.zipCode && touched.zipCode && (
                  <ErrorMessage>{errors.zipCode}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <Label>Additional Notes</Label>
                <Input name="notes" as="textarea" rows={4} />
              </FormGroup>
            </StepContainer>

            <SubmitButton type="submit">Book Service</SubmitButton>
          </Form>
        )}
      </Formik>
    </BookingContainer>
  );
};

export default BookingForm; 