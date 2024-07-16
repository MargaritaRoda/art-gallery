import React, { FormEvent, useState } from 'react';
import './Sidebar.scss';
import { CheckboxField } from '../../services/config/checkboxFields';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenresForRender } from '../../store/selectors/genre.selector';
import { setFilteredGenres } from '../../store/slicers/filteredGenres.slicer';
import {
  aboutId,
  contactId,
  INDEX,
  PICTURES,
} from '../../services/config/routs';
import { NavLink } from 'react-router-dom';

type SidebarProps = {
  checkboxFields?: CheckboxField[];
  selectedGenresUser?: string[];
};

export const Sidebar: React.FC<SidebarProps> = () => {
  const [visible, setVisible] = useState(false);
  const checkboxFields = useSelector(selectGenresForRender);
  // console.log('selectedGenre', selectedGenre);
  // const [formData, setFormData] = useState(selectedGenre ? selectedGenre : []);
  // useEffect(() => {
  //   setFormData(selectedGenre);
  // }, [selectedGenre]);
  //console.log('checkboxFields1', checkboxFields);
  // console.log('formData', formData);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    document.body.classList.toggle('open');
  };

  const handleCheckBoxOpen = () => {
    setVisible((prevState) => !prevState);
  };
  const handleFilterItem = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fd = new FormData(event.target as HTMLFormElement);

    console.log(Array.from(fd.entries()));
    console.log(typeof Array.from(fd.entries())[0][0]);
    const selectedGenresByUser = Array.from(fd.entries()).reduce(
      (acc: string[], cur) => acc.concat(cur[0]),
      [],
    );
    dispatch(setFilteredGenres(selectedGenresByUser));
    toggleMenu();
  };

  return (
    <>
      <div className="background"></div>
      <button className="navbar-burger" onClick={toggleMenu}></button>
      <div className="menu">
        <nav>
          <NavLink
            to={`${INDEX}#${aboutId}`}
            className="menu-a"
            style={{ animationDelay: '0.1s', textDecoration: 'none' }}
          >
            About
          </NavLink>
          <a
            href={`${PICTURES}#${contactId}`}
            className="menu-a"
            style={{ animationDelay: '0.2s', textDecoration: 'none' }}
            onClick={() => toggleMenu()}
          >
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
              {checkboxFields?.map((field) => (
                <div className="input-field-wrapper" key={field.id}>
                  <input
                    type="checkbox"
                    id={field.id}
                    name={field.id}
                    className="input-field-input"
                    // onChange={handleChangeChecked}
                    defaultChecked
                    // checked={field.checked}
                    // checked={formData.includes(field.label)}
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
