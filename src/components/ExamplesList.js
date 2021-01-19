import React from 'react';
import classnames from 'classnames';
import { LocalizedLink as Link } from 'gatsby-theme-i18n';
import { useLocalization } from 'gatsby-theme-i18n';

import css from './ExamplesList.module.css';
import grid from '../styles/grid.module.css';

const ExamplesList = ({ data }) => {
  const { locale } = useLocalization();

  console.log(data);

  return (
    <div className={classnames(css.root)}>
      {data.map((category, key) => (
        <ul
          className={classnames(grid.nest, css.category)}
          key={`category-${key}`}>
          <h2 className={grid.col}>{category.name}</h2>
          <p className={classnames(grid.col, css.intro)}>
            {category === 'topic'
              ? 'Programs about to animation, interaction, motion, simulation, and more...'
              : 'Programs about form, data, images, color, typography, and more...'}
          </p>
          <ul className={classnames(grid.col, grid.nest)}>
            {category.children.map((subcategory, key) => (
              <div key={`subcategory-${key}`} className={css.subcategory}>
                <h3 className={grid.col}>{subcategory.name}</h3>
                <ul className={classnames(grid.col, grid.nest)}>
                  {subcategory.children.map((node, key) => (
                    <li key={`item-${key}`} className={grid.col}>
                      <Link to={`${node.slug}.html`} language={locale}>
                        {node.img && (
                          <img
                            className={css.cover}
                            src={node.img.childImageSharp.fluid.srcWebp}
                            srcSet={node.img.childImageSharp.fluid.srcSetWebp}
                          />
                        )}
                        <h4>{node.name}</h4>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </ul>
        </ul>
      ))}
    </div>
  );
};

export default ExamplesList;
