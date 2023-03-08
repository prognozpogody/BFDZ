import style from "./style.module.css";

export const FooterProject = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__group}>
          <p>Позвоните нам:</p>
          <div className={style.footer__links}>
            <a href="tel:74959999999">+7 (495) 999-99-99</a>
          </div>
        </div>
        <div className={style.footer__group}>
          <div className={style.footer__links}>
            <a href="#">Солнечные панели GreenRobotic</a>
            <a href="#">Системы солнечных панелей GreenStation</a>
          </div>
        </div>
        <div className={style.footer__links}>
          <a href="#">Контакты</a>
          <a href="#">Вакансии</a>
          <a href="#">СМИ</a>
        </div>
      </div>

      <div className={style.footer__copyright}>GreenCorp © 2021.</div>
    </footer>
  );
};
