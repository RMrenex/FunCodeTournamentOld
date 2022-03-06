import React from "react";

const DashboardForm = () => {

    return (
        <div className="dashboard-container">
            <div className="dashboard-container__form">
                <h1>Créer un nouvel article</h1>

                <form action="" method="" className="form-container-dark">

                    <div className="form-container-dark__input">
                        <label for="name">Nom de l'article</label>
                        <input type="name" name="name" id="name" required></input>
                    </div>

                    <div className="form-container-dark__input">
                        <label for="type-select">Choisir le type du concours</label>
                        <select name="type" id="type-select" required>
                            <option value="web">Concours Web</option>
                            <option value="algo">Concours Algorithme</option>
                            <option value="jam">Concours Game Jam</option>
                        </select>
                    </div>

                    <div className="form-container-dark__input">
                        <label for="date-start">Date de début</label>
                        <input type="date" id="date-start" name="date-start" value="2022-01-01" required></input>
                    </div>

                    <div className="form-container-dark__input">
                        <label for="date-end">Date de fin</label>
                        <input type="date" id="date-end" name="date-end" value="2022-01-01" required></input>
                    </div>

                    <div className="form-container-dark__input">
                        <label for="statut-select">Status du concours</label>
                        <select name="type" id="statut-select" required>
                            <option value="not-started">Non débuter</option>
                            <option value="in-progress">En Cours</option>
                            <option value="finish">Terminé</option>
                        </select>
                    </div>

                    <div className="form-container-dark__input">
                        <label for="users">Entrez les nom des participant au concours (séparés par une virgule)</label>
                        <textarea type="text" id="users" name="users" required></textarea>
                    </div>

                </form>

                <button className="button">Créer l'article</button>
            </div>
        </div>
    );

}

export default DashboardForm;