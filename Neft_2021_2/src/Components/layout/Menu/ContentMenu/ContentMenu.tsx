import React, { Children, FC, PropsWithChildren } from 'react';
import { IIContentMenu } from '../../../../interfaces/ContentMenu.interface';
import styles from './ContentMenu.module.scss';
const ContentMenu: FC<PropsWithChildren<IIContentMenu>> = ({ children, header_name }) => {
  return (
    <div>
      <h5>{header_name}</h5>
      <div className={styles.line}> </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default ContentMenu;
