import React from 'react';

import whatsappIcon from './../../assets/images/icons/whatsapp.svg';

import './styles.css'; 

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://instagram.fcgh38-1.fna.fbcdn.net/v/t51.2885-19/s150x150/67818609_1883413595095745_6587496099869622272_n.jpg?_nc_ht=instagram.fcgh38-1.fna.fbcdn.net&_nc_ohc=gFTHzXGd59AAX-FN-sy&oh=349892f59063bea73d1d55059fef9f06&oe=5F539A73" alt="Rebecca"/>
            <div>
                <strong>Rebecca dos Santos</strong>
                <span>Espanhol</span>
            </div>
        </header>
        <p>
            So porque canta direitinho em espanhol acha que sabe falar outro idioma.
            <br></br>
        </p>
        <footer>
            <p>
                Preço/Hora
            <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}
export default TeacherItem;