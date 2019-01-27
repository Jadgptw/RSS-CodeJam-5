import React from 'react';
import '../homePage/styles/About.css';


function About(){
    return (
        <div className="about-block">
            <div className="about-block-wrapper">
                <h2 className="section-title">О проекте</h2>
                <p className="about-text">Мы команда начинающих веб-разработчиков решили сделать небольшой портал, посвящённый фотографам беларуси. Всего нас пять человек и наша задача заключалась в том, чтобы в короткие сроки реализовать простой информационный портал, на котором люди смогут получить информацию о самых знаменитых белоруских фотографах. Каждый из нас имел чётко поставленную задачу, которую он должен был выполнить, и мы считаем, что нам это удалось.</p>
                <p className="about-after-text">Надеемся вам понравиться.</p>
            </div>
        </div>
    )
}

export default About;