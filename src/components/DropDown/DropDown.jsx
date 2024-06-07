"use client";
import { useState } from 'react';
import './DropDown.css';
import PropTypes from 'prop-types';

const Dropdown = ({ onPreview, onEdit, onClone, onDelete }) => {
  let [isOpen, isOpenState] = useState(false);

  return (
    <div data-testid="dropdown relative" className="dropdown border-double border-4 border-bg-violet-200 hover:border-dotted bg-white dark:bg-neutral-800
    sm:hidden shadow-lg shadow-indigo-500/40">
      <button
        data-testid="menuButton"
        className="dropdown-btn dark:text-white"
        onClick={() => (isOpen ? isOpenState(false) : isOpenState(true))}
      >
        Menu

        <svg className="dropdown-icon" width="10" height="20" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.21995 1.22C0.360576 1.07955 0.5512 1.00066 0.74995 1.00066C0.948701 1.00066 1.13933 1.07955 1.27995 1.22L4.99995 4.94L8.71995 1.22C8.78861 1.14631 8.87141 1.08721 8.96341 1.04622C9.05541 1.00523 9.15473 0.983186 9.25543 0.981409C9.35613 0.979633 9.45616 0.998157 9.54955 1.03588C9.64294 1.0736 9.72777 1.12974 9.79899 1.20096C9.87021 1.27218 9.92635 1.35701 9.96407 1.4504C10.0018 1.54379 10.0203 1.64382 10.0185 1.74452C10.0168 1.84523 9.99472 1.94454 9.95373 2.03654C9.91274 2.12854 9.85364 2.21134 9.77995 2.28L5.52995 6.53C5.38932 6.67045 5.1987 6.74934 4.99995 6.74934C4.8012 6.74934 4.61058 6.67045 4.46995 6.53L0.21995 2.28C0.0794997 2.13938 0.000610352 1.94875 0.000610352 1.75C0.000610352 1.55125 0.0794997 1.36063 0.21995 1.22Z"
            className="dropdown-icon"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="dropdown-container rounded-3xl dark:bg-zinc-800">
          <button data-testid="previewButton" className="dropdown-item dark:text-white" onClick={onPreview}>
          <a className=" dark:text-white" href="/" >
                Home
            </a>
          </button>
          <button data-testid="editButton" className="dropdown-item  dark:text-white" onClick={onEdit}>
          <a className=" dark:text-white" href="/about" >
                About
            </a>
          </button>
          <button data-testid="cloneButton" className="dropdown-item  dark:text-white" onClick={onClone}>
          <a className=" dark:text-white" href="/projects" >
                Projects
            </a>
          </button>
          <div className="dropdown-divider"></div>
          <button data-testid="deleteButton" className="dropdown-item danger  dark:text-white" onClick={onDelete}>
          <a className=" dark:text-white" href="/uses" >
                Uses
            </a>
          </button>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  onPreview: PropTypes.func,
  onEdit: PropTypes.func,
  onClone: PropTypes.func,
  onDelete: PropTypes.func,
};

Dropdown.defaultProps = {
  onPreview: () => {},
  onEdit: () => {},
  onClone: () => {},
  onDelete: () => {},
};

export default Dropdown;
