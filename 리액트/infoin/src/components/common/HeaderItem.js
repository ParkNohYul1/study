import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

const HeaderItem = ({ categoryItem, activeUrl }) => {
  return (
    <li className="headerBlock__box-li">
      <Link
        to={categoryItem.link}
        className={cn(
          'headerBlock__box-a',
          'sm-link',
          ' sm-link_padding-all',
          'sm-link1',
          { active: activeUrl },
        )}
      >
        <span className="sm-link__label" lang="en">
          {categoryItem.label}
        </span>
      </Link>
    </li>
  );
};

export default HeaderItem;
