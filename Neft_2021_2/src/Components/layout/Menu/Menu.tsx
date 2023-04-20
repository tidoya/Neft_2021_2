import { FC, useEffect, useRef } from 'react';
import styles from './Menu.module.scss';
import { IIMenu } from '../../../interfaces/Layout.interface';
import ContentMenu from './ContentMenu/ContentMenu';
const Menu: FC<IIMenu> = ({ setOpen }) => {
  // const node = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   const handleClick = (e: MouseEvent) => {
  //     const path = e.composedPath();
  //     if (node.current && !path.includes(node.current)) {
  //       setOpen(false);
  //     }
  //   };
  //   document.body.addEventListener('click', handleClick);
  //   return () => {
  //     document.body.removeEventListener('click', handleClick);
  //   };
  // }, []);

  return (
    <div className={styles.modal}>
      <div className={styles.modal__wrapper}>
        <h3>Основные тенденции и факторы</h3>
        <div className={styles.modal__content}>
          <ContentMenu header_name="Добыча">
            <div>
              <h5>Нефти и газового конденсата</h5>
              <p>Всего</p>
              <p>ВИНК</p>
              <p>Независимые производители</p>
              <p>СРП</p>
              <span>В разрезе регионов страны</span>
              <span>На новых месторождениях</span>
              <span>На шельфе</span>
            </div>
          </ContentMenu>
          <ContentMenu header_name="Экспорт">
            <div>
              <h5>Экспорт нефти из России</h5>
              <p>Всего</p>
              <p>ВИНК</p>
              <p>Независимые производители</p>
              <p>СРП</p>
              <span>По направлениям</span>
              <span>Основые транспортные коридоры эскпорта нефти</span>
            </div>
          </ContentMenu>
          <ContentMenu header_name="Технологические показатели">
            <div>
              <p>Капительные вложения ВИНК в нефтедобычу</p>
              <p>Бурение</p>
              <p>Ввод новых скважин</p>
              <p>Закачка воды для поддержания пластового давления</p>
            </div>
          </ContentMenu>
          <ContentMenu header_name="Развитие">
            <div>
              <span>Магистральные нефтепроводы Российской Федерации</span>
              <span>Проекты российских компаний за рубежом</span>
            </div>
          </ContentMenu>
        </div>
      </div>
    </div>
  );
};

export default Menu;
