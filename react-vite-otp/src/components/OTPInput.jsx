import React, { useRef, useState } from 'react';

const OTPInput = () => {

    const [otp, setOtp] = useState('');

    const inputRefs = [useRef(), useRef(), useRef(), useRef()];

    const handleInputChange = (index, inputValue) => {
        const updatedValue = otp.split('');
        updatedValue[index] = inputValue;
        setOtp(updatedValue.join(''));

        // Move focus to the next input if available
        if (index < inputRefs.length - 1 && inputValue !== '') {
            inputRefs[index + 1].current.focus();
        } else if (inputValue === '' && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    }

    const handleClick = (index) => {
        inputRefs[index].current.setSelectionRange(1, 1);
    }

    const handleKeyDown = (index, e) => {
        console.log()
        if ( e.key === "Backspace" && otp[index] !== undefined && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
            // Move focus to the previous input field on backspace
            inputRefs.current[index - 1].focus();
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="mx-auto w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
                <h1 className="block mb-2 text-left text-lg">
                    Enter Your OTP
                </h1>
                <div className='flex items-center justify-between'>
                    {[0, 1, 2, 3].map((index) => (
                        <input
                            key={index}
                            ref={inputRefs[index]}
                            type="text"
                            maxLength="1"
                            value={otp[index] || ''}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                            onClick={() => handleClick(index)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className="flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700 w-16 h-16"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OTPInput;
