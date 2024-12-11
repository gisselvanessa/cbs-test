import React, { useState } from 'react';
import { TextInput, Button, Popover } from 'flowbite-react';
import { MdRemoveRedEye } from 'react-icons/md';
import { IoIosLock, IoMdEyeOff } from 'react-icons/io';
import "./styles.css";
interface PasswordInputProps extends React.ComponentProps<typeof TextInput> {
  name?: string;
}

const PasswordInput = (field, props: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSymbol: false,
    hasMin8Caracters: false,
  });

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPasswordStrength({
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSymbol: /[#$&]/.test(password),
      hasMin8Caracters: password.length >= 8,
    });
    field.onChange(event); 
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Popover
        trigger="hover"
        content={
          <div className="space-y-2 p-3">
            <h3 className="font-13 font-semibold text-gray-900 dark:text-white">
              Debe tener al menos 8 caracteres
            </h3>
            <div className="grid grid-cols-4 gap-2">
              {passwordStrength.hasUppercase && passwordStrength.hasLowercase ? (
                <div className="h-1 bg-green-400 dark:bg-green-400"></div>
              ) : (
                <div className="h-1 bg-gray-200 dark:bg-gray-600"></div>
              )}
              
              {passwordStrength.hasNumber ? (
                <div className="h-1 bg-green-400 dark:bg-green-400"></div>
              ) : (
                <div className="h-1 bg-gray-200 dark:bg-gray-600"></div>
              )}
              {passwordStrength.hasSymbol ? (
                <div className="h-1 bg-green-400 dark:bg-green-400"></div>
              ) : (
                <div className="h-1 bg-gray-200 dark:bg-gray-600"></div>
              )}
              {passwordStrength.hasMin8Caracters ? (
                <div className="h-1 bg-green-400 dark:bg-green-400"></div>
              ) : (
                <div className="h-1 bg-gray-200 dark:bg-gray-600"></div>
              )}
            </div>
            <p className="text-black font-13 font-semibold">
              Es mejor tener:
            </p>
            <ul>
              <li className="mb-1 flex items-center text-black text-xs">
                <div>
                  {passwordStrength.hasUppercase && passwordStrength.hasLowercase ? (
                    <svg
                    className="me-2 h-3.5 w-3.5 text-green-400 dark:text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>):
                  (<svg
                    className="me-2.5 h-3 w-3 text-gray-300 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>)
                  }
                </div>
                
                Letras mayúsculas y minúsculas
              </li>
              <li className="mb-1 flex items-center text-black text-xs">
              <div>
                  {passwordStrength.hasSymbol ? (
                    <svg
                    className="me-2 h-3.5 w-3.5 text-green-400 dark:text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>):
                  (<svg
                    className="me-2.5 h-3 w-3 text-gray-300 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>)
                  }
                </div>
                Un símbolo (#$&)
              </li>
              <li className="mb-1 flex items-center text-black text-xs">
              <div>
                  {passwordStrength.hasNumber ? (
                    <svg
                    className="me-2 h-3.5 w-3.5 text-green-400 dark:text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>):
                  (<svg
                    className="me-2.5 h-3 w-3 text-gray-300 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>)
                  }
                </div>
                Un número
              </li>
              <li className="flex items-center text-black text-xs">
                <div>
                  {passwordStrength.hasMin8Caracters ? (
                    <svg
                    className="me-2 h-3.5 w-3.5 text-green-400 dark:text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>):
                  (<svg
                    className="me-2.5 h-3 w-3 text-gray-300 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>)
                  }
                </div>
                
                Al menos 8 caracteres
              </li>
            </ul>
          </div>
        }
      >
        <div className="relative max-w-md">
          <TextInput
           {...props}
            id="password1"
            type={showPassword ? "text" : "password"}
            placeholder="Ingrese su contraseña"
            required
            icon={() => <IoIosLock className="w-5 h-5 icon-color" />}
            onChange={handlePasswordChange}
          />
          <Button
            type="button"
            color="white"
            className="absolute inset-y-0 right-0 flex items-center bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <IoMdEyeOff className="w-6 h-6 text-orange" />
            ) : (
              <MdRemoveRedEye className="w-6 h-6 text-orange" />
            )}
          </Button>
        </div>
      </Popover>
    </div>
  );
};
export default PasswordInput;
