'use client';

import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitForm } from '@/app/actions';

export default function BookingForm() {
  const [state, setState] = useState<{
    success?: boolean;
    message?: string;
    errors?: { field: string | number; message: string }[];
  }>({});
  const { pending } = useFormStatus();

  const handleSubmit = async (formData: FormData) => {
    const result = await submitForm(formData);
    
    // Ensure errors have string fields
    if (result.errors) {
      result.errors = result.errors.map(error => ({
        field: String(error.field),
        message: error.message
      }));
    }
    
    setState(result);
    
    if (result.success) {
      // Reset form on success
      const form = document.getElementById('booking-form') as HTMLFormElement;
      form?.reset();
    }
  };

  const getFieldError = (fieldName: string) => {
    return state.errors?.find(error => String(error.field) === fieldName)?.message;
  };

  return (
    <form action={handleSubmit} id="booking-form" className="space-y-4">
      {state.message && (
        <div className={`p-4 rounded-md ${state.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {state.message}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-1">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className={`w-full p-2 border ${getFieldError('firstName') ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            required
          />
          {getFieldError('firstName') && (
            <p className="mt-1 text-sm text-red-600">{getFieldError('firstName')}</p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-1">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className={`w-full p-2 border ${getFieldError('lastName') ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            required
          />
          {getFieldError('lastName') && (
            <p className="mt-1 text-sm text-red-600">{getFieldError('lastName')}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={`w-full p-2 border ${getFieldError('email') ? 'border-red-500' : 'border-gray-300'} rounded-md`}
          required
        />
        {getFieldError('email') && (
          <p className="mt-1 text-sm text-red-600">{getFieldError('email')}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className={`w-full p-2 border ${getFieldError('phone') ? 'border-red-500' : 'border-gray-300'} rounded-md`}
          required
        />
        {getFieldError('phone') && (
          <p className="mt-1 text-sm text-red-600">{getFieldError('phone')}</p>
        )}
      </div>

      <div>
        <label htmlFor="eventDate" className="block text-sm font-medium mb-1">
          Event Date *
        </label>
        <input
          type="date"
          id="eventDate"
          name="eventDate"
          className={`w-full p-2 border ${getFieldError('eventDate') ? 'border-red-500' : 'border-gray-300'} rounded-md`}
          required
        />
        {getFieldError('eventDate') && (
          <p className="mt-1 text-sm text-red-600">{getFieldError('eventDate')}</p>
        )}
      </div>

      <div>
        <label htmlFor="eventType" className="block text-sm font-medium mb-1">
          Event Type *
        </label>
        <select
          id="eventType"
          name="eventType"
          className={`w-full p-2 border ${getFieldError('eventType') ? 'border-red-500' : 'border-gray-300'} rounded-md`}
          required
          defaultValue=""
        >
          <option value="" disabled>Select Event Type</option>
          <option value="wedding">Wedding</option>
          <option value="corporate">Corporate Event</option>
          <option value="birthday">Birthday Party</option>
          <option value="festival">Festival/Fair</option>
          <option value="other">Other</option>
        </select>
        {getFieldError('eventType') && (
          <p className="mt-1 text-sm text-red-600">{getFieldError('eventType')}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Additional Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full p-2 border border-gray-300 rounded-md"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? 'Submitting...' : 'Submit Booking Request'}
      </button>
    </form>
  );
}
