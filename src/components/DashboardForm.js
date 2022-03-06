import React, {useState} from "react";
import {createNewContest} from '../services/contest_service'
import { toast } from 'react-toastify';

const DashboardForm = () => {

    const sucess = () => toast.success("Concours crée");
    const error = () => toast.error("L'un des des champs est manquant");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEnDate] = useState("");
    const [status, setStatus] = useState("");
    const [contributors, setContributors] = useState("");

    const sendForm = (e) => {
        e.preventDefault();

        if(name !== "" && startDate !== "" && endDate !== "" && type !== "" && status !== "" && contributors !== ""){
            /*createNewContest({
                uuid: "",
                name: name,
                start_date: startDate,
                end_date: endDate,
                type: type,
                finish: status,
                users: Array.from(contributors.replace(/ /g,'').split(","))
            })*/
            console.log(e)
            sucess();
        } else {
            error();
        }

    }

    return (
        <div className="dashboard-container">
            <div className="dashboard-container__form">
                <h1>Créer un nouvel article</h1>

                <form action="" method="POST" className="form-container-dark">

                    <div className="form-container-dark__input">
                        <label htmlFor="name">Nom de l'article</label>
                        <input type="name" name="name" id="name" value={name} onChange={e => setName(e.target.value)} required></input>
                    </div>

                    <div className="form-container-dark__input">
                        <label htmlFor="type-select">Choisir le type du concours</label>
                        <select name="type" id="type-select" value={type} onChange={e => setType(e.target.value)} required>
                            <option value="not-started" defaultValue="selected">Selectionner le type de concours</option>
                            <option value="web">Concours Web</option>
                            <option value="algo">Concours Algorithme</option>
                            <option value="jam">Concours Game Jam</option>
                        </select>
                    </div>

                    <div className="form-container-dark__input">
                        <label htmlFor="date-start">Date de début</label>
                        <input type="date" id="date-start" name="date-start" value={startDate} onChange={e => setStartDate(e.target.value)} required></input>
                    </div>

                    <div className="form-container-dark__input">
                        <label htmlFor="date-end">Date de fin</label>
                        <input type="date" id="date-end" name="date-end" value={endDate} onChange={e => setEnDate(e.target.value)} required></input>
                    </div>

                    <div className="form-container-dark__input">
                        <label htmlFor="statut-select">Status du concours</label>
                        <select name="type" id="statut-select" value={status} onChange={e => setStatus(e.target.value)} required>
                            <option value="not-started" defaultValue="selected">Selectionner le status</option>
                            <option value="false">Non débuter</option>
                            <option value="true">Terminé</option>
                        </select>
                    </div>

                    <div className="form-container-dark__input">
                        <label htmlFor="users">Entrez les nom des participant au concours (séparés par une virgule)</label>
                        <textarea type="text" id="users" name="users" value={contributors} onChange={e => setContributors(e.target.value)} required></textarea>
                    </div>

                    <button className="button" onClick={sendForm}>Créer l'article</button>
                </form>
            </div>
        </div>
    );

}

export default DashboardForm;