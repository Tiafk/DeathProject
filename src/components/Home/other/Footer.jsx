import React from 'react';

export default function Footer() {
    return (
        <footer class="footer" id="Контакты">
            <div class="container footer__container">
                <div class="row footer-row row-cols-2">
                    <div class="col-6 footer__col">
              <p class="mini-text">
                ритуальное агентство в Екатеринбурга и ...
              </p>
              <p>И.П Южакова О.В.</p>
                    </div>
                    <div class="col-6 footer__col schedule">
              <p>Телефон</p>
              <p>8 888 88 88</p>
              <p>Пн — Вс с 9:00 до 21:00</p>
                    </div>
                </div>
                <div class="row row-cols-2">
                    <div class="col-3 footer__inf p-3">
                        <p>Главная</p>
                        <ul>
                          <li>-О компании</li>
                          <li>-Отзывы</li>
                          <li>-Контакты</li>
                          <li>-Перевозка тела</li>
                          <li>-Правила возврата</li>
                        </ul>
                    </div>
                    <div class="col-3 footer__inf p-3">
                        <p>Услуги</p>
                        <ul>
                          <li>-Кремация</li>
                          <li>-Ритуальные товары</li>
                          <li>-Катафалки</li>
                          <li>-Стоимость ритуальных услуг</li>
                          <li>-Кушанья</li>
                        </ul>
                    </div>
                    <div class="col-3 footer__inf p-3">
                        <p>Информация</p>
                        <ul>
                          <li>-Морги Екатеринбурга</li>
                          <li>-Морги ...</li>
                          <li>-Кладбища Екатеринбурга</li>
                          <li>-Кладбища ...</li>
                          <li>-Полезная информация</li>
                          <li>-Отделы ЗАГС</li>
                        </ul>
                    </div>
                    <div class="col-3 footer__inf p-3">
                        <p>Реквизиты</p>
                        <ul>
                          <li>И.П Южакова О.В.</li>
                          <li>ИНН: 7810654950</li>
                          <li>КПП: 780501001</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};