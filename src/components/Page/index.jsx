import React from 'react';
import PropTypes from 'prop-types';
import './Page.css'; // You can create a CSS file for custom styles specific to the Page layout.

function Page({ title, children }) {
  return (
    <section className="page-section">
      <h2 className="page-title">{title}</h2>
      <div className="page-content">
        {children}
      </div>
    </section>
  );
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Page;
