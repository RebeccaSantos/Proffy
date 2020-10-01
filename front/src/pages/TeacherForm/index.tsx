import React,{useState, FormEvent} from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/input';
import Textarea from '../../components/textarea';
import Select from '../../components/Select';


import WarningIcon from '../../assets/images/icons/warning.svg'

import './styles.css';

function TeacherForm(){

    const [name,setName]=useState('');
    const [avatar,setAvatar]=useState('');
    const [whatsapp,setWhatsapp]=useState('');
    const [bio,setBio]=useState('');

    const [subject,setSubject]=useState('');
    const [cost,setCost]=useState('');


const [scheduleItem,setscheduleitem]=useState([
    {week_day:0,from:'',to:''}
   ]);


    function addNewScheduleItem(){
        setscheduleitem([
            ...scheduleItem,
            {week_day:0,from:'',to:''}
        ])
        
    }
    function handleCreateClass(e:FormEvent){
        e.preventDefault();
    }

    return(
       <div id="page-teacher-form" className="container">
           <PageHeader title="Que incrivel que você quer dar aulas."
             description="o primeiro passo é preencher esse formulario de inscrição."
           />
           <main>
               <form onSubmit={handleCreateClass}>
               <fieldset>
                   <legend>
                       Seus Dados
                   </legend>
                   <Input name="name" label="Nome completo" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                   <Input name="avatar" label="avatar" value={avatar} onChange={(e)=>{setAvatar(e.target.value)}}/>
                   <Input name="whatsapp" label="whatsapp" value={whatsapp} onChange={(e)=>{setWhatsapp(e.target.value)}}/>
                   <Textarea name="bio" label="Biografia" value={bio} onChange={(e)=>{setBio(e.target.value)}}/>
               </fieldset>
               <fieldset>
                   <legend>
                       Sobre a aula
                   </legend>
                   <Select name="subject" 
                   label="Matéria"
                   value={subject} onChange={(e)=>{setSubject(e.target.value)}}
                    options={[
                        {value:'Artes',label:'Artes'},
                        {value:'Matemática',label:'Matemática'},
                        {value:'Biologia',label:'Biologia'},
                        {value:'Ciências',label:'Ciências'},
                        {value:'Educação Física',label:'Educação Física'},
                        {value:'Física',label:'Física'},
                        {value:'Geografia',label:'Geografia'},
                        {value:'História',label:'História'},
                        {value:'Português',label:'Português'},
                        {value:'Química',label:'Química'},
                        {value:'Espanhol',label:'Espanhol'},
                    ]}/>
                   <Input name="cost" label="Custo da sua hora por aula"
                   value={cost} onChange={(e)=>{setCost(e.target.value)}}
                   />
                 

               </fieldset>
               <fieldset>
                   <legend>
                       Horrários Disponíveis
                       <button type="button" onClick={addNewScheduleItem}>
                       + Novo Horário
                   </button>
                   </legend>
                  {scheduleItem.map(scheduleItem=>{
                      return(
                        <div  key={scheduleItem.week_day} className="schedule-item">
                        <Select name="Week_day" 
                        label="Dia da semana"
                         options={[
                             {value:'0',label:'Domingo'},
                             {value:'1',label:'Segunda-feira'},
                             {value:'2',label:'Terça-feira'},
                             {value:'3',label:'Quarta-feira'},
                             {value:'4',label:'Quinta-feira'},
                             {value:'5',label:'Sexta-feira'},
                             {value:'6',label:'Sábado-feira'},
                         ]}/>
                         <Input name="from" label="Das" type="time"/>
                         <Input name="to" label="Até" type="time"/>
                        </div>
                      );
                  })}
               </fieldset>
                 <footer>
                     <p>
                         <img src={WarningIcon} alt="Aviso importante"/>
                         Inportante!<br/>
                         preencha todos os dados
                     </p>
                     <button type="submit">
                         Salvar cadastro
                     </button>
                 </footer>
                 </form>
           </main>
       </div>
    )
}

export default TeacherForm;