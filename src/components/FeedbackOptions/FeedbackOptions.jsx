
import s from '../FeedbackOptions/FeedbackOptions.module.css';

export default function FeedbackOptions({ buttonsName, onLeaveFeedback }) {
    const btn = buttonsName.map((el, index) => {
        return (<button
            className={s.btn}
            name={el}   
            key={index}
            onClick={onLeaveFeedback}>
            {el}</button>)
    })
    return (<div>{btn}</div>)
} 
// export default function FeedbackOptions({onLeaveFeedback, buttons=['good', 'bad', 'neutral']}) {
//     return (
//         <div>
//             <button name="good" onClick={onLeaveFeedback}>Good</button>
//             <button name="neutral" onClick={onLeaveFeedback}>Neutral</button>
//             <button name="bad" onClick={onLeaveFeedback}>Bad</button>
//         </div>
//     )
// }