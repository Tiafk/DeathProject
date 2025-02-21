import React from 'react';

export default function Services() {
    return (
      <section className="main-section second">
        <span className="bg-swich"></span>
        <div className="container services-title">
          <div className="row">
            <h1 className="col-12 title text-center _anim-items _anim-no-hide">
              Ритуальные услуги
            </h1>
          </div>
        </div>
        <div className="container services _anim-items _anim-no-hide">
          <div className="row pillars g-5 justify-content-center">
            <div className="col-4">
              <div className="p-2">- Организация похорон (траурный зал, церковь)
              </div>
              <div className="p-2">- Кремация усопшего</div>
              <div className="p-2">- Установка памятников, крестов</div>
              <div className="p-2">- Облагоражевание могил</div>
              <div className="p-2">- Укладка плитки</div>
              <div className="p-2">- Установка оградки, стола, скамьи</div>
            </div>
            <div className="col-4">
              <div className="p-2">- Печать овалов и портретов</div>
              <div className="p-2">- Печать лент</div>
              <div className="p-2">- Врезка портрета на керамограните</div>
              <div className="p-2">
                - Печать портрета, данных, эпитафии на памятнике
              </div>
              <div className="p-2">- Перевозка усопших</div>
              <div className="p-2">- Организация прощального обеда в столовой</div>
            </div>
          </div>
        </div>
      </section>
    );
};