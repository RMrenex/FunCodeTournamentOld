import React from 'react';

const Calendar = () => {

    return (
        <section className="calendar" id="calendar">
            <div className="left-title"><h2>GAGNANTS DU DERNIER CONCOURS</h2></div>
            <div className="calendar-container">
                <div className="calendar-container__title"><h3>CALENDRIER DE MARS 2022</h3></div>
                <div className="calendar-container__days">
                    <div className="calendar-container__days--day"><p>1</p></div>
                    <div className="calendar-container__days--day"><p>2</p></div>
                    <div className="calendar-container__days--day"><p>3</p></div>
                    <div className="calendar-container__days--day"><p>4</p></div>
                    <div className="calendar-container__days--day"><p>5</p></div>
                    <div className="calendar-container__days--day"><p>6</p></div>
                    <div className="calendar-container__days--day"><p>7</p></div>
                    <div className="calendar-container__days--day"><p>8</p></div>
                    <div className="calendar-container__days--day"><p>9</p></div>
                    <div className="calendar-container__days--day calendar-container__days--event">
                        <p>10</p>
                        <p>Début concours web</p>
                        <a href="">INFORMATIONS</a>
                    </div>
                    <div className="calendar-container__days--day calendar-container__days--active"><p>11</p></div>
                    <div className="calendar-container__days--day calendar-container__days--active"><p>12</p></div>
                    <div className="calendar-container__days--day calendar-container__days--active"><p>13</p></div>
                    <div className="calendar-container__days--day calendar-container__days--active"><p>14</p></div>
                    <div className="calendar-container__days--day calendar-container__days--active"><p>15</p></div>
                    <div className="calendar-container__days--day calendar-container__days--active"><p>16</p></div>
                    <div className="calendar-container__days--day calendar-container__days--event">
                        <p>17</p>
                        <p>Fin concours web</p>
                        <a href="">INFORMATIONS</a>
                    </div>
                    <div className="calendar-container__days--day"><p>18</p></div>
                    <div className="calendar-container__days--day"><p>19</p></div>
                    <div className="calendar-container__days--day"><p>20</p></div>
                    <div className="calendar-container__days--day"><p>21</p></div>
                    <div className="calendar-container__days--day"><p>22</p></div>
                    <div className="calendar-container__days--day"><p>23</p></div>
                    <div className="calendar-container__days--day"><p>24</p></div>
                    <div className="calendar-container__days--day"><p>25</p></div>
                    <div className="calendar-container__days--day"><p>26</p></div>
                    <div className="calendar-container__days--day"><p>27</p></div>
                    <div className="calendar-container__days--day"><p>28</p></div>
                    <div className="calendar-container__days--day"><p>29</p></div>
                    <div className="calendar-container__days--day"><p>30</p></div>
                    <div className="calendar-container__days--day"><p>31</p></div>

                    <div className="calendar-container__days--day"></div>
                    <div className="calendar-container__days--day"></div>
                    <div className="calendar-container__days--day"></div>
                    <div className="calendar-container__days--day"></div>
                    
                </div>
            </div>
        </section>
    );

}

export default Calendar;