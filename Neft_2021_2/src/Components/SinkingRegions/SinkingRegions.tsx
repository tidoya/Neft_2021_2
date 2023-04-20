import React, { FC } from 'react';
import { IISinkingRegionsProps } from '../../interfaces/SinkingRegions.intefrace';
import styles from './SinkingRegions.module.scss';
import SeparateRegion from './SeparateRegion/SeparateRegion';

const SinkingRegions: FC<IISinkingRegionsProps> = ({ name, yName, PieChart }) => {
  return (
    <div>
      <h1 className={styles.title}>{name}</h1>
      <div className={styles.blocks}>
        {PieChart.map((item, index) => {
          return (
            <SeparateRegion
              key={index}
              yName={yName}
              name={item.name}
              value={item.value}
              prev={item.prev}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SinkingRegions;
