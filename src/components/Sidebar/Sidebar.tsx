import React, { ChangeEvent, FormEvent, useState } from 'react';
import './Sidebar.scss';
import { CheckboxField } from '../../services/config/checkboxFields';

type SidebarProps = {
  checkboxFields: CheckboxField[];
};

export const Sidebar: React.FC<SidebarProps> = ({ checkboxFields }) => {
  const [visible, setVisible] = useState(false);

  const [formData, setFormData] = useState(checkboxFields);
  console.log(formData);
  const handleChangeChecked = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.currentTarget;
    setFormData((prevFormData) =>
      prevFormData.map((field) =>
        field.id === name ? { ...field, checked } : field,
      ),
    );
  };

  const toggleMenu = () => {
    document.body.classList.toggle('open');
  };

  const handleCheckBoxOpen = () => {
    //e.preventDefault();
    setVisible((prevState) => !prevState);
  };
  const handleFilterItem = (event: FormEvent) => {
    event.preventDefault();
    // request or logic
    console.log(formData);
    for (let field of formData) {
      let genres: string[] = [];
      if (field.checked) {
        genres.push(field.id);
      }
    }
    //dispatch array of genres to State
  };

  return (
    <>
      <div className="background"></div>
      <button className="navbar-burger" onClick={toggleMenu}></button>
      <div className="menu">
        <nav>
          <a
            href="#"
            className="menu-a"
            style={{ animationDelay: '0.1s', textDecoration: 'none' }}
          >
            About
          </a>

          <a href="#" className="menu-a" style={{ animationDelay: '0.2s' }}>
            Contact
          </a>

          <form onSubmit={handleFilterItem}>
            <p
              onClick={handleCheckBoxOpen}
              className="menu-a"
              style={{ animationDelay: '0.3s' }}
            >
              Choose a genre
            </p>
            <div className={`${!visible && 'hidden'}`}>
              {formData.map((field) => (
                <div className="input-field-wrapper" key={field.id}>
                  <input
                    type="checkbox"
                    id={field.id}
                    name={field.id}
                    className="input-field-input"
                    onChange={handleChangeChecked}
                    checked={field.checked}
                  />
                  <label htmlFor={field.id} className="input-field-name">
                    {field.label}
                  </label>
                </div>
              ))}
              {/*<div className="input-field-wrapper">*/}
              {/*  <input*/}
              {/*    type="checkbox"*/}
              {/*    id="portrait"*/}
              {/*    name="portrait"*/}
              {/*    className="input-field-input"*/}
              {/*    onChange={handleChangeChecked}*/}
              {/*    checked={formData.portrait}*/}
              {/*  />*/}
              {/*  <label htmlFor="portrait" className="input-field-name">*/}
              {/*    Portrait*/}
              {/*  </label>*/}
              {/*</div>*/}
              {/*<div className="input-field-wrapper">*/}
              {/*  <input*/}
              {/*    type="checkbox"*/}
              {/*    id="stillLife"*/}
              {/*    name="stillLife"*/}
              {/*    className="input-field-input"*/}
              {/*    onChange={handleChangeChecked}*/}
              {/*    checked={formData.stillLife}*/}
              {/*  />*/}
              {/*  <label htmlFor="stillLife" className="input-field-name">*/}
              {/*    Still Life*/}
              {/*  </label>*/}
              {/*</div>*/}
              {/*<div className="input-field-wrapper">*/}
              {/*  <input*/}
              {/*    type="checkbox"*/}
              {/*    id="landscape"*/}
              {/*    name="landscape"*/}
              {/*    className="input-field-input"*/}
              {/*    onChange={handleChangeChecked}*/}
              {/*    checked={formData.landscape}*/}
              {/*  />*/}
              {/*  <label htmlFor="landscape" className="input-field-name">*/}
              {/*    Landscape*/}
              {/*  </label>*/}
              {/*</div>*/}

              <button type="submit" className={'input-btn-submit'}>
                Choose !
              </button>
            </div>
          </form>
        </nav>
      </div>
    </>
  );
};
