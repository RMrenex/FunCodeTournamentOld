import React, { Component } from 'react';
const YEAR = new Date().getFullYear();
let month = new Date().getMonth() + 1;
let stringMonth = new Date().toLocaleString('fr-FR', { month: 'long' });

class Calendar extends Component {

    contests = JSON.parse(localStorage.getItem("contests"));
    nextContest = this.getNextContest();

    componentDidMount() {
        this.getDaysOfMonthInArray();
        this.updateCalendar();
    }


    getDaysOfMonthInArray() {
        let monthIndex = month - 1;
        let date = new Date(YEAR, monthIndex, 1);
        let result = [];
        while (date.getMonth() == monthIndex) {
            result.push(date.getDate());
            date.setDate(date.getDate() + 1);
        }
        this.setState({ daysInMonth: result });
    }

    getNextContest() {

        let contestsInMonth = [];
        Array.from(this.contests).filter(contest => contest.finish === false).map(contest => {
            if ((new Date(contest.start_date).getMonth() + 1) === month) {
                contestsInMonth.push(contest)
            }
        })
        this.setState({ contestsInMonth: contestsInMonth });
        return contestsInMonth;
    }

    updateCalendar(){
        setTimeout(() => {
            Array.from(document.getElementsByClassName('calendar-container__days')[0].children).forEach((case_, i) => {
                this.nextContest.forEach(contest => {
                    if(case_.innerText >= new Date(contest.start_date).getDate() && case_.innerText <= new Date(contest.end_date).getDate()){
                        if(new Date(contest.start_date).getTime() === new Date(contest.end_date).getTime()){
                            case_.classList.toggle('calendar-container__days--event')
                            let p = document.createElement('p');
                            p.innerHTML = "Début et fin " + contest.name.toLowerCase();
                            case_.appendChild(p)
                        } else if(i === 19){
                            case_.classList.toggle('calendar-container__days--event')
                            let p = document.createElement('p');
                            p.innerHTML = "Début " + contest.name.toLowerCase();
                            case_.appendChild(p)
                        } else if(i === 24){
                            case_.classList.toggle('calendar-container__days--event')
                            let p = document.createElement('p');
                            p.innerHTML = "Fin " + contest.name.toLowerCase();
                            case_.appendChild(p)
                        }else{
                            case_.classList.toggle('calendar-container__days--active')
                            console.log(case_)
                        }

                    }
                })
            })
        }, 500);

    }

    render() {
        const { contests } = this.props;
        return (
            <section className="calendar" id="calendar">
                <div className="left-title"><h2>GAGNANTS DU DERNIER CONCOURS</h2></div>
                <div className="calendar-container">
                    <div className="calendar-container__title"><h3>CALENDRIER DE {stringMonth.toUpperCase()} {YEAR}</h3></div>
                    <div className="calendar-container__days">
                        {
                            this.state !== null && (
                                this.state.daysInMonth.map((day, i) => {
                                    return (<div key={i+1} className="calendar-container__days--day"><p>{day}</p></div>)
                                })
                            )
                        }
                        {/*<div className="calendar-container__days--day"><p>1</p></div>
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
                    <div className="calendar-container__days--day"></div>*/}

                    </div>
                </div>
            </section>
        )
    }
} export default Calendar;