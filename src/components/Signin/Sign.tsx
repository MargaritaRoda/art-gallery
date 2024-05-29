import React, {ChangeEvent, useState} from 'react';
import './sign.scss';
import classNames from "classnames";

export const Sign = () => {
const [securityPassword, setSecurityPassword] = useState('');


    const strength: { [key: number]: string } = {
        1: "weak",
        2: "medium",
        3: "strong",
    };

    interface StrengthValue {
        upper?: boolean,
        numbers?: boolean,
        lower?: boolean,
    }


    const getIndicator = (password: string, strengthValue: StrengthValue) => {

        strengthValue.upper = /[A-Z]/.test(password);
        strengthValue.lower = /[a-z]/.test(password);
        strengthValue.numbers = /\d/.test(password);

        let strengthIndicator = 0;

        for (let metric in strengthValue) {
            if (strengthValue[metric as keyof  StrengthValue] === true) {
                strengthIndicator++;
            }
        }
        return strength[strengthIndicator] ?? "";
    };

    const getStrength = (password: string) => {
        let strengthValue: StrengthValue = {
            upper: false,
            numbers: false,
            lower: false,
        };

        return getIndicator(password, strengthValue);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
       let  password = e.target.value

        console.log(password);

        const strengthText = getStrength(password); // возвращает строку из обьекта strength
        setSecurityPassword(strengthText);
    };


  return (
      <div className="login-card">
          <h2>Sign Up</h2>
          <h3>Enter your credentials</h3>
          <form className="login-form">
              <input
                  autoComplete="off"
                  spellCheck="false"
                  className="control"
                  type="email"
                  placeholder="Email"
                  value="mary@gmail.com"
              />
              <input
                  spellCheck="false"
                  className="control"
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
              />
              <div id="bars"  className={classNames(securityPassword? `${securityPassword}`: '' )}>
                  <div></div>
              </div>
              <div className="strength" id="strength">{securityPassword? `${securityPassword} Password`: '' }</div>
              <button className="control" type="button">Continue</button>
          </form>
      </div>
  );
}

