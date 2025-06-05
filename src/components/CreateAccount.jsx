import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// This is to create the account
export const CreateAccount = () => {
  const [isAgency, setIsAgency] = useState('');
  const navigate = useNavigate();

  const [data, setData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
  });

  const [errors, setErrors] = useState({});
// Form validation 
  const validateForm = () => {
    const newErrors = {};

    if (!data.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!data.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!data.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(data.email)) newErrors.email = 'Email is invalid';
    if (!data.password) newErrors.password = 'Password is required';
    else if (data.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';
    if (!isAgency) newErrors.isAgency = 'Please select an option';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const inputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newUser = {
        ...data,
        isAgency,
      };

      //  if user already exists
      const existingUser = JSON.parse(localStorage.getItem('registeredUser'));
      if (existingUser && existingUser.email === newUser.email) {
        setErrors({ email: 'User already registered with this email' });
        return;
      }

      // Save the input to localStorage
      localStorage.setItem('registeredUser', JSON.stringify(newUser));
      localStorage.setItem('userProfile', JSON.stringify(newUser));

      navigate('/profile');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <div className="w-[420px] min-h-[650px] flex flex-col items-center pt-6 pb-10 bg-[#F7F8F9] border border-gray-300">
        <h1 className="text-3xl font-semibold mb-4 self-start px-10 ">
          Create your <br /> PopX account
        </h1>
        <div className="w-[335px]">
            {/* Taking user input  */}
          <form className="space-y-4" onSubmit={handleClick}>
            <div className="relative">
              <label className="text-sm text-[#6C25FF] absolute -top-2 left-3 bg-[#F7F8F9] px-1">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                name="fullName"
                value={data.fullName}
                onChange={inputChange}
                type="text"
                placeholder="Enter full name"
                className="w-full mt-2 h-[45px] border border-[#E4E7EC] rounded-[6px] p-3 text-sm"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>

            <div className="relative">
              <label className="text-sm text-[#6C25FF] absolute -top-2 left-3 bg-[#F7F8F9] px-1">
                Phone number<span className="text-red-500">*</span>
              </label>
              <input
                name="phoneNumber"
                value={data.phoneNumber}
                onChange={inputChange}
                type="tel"
                placeholder="Enter phone number"
                className="w-full mt-2 h-[45px] border border-[#E4E7EC] rounded-[6px] p-3 text-sm"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
              )}
            </div>

            <div className="relative">
              <label className="text-sm text-[#6C25FF] absolute -top-2 left-3 bg-[#F7F8F9] px-1">
                Email address<span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                value={data.email}
                onChange={inputChange}
                type="email"
                placeholder="Enter email address"
                className="w-full mt-2 h-[45px] border border-[#E4E7EC] rounded-[6px] p-3 text-sm"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="relative">
              <label className="text-sm text-[#6C25FF] absolute -top-2 left-3 bg-[#F7F8F9] px-1">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                name="password"
                value={data.password}
                onChange={inputChange}
                type="password"
                placeholder="Enter password"
                className="w-full mt-2 h-[45px] border border-[#E4E7EC] rounded-[6px] p-3 text-sm"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <div className="relative">
              <label className="text-sm text-[#6C25FF] absolute -top-2 left-3 bg-[#F7F8F9] px-1">
                Company name
              </label>
              <input
                name="companyName"
                value={data.companyName}
                onChange={inputChange}
                type="text"
                placeholder="Enter company name"
                className="w-full mt-2 h-[45px] border border-[#E4E7EC] rounded-[6px] p-3 text-sm"
              />
            </div>

            <div className="mt-4">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Are you an Agency? <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2 text-sm text-gray-700">
                  <input
                    type="radio"
                    name="isAgency"
                    value="yes"
                    checked={isAgency === 'yes'}
                    onChange={() => setIsAgency('yes')}
                    className="accent-violet-600"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2 text-sm text-gray-700">
                  <input
                    type="radio"
                    name="isAgency"
                    value="no"
                    checked={isAgency === 'no'}
                    onChange={() => setIsAgency('no')}
                    className="accent-violet-600"
                  />
                  <span>No</span>
                </label>
              </div>
              {errors.isAgency && (
                <p className="text-red-500 text-xs mt-1">{errors.isAgency}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full mt-15 bg-[#6C25FF] hover:bg-[#5a1fe6] text-white font-semibold py-3 rounded-md transition"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
