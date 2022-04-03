import { useState } from "react";
import s from './Feedback.module.css';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import Section from  '../Section/Section';

const Feedback = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

   
    const handleChangeStats = (event) => {
        switch (event.target.name) {
            case 'Good': setGood(state => state + 1); break;
            case 'Neutral': setNeutral(state => state + 1); break;
            case 'Bad': setBad(state => state + 1); break;
            default: return;
        }
    } 
    const countTotalFeedback = () => good + neutral + bad
    
    const countPositiveFeedbackPercentage = () =>
        countTotalFeedback()
            ? Math.round(good / countTotalFeedback() * 100)
            : "0";
    
    const buttons = ['Good', 'Neutral', 'Bad'];
    return (
        <div className = {s.container}>
            <h1 className={s.title}>Please leave feedback</h1>
            <FeedbackOptions buttonsName={buttons} onLeaveFeedback={handleChangeStats} />
            <Section title="Statistics" >
                {countTotalFeedback() ? <Statistics className={s.stat}
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback()}
                    positivePercentage={countPositiveFeedbackPercentage()}
                />
                    : <Notification message="There is no feedback" />
                }
            </Section>
        </div>
    )
}

export default Feedback;

// export default class Feedback extends React.Component {
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//     }

//     handleChangeStats = (event) => {
//         this.setState((prevState) => { return { [event.target.name]: prevState[event.target.name] + 1 } })
//     }

//     countTotalFeedback = () => {
//         const { good, neutral, bad } = this.state;
//         return good + neutral + bad
//     }
//     countPositiveFeedbackPercentage = () => {
//         return !this.countTotalFeedback() ? "0" : Math.round(this.state.good / this.countTotalFeedback() * 100)
//     }
//     render() {
//         return (
//             <div>
//                 Please leave feedback
//                 <FeedbackOptions onLeaveFeedback={this.handleChangeStats} />
//                 <Section title="Statistics">
//                     {this.countTotalFeedback() ? <Statistics
//                         good={this.state.good}
//                         neutral={this.state.neutral}
//                         bad={this.state.bad}
//                         total={this.countTotalFeedback()}
//                         positivePercentage={this.countPositiveFeedbackPercentage()}
//                     />
//                         :
//                         <Notification message="There is no feedback" />
//                     }
//                 </Section>
//             </div>
//         )
//     }
// }

